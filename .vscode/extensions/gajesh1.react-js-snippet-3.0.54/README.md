# Javascript React Bootstrap HTML code Snippet  

Created by gajesh panigrahi


**javascript snippet**

{
    "Print to console": {
		"prefix": "log",
		"body": [
			"console.log(`$1`, $1);"
		],
		"description": "Log output to console"
	},
	"div": {
		"prefix": "div",
		"body": [
			"<div>",
			"\t$1",
			"</div>"
		],
		"description": "HTML - Defines a section in a document"
	},
	"button": {
		"prefix": "button",
		"body": "<button type=\"$1\">$2</button>$3",
		"description": "HTML - Defines a push button"
	},
	"Col": {
		"prefix": "col",
		"body": [
			"<Col>",
			"\t$1",
			"</Col>"
		],
		"description": "react-bootstrap Column"
	},
	"Row": {
		"prefix": "row",
		"body": [
			"<Row>",
			"\t$1",
			"</Row>"
		],
		"description": "react-bootstrap Row"
	},
	"label": {
		"prefix": "label",
		"body": "<label for=\"$1\">$2</label>",
		"description": "HTML - Defines an inline window"
	},
	"p": {
		"prefix": "p",
		"body": "<p>$1</p>",
		"description": "HTML - Defines a paragraph"
	},
	"span": {
		"prefix": "span",
		"body": "<span>$1</span>",
		"description": "HTML - Defines a section in a document"
	},
	"strong": {
		"prefix": "strong",
		"body": "<strong>$1</strong>",
		"description": "HTML - Defines strong text"
	},
	"Link": {
		"prefix": "link",
		"body": "<Link to=\"$1\">$2</Link>",
		"description": "React-router link"
	},
	"Router": {
		"prefix": "router",
		"body": "<Router history={$1}>$2</Router>",
		"description": "React-router"
	},
	"Route": {
		"prefix": "route",
		"body": "<Route path=\"$1\" component={$2}>$3</Route>",
		"description": "React-router Route"
	},
	"Route/": {
		"prefix": "route/",
		"body": "<Route path=\"$1\" component={$2}/>$3",
		"description": "React-router Route"
	},
	"Import react": {
		"prefix": "r",
		"body": "import * as React from 'react';"
	},
	"Import react-router": {
		"prefix": "rr",
		"body": "import {$1} from 'react-router';"
	},
	"Class": {
		"prefix": "jsclass",
		"body": [
			"import * as React from 'react';\n",
			"export class $1 extends React.Component {",
			"\trender() {",
			"\t\treturn ();",
			"\t}",
			"}\n"
		]
	},
	"Arrow": {
        "prefix": "arrow",
        "body": [
			"($1) => {$2}"
		]
    },

    "SetState": {
        "prefix": "ss",
        "body": [
            "this.setState({$1:$2})"
        ]
    },

    "DispProp": {
        "prefix": "dprop",
        "body": [
            "const {$1} = this.props.$2"
        ]
    },

    "DispState": {
        "prefix": "dstate",
        "body": [
            "const {$1} = this.state.$2"
        ]
    },

    "ES6method": {
        "prefix": "method",
        "body": [
            "const $1 = ($2) => {",
            "\t$2",
            "}"
        ]
    },

    "constant": {
        "prefix": "cnt",
        "body": [
            "const $1 = {",
            "\t$2",
            "};"
        ]
	},
	
	"Push path": {
		"prefix": "rpush",
        "body": [
            "this.props.history.push('/$1')"
        ]
	},

	"Match path": {
		"prefix": "rmatch",
        "body": [
            "this.props.match.data[`$1`]"
        ]
	},

	"Map function": {
		"prefix": "map",
		"body": [
			"\n$1.map(($2, index) => {",
			"\t$3\n});\n"
        ]
	},

	"prevent default": {
		"prefix": "pd",
		"body": [
			"$1.preventDefault();"
        ]
	},

	"handle input": {
		"prefix": "this",
		"body": [
			"$1 = ($2) => {",
			"\t$3",
			"}\n"
        ]
	},

	"dopost": {
		"prefix": "post",
		"body": [
			"doPost(",
			"\t'$1',\n\t$2,\n\t$3,\n\t$4\n)"
		]
	},

	"doget": {
		"prefix": "get",
		"body": [
			"doGet(",
			"\t'$1',\n\t$3,\n\t$4\n)"
		]
	},
	"import": {
		"prefix": "imst",
		"body": [
			"import {$1} from '$2'"
		]
	}


}






**Typescript snippet**
{
    "Print to console": {
		"prefix": "log",
		"body": [
			"console.log(`$1`, $1);"
		],
		"description": "Log output to console"
	},
	"div": {
		"prefix": "div",
		"body": [
			"<div>",
			"\t$1",
			"</div>"
		],
		"description": "HTML - Defines a section in a document"
	},
	"button": {
		"prefix": "button",
		"body": "<button type=\"$1\">$2</button>$3",
		"description": "HTML - Defines a push button"
	},
	"a": {
		"prefix": "a",
		"body": "<a href=\"$1\">$2</a>$3",
		"description": "HTML - Defines a hyperlink"
	},
	"Col": {
		"prefix": "col",
		"body": [
			"<Col>",
			"\t$1",
			"</Col>"
		],
		"description": "react-bootstrap Column"
	},
	"Row": {
		"prefix": "row",
		"body": [
			"<Row>",
			"\t$1",
			"</Row>"
		],
		"description": "react-bootstrap Row"
	},
	"label": {
		"prefix": "label",
		"body": "<label for=\"$1\">$2</label>",
		"description": "HTML - Defines an inline window"
	},
	"p": {
		"prefix": "p",
		"body": "<p>$1</p>",
		"description": "HTML - Defines a paragraph"
	},
	"span": {
		"prefix": "span",
		"body": "<span>$1</span>",
		"description": "HTML - Defines a section in a document"
	},
	"strong": {
		"prefix": "strong",
		"body": "<strong>$1</strong>",
		"description": "HTML - Defines strong text"
	},
	"Link": {
		"prefix": "link",
		"body": "<Link to=\"$1\">$2</Link>",
		"description": "React-router link"
	},
	"Router": {
		"prefix": "router",
		"body": "<Router history={$1}>$2</Router>",
		"description": "React-router"
	},
	"Route": {
		"prefix": "route",
		"body": "<Route path=\"$1\" component={$2}>$3</Route>",
		"description": "React-router Route"
	},
	"Route/": {
		"prefix": "route/",
		"body": "<Route path=\"$1\" component={$2}/>$3",
		"description": "React-router Route"
	},
	"Import react": {
		"prefix": "r",
		"body": "import * as React from 'react';"
	},
	"Import react-router": {
		"prefix": "rr",
		"body": "import {$1} from 'react-router';"
	},
	"Class": {
		"prefix": "tsclass",
		"body": [
			"import * as React from 'react';",
			"import * as Radium from 'radium';\n",
			"@Radium",
			"export class $1 extends React.Component<void, void> {",
			"\trender(): JSX.Element {",
			"\t\treturn ();",
			"\t}",
			"}\n"
		]
	},
	"Unroll": {
		"prefix": "unr",
		"body": [
			"unroll('${1:your test case message}', (done: () => void, args): void => {",
			"\tdone();",
			"}, [",
			"\t[]",
			"]);"
		]
	},
	"It": {
		"prefix": "testcase",
		"body": [
			"it('${1:your test case message}', (): void => {",
			"\t$2",
			"});"
		]
	},
	"Describe": {
		"prefix": "desc",
		"body": [
			"describe('${1:your test case message}', (): void => {",
			"\t$2",
			"});"
		]
	},
	"Expect to be called": {
		"prefix": "called",
		"body": "expect($1).toBeCalled();"
	},
	"Expect to equal": {
		"prefix": "equal",
		"body": "expect($1).toEqual();"
	},
	"Expect to be truthy": {
		"prefix": "truthy",
		"body": "expect($1).toBeTruthy();"
	},
	"Expect to be falsy": {
		"prefix": "falsy",
		"body": "expect($1).toBeFalsy();"
	}


}