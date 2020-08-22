(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{422:function(t,e,a){"use strict";a.r(e);var s=a(33),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task"}},[t._v("#")]),t._v(" Task")]),t._v(" "),a("p",[t._v("This type defines the task to execute of a given instance of a service.")]),t._v(" "),a("p",[t._v("By default, the task's inputs are the previous step's outputs.\nIt can be customized by defining the "),a("code",[t._v("inputs")]),t._v(" parameter to reference the outputs of any previous steps.")]),t._v(" "),a("h2",{attrs:{id:"definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definition"}},[t._v("#")]),t._v(" Definition")]),t._v(" "),a("param-table",{attrs:{parameter:{fields:[{name:"type",fullType:'"task"'},{name:"key",description:"(optional) Key to identify this step",fullType:"string"},{name:"instanceHash",description:"Hash of the service's instance",fullType:"string"},{name:"instance",description:"Information about the instance to run. (Ignored if <code>instanceHash</code> is set)",fullType:"Instance"},{name:"taskKey",description:"Key of the task to execute",fullType:"string"},{name:"inputs",description:"(optional) Task's inputs. If not defined, inputs are the previous step's outputs",fullType:"map<string, Input>"}]},types:{Instance:{fields:[{name:"src",description:"Source of the service to deploy (only when <code>service</code> is not set)",fullType:"string"},{name:"service",description:"Service hash of the service to deploy (only when <code>src</code> is not set)",fullType:"string"},{name:"env",description:"Environment variable to use while deploying the service",label:"repeated",fullType:"string"}]}}}}),t._v(" "),a("h2",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),a("p",[t._v("Inputs can be any of the following types:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")])]),t._v(" "),a("li",[a("code",[t._v("bool")])]),t._v(" "),a("li",[a("code",[t._v("number")])]),t._v(" "),a("li",[a("code",[t._v("array")])]),t._v(" "),a("li",[a("code",[t._v("object")])]),t._v(" "),a("li",[a("code",[t._v("reference")])])]),t._v(" "),a("h3",{attrs:{id:"constant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constant"}},[t._v("#")]),t._v(" Constant")]),t._v(" "),a("p",[t._v("The types "),a("code",[t._v("string")]),t._v(", "),a("code",[t._v("bool")]),t._v(" and "),a("code",[t._v("number")]),t._v(" are constant and lets you hardcode a value.")]),t._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stringInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Input1 to the task"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("numberInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("booleanInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("h3",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("p",[t._v("The reference type allows access to the data of a previous result or the previous step of a process.\nThe reference is a special object that must contain the attribute "),a("code",[t._v("key")]),t._v(" and, optionally, the parameter "),a("code",[t._v("stepKey")]),t._v(".")]),t._v(" "),a("param-table",{attrs:{parameter:{fields:[{name:"stepKey",description:"(optional) Key of the step to reference (defined with the attribute <code>key</code> of the step). If not defined, the previous step is used",fullType:"string"},{name:"key",description:"Path to the value of the to reference",fullType:"string"}]},types:{}}}),t._v(" "),a("p",[t._v("The parameter "),a("code",[t._v("key")]),t._v(" is the path of data to access.\nTo write a path, you need to follow a simplified JSON path format:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("KEY_NAME")]),t._v(" to access a key.")]),t._v(" "),a("li",[a("code",[t._v(".")]),t._v(" to access data in an object.")]),t._v(" "),a("li",[a("code",[t._v("[INDEX]")]),t._v(" to access an element in an array at the index "),a("code",[t._v("INDEX")]),t._v(". (You might get a runtime error if your index is out of bounds).")])]),t._v(" "),a("h4",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("foo")]),t._v(": Access the variable "),a("code",[t._v("foo")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("foo.bar")]),t._v(": Access the variable "),a("code",[t._v("bar")]),t._v(" in the object "),a("code",[t._v("foo")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("foo[0]")]),t._v(": Access the first element of the array "),a("code",[t._v("foo")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("foo[0].bar[1]")]),t._v(": Access the second element of the array "),a("code",[t._v("bar")]),t._v(" contained in the first element of the array "),a("code",[t._v("foo")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("foo[0][1]")]),t._v(": Access the second element in the first element of the array "),a("code",[t._v("foo")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("referenceInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" outputA\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stepKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("referenceWithPathInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" outputB.attrX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stepKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x\n")])])]),a("h3",{attrs:{id:"composable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composable"}},[t._v("#")]),t._v(" Composable")]),t._v(" "),a("p",[t._v("The types "),a("code",[t._v("array")]),t._v(" and "),a("code",[t._v("object")]),t._v(" are composable. They can contain data of any types including other composable and reference types.")]),t._v(" "),a("ul",[a("li",[t._v("An "),a("code",[t._v("array")]),t._v(" of "),a("code",[t._v("array")]),t._v(" of "),a("code",[t._v("string")]),t._v(". Eg: "),a("code",[t._v('[["foo", "bar"], [""]]')])]),t._v(" "),a("li",[t._v("An "),a("code",[t._v("object")]),t._v(" with another "),a("code",[t._v("object")]),t._v(" that contains an "),a("code",[t._v("array")]),t._v(" of "),a("code",[t._v("object")]),t._v(" data. Eg: "),a("code",[t._v('{ a: { b: [{ c: "" }] } }')])])]),t._v(" "),a("h4",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("objectInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("numberInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("booleanInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arrayInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" foo\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bar\n")])])]),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("objectInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("referenceInputInObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" outputA\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stepKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x\n")])])]),a("h2",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" erc20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("notification\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" task\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instanceHash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"H74Qqq8nT5JZ9GSJmuSWLN5benWZPkUb5pYcvQLsoZX"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("taskKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" taskY\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" task\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instanceHash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"H74Qqq8nT5JZ9GSJmuSWLN5benWZPkUb5pYcvQLsoZX"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("taskKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" taskY\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stringInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Input1 to the task"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("objectInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("numberInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("booleanInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("arrayInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" foo\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bar\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("referenceInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" outputA\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stepKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("referenceWithPathInput")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" outputB.attrX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stepKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);