# What is an Application?

Applications on MESG are built to direct the interaction between [Services](../service/what-is-a-service.md) to execute tasks. These can be configured in any order to create chain reactions or synchronicities of any kind.

MESG Applications can enhance or even replace the back end of any application, allowing apps to become modular, thus easily expandable and maintainable. MESG Services are purchased and sold as Modules in the [MESG Marketplace](https://mesg.com/marketplace).

Our software architecture is modeled on event-driven architecture \(EDA\). This will be used in future releases of MESG software. EDA is a software architecture pattern promoting the production, detection, consumption of, and reaction to events.

Events are any new occurrences on a technology. \(e.g. receiving an email, a new deposit, a full battery, the first of the month, a delayed flight, etc.\) With the increased use of digital devices, web services and IoT devices, digital events are happening around us all the time. 

Tasks in Applications are reactions to events \(send an email, notify me on my watch, put the car into standby mode, issue a refund, transfer funds, open a new account, turn on the lights, etc.\).

We recommend you build applications with tasks that react to events to keep them simple to build, easily-maintainable and compatible with future releases of Core.

By creating an Application based in Event-Driven Architecture, you embrace the philosophy of MESG and end up making Applications that are surprisingly easy.

### Source of events

::: tip
The event is the **when** for your application
:::

The source of an event can come from two different parts of your service :

* [Events from services](listen-for-events.md)
* [Outputs from the tasks of services](execute-a-task.md)

### Task to execute

::: tip
The task is the **then** for your application
:::

When one event occurs, then the only thing to do is to [execute a task](execute-a-task.md) from your chosen Service.

You can find some examples on the [use cases](use-cases.md) page.

