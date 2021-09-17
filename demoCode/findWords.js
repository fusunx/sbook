var findWords = function(board, words) {
    const m = board.length;
    const n = board[0].length;
    const maxLen = words.reduce((a, b) => {
        a = typeof a === 'string' ? a.length : a;
        return Math.max(a, b.length);
    });
    console.log(m, n, maxLen);

    const trie = new Trie(m, n, board);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            trie.insert(i, j, maxLen);
        }
    }
    console.log(trie.root);
    return words.filter((word) => {
        return trie.find(word);
    });
};
class Trie {
    root = {};
    set = [];
    constructor(m, n, board) {
        this.m = m;
        this.n = n;
        this.board = board;
        this.set = new Array(m * n).fill(false);
    }

    insert(i, j, dep, node = this.root) {
        if (dep === 0) return;
        if (i < 0 || j < 0 || i >= this.n || j >= this.m) return;
        const idx = i * this.m + j;
        const c = this.board[j][i];
        if (this.set[idx]) return;
        this.set[idx] = true;
        node = node[c] = node[c] || {};
        this.insert(i + 1, j, dep - 1, node);
        this.insert(i - 1, j, dep - 1, node);
        this.insert(i, j + 1, dep - 1, node);
        this.insert(i, j - 1, dep - 1, node);
        this.set[idx] = false;
    }

    find(w) {
        let node = this.root;
        for (let c of w) {
            console.log('====', c, node[c], w);
            if (!node[c]) return false;
            node = node[c];
        }
        return true;
    }
}
let res = findWords([['a', 'b']], ['ba']);
console.log(res);
