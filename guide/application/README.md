# Create an application

An application connects various [services](/guide/service/) and defines the buisness logic for your product. An application should be a list of tasks to execute and events to listen to.

eg:
- **when** a user signs up **then** send an email
- **when** a user pays **then** change the state of the order to paid **then** send an email to the user

Applications using this architecture pattern need to interact with MESG Core to [listen for events](listen-for-events.md) and [execute tasks](execute-a-task.md).

![Application](/application.svg)

::: tip Get Help
Need help? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
