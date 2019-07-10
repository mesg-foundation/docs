# Listen for results

The execution of tasks can take a long time to finish depending on the action they are completing, so outputs are sent back asynchronously.

To listen for task execution's outputs, applications needs to call `listenResult` of the [mesg-js](https://github.com/mesg-foundation/mesg-js) library.

Applications can listen to many Services at the same time by calling multiple time `listenResult`.

::: warning
Outputs are sent asynchronously. Make sure that the Application listens for outputs before it executes a task, otherwise it will miss the outputs.
:::

```javascript
const { application } = require('mesg-js')

const mesg = application()

mesg.listenResult({
  filter: {
    instanceHash: 'RESULT_INSTANCE_HASH',
    taskKey: 'TASK_KEY_FILTER', // optional
    tags: ['TAG_FILTER'] // optional
  }
})
.on('data', (result) => {
  if (result.error) {
    console.error('an error has occurred:', result.error)
    return
  }
  console.log('a result received:', JSON.parse(result.outputs))
})
```

::: tip API definition
To see the API definition, check the [Execution API definition](../../api/execution.md).


::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
