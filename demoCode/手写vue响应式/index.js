const targetMap = new WeakMap();

// 响应式函数执行顺序
// effect -> track -> trigger
// track: 收集依赖
// trigger: 触发更新
// effect: 注册副作用函数

let activeEffect = null;
let shouldTrack = false;

function effect(fn) {
    try {
        shouldTrack = true;
        activeEffect = fn;
        fn();
    } finally {
        activeEffect = null;
        shouldTrack = false;
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
        console.log('effect', effect);
        effect();
    }
}

let data = {
    foo: 'bar',
};

effect(() => {
    console.log(data.foo);
    track(data, 'foo');
});

data.foo = 'hello';
trigger(data, 'foo');
