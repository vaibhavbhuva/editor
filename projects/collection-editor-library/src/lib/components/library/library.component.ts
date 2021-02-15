import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit } from '@angular/core';
import * as _ from 'lodash-es';
import { TreeService } from '../../services/tree/tree.service';
import { EditorService } from '../../services/editor/editor.service';
import { EditorTelemetryService } from '../../services/telemetry/telemetry.service';
import { labelMessages } from '../labels';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit, AfterViewInit {
  labelMessages = labelMessages;
  @Input() libraryInput: any;
  @Output() libraryEmitter = new EventEmitter<any>();
  public searchFormConfig: any;
  public pageId = 'add_from_library';
  public contentList: any;
  public selectedContent: any;
  public childNodes: any;
  showSelectResourceModal = false;
  collectionUnits: any;
  collectionHierarchy = [];
  collectionId: string;
  public showAddedContent = false;
  public showLoader = true;
  public isFilterOpen = false;
  collectionhierarcyData: any;
  public defaultFilters: any;
  pageStartTime: any;
  selectedUnit: string;
  constructor(public telemetryService: EditorTelemetryService,
              private editorService: EditorService,
              private router: Router,
              private treeService: TreeService) {
              this.pageStartTime = Date.now();
              }

  ngOnInit() {
    const activeNode = this.treeService.getActiveNode();
    this.selectedUnit = _.get(activeNode, 'data.id');
    this.collectionId = _.get(this.libraryInput, 'collectionId');
    this.searchFormConfig = _.get(this.libraryInput, 'searchFormConfig');
    this.editorService.fetchCollectionHierarchy(this.collectionId).subscribe((response: any) => {
      this.collectionhierarcyData = response.result.content;
      this.collectionHierarchy = this.getUnitWithChildren(this.collectionhierarcyData, this.collectionId);
      this.setDefaultFilters();
      this.fetchContentList();
      this.telemetryService.telemetryPageId = this.pageId;
      this.childNodes = _.get(this.collectionhierarcyData, 'childNodes');
    });
  }

  ngAfterViewInit() {
    this.telemetryService.impression({
      type: 'edit', pageid: this.telemetryService.telemetryPageId, uri: this.router.url,
      duration: _.toString((Date.now() - this.pageStartTime) / 1000)
    });
  }

  back() {
    this.libraryEmitter.emit({});
  }

  onFilterChange(event: any) {
    switch (event.action) {
      case 'filterDataChange':
        this.fetchContentList(event.filters, event.query);
        break;
      case 'filterStatusChange':
        this.isFilterOpen = event.filterStatus;
        break;
    }
  }

  setDefaultFilters() {
    const selectedNode = this.treeService.getActiveNode();
    const contentTypes = _.flatten(
      _.map(_.get(this.editorService.editorConfig.config, `hierarchy.level${selectedNode.getLevel() - 1}.children`), (val) => {
      return val;
    }));

    this.defaultFilters = _.pickBy({
      primaryCategory: contentTypes,
      board: [_.get(this.collectionhierarcyData, 'board')],
      gradeLevel: _.get(this.collectionhierarcyData, 'gradeLevel'),
      medium: _.get(this.collectionhierarcyData, 'medium'),
      subject: _.get(this.collectionhierarcyData, 'subject'),
    });
  }

  fetchContentList(filters?, query?) {
    filters = filters || this.defaultFilters;
    const option = {
      url: 'composite/v3/search',
      data: {
        request: {
          query: query || '',
          // @Todo remove hardcoded objectType
          filters: _.pickBy({ ...filters, ...{ status: ['Live'] } }),
          sort_by: {
            lastUpdatedOn: 'desc'
          }
        }
      }
    };
    this.editorService.fetchContentListDetails(option).subscribe((response: any) => {
      this.showLoader = false;
      if (!(_.get(response, 'result.count'))) {
        this.contentList = [];
      } else {
        this.contentList = _.compact(_.concat(_.get(response.result, 'content'), _.get(response.result, 'QuestionSet')));
        this.filterContentList();
      }
    });
  }

  getUnitWithChildren(data, collectionId, level?) {
    const self = this;
    const childData = data.children;
    if (_.isEmpty(childData)) { return []; }
    data.level = level ? (level + 1) : 1;
    const tree = childData.map(child => {
      const treeItem: any = this.generateNodeMeta(child);
      // tslint:disable-next-line:max-line-length
      treeItem.showButton = _.isEmpty(_.get(this.editorService.editorConfig, `config.hierarchy.level${data.level}.children`)) ? true : false;
      const treeUnit = self.getUnitWithChildren(child, collectionId, data.level);
      const treeChildren = treeUnit && treeUnit.filter(item => item.contentType === 'TextBookUnit');
      // tslint:disable-next-line:no-string-literal
      treeItem['children'] = (treeChildren && treeChildren.length > 0) ? treeChildren : null;
      return treeItem;
    });
    return tree;
  }

  generateNodeMeta(node) {
    const nodeMeta = {
      identifier: node.identifier,
      name: node.name,
      contentType: node.contentType,
      topic: node.topic,
      status: node.status,
      creator: node.creator,
      createdBy: node.createdBy || null,
      parentId: node.parent || null,
      organisationId: _.has(node, 'organisationId') ? node.organisationId : null,
      prevStatus: node.prevStatus || null
    };
    return nodeMeta;
  }


  onContentChangeEvent(event: any) {
    this.selectedContent = event.content;
  }

  showResourceTemplate(event) {
    switch (event.action) {
      case 'showFilter':
        this.openFilter();
        break;
      case 'openHierarchyPopup':
        this.showSelectResourceModal = true;
        break;
      case 'closeHierarchyPopup':
        this.showSelectResourceModal = false;
        break;
      case 'showAddedContent':
        this.showAddedContent = event.status;
        this.filterContentList();
        break;
      case 'contentAdded':
        this.childNodes.push(event.data.identifier);
        this.filterContentList(true);
        break;
      default:
        break;
    }
  }

  openFilter(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.isFilterOpen = true;
  }
  filterContentList(isContentAdded?) {
    if (_.isEmpty(this.contentList)) { return; }
    _.forEach(this.contentList, (value, key) => {
      if (value) {
        value.isAdded = _.includes(this.childNodes, value.identifier);
      }
    });
    if (!isContentAdded) {
      const selectedContentIndex = this.showAddedContent ? 0 : _.findIndex(this.contentList, { isAdded: false });
      this.selectedContent = this.contentList[selectedContentIndex];
    }
  }
}
