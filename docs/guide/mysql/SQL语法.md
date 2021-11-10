### SQL 书写规则

1. SQL 语句要以分号 ; 结尾
2. SQL 语句不区分大小写
3. 常用书写方式是固定的

    在 SQL 语句中直接书写的字符串、日期或者数字等称为常数。常数的书写方式如下所示：

    - SQL 语句中含有字符串的时候，需要像 'abc' 这样，使用英文单引号将字符串括起来，用来标识这是一个字符串。
    - SQL 语句中含有日期的时候，同样需要使用英文单引号将其括起来。日期的格式有很多种（'26 Jan 2010' 或者 '10/01/26' 等），统一使用 '2020-01-26' 这种 '年-月-日' 的格式
    - 在 SQL 语句种书写数字的时候，不需要使用任何符号标识，直接写 100 这样的数字即可。

4. 单词需要用半角空格（英文空格）或者换行来分隔

### MySQL 查看或显示数据库

```shell
SHOW DATABASES [LIKE '数据库名'];
```

说明：

-   LIKE 从句是可选项，用于匹配指定的数据库名称。LIKE 从句可以部分匹配，也可以完全匹配。
-   数据库名由单引号包围。

### MySQL 创建数据库

```shell
CREATE DATABASE [IF NOT EXISTS] <数据库名>
[[DEFAULT] CHARACTER SET <字符集名>]
[[DEFAULT] COLLATE <校对规则名>];
```

[] 中的内容是可选的。说明：

-   <数据库名>：创建数据库的名称。MySQL 的数据存储区将以目录方式表示 MySQL 数据库，因此数据库名称必须符合操作系统的文件夹命名规则，不能以数字开头，尽量要有实际意义。注意在 MySQL 中不区分大小写。
-   IF NOT EXISTS：在创建数据库之前进行判断，只有该数据库目前不存在时才能执行操作。此选项可以用来避免数据库已经存在而重复创建的错误。
-   [DEFAULT] CHARACTER SET：指定数据库的字符集。指定字符集的母的是为了避免在数据库中存储的数据出现乱码的情况。如果创建数据库时不指定字符集，那么就使用系统默认字符集。
-   [DEFAULT] COLLATE：指定字符集的默认校对规则。

tips：MySQL 的字符集（CHARACTER）和校对规则（COLLATE）是两个不同的概念。字符集是用来定义 MySQL 存储字符串的方式，校对规则定义了比较字符串的方式。

示例：

```shell
CREATE DATABASE [IF NOT EXISTS] test_db_user
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_chinese_ci;
```

### MySQL 修改数据库：ALTER DATABASE 用法

```shell
ALTER DATABASE [数据库名] {
    [DEFAULT] CHARACTER SET <字符集名> |
    [DEFAULT] COLLATE <校对规则名>
}
```

说明：

-   ALTER DATABASE 用于更改数据库的全局特性
-   使用 ALTER DATABASE 需要获得数据库 ALTER 权限
-   数据库名称可以忽略，此时语句对应于默认数据库
-   CHARACTER SET 子句用于更改默认的数据库字符集

### MySQL 删除数据库：DROP DATABASE 用法

```shell
DROP DATABASE [IF EXISTS] <数据库名>
```

说明：

-   数据库名：指定要删除的数据库名
-   IF EXISTS：用于防止当数据库不存在时发生错误
-   DROP DATABASE：删除数据库中所有表格并同时删除数据库。

注意：MySQL 安装后，系统会自动创建名为 information_schema 和 mysql 的两个系统数据库，系统数据库存放一些和数据库相关的信息，如果删除了这两个数据库，MySQL 将不能正常工作。

### MySQL 选择数据库

```shell
USE <数据库名>
```

### MySQL 注释

单行注释

```shell
# 注释内容
-- 注释内容
```

多行注释

```shell
/*
  第一行注释内容
  第二行注释内容
*/
```
