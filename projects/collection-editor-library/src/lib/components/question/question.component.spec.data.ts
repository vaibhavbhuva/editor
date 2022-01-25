export const mockData = {
  childMetadata: {
    templateName: "",
    required: [],
    properties: [
      {
        code: "name",
        dataType: "text",
        description: "Name of the content",
        editable: true,
        inputType: "text",
        label: "Title",
        name: "Title",
        placeholder: "Title",
        renderingHints: {
          class: "sb-g-col-lg-1 required",
        },
        required: true,
        visible: true,
        validations: [
          {
            type: "max",
            value: "120",
            message: "Input is Exceeded",
          },
          {
            type: "required",
            message: "Title is required",
          },
        ],
      },
      {
        code: "description",
        dataType: "text",
        description: "Description of the content",
        editable: true,
        inputType: "textarea",
        label: "Description",
        name: "Description",
        placeholder: "Description",
        renderingHints: {
          class: "sb-g-col-lg-1 required",
        },
        required: true,
        visible: true,
        validations: [
          {
            type: "max",
            value: "200",
            message: "Input is Exceeded",
          },
          {
            type: "required",
            message: "Title is required",
          },
        ],
      },
      {
        code: "keywords",
        visible: true,
        editable: true,
        dataType: "list",
        name: "Keywords",
        renderingHints: {
          class: "sb-g-col-lg-1 required",
        },
        description: "Keywords for the content",
        inputType: "keywords",
        label: "keywords",
        placeholder: "Enter Keywords",
        required: false,
        validations: [
          {
            type: "required",
            message: "Keyword is required",
          },
        ],
      },
    ],
  },
  questionMetaData: {
    mimeType: "application/vnd.sunbird.question",
    media: [],
    editorState: {
      options: [
        {
          answer: false,
          value: {
            body: "<p>test</p>",
            value: 0,
          },
        },
        {
          answer: false,
          value: {
            body: "<p>test</p>",
            value: 1,
          },
        },
      ],
      question: "<p>test mcq</p>",
    },
    templateId: "mcq-vertical",
    name: "test mcq",
    responseDeclaration: {
      response1: {
        maxScore: 1,
        cardinality: "multiple",
        type: "integer",
        correctResponse: {
          outcomes: {
            SCORE: 1,
          },
        },
        mapping: [],
      },
    },
    interactionTypes: ["choice"],
    interactions: {
      response1: {
        type: "choice",
        options: [
          {
            label: "<p>test</p>",
            value: 0,
          },
          {
            label: "<p>test</p>",
            value: 1,
          },
        ],
      },
      validation: {
        required: "Yes",
      },
    },
    qType: "MCQ",
    primaryCategory: "Multiselect Multiple Choice Question",
    body: "<div class='question-body'><div class='mcq-title'><p>test mcq</p></div><div data-choice-interaction='response1' class='mcq-vertical'></div></div>",
    solutions: [],
    author: "check1@yopmail.com",
    createdBy: "5a587cc1-e018-4859-a0a8-e842650b9d64",
    board: "CBSE",
    medium: ["English"],
    gradeLevel: ["Class 4"],
    subject: ["Mathematics"],
    topic: ["Forest"],
    channel: "01309282781705830427",
    framework: "ekstep_ncert_k-12",
    license: "CC BY 4.0",
    showEvidence: "Yes",
    evidence: {
      required: "No",
      mimeType: ["image"],
      minCount: 1,
      maxCount: 1,
      sizeLimit: "20480",
    },
    showRemarks: "Yes",
    remarks: {
      maxLength: "100",
      required: "No",
    },
    hints: {
      en: [null],
    },
    instructions: {
      en: ['test'],
    },
  },
  childMetadataUpdated: {
    templateName: "",
    required: [],
    properties: [
      {
        code: "name",
        dataType: "text",
        description: "Name of the content",
        editable: false,
        inputType: "text",
        label: "Title",
        name: "Title",
        placeholder: "Title",
        renderingHints: {
          class: "sb-g-col-lg-1 required",
        },
        required: true,
        visible: true,
        validations: [
          {
            type: "max",
            value: "120",
            message: "Input is Exceeded",
          },
          {
            type: "required",
            message: "Title is required",
          },
        ],
      },
      {
        code: "description",
        dataType: "text",
        description: "Description of the content",
        editable: false,
        inputType: "textarea",
        label: "Description",
        name: "Description",
        placeholder: "Description",
        renderingHints: {
          class: "sb-g-col-lg-1 required",
        },
        required: true,
        visible: true,
        validations: [
          {
            type: "max",
            value: "200",
            message: "Input is Exceeded",
          },
          {
            type: "required",
            message: "Title is required",
          },
        ],
      },
      {
        code: "board",
        default: "",
        visible: true,
        depends: [],
        editable: true,
        dataType: "text",
        renderingHints: {
          class: "sb-g-col-lg-1",
        },
        description: "Board",
        label: "Board/Syllabus",
        required: false,
        name: "Board/Syllabus",
        inputType: "select",
        placeholder: "Select Board/Syllabus",
      },
      {
        code: "keywords",
        visible: true,
        editable: false,
        dataType: "list",
        name: "Keywords",
        renderingHints: {
          class: "sb-g-col-lg-1 required",
        },
        description: "Keywords for the content",
        inputType: "keywords",
        label: "keywords",
        placeholder: "Enter Keywords",
        required: false,
        validations: [
          {
            type: "required",
            message: "Keyword is required",
          },
        ],
      },
    ],
  },
  formData: {
    numberOnly: "yes",
    name: "description",
  },
  frameWorkDetails: {
    frameworkData: [
      {
        identifier: "ekstep_ncert_k-12_board",
        code: "board",
        terms: [
          {
            associations: [
              {
                identifier:
                  "ekstep_ncert_k-12_learningoutcome_9686a2a712bdfdb43408555865cda57f2367699a",
                code: "9686a2a712bdfdb43408555865cda57f2367699a",
                translations: null,
                name: "Inequalities in a triangle.",
                description: "Inequalities in a triangle.",
                index: 0,
                category: "learningoutcome",
                status: "Live",
              },
              {
                identifier:
                  "ekstep_ncert_k-12_topic_08859db5d07d93b99c12b3e5bceb975c582d31b7",
                code: "08859db5d07d93b99c12b3e5bceb975c582d31b7",
                translations: null,
                name: "Nature around the kids",
                description: "Nature around the kids",
                index: 0,
                category: "topic",
                status: "Live",
              },
            ],
            identifier: "ekstep_ncert_k-12_board_cbse",
            code: "cbse",
            translations: null,
            name: "CBSE",
            description: "CBSE",
            index: 10,
            category: "board",
            status: "Live",
          },
        ],
        translations: null,
        name: "Board",
        description: "Board",
        index: 1,
        status: "Live",
      },
    ],
    topicList: [
      {
        identifier:
          "ekstep_ncert_k-12_topic_08859db5d07d93b99c12b3e5bceb975c582d31b7",
        code: "08859db5d07d93b99c12b3e5bceb975c582d31b7",
        translations: null,
        name: "Nature around the kids",
        description: "Nature around the kids",
        index: 10,
        category: "topic",
        status: "Live",
      },
    ],
  },
  editorState: {
    body: {
      answer: "</p> Yes</p>",
      question: "<p>Hi how are you ?</p>",
      editorState: {
        answer: "</p> Yes</p>",
      },
      name: "Subjective Question",
      qType: "SA",
      primaryCategory: "Subjective Question",
    },
    mediaobj: {},
  },
  eventData: {
    body: { answer: "<p>dad</p>" },
    editorState: { answer: "<p>dad</p>" },
    name: "Subjective Question",
    qType: "SA",
    primaryCategory: "Subjective Question",
    mediaobj: undefined,
  },
  subMenus: [
    {
      id: "addHint",
      name: "Add Hint",
      value: "",
      enabled: false,
      type: "input",
      label: "label",
      show: true,
    },
    {
      id: "addTip",
      name: "Add Tip",
      value: "",
      enabled: false,
      type: "input",
      label: "label",
      show: true,
    },
    {
      id: "addDependantQuestion",
      name: "Add Dependant Question",
      value: [{ id: 1 }],
      enabled: false,
      type: "",
      label: "label",
      show: true,
    },
  ],
};

export const readQuestionMock = {
  id: "api.question.read",
  ver: "3.0",
  ts: "2021-09-30T09:18:52ZZ",
  params: {
    resmsgid: "04f55276-8ddc-4a23-a52e-a188e2ef5c2c",
    msgid: null,
    err: null,
    status: "successful",
    errmsg: null,
  },
  responseCode: "OK",
  result: {
    question: {
      instructions: {
        en: [null],
      },
      showRemarks: "No",
      responseDeclaration: {
        response1: {
          maxScore: 1,
          cardinality: "multiple",
          type: "integer",
          correctResponse: {
            outcomes: {
              SCORE: 1,
            },
          },
          mapping: [],
        },
      },
      mimeType: "application/vnd.sunbird.question",
      media: [],
      body: "<div class='question-body'><div class='mcq-title'><p>MCQ Question 3</p></div><div data-choice-interaction='response1' class='mcq-vertical'></div></div>",
      editorState: {
        options: [
          {
            answer: false,
            value: {
              body: "<p>false</p>",
              value: 0,
            },
          },
          {
            answer: false,
            value: {
              body: "<p>true</p>",
              value: 1,
            },
          },
        ],
        question: "<p>MCQ Question 3</p>",
      },
      templateId: "mcq-vertical",
      interactions: {
        response1: {
          type: "choice",
          options: [
            {
              label: "<p>false</p>",
              value: 0,
            },
            {
              label: "<p>true</p>",
              value: 1,
            },
          ],
        },
        validation: {
          required: "Yes",
        },
      },
      primaryCategory: "Multiselect Multiple Choice Question",
      identifier: "do_1134355569264885761166",
      solutions: [],
      hints: {
        en: [null],
      },
      qType: "MCQ",
      languageCode: ["en"],
      interactionTypes: ["choice"],
      name: "MCQ Question 3",
      showEvidence: "No",
    },
  },
};

export const readQuestionMockSlider = {
  id: "api.question.read",
  ver: "3.0",
  ts: "2021-09-30T09:18:52ZZ",
  params: {
    resmsgid: "04f55276-8ddc-4a23-a52e-a188e2ef5c2c",
    msgid: null,
    err: null,
    status: "successful",
    errmsg: null,
  },
  responseCode: "OK",
  result: {
    question: {
      instructions: {
        en: [null],
      },
      showRemarks: "No",
      mimeType: "application/vnd.sunbird.question",
      media: [],
      body: "<p>Dep Slider 3</p>",
      editorState: {
        question: "<p>Dep Slider 3</p>",
      },
      interactions: {
        validation: {
          required: "Yes",
        },
        response1: {
          validation: {
            range: {
              min: "0",
              max: "10",
            },
          },
          step: "1",
        },
      },
      primaryCategory: "Slider",
      identifier: "do_1134355571590184961168",
      solutions: [],
      hints: {
        en: [null],
      },
      languageCode: ["en"],
      interactionTypes: ["slider"],
      name: "Dep Slider 3",
      showEvidence: "No",
    },
  },
};

export const readQuestionMockDate = {
  id: "api.question.read",
  ver: "3.0",
  ts: "2021-09-30T09:18:52ZZ",
  params: {
    resmsgid: "04f55276-8ddc-4a23-a52e-a188e2ef5c2c",
    msgid: null,
    err: null,
    status: "successful",
    errmsg: null,
  },
  responseCode: "OK",
  result: {
    question: {
      instructions: {
        en: [null],
      },
      mimeType: "application/vnd.sunbird.question",
      media: [],
      body: "<p>Dep Date 3</p>",
      editorState: {
        question: "<p>Dep Date 3</p>",
      },
      interactions: {
        validation: {
          required: "Yes",
        },
        response1: {
          validation: {
            pattern: "DD/MM/YYYY",
          },
          autoCapture: "Yes",
        },
      },
      primaryCategory: "Date",
      identifier: "do_1134355574936780801170",
      solutions: [],
      hints: {
        en: [null],
      },
      languageCode: ["en"],
      interactionTypes: ["date"],
      name: "Dep Date 3",
    },
  },
};

export const readQuestionMockText = {
  id: "api.question.read",
  ver: "3.0",
  ts: "2021-09-30T09:18:52ZZ",
  params: {
    resmsgid: "04f55276-8ddc-4a23-a52e-a188e2ef5c2c",
    msgid: null,
    err: null,
    status: "successful",
    errmsg: null,
  },
  responseCode: "OK",
  result: {
    question: {
      instructions: {
        en: [null],
      },
      showRemarks: "No",
      mimeType: "application/vnd.sunbird.question",
      media: [],
      body: "<p>Dep Text 2</p>",
      editorState: {
        question: "<p>Dep Text 2</p>",
      },
      interactions: {
        validation: {
          required: "Yes",
        },
        response1: {
          validation: {
            limit: {
              maxLength: "100",
            },
          },
          type: {
            number: "Yes",
          },
        },
      },
      primaryCategory: "Text",
      identifier: "do_1134347722012835841130",
      solutions: [],
      hints: {
        en: [null],
      },
      languageCode: ["en"],
      interactionTypes: ["text"],
      name: "Dep Text 2",
      showEvidence: "No",
    },
  },
};

export const collectionHierarchyMock = {
  id: "api.questionset.hierarchy.get",
  params: { resmsgid: '61a32bae-ba2f-4779-aa27-1428c6b70f8c', msgid: null, err: null, status: 'successful', errmsg: null },
  responseCode: "OK",
  result: {
    questionSet: {
      acceptedContributions: [
        "do_11326368076523929623",
        "do_11326368076523929635",
      ],
      rejectedContributions: [
        "do_11326368076523929647",
        "do_11326368076523929659",
      ],
      rejectedContributionComments: {
        do_11326368076523929647: "test comment 1",
        do_11326368076523929659: "test comment 2",
      },
      "organisationId": "937dd865-b256-4c1a-9830-a9b5b89f0913",
      "keywords": [
        "test"
      ],
      "subject": [
        "English"
      ],
      "channel": "01309282781705830427",
      "language": [
        "English"
      ],
      "mimeType": "application/vnd.sunbird.questionset",
      "showHints": "No",
      "ecm": [
        "Student interview",
        "Teacher interview",
        "Parent interview",
        "HM/HT interview"
      ],
      "objectType": "QuestionSet",
      "gradeLevel": [
        "Grade 1"
      ],
      "primaryCategory": "Observation With Rubrics",
      "children": [
        {
          "parent": "do_1134357224765685761203",
          "code": "a51c0d9f-4696-3354-062f-b2078048656c",
          "allowScoring": "Yes",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T05:42:52.118+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation With Rubrics",
          "children": [
            {
              "parent": "do_1134460323603906561218",
              "code": "b4c3e613-5c3f-9c8b-d61f-417f4c5d8df2",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "branchingLogic": {
                "do_113449775832088576181": {
                  "target": [],
                  "source": [
                    "do_113449672558780416163"
                  ],
                  "preCondition": {
                    "and": [
                      {
                        "eq": [
                          {
                            "var": "do_113449672558780416163.response1.value",
                            "type": "responseDeclaration"
                          },
                          [
                            0
                          ]
                        ]
                      }
                    ]
                  }
                },
                "do_113449787008081920183": {
                  "target": [],
                  "source": [
                    "do_113449672558780416163"
                  ],
                  "preCondition": {
                    "and": [
                      {
                        "ne": [
                          {
                            "var": "do_113449672558780416163.response1.value",
                            "type": "responseDeclaration"
                          },
                          [
                            1
                          ]
                        ]
                      }
                    ]
                  }
                },
                "do_11345671149997260811": {
                  "target": [],
                  "source": [
                    "do_113449672558780416163"
                  ],
                  "preCondition": {
                    "and": [
                      {
                        "eq": [
                          {
                            "var": "do_113449672558780416163.response1.value",
                            "type": "responseDeclaration"
                          },
                          [
                            0
                          ]
                        ]
                      }
                    ]
                  }
                },
                "do_113449808985628672185": {
                  "target": [],
                  "source": [
                    "do_113449672558780416163"
                  ],
                  "preCondition": {
                    "and": [
                      {
                        "eq": [
                          {
                            "var": "do_113449672558780416163.response1.value",
                            "type": "responseDeclaration"
                          },
                          [
                            0
                          ]
                        ]
                      }
                    ]
                  }
                },
                "do_113449672558780416163": {
                  "target": [
                    "do_113449775832088576181",
                    "do_113449787008081920183",
                    "do_113449808985628672185",
                    "do_11345671149997260811"
                  ],
                  "preCondition": {},
                  "source": []
                }
              },
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.106+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "children": [
                {
                  "parent": "do_1134460323602841601200",
                  "code": "d0ab14ae-9f67-41cf-dcfa-80c8432bf424",
                  "evidence": {
                    "required": "No",
                    "mimeType": [
                      "audio"
                    ],
                    "minCount": 1,
                    "maxCount": 1,
                    "sizeLimit": "20480"
                  },
                  "subject": [
                    "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                    "English"
                  ],
                  "medium": [
                    "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "templateId": "mcq-vertical",
                  "createdOn": "2022-01-10T09:08:52.273+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                    "Grade 1"
                  ],
                  "primaryCategory": "Multiselect Multiple Choice Question",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-20T07:49:01.518+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_113449672558780416163",
                  "lastStatusChangedOn": "2022-01-10T09:08:52.273+0000",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 1,
                  "qType": "MCQ",
                  "languageCode": [
                    "en"
                  ],
                  "version": 1,
                  "versionKey": "1642664941814",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                    "choice"
                  ],
                  "framework": "tpd",
                  "depth": 3,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "Parent Question MCQ",
                  "topic": [
                    "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "Yes"
                },
                {
                  "parent": "do_1134460323602841601200",
                  "code": "c03eddbf-8194-ce67-3f49-08c4b5b33e55",
                  "subject": [
                    "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                    "English"
                  ],
                  "medium": [
                    "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2022-01-20T07:49:38.034+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                    "Grade 1"
                  ],
                  "primaryCategory": "Text",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-20T07:49:38.023+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_11345671149997260811",
                  "lastStatusChangedOn": "2022-01-20T07:49:38.034+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 2,
                  "languageCode": [
                    "en"
                  ],
                  "version": 1,
                  "versionKey": "1642664978234",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                    "text"
                  ],
                  "framework": "tpd",
                  "depth": 3,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "child Text Question",
                  "topic": [
                    "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No"
                },
                {
                  "parent": "do_1134460323602841601200",
                  "code": "10cf6d1b-ba3d-2925-1d13-032aa3d2d317",
                  "subject": [
                    "English"
                  ],
                  "channel": "01309282781705830427",
                  "language": [
                    "English"
                  ],
                  "medium": [
                    "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2022-01-10T13:46:25.941+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                    "Grade 1"
                  ],
                  "primaryCategory": "Date",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-10T13:46:25.941+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_113449808985628672185",
                  "lastStatusChangedOn": "2022-01-10T13:46:25.941+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 3,
                  "languageCode": [
                    "en"
                  ],
                  "version": 1,
                  "versionKey": "1641822385942",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                    "date"
                  ],
                  "framework": "tpd",
                  "depth": 3,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "Child Date 1",
                  "topic": [
                    "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft"
                },
                {
                  "parent": "do_1134460323602841601200",
                  "code": "5403efd9-064e-89af-8f44-a9b10c80291c",
                  "subject": [
                    "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                    "English"
                  ],
                  "medium": [
                    "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2022-01-10T12:38:58.878+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                    "Grade 1"
                  ],
                  "primaryCategory": "Slider",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-10T12:38:58.878+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_113449775832088576181",
                  "lastStatusChangedOn": "2022-01-10T12:38:58.878+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 4,
                  "languageCode": [
                    "en"
                  ],
                  "version": 1,
                  "versionKey": "1641818338879",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                    "slider"
                  ],
                  "framework": "tpd",
                  "depth": 3,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "test slider 2",
                  "topic": [
                    "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No"
                },
                {
                  "parent": "do_1134460323602841601200",
                  "code": "4395c049-8ba7-c611-6334-8bee3f02fa27",
                  "subject": [
                    "English"
                  ],
                  "showRemarks": "No",
                  "channel": "01309282781705830427",
                  "language": [
                    "English"
                  ],
                  "medium": [
                    "English"
                  ],
                  "mimeType": "application/vnd.sunbird.question",
                  "createdOn": "2022-01-10T13:01:43.135+0000",
                  "objectType": "Question",
                  "gradeLevel": [
                    "Grade 1"
                  ],
                  "primaryCategory": "Slider",
                  "contentDisposition": "inline",
                  "lastUpdatedOn": "2022-01-10T13:01:43.135+0000",
                  "contentEncoding": "gzip",
                  "showSolutions": "No",
                  "allowAnonymousAccess": "Yes",
                  "identifier": "do_113449787008081920183",
                  "lastStatusChangedOn": "2022-01-10T13:01:43.135+0000",
                  "creator": "Vaibahv Bhuva",
                  "visibility": "Parent",
                  "showTimer": "No",
                  "author": "check1@yopmail.com",
                  "index": 5,
                  "languageCode": [
                    "en"
                  ],
                  "version": 1,
                  "versionKey": "1641819703136",
                  "showFeedback": "No",
                  "license": "CC BY 4.0",
                  "interactionTypes": [
                    "slider"
                  ],
                  "framework": "tpd",
                  "depth": 3,
                  "createdBy": "5a587cc1-e018-4859-a0a8-e842650b9d64",
                  "compatibilityLevel": 4,
                  "name": "test slider 4",
                  "topic": [
                    "Forest"
                  ],
                  "board": "CBSE",
                  "status": "Draft",
                  "showEvidence": "No"
                }
              ],
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-20T07:49:38.234+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323602841601200",
              "lastStatusChangedOn": "2022-01-05T05:42:52.106+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 1,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372106",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Chemistry",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323603906561218",
              "code": "bfdac63e-4cd1-c9fe-00a0-be98f73e13d8",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "branchingLogic": {},
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.131+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-10T13:09:04.092+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323604971521236",
              "lastStatusChangedOn": "2022-01-05T05:42:52.131+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 2,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372131",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Biology",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323603906561218",
              "code": "9916f5fc-4f37-3f8e-5151-b32ce65217da",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.114+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.114+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323603578881212",
              "lastStatusChangedOn": "2022-01-05T05:42:52.114+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 3,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372114",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "General Science",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-12T08:37:51.019+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460323603906561218",
          "lastStatusChangedOn": "2022-01-05T05:42:52.118+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 1,
          "setType": "materialised",
          "languageCode": [
            "en"
          ],
          "version": 1,
          "versionKey": "1641361372118",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Science",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft"
        },
        {
          "parent": "do_1134357224765685761203",
          "code": "36b6e0bd-ef9e-9fd1-5092-257c8e6af0a9",
          "allowScoring": "Yes",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T05:42:52.190+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation With Rubrics",
          "children": [
            {
              "parent": "do_1134460323609804801240",
              "code": "fd63a953-d9c1-cb14-df75-5918afb4b4b0",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.110+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-12T08:37:51.018+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323603251201206",
              "lastStatusChangedOn": "2022-01-05T05:42:52.110+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 1,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372110",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "History",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323609804801240",
              "code": "de1454cf-bfa9-faa5-8a71-cf7954e9f95b",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.100+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.100+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323602432001194",
              "lastStatusChangedOn": "2022-01-05T05:42:52.100+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 2,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372100",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Political Science",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323609804801240",
              "code": "916893b4-816f-9613-1456-bea7da40c4ef",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.195+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.195+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323610214401248",
              "lastStatusChangedOn": "2022-01-05T05:42:52.195+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 3,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372195",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Geography",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323609804801240",
              "code": "0c34d378-77e9-db88-589a-7695edcf1d70",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.094+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.094+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323601940481186",
              "lastStatusChangedOn": "2022-01-05T05:42:52.094+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 4,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372094",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Sociology",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323609804801240",
              "code": "cca8fe66-b7e9-c3cb-a226-b5f96e10dfe9",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.126+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.126+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323604561921228",
              "lastStatusChangedOn": "2022-01-05T05:42:52.126+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 5,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372126",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Social Studies",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323609804801240",
              "code": "cedcdd78-2950-e8d7-fa17-f57e67a349b9",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.128+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.128+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323604725761232",
              "lastStatusChangedOn": "2022-01-05T05:42:52.128+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 6,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372128",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Environmental Studies",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-12T08:37:51.019+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460323609804801240",
          "lastStatusChangedOn": "2022-01-05T05:42:52.190+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 2,
          "setType": "materialised",
          "languageCode": [
            "en"
          ],
          "version": 1,
          "versionKey": "1641361372190",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Social Science",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft"
        },
        {
          "parent": "do_1134357224765685761203",
          "code": "19589d40-f25d-5204-bfba-9a331c1d22f1",
          "allowScoring": "Yes",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T05:42:52.191+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation With Rubrics",
          "children": [
            {
              "parent": "do_1134460323609886721242",
              "code": "4be73894-ace8-f9f8-9e22-206ae1854782",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.091+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.090+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323601612801182",
              "lastStatusChangedOn": "2022-01-05T05:42:52.091+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 1,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372091",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Telugu",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323609886721242",
              "code": "35ee819a-8906-eace-1a62-9d296ba7b23a",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.192+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.192+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323609968641244",
              "lastStatusChangedOn": "2022-01-05T05:42:52.192+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 2,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372192",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "English",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323609886721242",
              "code": "4bf42318-fb09-6384-fb3a-67a3b942126a",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.193+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.193+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323610050561246",
              "lastStatusChangedOn": "2022-01-05T05:42:52.193+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 3,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372193",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Assamese",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323609886721242",
              "code": "77161a93-5be9-5548-cc95-9033fddc882b",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.120+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.120+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323604070401220",
              "lastStatusChangedOn": "2022-01-05T05:42:52.120+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 4,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372120",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Sanskrit",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323609886721242",
              "code": "924bdaa8-25a5-286b-2dfd-ae3160754e0f",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.108+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.107+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323603087361202",
              "lastStatusChangedOn": "2022-01-05T05:42:52.108+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 5,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372108",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Hindi",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-12T08:37:51.018+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460323609886721242",
          "lastStatusChangedOn": "2022-01-05T05:42:52.191+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 3,
          "setType": "materialised",
          "languageCode": [
            "en"
          ],
          "version": 1,
          "versionKey": "1641361372191",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Language",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft"
        },
        {
          "parent": "do_1134357224765685761203",
          "code": "a8c0c30c-71b9-1f28-0f28-78c92502b458",
          "allowScoring": "Yes",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T05:42:52.115+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation With Rubrics",
          "children": [
            {
              "parent": "do_1134460323603660801214",
              "code": "8ab5c31d-52b7-cf4b-fc19-5ef5f972b482",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.092+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.092+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323601776641184",
              "lastStatusChangedOn": "2022-01-05T05:42:52.093+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 1,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372092",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Physical Education",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323603660801214",
              "code": "fe79e53a-600a-347a-1627-1333edce33df",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.125+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.124+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323604398081226",
              "lastStatusChangedOn": "2022-01-05T05:42:52.125+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 2,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372125",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Economics",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323603660801214",
              "code": "3901dd2a-a60a-fc5b-8a4c-728cb67f78d3",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.122+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.121+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323604234241222",
              "lastStatusChangedOn": "2022-01-05T05:42:52.122+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 3,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372122",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Mathematics",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-12T08:37:51.018+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460323603660801214",
          "lastStatusChangedOn": "2022-01-05T05:42:52.115+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 4,
          "setType": "materialised",
          "languageCode": [
            "en"
          ],
          "version": 1,
          "versionKey": "1641361372115",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Other Curriculum Subjects",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft"
        },
        {
          "parent": "do_1134357224765685761203",
          "code": "de3bb487-8417-f8a4-04d3-802f3bab8e4c",
          "allowScoring": "Yes",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T05:42:52.113+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation With Rubrics",
          "children": [
            {
              "parent": "do_1134460323603496961210",
              "code": "4b99fa00-448d-9790-4ce9-c53215ad3ca9",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.123+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.123+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323604316161224",
              "lastStatusChangedOn": "2022-01-05T05:42:52.123+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 1,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372123",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Pedagogy",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323603496961210",
              "code": "7d84bdba-9856-63f5-26c6-c40d0ee05fc4",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.129+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.129+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323604807681234",
              "lastStatusChangedOn": "2022-01-05T05:42:52.129+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 2,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372129",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Classroom Management",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            },
            {
              "parent": "do_1134460323603496961210",
              "code": "65da6804-99b9-e7ee-80db-522b0256ed45",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.095+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.095+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323602022401188",
              "lastStatusChangedOn": "2022-01-05T05:42:52.095+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 3,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372095",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Child Management",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-12T08:37:51.018+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460323603496961210",
          "lastStatusChangedOn": "2022-01-05T05:42:52.113+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 5,
          "setType": "materialised",
          "languageCode": [
            "en"
          ],
          "version": 1,
          "versionKey": "1641361372113",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Teaching and Classroom Management",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft"
        },
        {
          "parent": "do_1134357224765685761203",
          "code": "40153827-6fc2-694a-4785-15f1170b9ec8",
          "allowScoring": "Yes",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T05:42:52.112+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation With Rubrics",
          "children": [
            {
              "parent": "do_1134460323603415041208",
              "code": "da305492-32e3-c498-4397-a9365d525171",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.127+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.127+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323604643841230",
              "lastStatusChangedOn": "2022-01-05T05:42:52.127+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 1,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372127",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "ICT",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-12T08:37:51.018+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460323603415041208",
          "lastStatusChangedOn": "2022-01-05T05:42:52.112+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 6,
          "setType": "materialised",
          "languageCode": [
            "en"
          ],
          "version": 1,
          "versionKey": "1641361372112",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "ICT",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft"
        },
        {
          "parent": "do_1134357224765685761203",
          "code": "318b9fb5-2020-e9ce-b1d7-99ba646c9dfc",
          "allowScoring": "Yes",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T05:42:52.132+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation With Rubrics",
          "children": [
            {
              "parent": "do_1134460323605053441238",
              "code": "8b045060-400c-ff62-e88e-1567d300a912",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.109+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.109+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323603169281204",
              "lastStatusChangedOn": "2022-01-05T05:42:52.109+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 1,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372109",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Leadership Management",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-12T08:37:51.019+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460323605053441238",
          "lastStatusChangedOn": "2022-01-05T05:42:52.132+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 7,
          "setType": "materialised",
          "languageCode": [
            "en"
          ],
          "version": 1,
          "versionKey": "1641361372132",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Leadership Management",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft"
        },
        {
          "parent": "do_1134357224765685761203",
          "code": "099a65b6-7456-621c-1cb3-a073e2b4ccc0",
          "allowScoring": "Yes",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T05:42:52.101+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation With Rubrics",
          "children": [
            {
              "parent": "do_1134460323602513921196",
              "code": "b5ccdaed-a685-5d7e-2b5b-92ddd13b11bb",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.097+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.096+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323602186241190",
              "lastStatusChangedOn": "2022-01-05T05:42:52.097+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 1,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372097",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Health Education",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-12T08:37:51.019+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460323602513921196",
          "lastStatusChangedOn": "2022-01-05T05:42:52.101+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 8,
          "setType": "materialised",
          "languageCode": [
            "en"
          ],
          "version": 1,
          "versionKey": "1641361372101",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Health Education",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft"
        },
        {
          "parent": "do_1134357224765685761203",
          "code": "d1ea15c0-812b-b05d-74ef-57016243e081",
          "allowScoring": "Yes",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T05:42:52.098+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation With Rubrics",
          "children": [
            {
              "parent": "do_1134460323602268161192",
              "code": "677a3586-36fe-17d7-be06-4972084bff07",
              "allowScoring": "Yes",
              "allowSkip": "Yes",
              "containsUserData": "No",
              "channel": "01309282781705830427",
              "language": [
                "English"
              ],
              "mimeType": "application/vnd.sunbird.questionset",
              "showHints": "No",
              "createdOn": "2022-01-05T05:42:52.103+0000",
              "objectType": "QuestionSet",
              "primaryCategory": "Observation With Rubrics",
              "contentDisposition": "inline",
              "lastUpdatedOn": "2022-01-05T05:42:52.103+0000",
              "contentEncoding": "gzip",
              "showSolutions": "No",
              "allowAnonymousAccess": "Yes",
              "identifier": "do_1134460323602677761198",
              "lastStatusChangedOn": "2022-01-05T05:42:52.103+0000",
              "requiresSubmit": "No",
              "visibility": "Parent",
              "showTimer": "No",
              "index": 1,
              "setType": "materialised",
              "languageCode": [
                "en"
              ],
              "version": 1,
              "versionKey": "1641361372103",
              "showFeedback": "No",
              "license": "CC BY 4.0",
              "depth": 2,
              "compatibilityLevel": 5,
              "name": "Personal Development",
              "navigationMode": "non-linear",
              "allowBranching": "Yes",
              "shuffle": true,
              "attributions": [],
              "status": "Draft"
            }
          ],
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-12T08:37:51.019+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460323602268161192",
          "lastStatusChangedOn": "2022-01-05T05:42:52.098+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 9,
          "setType": "materialised",
          "languageCode": [
            "en"
          ],
          "version": 1,
          "versionKey": "1641361372098",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Personal Development",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft"
        },
        {
          "parent": "do_1134357224765685761203",
          "code": "19f41337-ac33-4028-095c-1f602da77698",
          "allowScoring": "Yes",
          "allowSkip": "Yes",
          "containsUserData": "No",
          "channel": "01309282781705830427",
          "language": [
            "English"
          ],
          "mimeType": "application/vnd.sunbird.questionset",
          "showHints": "No",
          "createdOn": "2022-01-05T05:42:52.117+0000",
          "objectType": "QuestionSet",
          "primaryCategory": "Observation With Rubrics",
          "contentDisposition": "inline",
          "lastUpdatedOn": "2022-01-05T05:42:52.117+0000",
          "contentEncoding": "gzip",
          "showSolutions": "No",
          "allowAnonymousAccess": "Yes",
          "identifier": "do_1134460323603824641216",
          "lastStatusChangedOn": "2022-01-05T05:42:52.117+0000",
          "requiresSubmit": "No",
          "visibility": "Parent",
          "showTimer": "No",
          "index": 10,
          "setType": "materialised",
          "languageCode": [
            "en"
          ],
          "version": 1,
          "versionKey": "1641361372117",
          "showFeedback": "No",
          "license": "CC BY 4.0",
          "depth": 1,
          "compatibilityLevel": 5,
          "name": "Physics",
          "navigationMode": "non-linear",
          "allowBranching": "Yes",
          "shuffle": true,
          "attributions": [],
          "status": "Draft"
        }
      ],
      "contentEncoding": "gzip",
      "secondaryLanguage": [
        "English"
      ],
      "showSolutions": "No",
      "identifier": "do_1134357224765685761203",
      "subjectIds": [
        "nit_k-12_subject_english"
      ],
      "visibility": "Default",
      "showTimer": "No",
      "author": "check1@yopmail.com",
      "entityType": "Cluster",
      "consumerId": "fa13b438-8a3d-41b1-8278-33b0c50210e4",
      "childNodes": [
        "do_1134460323601776641184",
        "do_1134460323603660801214",
        "do_1134460323604398081226",
        "do_1134460323604234241222",
        "do_1134460323603251201206",
        "do_1134460323609804801240",
        "do_1134460323601940481186",
        "do_1134460323602432001194",
        "do_1134460323610214401248",
        "do_1134460323604725761232",
        "do_1134460323604561921228",
        "do_1134460323610050561246",
        "do_1134460323609886721242",
        "do_1134460323601612801182",
        "do_1134460323609968641244",
        "do_1134460323604070401220",
        "do_1134460323603087361202",
        "do_1134460323602677761198",
        "do_1134460323602268161192",
        "do_1134460323602186241190",
        "do_1134460323602513921196",
        "do_1134460323604643841230",
        "do_1134460323603415041208",
        "do_1134460323603824641216",
        "do_1134460323604316161224",
        "do_1134460323603496961210",
        "do_1134460323604807681234",
        "do_1134460323602022401188",
        "do_113449775832088576181",
        "do_1134460323602841601200",
        "do_1134460323603906561218",
        "do_113449787008081920183",
        "do_11345671149997260811",
        "do_113449808985628672185",
        "do_113449672558780416163",
        "do_1134460323604971521236",
        "do_1134460323603578881212",
        "do_1134460323603169281204",
        "do_1134460323605053441238"
      ],
      "maxScore": 4,
      "languageCode": [
        "en"
      ],
      "version": 1,
      "license": "CC BY 4.0",
      "name": "Observation",
      "allowBranching": "Yes",
      "mediumIds": [
        "nit_k-12_medium_english"
      ],
      "status": "Draft",
      "code": "6510727b-91ac-0ec6-48cb-0ea74ee7300d",
      "allowScoring": "Yes",
      "allowSkip": "Yes",
      "containsUserData": "No",
      "description": "test",
      "medium": [
        "English"
      ],
      "createdOn": "2021-12-21T16:07:21.382+0000",
      "contentDisposition": "inline",
      "lastUpdatedOn": "2022-01-20T07:49:38.722+0000",
      "allowAnonymousAccess": "Yes",
      "lastStatusChangedOn": "2021-12-21T16:07:21.382+0000",
      "creator": "check1@yopmail.com",
      "requiresSubmit": "No",
      "setType": "materialised",
      "versionKey": "1642664978722",
      "showFeedback": "No",
      "recordedBy": "External",
      "framework": "tpd",
      "depth": 0,
      "boardIds": [
        "nit_k-12_board_cbse"
      ],
      "createdBy": "4e397c42-495e-4fdb-8558-f98176230916",
      "compatibilityLevel": 5,
      "navigationMode": "non-linear",
      "shuffle": true,
      "gradeLevelIds": [
        "nit_k-12_gradelevel_grade-1"
      ],
      "board": "CBSE",
      "programId": "ab75b870-6274-11ec-874d-3de2a8c29d94"
    }
  },
  ts: "2022-01-25T07:35:10ZZ",
  ver: "3.0"
}

export const sourcingSettingsMock = {
  enforceCorrectAnswer: false,
  showSolution: false,
  showAddHints: true,
  showAddScore: false,
  showAddTips: true,
  showAddTranslation: true,
  showAddSecondaryQuestion: false,
};

export const leafFormConfigMock = [
  {
      "code": "name",
      "dataType": "text",
      "description": "Name of the content",
      "editable": false,
      "inputType": "text",
      "label": "Title",
      "name": "Title",
      "placeholder": "Title",
      "renderingHints": {
          "class": "sb-g-col-lg-1 required"
      },
      "required": true,
      "visible": true,
      "validations": [
          {
              "type": "max",
              "value": "100",
              "message": "Input is Exceeded"
          },
          {
              "type": "required",
              "message": "Title is required"
          }
      ],
      "default": "test"
  },
  {
      "code": "allowMultiSelect",
      "dataType": "text",
      "description": "allowMultiSelect",
      "editable": false,
      "index": 5,
      "default": "Yes",
      "inputType": "checkbox",
      "label": "Allow Multi Select",
      "name": "allowMultiSelect",
      "placeholder": "allowMultiSelect",
      "renderingHints": {
          "class": "sb-g-col-lg-1"
      },
      "required": false,
      "visible": true
  },
  {
      "code": "showEvidence",
      "dataType": "text",
      "description": "Allow Evidence",
      "editable": false,
      "index": 5,
      "default": "Yes",
      "inputType": "checkbox",
      "label": "Allow Evidence",
      "name": "showEvidence",
      "placeholder": "showEvidence",
      "renderingHints": {
          "class": "sb-g-col-lg-1"
      },
      "required": false,
      "visible": true
  },
  {
      "code": "evidenceMimeType",
      "dataType": "list",
      "depends": [
          "showEvidence"
      ],
      "description": "Evidence",
      "editable": false,
      "inputType": "multiselect",
      "label": "evidence",
      "name": "evidenceMimeType",
      "placeholder": "evidence",
      "renderingHints": {
          "class": "sb-g-col-lg-1"
      },
      "required": false,
      "visible": true,
      "range": null
  },
  {
      "code": "showRemarks",
      "dataType": "text",
      "description": "Allow Remarks",
      "editable": false,
      "index": 5,
      "inputType": "checkbox",
      "label": "Allow Remarks",
      "name": "showRemarks",
      "placeholder": "showRemarks",
      "renderingHints": {
          "class": "sb-g-col-lg-1"
      },
      "required": false,
      "visible": true
  },
  {
      "code": "remarksLimit",
      "dataType": "text",
      "description": "Remark limit",
      "depends": [
          "showRemarks"
      ],
      "editable": false,
      "inputType": "text",
      "label": "Remark limit",
      "name": "remarksLimit",
      "placeholder": "Add limit",
      "renderingHints": {
          "class": "sb-g-col-lg-1"
      },
      "required": false,
      "visible": true
  },
  {
      "code": "markAsNotMandatory",
      "dataType": "text",
      "description": "markAsNotMandatory",
      "editable": false,
      "index": 5,
      "inputType": "checkbox",
      "label": "Mark As Not Mandatory",
      "name": "markAsNotMandatory",
      "placeholder": "markAsNotMandatory",
      "renderingHints": {
          "class": "sb-g-col-lg-1"
      },
      "required": false,
      "visible": true,
      "default": "No"
  }
];
export const creationContextMock: any = {
  "objectType": "question",
  "collectionObjectType": "QuestionSet",
  "isReadOnlyMode": true,
  "unitIdentifier": "do_11330102570702438417",
  "correctionComments": "",
  "mode": "sourcingreview",
  "editableFields": {
    "orgreview": [
      "name",
      "learningOutcome"
    ],
    "sourcingreview": [
      "name",
      "learningOutcome"
    ]
  }
};


export const mockTreeService = {
  getChildren: () => {
    return ["do_11330103476396851218", "do_233"];
  },
  getFirstChild:()=>{
     return {
      data:{
        metadata:{}
      }
     }
  },
  getActiveNode: () => {
    return {
      data: {
        id: "do_11330103476396851218",
      },
      getParent: () => {
        return {
          getChildren: () => {
            return [
              {
                data: {
                  id: "do_11330103476396851218",
                },
              },
            ];
          },
        };
      },
    };
  },
  getNodeById :() =>{
  },
  clearTreeCache :()=>{
  },
  updateNode:()=>{

  },
  updateAppIcon:()=>{

  }
};

export const mockEditorCursor = {
    setQuestionMap: () => {},
    clearQuestionMap : () => {}
}


export const childMetaData = {
  name: "test",
  allowMultiSelect: "Yes",
  showEvidence: "Yes",
  evidenceMimeType: ["image"],
  showRemarks: "Yes",
  remarksLimit: "10",
  markAsNotMandatory: "Yes",
};

export const HierarchyMockData = {
  do_1133610108714352641210: {
    name: "Observation",
    children: ["do_1133850220538183681722", "do_1133850220538019841720"],
    root: true,
  },
  do_1133850220538183681722: {
    name: "School InfraStructure",
    children: [
      "do_1133850224897638401724",
      "do_1133850228043038721726",
      "do_1133867265349795841865",
      "d07b76a3-56e0-7660-4b49-a556376ae813",
    ],
    root: false,
  },
  do_1133850220538019841720: {
    name: "Midday meal",
    children: [],
    root: false,
  },
};

export const BranchingLogic = {
  "do_1134355569264885761166": {
    "target": [
      "do_1134355571590184961168",
      "do_1134355574936780801170"
    ],
    "preCondition": {},
    "source": []
  },
  "do_1134355571590184961168": {
    "target": [],
    "source": [
      "do_1134355569264885761166"
    ],
    "preCondition": {
      "and": [
        {
          "ne": [
            {
              "var": "do_1134355569264885761166.response1.value",
              "type": "responseDeclaration"
            },
            [
              0
            ]
          ]
        }
      ]
    }
  },
  "do_1134355574936780801170": {
    "target": [],
    "source": [
      "do_1134355569264885761166"
    ],
    "preCondition": {
      "and": [
        {
          "eq": [
            {
              "var": "do_1134355569264885761166.response1.value",
              "type": "responseDeclaration"
            },
            [
              1
            ]
          ]
        }
      ]
    }
  }
};
