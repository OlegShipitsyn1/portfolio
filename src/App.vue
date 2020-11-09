<template>
  <default-template>
    <router-view></router-view>
  </default-template>
</template>

<script>

import DefaultTemplate from './layouts/default.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'App',

  components: {
    DefaultTemplate
  },
};
</script>