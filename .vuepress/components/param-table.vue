<template>
  <table class="with-description">
    <tr v-if="!noHeaders">
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr v-for="field in parameter.fields" :key="field.name">
      <td>
        <em>{{field.name}}</em>
      </td>
      <td
        colspan="2"
        v-if="types[field.fullType] && field.fullType !== parameter.fullName"
        style="padding: 0"
      >
        <div style="padding: .75em .5em" v-if="field.label === 'repeated'">
          <strong>Type: Array</strong>
        </div>
        <table v-if="types[field.fullType].values" style="margin: 0px; border: none;">
          <tr v-for="(value, i) in types[field.fullType].values">
            <td>{{value.name}}</td>
            <td>{{value.number}}</td>
            <td v-html="value.description"></td>
          </tr>
        </table>
        <template v-else>
          <p v-if="field.description" v-html="field.description"></p>
          <param-table
            :parameter="types[field.fullType]"
            :types="types"
            style="margin: -1px;"
          />
        </template>
      </td>
      <template v-else>
        <td>
          <strong
            v-if="field.label === 'repeated'"
          >{{field.fullType === parameter.fullName ? "self" : field.fullType}}[]</strong>
          <strong v-else>{{field.fullType === parameter.fullName ? "self" : field.fullType}}</strong>
        </td>
        <td v-html="field.description" />
      </template>
    </tr>
  </table>
</template>

<script>
const md = new require("markdown-it")();
export default {
  name: "param-table",
  props: {
    parameter: {
      type: Object,
      required: true
    },
    types: {
      type: Object,
      required: true
    },
    "no-headers": {
      type: Boolean,
      default: false
    }
  },
  methods: {
    fromMD(text) {
      return md.render(text);
    }
  }
};
</script>

<style scopped>
table.with-description tr td:nth-child(3) {
  min-width: 300px;
}
td {
  vertical-align: top;
}
p {
  margin: .4em 1em;
}
</style>
