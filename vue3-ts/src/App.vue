<template>
  <div></div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface Onav {
  name: string,
  id: number
}
let a: string = '1'
console.log(a)
const nav = reactive([
  {
    name: '商品,',
    id: '231'
  },
  {
    name: '账单',
    id: 2
  },
  {
    name: '购物车',
    id: 3
  }
]);
</script>


<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
