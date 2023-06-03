<script setup lang="ts">
import { ref } from 'vue' 
import QqMusic from './components/qq-music.vue'
import bg01 from './assets/bg01.webp'
import bg02 from './assets/bg02.webp'
import bg03 from './assets/bg03.webp'

const imgUrl = ref('')

const bgColor = ref('rgb(167, 137, 113)')

imgUrl.value = bg01
</script>

<template>
  <div class="test">
    <button @click="imgUrl=bg01;bgColor='rgb(70, 88, 94)'">bg01</button>
    <button @click="imgUrl=bg02;bgColor='rgb(167, 137, 113)'">bg02</button>
    <button @click="imgUrl=bg03;bgColor='rgb(196, 196, 142)'">bg03</button>
  </div>

  <QqMusic :poster='imgUrl' :color="bgColor" />
</template>

<style>
.test {
  position: absolute;
  width: 100%;
  margin-top: 20px;
  z-index: 100;
}

.test > button {
  opacity: .8;
  border-color: hsla(0,0%,100%,.2);
  background-color: transparent;
  color: #fff;
  min-width: 122px;
  text-align: center;

  border-radius: 2px;
  font-size: 14px;
  margin-right: 6px;
  padding: 0 23px;
  height: 38px;
  line-height: 38px;
  display: inline-block;
  white-space: nowrap;
  box-sizing: border-box;
  overflow: hidden;
}

.test > button:hover {
  opacity: 1;
  filter: none;
  border-color: #fff;
}
</style>
