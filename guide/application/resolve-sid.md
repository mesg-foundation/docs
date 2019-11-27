# Resolve Service

Instead of hard-coding `runnerHash` in your application's env, your application can resolve dynamically using the service's SID.

```javascript
const runnerHash = await mesg.resolveRunner('SID_OF_THE_SERVICE')

const result = await mesg.executeTaskAndWaitResult({
  executorHash: runnerHash,
  .....
})
```

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
