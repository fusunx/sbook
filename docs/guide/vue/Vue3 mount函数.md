# Vue3 Mount

在 Vue3 中，执行 createApp 函数返回一个 app 实例也是整个应用的上下文，会执行 app 实例的 mount 函数，进行挂载。 app 实例中的 mount 函数是被 createApp 函数重写过的。

这个重写干了以下几件事。

1. 根据传入参数获取容器
2. 获取跟组件
3. 清空容器
4. 执行 mount 函数
5. 对 Element 容器进行处理
6. 返回组件代理

```ts
const container = normalizeContainer(containerOrSelector);
if (!container) return;

const component = app._component;

// clear content before mounting
container.innerHTML = '';
const proxy = mount(container, false, container instanceof SVGElement);
if (container instanceof Element) {
    container.removeAttribute('v-cloak');
    container.setAttribute('data-v-app', '');
}
return proxy;
```

下面看一下 mount 函数的实现。

mount 函数接收三个参数。

-   rootContainer: 根容器
-   isHydrate: 是否进行服务端渲染配置
-   isSvg: 是否为 svg

mount 函数的第一步，就是生成 vnode。

具体的 vnode 构成可以先跳过，下面一步条件判断，服务端渲染也先跳过，直接看调用 render 函数，render 函数在 runtime-core 目录下的 renderer.ts 中的 baseCreateRenderer 函数中定义。

```ts
const render: RootRenderFunction = (vnode, container, isSVG) => {
    if (vnode == null) {
        if (container._vnode) {
            unmount(container._vnode, null, null, true);
        }
    } else {
        patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
};
```

首先，render 函数对 vnode 做了空值判断，如果为 null 直接执行 unmount 函数。否则执行 patch 函数。然后再执行更新函数，最后将 vnode 赋值给 container 缓存。
