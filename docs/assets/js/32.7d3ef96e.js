(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{424:function(t,e,s){"use strict";s.r(e);var a=s(33),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),s("p",[t._v("This step-by-step guide will show you how to create an application that gets the ERC-20 token balance of an Ethereum account every 10 seconds and send it to a Webhook.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-installation"}},[t._v("1. Installation")])]),s("li",[s("a",{attrs:{href:"#_2-run-the-mesg-engine"}},[t._v("2. Run the MESG Engine")])]),s("li",[s("a",{attrs:{href:"#_3-create-your-process"}},[t._v("3. Create your process")])]),s("li",[s("a",{attrs:{href:"#_4-start-your-process"}},[t._v("4. Start your process")])]),s("li",[s("a",{attrs:{href:"#final-version-of-your-process"}},[t._v("Final version of your process")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-installation"}},[t._v("#")]),t._v(" 1. Installation")]),t._v(" "),s("p",[t._v("Run the following command in a console to install the MESG CLI:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @mesg/cli\n")])])]),s("p",[t._v("More details on "),s("RouterLink",{attrs:{to:"/guide/installation.html"}},[t._v("the installation guide")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"_2-run-the-mesg-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-run-the-mesg-engine"}},[t._v("#")]),t._v(" 2. Run the MESG Engine")]),t._v(" "),s("p",[t._v("MESG Engine runs as a daemon. To start it, execute:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mesg-cli daemon:start\n")])])]),s("h2",{attrs:{id:"_3-create-your-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-your-process"}},[t._v("#")]),t._v(" 3. Create your process")]),t._v(" "),s("p",[t._v("We will create a "),s("a",{attrs:{href:"/guide/process"}},[t._v("MESG Process")]),t._v(" which will rely on 3 specific services:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/mesg-foundation/service-emit-event-interval",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emit event interval service"),s("OutboundLink")],1),t._v(": to get an event every 10 seconds")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mesg-foundation/service-ethereum-erc20",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ethereum ERC20 service"),s("OutboundLink")],1),t._v(": to query the balance")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mesg-foundation/service-webhook",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webhook service"),s("OutboundLink")],1),t._v(": to send the result on a webhook")])]),t._v(" "),s("p",[t._v("Let's create our first MESG Process by creating a new YAML file (called "),s("code",[t._v("process.yml")]),t._v(") with the following structure:")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" balance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("notifier\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TODO")]),t._v("\n")])])]),s("h3",{attrs:{id:"first-step-trigger-the-process-every-10-seconds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-step-trigger-the-process-every-10-seconds"}},[t._v("#")]),t._v(" First step: Trigger the process every 10 seconds")]),t._v(" "),s("p",[t._v("To trigger this process every 10 seconds we will use the service "),s("a",{attrs:{href:"https://github.com/mesg-foundation/service-emit-event-interval",target:"_blank",rel:"noopener noreferrer"}},[t._v("emit event interval"),s("OutboundLink")],1),t._v(" and listen for the event "),s("code",[t._v("every_10_seconds")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/mesg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("foundation/service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("emit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("interval\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eventKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" every_10_seconds\n")])])]),s("h3",{attrs:{id:"second-step-fetch-the-balance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#second-step-fetch-the-balance"}},[t._v("#")]),t._v(" Second step: Fetch the balance")]),t._v(" "),s("p",[t._v("To fetch the balance we will use the service "),s("a",{attrs:{href:"https://github.com/mesg-foundation/service-ethereum-erc20",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ethereum ERC20"),s("OutboundLink")],1),t._v(" with a specific "),s("code",[t._v("PROVIDER_ENDPOINT")]),t._v(" and call the task "),s("code",[t._v("balanceOf")]),t._v(" with the following inputs:")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("contractAddress")]),t._v(": "),s("a",{attrs:{href:"https://etherscan.io/token/0x420167d87d35c3a249b32ef6225872fbd9ab85d2",target:"_blank",rel:"noopener noreferrer"}},[t._v("0x420167d87d35c3a249b32ef6225872fbd9ab85d2"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("em",[t._v("address")]),t._v(": "),s("a",{attrs:{href:"https://etherscan.io/address/0x2b1892e181cc749b530e6acc0aecfa4cc9c13ac2",target:"_blank",rel:"noopener noreferrer"}},[t._v("0x2b1892e181cc749b530e6acc0aecfa4cc9c13ac2"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... previous step")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" task\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/mesg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("foundation/service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("erc20\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" PROVIDER_ENDPOINT=https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//mainnet.infura.io/v3/d75ab9cb284f4536b1da2ce9f8201bdb\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("taskKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" balanceOf\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contractAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x420167d87d35c3a249b32ef6225872fbd9ab85d2"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x2b1892e181cc749b530e6acc0aecfa4cc9c13ac2"')]),t._v("\n")])])]),s("h3",{attrs:{id:"third-step-send-the-balance-to-the-webhook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#third-step-send-the-balance-to-the-webhook"}},[t._v("#")]),t._v(" Third step: Send the balance to the webhook")]),t._v(" "),s("p",[t._v("To send the balance to a webhook we will use the service "),s("a",{attrs:{href:"https://github.com/mesg-foundation/service-webhook",target:"_blank",rel:"noopener noreferrer"}},[t._v("webhook"),s("OutboundLink")],1),t._v(" and call the task "),s("code",[t._v("call")]),t._v(" with the following inputs")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("url")]),t._v(": "),s("a",{attrs:{href:"https://webhook.site/abe438ba-0c54-4594-bdfd-251375006283",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://webhook.site/abe438ba-0c54-4594-bdfd-251375006283"),s("OutboundLink")],1),t._v(" (generate your own "),s("a",{attrs:{href:"https://webhook.site/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("li",[s("em",[t._v("data")]),t._v(": the "),s("code",[t._v("balance")]),t._v(" from the previous task")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... previous steps")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" task\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/mesg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("foundation/service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("webhook\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("taskKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" call\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://webhook.site/abe438ba-0c54-4594-bdfd-251375006283"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("balance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" balance "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4-start-your-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-start-your-process"}},[t._v("#")]),t._v(" 4. Start your process")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("mesg-cli process:dev ./process.yml\n")])])]),s("p",[t._v("This command will automatically deploy all of the services, run them and create a process to connect them based on the steps we previously defined. Give it a few seconds and...")]),t._v(" "),s("p",[t._v("🎉 The webhook is called with the MESG Token balance every 10 seconds. Go to back to https://webhook.site and check the request's data!")]),t._v(" "),s("h2",{attrs:{id:"final-version-of-your-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#final-version-of-your-process"}},[t._v("#")]),t._v(" Final version of your process")]),t._v(" "),s("p",[t._v("Here is the final version of the process file:")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" balance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("notifier\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" trigger\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/mesg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("foundation/service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("emit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("interval\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eventKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" every_10_seconds\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" task\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/mesg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("foundation/service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ethereum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("erc20\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" PROVIDER_ENDPOINT=https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//mainnet.infura.io/v3/d75ab9cb284f4536b1da2ce9f8201bdb\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("taskKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" balanceOf\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("contractAddress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x420167d87d35c3a249b32ef6225872fbd9ab85d2"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xe17ee7b3c676701c66b395a35f0df4c2276a344e"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" task\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/mesg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("foundation/service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("webhook\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("taskKey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" call\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://webhook.site/abe438ba-0c54-4594-bdfd-251375006283"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("balance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" balance "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Get Help")]),t._v(" "),s("p",[t._v("You need help ? Check out the "),s("a",{attrs:{href:"https://forum.mesg.com",target:"_blank"}},[t._v("MESG Forum")]),t._v(".")])])])}),[],!1,null,null,null);e.default=n.exports}}]);