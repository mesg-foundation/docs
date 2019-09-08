<template>
  <param-table :parameter="types['types.Process']" :types="types" />
</template>

<script>
export default {
  computed: {
    types() {
      return {
        "types.Process": {
          fields: [
            {
              name: "key",
              description: "Key to identify your process",
              fullType: "string"
            },
            {
              name: "trigger",
              description: "Trigger of the process",
              fullType: "types.Trigger"
            },
            {
              name: "tasks",
              label: "repeated",
              description: "Tasks for the process to execute",
              fullType: "types.Task"
            }
          ]
        },
        "types.Trigger": {
          fields: [
            {
              name: "key",
              description: "Key to reference your trigger",
              fullType: "string"
            },
            {
              name: "instanceHash",
              description: "Hash of the instance you want to listen",
              fullType: "hash"
            },
            {
              name: "instance",
              description: "Instance you want to deploy and listen",
              fullType: "types.Instance"
            },
            {
              name: "eventKey",
              description: "Key of the event you want to listen",
              fullType: "string"
            },
            {
              name: "taskKey",
              description: "Key of the result you want to listen",
              fullType: "string"
            }
          ]
        },
        "types.Task": {
          fields: [
            {
              name: "key",
              description: "Key to identify the task",
              fullType: "string"
            },
            {
              name: "instanceHash",
              description: "Hash of the instance you want to use",
              fullType: "hash"
            },
            {
              name: "instance",
              description: "Instance you want to deploy and use",
              fullType: "types.Instance"
            },
            {
              name: "taskKey",
              description: "Key of the task you want to use",
              fullType: "string"
            },
            {
              name: "filter",
              description: "Filter you want to apply before the execution",
              fullType: "map<key, value>"
            },
            {
              name: "inputs",
              description: "Input mapping you want to use for the task",
              fullType: "map<key, Reference>"
            }
          ]
        },
        "types.Instance": {
          fields: [
            {
              name: "src",
              description: "Path of the service you need to deploy",
              fullType: "string"
            },
            {
              name: "service",
              description: "Service hash or sid that you want to use",
              fullType: "string"
            },
            {
              name: "env",
              description:
                "List of environments to set when start the instance",
              label: "repeated",
              fullType: "string"
            }
          ]
        }
      };
    }
  }
};
</script>