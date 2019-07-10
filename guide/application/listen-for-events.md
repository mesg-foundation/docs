# Listen for events

To listen for events, the applications needs to call `listenEvent` of the [mesg-js](https://github.com/mesg-foundation/mesg-js) library.

Applications can listen to many Services at the same time by calling multiple time `listenEvent`.

```javascript
const { application } = require('mesg-js')

const mesg = application()

mesg.listenEvent({
  filter: {
    instanceHash: 'EVENT_INSTANCE_HASH',
    key: 'EVENT_KEY' // optional
  }
})
.on('data', (event) => {
  console.log('an event received:', event.key, JSON.parse(event.data))
})
```

::: tip API definition
To see the API definition, check the [Event API definition](../../api/event.md).
:::

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
:::
