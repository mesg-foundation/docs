# Create a service

A Service is a component of an application that can be reused. 

They can be created through [The MESG Engine](/guide/installation.md) and can be **shared**, **purchased** or **sold** on the MESG Marketplace.

A service has at least one of these purposes:
- Execute tasks
- Emit events
- Embed technologies

![Application](/service.svg)

Any logic can be created with services, regardless of its complexity. 

They communicate directly with the [The MESG Engine](/guide/installation.md) and expose their tasks and events through a [service definition file](/guide/service/service-file.md).

Each service runs in its own [Docker](/guide/service/dockerize-the-service.md) with its own network between the service and its dependencies.
