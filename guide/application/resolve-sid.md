# Resolve Service

Instead of hard-coding `instanceHash` in your application's env, your application can resolve dynamically using the service's SID and the function `resolve` of the [mesg-js](https://github.com/mesg-foundation/mesg-js) library.

```javascript
const instanceHash = await mesg.resolve('SID_OF_THE_SERVICE')

const result = await mesg.executeTaskAndWaitResult({
  instanceHash,
  .....
})
```

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
