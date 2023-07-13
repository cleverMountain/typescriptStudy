<template>
  <div class="container">
    <div class="navs">
      <!-- <div
        class="nav"
        v-for="nav in navs"
        :key="nav.id"
        :class="curNav === nav.id ? 'active-nav' : ''"
        @click="changeRouter(nav)"
      >
        {{ nav.name }}
      </div> -->
      <Nav :navs="navs"></Nav>
    </div>
    <div class="content">
      <div class="header">{{ curNavName }}</div>
      <div class="body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import Nav from "../../component/Nav/index.vue";
import { useRouter } from "vue-router";

interface Nav {
  name: string;
  id: number;
  path: string;
  expand?: Boolean;
  children?: Nav[];
}
const router = useRouter();
const navs: Nav[] = reactive([
  {
    name: "商品",
    id: 1,
    path: "/shopping",
    expand: true,
    children: [
      {
        name: "商品1",
        id: 4,
        path: "/shopping/shopping1",
        expand: false
      },
    ],
  },
  {
    name: "购物车",
    id: 2,
    path: "/cart",
  },
  {
    name: "我的",
    id: 3,
    path: "/mine",
  },
]);
const curNav = ref<number>(1);
const curNavName = ref<string>("商品");
const curPage = ref<Nav>(navs[0]);
const changeRouter = (nav: Nav): void => {
  localStorage.setItem("curPage", JSON.stringify(nav));
  const { name, id, path } = nav;
  curPage.value = nav;
  curNav.value = id;
  curNavName.value = name;
  router.push(path);
};
const firstUoload = () => {
  const cur: string | null = localStorage.getItem("curPage");
  if (cur) {
    curPage.value = JSON.parse(cur);
  }
  changeRouter(curPage.value);
};
onMounted(() => {
  firstUoload();
});
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