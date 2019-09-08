# Orchestration system

The orchestration system let you build application by orchestrating the communication between your services.

This orchestration is done through processes where every **process** contains the instructions to connect your services with each others.

Processes are made to replace the [Application](../application/) and are automatically managed by the Engine to be ready to be distributed.

## What's a process

A process is a series of instructions connected with each others to execute that are triggered by a specific event.

A process is a graph of execution where each node is a specific instruction.

Instruction can be one of the following:
- Listening an event
- Listening a result
- Execute a task
- Conditions on data
- Conversion of the data

Example:

- When ServiceA **emits** _eventX_
  - Then **if** _eventX.xxx = true_
  - Then **convert**
    - _a = eventX.xxx_
  - Then **execute** _taskB of ServiceB_
  - Then **execute** _taskC of ServiceC_
