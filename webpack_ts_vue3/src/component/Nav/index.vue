<template>
  <div class="nav-contain" v-for="nav in props.navs" :key="nav.id">
    <div class="content">
      <p class="name">{{ nav.name }}</p>
      <p v-if="(i = nav.children && nav.children.length > 0 && !nav.expand)" @click="expand(nav)">+</p>
      <p v-if="(i = nav.children && nav.children.length > 0 && nav.expand)" @click="expand(nav)">-</p>
    </div>
    <template v-if="nav.children && nav.children.length > 0 && nav.expand">
      <Nav :navs="nav.children"></Nav>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Nav from "../Nav/index.vue";

interface Nav {
  name: string;
  id: number;
  path: string;
  expand?: Boolean;
  children?: Nav[];
}
const props = defineProps({
  navs: {
    type: Array,
    default: [],
  },
});
const expand = (nav: Nav):void => {
  nav.expand = !nav.expand
}
</script>

<style lang="less" scoped>
.nav-contain {
  width: 100%;
  // height: 100%;
}
.content {
  width: 100%;
  display: flex;
  .name {
 
    width: 100px;
  }
}
</style>
