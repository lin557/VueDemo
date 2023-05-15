# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.





## 初始化项目

创建项目

```
npm create vite@latest
```

项目参数
```
D:\github\lin557\vue-demo>npm create vite@latest
√ Project name: ... v3-ep-tabs
√ Select a framework: » Vue
√ Select a variant: » TypeScript

Scaffolding project in D:\github\lin557\vue-demo\v3-ep-tabs...

Done. Now run:

  cd v3-ep-tabs
  npm install
  npm run dev
```

安装 `element-plus`

```
npm i element-plus
```

按需导入(自动导入推荐)

```
npm install -D unplugin-vue-components unplugin-auto-import
```

vite配置 `vite.config.ts`

```
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

css

```
npm i -D sass 
```



VSCode 错误提示

`vite.config.ts`

```
找不到模块“vite”。你的意思是要将 "moduleResolution" 选项设置为 "node"，还是要将别名添加到 "paths" 选项中?ts(2792)
```

解决方案 `tsconfig.node.json`

```
"moduleResolution": "bundler",
改为
"moduleResolution": "node",
```



`main.ts`

```
找不到模块“vue”。你的意思是要将 "moduleResolution" 选项设置为 "node"，还是要将别名添加到 "paths" 选项中?ts(2792)
```

解决方案`tsconfig.json`

```
"moduleResolution": "bundler",
改为
"moduleResolution": "node",
```

```
找不到模块“./App.vue”或其相应的类型声明。ts(2307)
```

到`srs`目录下，增加文件`env.d.ts`

```
/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```



`tsconfig.json`

```
未知的编译器选项“allowImportingTsExtensions”。ts
```

解决方案，注释掉
```
//"allowImportingTsExtensions": true,
```

