(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{414:function(e,s,t){"use strict";t.r(s);var a=t(33),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mesg-cli-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service")])]),e._v(" "),t("p",[e._v("==================")]),e._v(" "),t("p",[e._v("Manage services")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#mesg-cli-servicecompile-service"}},[t("code",[e._v("mesg-cli service:compile [SERVICE]")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#mesg-cli-servicecreate-definition"}},[t("code",[e._v("mesg-cli service:create DEFINITION")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#mesg-cli-servicedetail-service_hash"}},[t("code",[e._v("mesg-cli service:detail SERVICE_HASH")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#mesg-cli-servicedev-service"}},[t("code",[e._v("mesg-cli service:dev [SERVICE]")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#mesg-cli-servicedoc-service"}},[t("code",[e._v("mesg-cli service:doc [SERVICE]")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#mesg-cli-serviceexecute-runner_hash-task"}},[t("code",[e._v("mesg-cli service:execute RUNNER_HASH TASK")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#mesg-cli-serviceinit-dir"}},[t("code",[e._v("mesg-cli service:init DIR")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#mesg-cli-servicelist"}},[t("code",[e._v("mesg-cli service:list")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#mesg-cli-servicelogs-runner_hash"}},[t("code",[e._v("mesg-cli service:logs RUNNER_HASH")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#mesg-cli-servicestart-service_hash"}},[t("code",[e._v("mesg-cli service:start SERVICE_HASH")])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#mesg-cli-servicestop-runner_hash"}},[t("code",[e._v("mesg-cli service:stop RUNNER_HASH...")])])])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-compile-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-compile-service"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:compile [SERVICE]")])]),e._v(" "),t("p",[e._v("Compile a service and upload its source to IPFS server")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:compile [SERVICE]\n\nARGUMENTS\n  SERVICE  [default: ./] Path or url of a service\n\nOPTIONS\n  -h, --help       show CLI help\n  -p, --port=port  [default: 50052] Port to access the MESG engine\n  -q, --quiet      Display only essential information\n  --host=host      [default: localhost] Host to access the MESG engine\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/compile.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/compile.ts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-create-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-create-definition"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:create DEFINITION")])]),e._v(" "),t("p",[e._v("Create a service")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:create DEFINITION\n\nARGUMENTS\n  DEFINITION  Service's definition. Use service:compile first to build service definition\n\nOPTIONS\n  -h, --help       show CLI help\n  -p, --port=port  [default: 50052] Port to access the MESG engine\n  -q, --quiet      Display only essential information\n  --host=host      [default: localhost] Host to access the MESG engine\n  --start          Automatically start the service once created\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/create.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/create.ts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-detail-service-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-detail-service-hash"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:detail SERVICE_HASH")])]),e._v(" "),t("p",[e._v("Display detailed information on a service")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:detail SERVICE_HASH\n\nOPTIONS\n  -h, --help       show CLI help\n  -p, --port=port  [default: 50052] Port to access the MESG engine\n  -q, --quiet      Display only essential information\n  --host=host      [default: localhost] Host to access the MESG engine\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/detail.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/detail.ts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-dev-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-dev-service"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:dev [SERVICE]")])]),e._v(" "),t("p",[e._v("Run a service in development mode")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:dev [SERVICE]\n\nARGUMENTS\n  SERVICE  [default: ./] Path or url of a service\n\nOPTIONS\n  -h, --help       show CLI help\n  -p, --port=port  [default: 50052] Port to access the MESG engine\n  -q, --quiet      Display only essential information\n  --env=FOO=BAR    Set environment variables\n  --host=host      [default: localhost] Host to access the MESG engine\n  --start          Automatically start the service once created\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/dev.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/dev.ts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-doc-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-doc-service"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:doc [SERVICE]")])]),e._v(" "),t("p",[e._v("Generate documentation for service and print it on stdout")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:doc [SERVICE]\n\nARGUMENTS\n  SERVICE  [default: ./] Path of a service\n\nOPTIONS\n  -h, --help       show CLI help\n  -p, --port=port  [default: 50052] Port to access the MESG engine\n  -q, --quiet      Display only essential information\n  -s, --save       Save to default readme file\n  --host=host      [default: localhost] Host to access the MESG engine\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/doc.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/doc.ts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-execute-runner-hash-task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-execute-runner-hash-task"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:execute RUNNER_HASH TASK")])]),e._v(" "),t("p",[e._v("Execute a task on a running service")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:execute RUNNER_HASH TASK\n\nARGUMENTS\n  RUNNER_HASH  The hash of the runner that will execute this execution\n  TASK         Task key\n\nOPTIONS\n  -d, --data=key=value   Task inputs\n  -h, --help             show CLI help\n  -j, --json=json        Path to a JSON file containing the task inputs\n  -p, --port=port        [default: 50052] Port to access the MESG engine\n  -q, --quiet            Display only essential information\n  --eventHash=eventHash  Event hash to create the execution with\n  --host=host            [default: localhost] Host to access the MESG engine\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/execute.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/execute.ts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-init-dir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-init-dir"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:init DIR")])]),e._v(" "),t("p",[e._v("Initialize a service from a template")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:init DIR\n\nARGUMENTS\n  DIR  Directory to initialize a service into\n\nOPTIONS\n  -h, --help               show CLI help\n  -p, --port=port          [default: 50052] Port to access the MESG engine\n  -q, --quiet              Display only essential information\n  -t, --template=template  Specify the template URL to use\n  --host=host              [default: localhost] Host to access the MESG engine\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/init.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/init.ts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-list"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:list")])]),e._v(" "),t("p",[e._v("List running services")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:list\n\nOPTIONS\n  -h, --help         show CLI help\n  -p, --port=port    [default: 50052] Port to access the MESG engine\n  -q, --quiet        Display only essential information\n  -x, --extended     show extra columns\n  --columns=columns  only show provided columns (comma-separated)\n  --csv              output is csv format\n  --filter=filter    filter property by partial string matching, ex: name=foo\n  --host=host        [default: localhost] Host to access the MESG engine\n  --no-header        hide table header from output\n  --no-truncate      do not truncate output to fit screen\n  --sort=sort        property to sort by (prepend '-' for descending)\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/list.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/list.ts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-logs-runner-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-logs-runner-hash"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:logs RUNNER_HASH")])]),e._v(" "),t("p",[e._v("Fetch the logs of a service")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:logs RUNNER_HASH\n\nOPTIONS\n  -h, --help       show CLI help\n  -p, --port=port  [default: 50052] Port to access the MESG engine\n  -q, --quiet      Display only essential information\n  --event=event    Display a specific event\n  --[no-]events    Display events\n  --[no-]follow    Follow log output\n  --host=host      [default: localhost] Host to access the MESG engine\n  --[no-]results   Display results\n  --tail=tail      [default: 10000] Display the last N lines\n  --task=task      Display a specific task results\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/logs.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/logs.ts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-start-service-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-start-service-hash"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:start SERVICE_HASH")])]),e._v(" "),t("p",[e._v("Start a service by creating a new runner")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:start SERVICE_HASH\n\nOPTIONS\n  -h, --help       show CLI help\n  -p, --port=port  [default: 50052] Port to access the MESG engine\n  -q, --quiet      Display only essential information\n  --env=FOO=BAR    Set environment variables\n  --host=host      [default: localhost] Host to access the MESG engine\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/start.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/start.ts"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"mesg-cli-service-stop-runner-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesg-cli-service-stop-runner-hash"}},[e._v("#")]),e._v(" "),t("code",[e._v("mesg-cli service:stop RUNNER_HASH...")])]),e._v(" "),t("p",[e._v("Stop one or more running service")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("USAGE\n  $ mesg-cli service:stop RUNNER_HASH...\n\nOPTIONS\n  -h, --help       show CLI help\n  -p, --port=port  [default: 50052] Port to access the MESG engine\n  -q, --quiet      Display only essential information\n  --confirm        Confirm deletion\n  --delete-data    Delete running service persistent data\n  --host=host      [default: localhost] Host to access the MESG engine\n")])])]),t("p",[t("em",[e._v("See code: "),t("a",{attrs:{href:"https://github.com/mesg-foundation/js-sdk/blob/v0.1.3/src/commands/service/stop.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/commands/service/stop.ts"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);