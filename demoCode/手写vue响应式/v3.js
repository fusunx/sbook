const targetMap = new WeakMap();

// 响应式函数执行顺序
// effect -> track -> trigger
// track: 收集依赖
// trigger: 触发更新
// effect: 注册副作用函数
// effectStack: 副作用函数栈，解决递归调用

/**
 * 通过以上几个函数和变量，我们已经实现了一个简易的双向绑定。
 * 现在还有一个情况是我们没有考虑到的。
 *  <div v-if="state.showMsg">
        {{ state.msg }}
    </div>
    <div v-else>
        {{ Math.random()}}
    </div>
    <button @click="toggle">Toggle Msg</button>
    <button @click="switchView">Switch View</button>

    在 vue 中模板双向绑定是
 */

const effectStack = [];

let activeEffect = null;
let shouldTrack = false;

function effect(fn) {
    if (!effectStack.includes(fn)) {
        try {
            shouldTrack = true;
            activeEffect = fn;
            effectStack.push(fn);
            fn();
        } finally {
            activeEffect = null;
            shouldTrack = false;
            effectStack.pop();
            activeEffect = effectStack.length === 0 ? null : effectStack[effectStack.length - 1];
        }
    }
}

function track(target, key) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()));
    }
    if (shouldTrack) {
        dep.add(activeEffect);
    }
}

function trigger(target, key) {
    let depsMap = targetMap.get(target);
    let dep = depsMap.get(key);

    for (const effect of dep) {
        effect();
    }
}

let data = {
    foo: 'bar',
    count: 1,
};

effect(() => {
    console.log('foo', data.foo);
    track(data, 'foo');

    effect(() => {
        console.log('count', data.count);
        track(data, 'count');
    });
});

data.foo = 'hello';
data.count = 0;
trigger(data, 'foo');
