<template>
  <div class="v3d-tabs">
    <el-tabs
      class="v3d-tabs-content v3d-tabs-content-smooth"
      v-model="activeName"
      type="card"
      closable
      @tab-click="handleClick">
      <el-tab-pane name="first">
        <template #label>
          <div class="v3d-item">
            <el-icon><Monitor /></el-icon>
            <span>首页</span>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <div class="v3d-item">
            <el-icon><Collection /></el-icon>
            <span>看板</span>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <div class="v3d-item">
            <el-icon><Calendar /></el-icon>
            <span>工作台</span>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <div class="v3d-item">
            <el-icon><Box /></el-icon>
            <span>仓库</span>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { Calendar, Monitor, Box, Collection } from '@element-plus/icons-vue'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang="scss">
.v3d-tabs {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  min-height: 50px;
  padding-right: 20px;
  padding-left: 20px;
  user-select: none;
  background: var(--el-color-white);
  border-top: 1px solid #f6f6f6;

  .v3d-tabs-content {
    width: calc(100% - 40px);

    .v3d-item {
      display: inline-block;
      .el-icon {
        margin-right: 3px;
        vertical-align: -2px!important;
        font-size: 16px;
        text-align: center;
      }

    }
  }

  .v3d-tabs-content-smooth {
    height: 38px;

    .el-tabs__header .el-tabs__item.is-active, 
    .el-tabs__header .el-tabs__item.is-active:hover {
      color: var(--el-color-primary)!important;
      background: var(--el-color-primary-light-9)!important;
    }

    .el-tabs__header .el-tabs__item.is-active.is-closable {
      padding: 0 30px 0 30px;
    }

    .el-tabs__header .el-tabs__item.is-active, 
    .el-tabs__header .el-tabs__item.is-active:hover {
      padding: 0 30px 0 30px;
      color: var(--el-color-primary);
      background: var(--el-color-primary-light-9);
      -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
    }

    .el-tabs__header .el-tabs__item {
      height: 38px;
      padding: 0 30px 0 30px;
      margin-top: 5.95px;
      margin-right: -18px;
      line-height: 38px;
      text-align: center;
      border: 0;
      outline: none;
      transition: padding .3s cubic-bezier(.645,.045,.355,1)!important;
    }

    .el-tabs__header .el-tabs__item:hover {
      padding: 0 30px 0 30px;
      color: var(--el-color-black);
      background: #dee1e6;
      -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkBAMAAAAdqzmBAAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMAr3DvEM8wgCBA379gj5//tJBPAAAAnUlEQVRIx2NgAAM27fj/tAO/xBsYkIHyf9qCT8iWMf6nNQhAsk2f5rYheY7Dnua2/U+A28ZEe8v+F9Ax2v7/F4DbxkUH2wzgtvHTwbYPo7aN2jZq26hto7aN2jZq25Cy7Qvctnw62PYNbls9HWz7S8/G6//PsI6H4396gAUQy1je08W2jxDbpv6nD4gB2uWp+J9eYPsEhv/0BPS1DQBvoBLVZ3BppgAAAABJRU5ErkJggg==);
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
    }

    .el-tabs__header .el-tabs__item.is-closable:hover {
      padding: 0 30px 0 30px;
    }

    .el-tabs__header .el-tabs__item:hover {
      color: var(--el-color-black)!important;
    }

    .el-tabs__header .el-tabs__nav {
      border: 0;
    }

    .el-tabs__header {
      border-bottom: 0;
    }
  }
}
</style>
