// var Singleton = function (name) {
//     this.name = name
// }

// Singleton.prototype.getName = function () {
//     return this.name
// }

// Singleton.getInstance = (function () {
//     var instance = null
//     return function (name) {
//         if (!instance) {
//             instance = new Singleton(name)
//         }
//         return instance
//     }
// })

// var Singleton = (function () {
//     var instance = null
//     var Singleton = function (name) {
//         if (instance) {
//             return instance
//         }
//         this.name = name
//         return instance = this
//     }
//     return Singleton
// })()

// var Singleton = function (name) {
//     this.name = name
// }

// var ProxySingleton = (function () {
//     var instance = null
//     return function (name) {
//         if (!instance) {
//             instance = new Singleton(name)
//         }
//         return instance
//     }
// })()
// var a = new ProxySingleton('instance1');
// var b = new ProxySingleton('instance2');

// console.log(a === b); // true

class Demo {
    foo = 1;
    constructor(bar) {
        this.bar = bar;
    }
}
const int = new Demo('aaa');
Object.assign(int, { foo: 2 });
console.log(int);
