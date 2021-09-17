# Vue3 项目架构

## Monorepo 

Monorepo 是管理项目代码的一个方式，指在一个仓库(repo)中管理多个模块/包(package)

优点：
- 一个仓库可维护多个模块，不用到处找仓库
- 方便版本管理和依赖管理，模块之间的引用，调用都非常方便

缺点：仓库体积会变大

## 项目结构

```js
.
├── compiler-core       // 与平台无关的编译器核心
├── compiler-dom        // 针对浏览器的编译模块
├── compiler-sfc        // 针对单文件解析
├── compiler-ssr        // 针对服务端渲染的编译模块
├── global.d.ts         
├── reactivity          // 响应式系统
├── ref-transform       
├── runtime-core        //与平台无关的运行时核心（可以创建针对特定平台的运行时-自定义渲染器）
├── runtime-dom         // 针对浏览器的运行时，包括 DOM API，属性，事件等
├── runtime-test        // 运行时测试
├── server-renderer     // 用于服务端渲染
├── sfc-playground      // 在线渲染网站:https://sfc.vuejs.org/
├── shared              // 共享内容
├── size-check          // 测试代码体积
├── template-explorer   // 在线编译网站:https://vue-next-template-explorer.netlify.app/
├── vue                 // 完整版本，包括运行时和编译器
└── vue-compat          // 迁移构建版，用于兼容 Vue2 行为
```