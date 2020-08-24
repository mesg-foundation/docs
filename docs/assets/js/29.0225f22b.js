(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{421:function(t,a,e){"use strict";e.r(a);var s=e(33),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" Filter")]),t._v(" "),e("p",[t._v("Apply one or multiple conditions on the previous step's outputs.")]),t._v(" "),e("p",[t._v("All conditions should match to continue to the next step.")]),t._v(" "),e("h2",{attrs:{id:"definition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#definition"}},[t._v("#")]),t._v(" Definition")]),t._v(" "),e("param-table",{attrs:{parameter:{fields:[{name:"type",fullType:'"filter"'},{name:"conditions",description:"Key-value map where the key references a data of the previous step's outputs and the value is the expected matching value.<br><b>OR</b> an array of Condition for advanced filtering.",fullType:"map<string, Condition> OR Condition[]"}]},types:{}}}),t._v(" "),e("h2",{attrs:{id:"simple-conditions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-conditions"}},[t._v("#")]),t._v(" Simple conditions")]),t._v(" "),e("p",[t._v("The simplest way to set conditions is to use a "),e("code",[t._v("map<string, Condition>")]),t._v(" where the key references a data of the previous step's outputs and the value is the expected matching value.")]),t._v(" "),e("p",[t._v("The condition value can be any of the following types:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("string")])]),t._v(" "),e("li",[e("code",[t._v("bool")])]),t._v(" "),e("li",[e("code",[t._v("number")])])]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" filter\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("previousTaskOutput_1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# the value of this output must be "hello"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("previousTaskOutput_2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the value of this output must be 10")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("previousTaskOutput_3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the value of this output must be true")]),t._v("\n")])])]),e("h2",{attrs:{id:"advanced-conditions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-conditions"}},[t._v("#")]),t._v(" Advanced conditions")]),t._v(" "),e("p",[t._v("Advanced conditions offer the possibility to use predicates other than only equal, and to reference data inside "),e("code",[t._v("object")]),t._v(" or "),e("code",[t._v("array")]),t._v(" of the previous step's outputs.")]),t._v(" "),e("p",[t._v("Advanced conditions are defined as follow:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" filter\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the key to reference")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EQ "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the predicate to apply")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bar    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the value to use, can be of type `string`, `bool`, and `number`")]),t._v("\n")])])]),e("h3",{attrs:{id:"key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" Key")]),t._v(" "),e("p",[t._v("The parameter "),e("code",[t._v("key")]),t._v(" is the path of data to access.\nTo write a path, you need to follow a simplified JSON path format:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("KEY_NAME")]),t._v(" to access a key.")]),t._v(" "),e("li",[e("code",[t._v(".")]),t._v(" to access data in an object.")]),t._v(" "),e("li",[e("code",[t._v("[INDEX]")]),t._v(" to access an element in an array at the index "),e("code",[t._v("INDEX")]),t._v(". (You might get a runtime error if your index is out of bounds).")])]),t._v(" "),e("h4",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("foo")]),t._v(": Access the variable "),e("code",[t._v("foo")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("foo.bar")]),t._v(": Access the variable "),e("code",[t._v("bar")]),t._v(" in the object "),e("code",[t._v("foo")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("foo[0]")]),t._v(": Access the first element of the array "),e("code",[t._v("foo")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("foo[0].bar[1]")]),t._v(": Access the second element of the array "),e("code",[t._v("bar")]),t._v(" contained in the first element of the array "),e("code",[t._v("foo")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("foo[0][1]")]),t._v(": Access the second element in the first element of the array "),e("code",[t._v("foo")]),t._v(".")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" filter\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EQ\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".x\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EQ\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),e("h3",{attrs:{id:"predicate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#predicate"}},[t._v("#")]),t._v(" Predicate")]),t._v(" "),e("p",[t._v("The following predicates are available:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("EQ")]),t._v(": The value must be exactly equal to the data. Works with types "),e("code",[t._v("string")]),t._v(", "),e("code",[t._v("bool")]),t._v(", and "),e("code",[t._v("number")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("GT")]),t._v(": The value must be greater than the data. Works only with types "),e("code",[t._v("number")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("GTE")]),t._v(": The value must be greater than or equal to the data. Works only with types "),e("code",[t._v("number")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("LT")]),t._v(": The value must be lesser than the data. Works only with types "),e("code",[t._v("number")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("LTE")]),t._v(": The value must be lesser than or equal to the data. Works only with types "),e("code",[t._v("number")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("CONTAINS")]),t._v(": The value must be contained in the data. Works only with "),e("code",[t._v("string")]),t._v(" or  "),e("strong",[t._v("repeated")]),t._v(" data.")])]),t._v(" "),e("h4",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# value of `foo` must be between 10 and 20")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" filter\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GTE\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LTE\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])]),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# value of `logs` must be contains "hello"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" filter\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" logs "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# logs is an array of string")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CONTAINS\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" error\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" message "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# message is a string")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CONTAINS\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hello\n")])])]),e("h2",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" erc20"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("notification\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" filter\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("recipientID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contractAddress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x420167d87d35c3a249b32ef6225872fbd9ab85d2"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" filter\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blockNumber\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GTE\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("503022")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" logs\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CONTAINS\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x420167d87d35c3a249b32ef6225872fbd9ab85d2"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" logs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("predicates")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EQ\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x420167d87d35c3a249b32ef6225872fbd9ab85d2"')]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);