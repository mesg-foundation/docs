<template>
  <section>
    <p v-html="fromMD(api.description)"></p>
    <div v-for="method in api.methods" :key="method.name">
      <h2>{{method.name}}</h2>
      <p v-html="fromMD(method.description)"></p>
      <v-tabs>
        <v-tab title="Request">
          <h4>{{method.requestType}}</h4>
          <p v-html="fromMD(types[method.requestFullType].description)"></p>
          <v-param-table :parameter="types[method.requestFullType]" :types="types" />
        </v-tab>
        <v-tab title="Reply">
          <h4>{{method.replyType}}</h4>
          <p v-html="fromMD(types[method.responseFullType].description)"></p>
          <v-param-table :parameter="types[method.responseFullType]" :types="types" />
        </v-tab>
      </v-tabs>
    </div>
  </section>
</template>

<script>
import VTabs from "./tabs";
import VTab from "./tab";
import VParamTable from "./param-table";
const md = new require("markdown-it")();
export default {
  components: {
    VTabs,
    VTab,
    VParamTable
  },
  props: {
    apifiles: {
      type: Object,
      required: true
    },
    typefiles: {
      type: Object,
      required: true
    }
  },
  computed: {
    api() {
      return this.apifiles.files[0].services[0];
    },
    types() {
      return {
        ...this.apifiles.files[0].messages.reduce(
          (prev, x) => ({ ...prev, [x.fullName]: x }),
          {}
        ),
        ...this.apifiles.files[0].enums.reduce(
          (prev, x) => ({ ...prev, [x.fullName]: x }),
          {}
        ),
        ...this.typefiles.files[0].messages.reduce(
          (prev, x) => ({ ...prev, [x.fullName]: x }),
          {}
        ),
        ...this.typefiles.files[0].enums.reduce(
          (prev, x) => ({ ...prev, [x.fullName]: x }),
          {}
        )
      };
    }
  },
  methods: {
    fromMD(text) {
      return md.render(text);
    }
  }
};
</script>
