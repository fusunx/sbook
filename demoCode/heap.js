class MaxHeap {
    heap = [];
    constructor() {}

    getParent(i) {
        return i - 1 >= 0 ? (i - 1) >> 1 : 0;
    }

    getLeftChild(i) {
        return i * 2 + 1;
    }

    getRightChild(i) {
        return i * 2 + 2;
    }

    add(val) {
        this.heap.push(val);
        let curIndex = this.heap.length - 1;
        let parentIndex = this.getParent(curIndex);
        while (this.heap[curIndex] > this.heap[parentIndex]) {
            swap(this.heap, curIndex, parentIndex);
            curIndex = parentIndex;
            parentIndex = this.getParent(curIndex);
        }
    }

    poll() {
        swap(this.heap, this.heap.length - 1, 0);
        const res = this.heap.pop();
        let leftChild = this.getLeftChild(0);
        let rightChild = this.getRightChild(0);
        let childIndex = this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
        let child = this.heap[childIndex];
        let curIndex = 0;
        while (this.heap[curIndex] < child) {
            swap(this.heap, curIndex, childIndex);
            curIndex = childIndex;
            leftChild = this.getLeftChild(curIndex);
            rightChild = this.getRightChild(curIndex);
            childIndex = this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
            child = this.heap[childIndex];
        }

        return res;
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const heap = new MaxHeap();
heap.add(1);
heap.add(3);
heap.add(4);
heap.add(9);
heap.add(2);
heap.add(20);
heap.add(19);

console.log(heap.heap);
console.log(heap.poll());
console.log(heap.heap);
