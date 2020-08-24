(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{431:function(e,t,i){"use strict";i.r(t);var s=i(33),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"service-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#service-file"}},[e._v("#")]),e._v(" Service file")]),e._v(" "),i("h2",{attrs:{id:"service-file-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#service-file-2"}},[e._v("#")]),e._v(" Service file")]),e._v(" "),i("p",[e._v("To define a "),i("RouterLink",{attrs:{to:"/guide/service/create-a-service.html"}},[e._v("Service")]),e._v(", you will need to create a specific folder with a "),i("code",[e._v("mesg.yml")]),e._v(" file that describes its functionalities. This file can contain the following information in a "),i("code",[e._v("YAML")]),e._v("syntax:")],1),e._v(" "),i("p",[e._v("You can create a default file using the CLI by entering the command:")]),e._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[e._v("mesg-cli service:init\n")])])]),i("p",[e._v("This will create a "),i("code",[e._v("mesg.yml")]),e._v(" file in your current directory with the following attributes:")]),e._v(" "),i("h2",{attrs:{id:"definition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#definition"}},[e._v("#")]),e._v(" Definition")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[i("strong",[e._v("Attribute")])]),e._v(" "),i("th",[i("strong",[e._v("Type")])]),e._v(" "),i("th",[i("strong",[e._v("Default")])]),e._v(" "),i("th",[i("strong",[e._v("Description")])])])]),e._v(" "),i("tbody",[i("tr",[i("td",[i("strong",[e._v("name")])]),e._v(" "),i("td",[i("span",{staticClass:"type"},[e._v("String")])]),e._v(" "),i("td",[i("code",[e._v('""')])]),e._v(" "),i("td",[e._v("Each Service has a name chosen by the developer. This name is used to identify the service in a nice humanlike way.")])]),e._v(" "),i("tr",[i("td",[i("strong",[e._v("description")])]),e._v(" "),i("td",[i("span",{staticClass:"type"},[e._v("String")])]),e._v(" "),i("td",[i("code",[e._v('""')])]),e._v(" "),i("td",[e._v("A description that will be useful to explain the features of your service.")])]),e._v(" "),i("tr",[i("td",[i("strong",[e._v("sid")])]),e._v(" "),i("td",[i("span",{staticClass:"type"},[e._v("String")])]),e._v(" "),i("td",[i("code",[e._v("generated")])]),e._v(" "),i("td",[e._v("A unique service name that can be set optionally. It'll be auto generated when it isn't provided. A service can have multiple deployed versions (hashes) but its sid is always fixed. SID can be used in place of service hash. When used, it'll point to the latest deployed version(hash) of the service.")])]),e._v(" "),i("tr",[i("td",[i("strong",[e._v("events")])]),e._v(" "),i("td",[i("span",{staticClass:"type"},[e._v("map<id, "),i("RouterLink",{attrs:{to:"/guide/service/emit-an-event.html#event-definitions"}},[e._v("Event")]),e._v(">")],1)]),e._v(" "),i("td",[i("code",[e._v("{}")])]),e._v(" "),i("td",[e._v("Services must declare a list of events they can emit. Events are actions on a technology the Service is connected to.")])]),e._v(" "),i("tr",[i("td",[i("strong",[e._v("tasks")])]),e._v(" "),i("td",[i("span",{staticClass:"type"},[e._v("map<id, "),i("RouterLink",{attrs:{to:"/guide/service/listen-for-tasks.html#task-definitions"}},[e._v("Task")]),e._v(">")],1)]),e._v(" "),i("td",[i("code",[e._v("{}")])]),e._v(" "),i("td",[e._v("Services declare a list of tasks they can execute. A task is an action that accepts parameters as inputs, executes something on the connected technology, and returns one output to the Engine, with data.")])]),e._v(" "),i("tr",[i("td",[i("strong",[e._v("repository")])]),e._v(" "),i("td",[i("span",{staticClass:"type"},[e._v("String")])]),e._v(" "),i("td",[i("code",[e._v('""')])]),e._v(" "),i("td",[e._v("The url of the repository eg: "),i("code",[e._v("https://github.com/org/repo")])])]),e._v(" "),i("tr",[i("td",[i("strong",[e._v("configuration")])]),e._v(" "),i("td",[i("span",{staticClass:"type"},[i("RouterLink",{attrs:{to:"/guide/service/dockerize-the-service.html#add-a-configuration-and-dependencies"}},[e._v("Dependency")])],1)]),e._v(" "),i("td",[i("code",[e._v("{}")])]),e._v(" "),i("td",[e._v("Service can specify one configuration that will be use for the main docker container of the service")])]),e._v(" "),i("tr",[i("td",[i("strong",[e._v("dependencies")])]),e._v(" "),i("td",[i("span",{staticClass:"type"},[e._v("map<id, "),i("RouterLink",{attrs:{to:"/guide/service/dockerize-the-service.html#add-a-configuration-and-dependencies"}},[e._v("Dependency")]),e._v(">")],1)]),e._v(" "),i("td",[i("code",[e._v("{}")])]),e._v(" "),i("td",[e._v("Services can specify internal dependencies such as a database, cache or blockchain client.")])])])]),e._v(" "),i("p",[e._v("You can find an example of "),i("code",[e._v("mesg.yml")]),e._v(" file "),i("a",{attrs:{href:"https://github.com/mesg-foundation/service-ethereum/blob/master/mesg.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);