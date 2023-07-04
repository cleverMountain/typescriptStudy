<template>
  <div>dsa</div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

const year = ref<number>(1)
// console.log(year.value)
let a: string = '1'
// console.log(a)
// let b: number = 1

interface Book {
  name: string,
  age: number,
  get(): number
}
const book: Book[] = reactive([
  {
    name: 'book1',
    age: 20,
    get() {
      return 1
    }
  }
])
const res = computed<number>(() => {
  return 1
})
</script>