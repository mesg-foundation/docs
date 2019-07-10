# Execute a task

To execute a task, Applications needs to call `executeTask` of the [mesg-js](https://github.com/mesg-foundation/mesg-js) library.

The Engine will reply with a response containing the `executionHash` that identifies the task's execution. To get the output of the task's execution, the Application has to listen for an [execution result.](./listen-for-results.md).

```javascript
const { application } = require('mesg-js')

const mesg = application()

const execution = await mesg.executeTask({
  instanceHash: 'TASK_INSTANCE_HASH',
  taskKey: 'TASK_KEY',
  inputs: JSON.stringify('INPUT_DATA'),
  tags: ['ASSOCIATE_TAG'] // optional
})
console.log('task in progress with execution:', execution.hash)
```

The Application can also call the function `executeTaskAndWaitResult` that automatically listen the result of the execution:


```javascript
const result = await mesg.executeTaskAndWaitResult({
  instanceHash: 'TASK_INSTANCE_HASH',
  taskKey: 'TASK_KEY',
  inputs: JSON.stringify('INPUT_DATA'),
  tags: ['ASSOCIATE_TAG'] // optional
})
if (result.error) {
  console.error('an error has occurred:', result.error)
  throw new Error(result.error)
}
console.log('a result received:', JSON.parse(result.outputs))
```

::: tip API definition
To see the API definition, check the [Execution API definition](../../api/execution.md).

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
