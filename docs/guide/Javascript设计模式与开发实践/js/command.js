const commander = {
    up() {
        console.log('up');
    },
    down() {
        console.log('down');
    },
    left() {
        console.log('left');
    },
    right() {
        console.log('right');
    }
}
let commandQueue = []
function bindClick(button, command) {
    commandQueue.push(command)
    button.onclick = command
}

function getBit(a, b) {
    return (a >> b) & 1
}
console.log(parseInt(getBit(15, 2)).toString(2));

function unsetBit(a, b) {
    return a & ~(1 << b)
}

function setBit(a, b) {
    return a | (1 << b)
}

function flapBit(a, b) {
    return a ^ (1 << b)
}