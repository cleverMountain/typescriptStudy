<template>
  <div class="home">
    <header class="header"></header>
    <div class="content">
      <div class="side">
        <a-menu
          v-model:openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          style="width: 100%; height: 100%"
          mode="inline"
        >
          <a-sub-menu v-for="menu in state.menu" :key="menu.id">
            <template #icon>
              <SettingOutlined />
            </template>
            <template #title>{{ menu.title }}</template>
            <a-menu-item
              v-for="c in menu.children"
              :key="c.id"
              @click="changePage"
              >{{ c.title }}</a-menu-item
            >
          </a-sub-menu>
        </a-menu>
      </div>
      <div class="detail">
        <div class="bar"></div>
        <div class="main"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { $http } from "../../main";

interface IMenu {
  createTime: string;
  hidden: number;
  icon: string;
  level: number;
  name: string;
  parentId: number;
  sort: number;
  title: string;
  id: number;
  path?: string,
  component?: () => {}
  children?: Array<IMenu>;
}
const state = reactive({
  selectedKeys: [] as (number | undefined)[],
  openKeys: [] as number [],
  menu: [] as IMenu[],
});

const fetchMenu = (): void => {
  $http.get("/admin/info").then((res) => {
    if (res.code === 200) {
     const menu:IMenu[] = res.data.menus.map((item: IMenu) => {
        return {
          ...item,
          path: `/${item.name}`,
          component: () => import('../Home/index.vue')
        }
      })
      state.menu = formmatMenu(menu);
      console.log(state.menu)
      state.openKeys = [state.menu[0].id];
      state.selectedKeys = [state.menu[0].children?.[0]?.id]
    }
  });
};
interface IObj {
  [propName: string]: IMenu;
}
const formmatMenu = (data: Array<IMenu>): Array<IMenu> => {
  let newObj: IObj = {};
  data.forEach((item: IMenu) => {
    newObj[item.id] = item;
  });
  return data.reduce<IMenu[]>((pre, cur) => {
    let pid = cur.parentId;
    let parent = newObj[pid];
    if (parent) {
      parent.children ? parent.children.push(cur) : (parent.children = [cur]);
    } else if (pid === 0) {
      pre.push(cur);
    }
    return pre;
  }, []) as IMenu[];
};
const router = useRouter()
const changePage = (): void => {
  router.push('/user')
};
onMounted(() => {
  fetchMenu();
});
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 60px;
  }
  .content {
    width: 100%;
    flex: 1;
    display: flex;
    .side {
      width: 300px;
      height: 100%;
    }
    .detail {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      .bar {
        width: 100%;
        height: 60px;
      }
      .main {
        width: 100%;
        flex: 1;

      }
    }
  }
}
</style>

