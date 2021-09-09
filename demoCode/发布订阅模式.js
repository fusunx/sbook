let clientList = {};

function myAddEventListener(key, fn) {
    if (clientList[key]) {
        clientList[key].push(fn);
    } else {
        clientList[key] = [fn];
    }

    return function unsubscribe() {
        const index = clientList[key].indexOf(fn);
        clientList[key].splice(index, 1);
    };
}

function myEventTrigger(key) {
    if (!clientList[key]) {
        // key 不存在
        return;
    }

    clientList[key].forEach((fn) => {
        fn();
    });
}

// 测试

const unsubscribe1 = myAddEventListener('click', () => {
    console.log(1);
});
const unsubscribe2 = myAddEventListener('click', () => {
    console.log(2);
});
const unsubscribe3 = myAddEventListener('click', () => {
    console.log(3);
});
unsubscribe2();
myEventTrigger('click'); // 1, 2

console.log(parseInt(30).toString(2));
