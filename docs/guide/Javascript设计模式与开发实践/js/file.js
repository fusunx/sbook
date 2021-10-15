const Folder = function(name) {
    this.name = name;
    this.files = [];
};

Folder.prototype.add = function(file) {
    this.files.push(file);
};

Folder.prototype.scan = function() {
    console.log('开始扫描文件夹：' + this.name);

    for (let i = 0, file, files = this.files; (file = files[i++]); ) {
        file.scan();
    }
};

const File = function(name) {
    this.name = name;
};

File.prototype.scan = function() {
    console.log(`开始扫描文件：${this.name}`);
};

File.prototype.add = function() {
    throw new Error('文件不能添加文件');
};

let folder = new Folder('前端');

let folder1 = new Folder('框架');
let folder2 = new Folder('JavaScript');

let file1 = new File('Html');
let file2 = new File('Css');
let file3 = new File('Vue');

folder1.add(file3);
folder2.add(file1);
folder2.add(file2);

folder.add(folder1);
folder.add(folder2);

folder.scan();
