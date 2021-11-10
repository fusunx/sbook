### 表的操作

#### 创建表

```shell
CREATE TABLE <表名> ([表定义选项])[表选项][分区选项];
# 表定义选项格式为：
<列名> <类型1> [,...] <列明n><类型n>
```

说明：

-   CREATE TABLE:用于创建给定名称的表，必须拥有表 CREATE 的权限。
-   <表名>：指定要创建表的名称，在 CREATE TABLE 之后给出，必须符合标识符命名规则。表名称被指定为 db_name.tbl_name，以便在特定的数据库中创建表。无论是否有当前数据库，都可以通过这种方式创建。在当前数据库中创建表时，可以省略 db-name。如果使用加引号的识别名，则应对数据库和表名称分别加引号。例如，'mydb'.'mytbl' 是合法的，但 'mydb.mytbl' 不合法。
-   <表定义选项>：表创建定义，由列名（col_name）、列的定义（column_definition）以及可能的空值说明、完整性约束或表索引组成。
-   默认的情况是，表被创建到当前的数据库中。若表已存在、没有当前数据库或者数据库不存在，则会出现错误。

    tips：使用 CREATE TABLE 创建表时，必须指定以下信息：

    -   要创建的表的名称不区分大小写，不能使用 SQL 语言中的关键字，如 DROP、ALTER、INSERT 等。
    -   数据表中每个列（字段）的名称和数据类型，如果创建多个列，要用逗号隔开。

实例：

```shell
CREATE TABLE tb_tml
(
    id INT(11),
    name VARCHAR(25),
    deptld INT(11),
    salary FLOAT
);
```

| 字段名称 | 数据类型    | 备注         |
| -------- | ----------- | ------------ |
| id       | INT(ll)     | 员工编号     |
| name     | VARCHAR(25) | 员工名称     |
| deptld   | INT(ll)     | 所在部门编号 |
|          |
| salary   | FLOAT       | 工资         |
|          |

#### 修改数据表

```shell
ALTER TABLE <表名> [修改选项];
# 修改选项的语法格式：
{
    ADD COLUMN <列名> <类型> |
    CHANGE COLUMN <旧列名> <新列名> <新列类型> |
    ALTER COLUMN <列名> {SET DEFAULT <默认值> | DROP DEFAULT} |
    MODIFY COLUMN <列名> <类型> |
    DROP COLUMN <列名> |
    RENAME TO <新表名> |
    CHARACTER SET <字符集名> |
    COLLATE <校对规则名>
}
```

#### 修改表名

```shell
ALTER TABLE <旧表名> RENAME [TO] <新表名>; # TO 为可选参数，使用与否不影响结果。
# 实例：
ALTER TABLE student RENAME TO tb_students_info;
```

#### 修改表字符集

```shell
ALTER TABLE 表名 [DEFAULT] CHARACTER SET <字符集名> [DEFAULT] COLLATE <校对规则名>; # DEFAULT 为可选参数，使用与否均不影响结果。
# 实例：
ALTER TABLE tb_students_info CHARACTER SET gb2312  DEFAULT COLLATE gb2312_chinese_ci;
```

#### 修改字段名称

```shell
ALTER TABLE <表名> CHANGE <旧字段名> <新字段名> <新数据类型> ;
# 实例：
ALTER TABLE tb_emp1 CHANGE col1 col3 CHAR(30);
```

其中：

-   旧字段名：指修改前的字段名
-   新字段名：指修改后的字段名
-   新数据类型：指修改后的数据类型，如果不需要修改字段的数据类型，可以将新数据类型设置成与原来一样，但数据类型不能为空。

#### 修改字段数据类型

```shell
ALTER TABLE <表名> MODIFY <字段名> <数据类型> ;
# 实例：
ALTER TABLE tb_emp1 MODIFY name VARCHAR(30);
```

其中：

-   表名：指要修改数据类型的字段所在表的名称；
-   字段名：指需要修改的字段；
-   数据类型：指修改后字段的新数据类型。

#### 删除字段

```shell
ALTER TABLE <表名> DROP <字段名>；
# 实例：
ALTER TABLE tb_emp1 MODIFY DROP col2;
```

#### 删除数据表

```shell
DROP TABLE [IF EXISTS] 表名1 [ ,表名2, 表名3 ...]
# 实例：
DROP TABLE tb_emp3;
```

其中：

-   表名 1, 表名 2, 表名 3 ...表示要被删除的数据表的名称。DROP TABLE 可以同时删除多个表，只要将表名依次写在后面，相互之间用逗号隔开即可。
-   IF EXISTS 用于在删除数据表之前判断该表是否存在。如果不加 IF EXISTS，当数据表不存在时 MySQL 将提示错误，中断 SQL 语句的执行；加上 IF EXISTS 后，当数据表不存在时 SQL 语句可以顺利执行，但是会发出警告（warning）。
