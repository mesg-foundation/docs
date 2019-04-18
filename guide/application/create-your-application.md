# Create your application

Your application connects your different services and define the buisness logic of your product. Your application should be a list of tasks to execute and events to listen.

eg:
- **when** an user signup **then** send an email
- **when** an user pay **then** change the state of the order to paid **then** send an email to the user

To do so your application needs to interact with the MESG Core to [listen for events](listen-for-events.md) and [execute tasks](execute-a-task.md).

![Application](/application.svg)

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
