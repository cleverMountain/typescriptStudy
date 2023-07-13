<template>
  <div class="nav-contain" v-for="nav in props.navs" :key="nav.id">
    <div
      class="content"
      :class="curNavId === nav.id ? 'name-active' : ''"
      @click="changeNav(nav)"
    >
      <div class="name">
        {{ nav.name }}
      </div>
      <div
        class="mark"
        v-if="(i = nav.children && nav.children.length > 0 && !nav.expand)"
        @click="expand(nav)"
      >
        +
      </div>
      <div
        class="mark"
        v-if="(i = nav.children && nav.children.length > 0 && nav.expand)"
        @click="expand(nav)"
      >
        -
      </div>
    </div>
    <template v-if="nav.children && nav.children.length > 0 && nav.expand">
      <div class="son-nav">
        <Nav @changeFatherNav="changeFatherNav" :navs="nav.children"></Nav>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Nav from "../Nav/index.vue";
import { ref } from "vue";

const emit = defineEmits(['changeFatherNav'])
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
const curNavId = ref<number>(1);
const expand = (nav: Nav): void => {
  nav.expand = !nav.expand;
};
const changeNav = (nav: Nav): void => {
  curNavId.value = nav.id;
  console.log(curNavId.value)
  emit('changeFatherNav', nav)
};
const changeFatherNav = (nav: Nav):void => {
  console.log(curNavId.value)
  curNavId.value = 100
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
  height: 40px;
  background: #ccc;
  align-items: center;
  // #e6f7ff
  .name {
    // width: 100px;
    margin-left: 20px;
  }
  .mark {
    width: 40px;
  }
}
.son-nav {
  margin-left: 60px;
}
.name-active {
  background: #e6f7ff;
}
</style>
