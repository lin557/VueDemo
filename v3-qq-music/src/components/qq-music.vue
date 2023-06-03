<script setup lang="ts">
import { computed } from 'vue'

const bgStyle = computed(() => {
  return 'background-image: url(' + props.poster + ');'
})

const bgColor = computed(() => {
  return 'background-color: ' + props.color + ';'
})

const props = defineProps<{ poster: string, color: string }>()

</script>

<template>
  <div class="player" :style="bgColor">
    <h1 class="player-logo">QQ音乐</h1>
    <div class="player-bg-mask"></div>
    <div class="player-bg" :style="bgStyle"></div>
  </div>
</template>

<style scoped>
.player {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.player-logo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 3;
}
.player-bg-mask {
  background-color: rgba(0,0,0,.35);
  z-index: 2;
}

.player-bg, .player-bg-mask {
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  position: absolute;
}

.player-bg {
  display: block;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  filter: blur(65px);
  opacity: .6;
  transform: translateZ(0);
}
</style>
