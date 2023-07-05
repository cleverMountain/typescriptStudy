<template>
  <div class="container">
    <div class="navs">
      <div
        class="nav"
        v-for="nav in navs"
        :key="nav.id"
        :class="curNav === nav.id ? 'active-nav' : ''"
        @click="
          curNav = nav.id;
          curNavName = nav.name;
        "
      >
        {{ nav.name }}
      </div>
    </div>
    <div class="content">
      <div class="header">{{ curNavName }}</div>
      <div class="body"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";

interface Nav {
  name: string;
  id: number;
}
const navs: Nav[] = reactive([
  {
    name: "商品",
    id: 1,
  },
  {
    name: "购物车",
    id: 2,
  },
  {
    name: "我的",
    id: 3,
  },
]);
const curNav = ref<number>(1);
const curNavName = ref<string>("商品");
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  .navs {
    width: 200px;
    height: 100%;
    background: #ccc;
    .nav {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
    }
    & .nav:hover {
      background: #ffff0060;
    }
    & .active-nav {
      background: #ffff00;
    }
  }
  .content {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      width: 100%;
      height: 80px;
      background: blueviolet;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 24px;
      color: aquamarine;

      padding-right: 20px;
      box-sizing: border-box;
    }
    .body {
      width: 100%;
      flex: 1;
    }
  }
}
</style>