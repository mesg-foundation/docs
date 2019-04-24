# Service file

## Service file

To define a [Service](create-a-service.md), you will need to create a specific folder with a `mesg.yml` file that describes its functionalities. This file can contain the following information in a `YAML`syntax:

You can create a default file using the CLI by entering the command:

```bash
mesg-core service init
```

This will create a `mesg.yml` file in your current directory with the following attributes:

## Definition

| **Attribute** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| **name** | <span class="type">String</span> | `""` | Each Service has a name chosen by the developer. This name is used to identify the service in a nice humanlike way. |
| **description** | <span class="type">String</span> | `""` | A description that will be useful to explain the features of your service. |
| **sid** | <span class="type">String</span> | `generated` | A unique service name that can be set optionally. It'll be auto generated when it isn't provided. A service can have multiple deployed versions (hashes) but its sid is always fixed. SID can be used in place of service hash. When used, it'll point to the latest deployed version(hash) of the service. |
| **events** | <span class="type">map&lt;id, [Event](emit-an-event.md#event-definitions)&gt;</span> | `{}` | Services must declare a list of events they can emit. Events are actions on a technology the Service is connected to. |
| **tasks** | <span class="type">map&lt;id, [Task](listen-for-tasks.md#task-definitions)&gt;</span> | `{}` | Services declare a list of tasks they can execute. A task is an action that accepts parameters as inputs, executes something on the connected technology, and returns one output to Core, with data.
| **repository** | <span class="type">String</span> | `""` | The url of the repository eg: `https://github.com/org/repo` |
| **configuration** |  <span class="type">[Dependency](dockerize-the-service.md#add-a-configuration-and-dependencies)</span> | `{}` | Service can specify one configuration that will be use for the main docker container of the service |
| **dependencies** | <span class="type">map&lt;id, [Dependency](dockerize-the-service.md#add-dependencies)&gt;</span> | `{}` | Services can specify internal dependencies such as a database, cache or blockchain client. |

You can find an example of `mesg.yml` file [here](https://github.com/mesg-foundation/service-ethereum/blob/master/mesg.yml).



