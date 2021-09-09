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