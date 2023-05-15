<script setup lang="ts">
import V3Tabs from './components/v3-tabs.vue'

</script>

<template>
  <div class="demo">
    <div class="btn">
      <el-button>我是 ElButton</el-button>
    </div>
    <div class="tabs">
      <v3-tabs />
    </div>
  </div>
</template>

<style lang="scss">
.demo {
  .btn {
    margin: 20px;
  }
  .tabs {
    border: 1px solid var(--el-color-primary);
    margin: 20px;
    width: 100%;
  }
}
</style>