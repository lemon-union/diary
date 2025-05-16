---
title: “解决密码”
author: 柠檬雪宝
date: 2025-01-12
category: Information
layout: post
---

您是否被那个小小的pentest所困？是否解决了呢？

当然，我想，既然您已经看到了这个页面，大概就已经解决了吧？但这里依旧提供我所设计的5种解决方案，仅供参考：

<div style="text-align: center; border: 1px solid #ff0000;">
    <em>警告：</em>本页面仅供渗透测试的学习参考，是最基础的内容，请勿用于非法用途
</div>

## John法（暴力破解）
### 原理
利用哈希值 `686f746a95b6f836d7d70567c302c3f9ebb5ee0def3d1220ee9d4e9f34f5e131` 进行逆向破解

### 操作步骤

1. 使用工具如 `John the Ripper` ，加载该哈希值
2. 通过字典攻击（如常用密码列表）或暴力破解尝试生成相同哈希的明文密码
3. 一旦找到匹配的明文密码，输入即可通过验证

## `display: none` 法
### 原理
密码验证通过后，遮挡主页面内容通过 `style.display = 'none'` 隐藏。可手动修改DOM绕过验证

### 操作步骤
1. 打开浏览器开发者工具（F12）
2. 找到密码模态框元素（如 `id="passwordModal"`）
3. 在控制台执行：
   ```javascript
   document.getElementById('passwordModal').style.display = 'none';
   ```
   或直接右键元素选择“Edit as HTML”删除模态框代码

直接隐藏密码框，显示内容

## 禁用 JS 法
### 原理
密码逻辑完全依赖前端JS，禁用JS可跳过验证流程

### 操作步骤
- **浏览器扩展**：使用插件（如 NoScript）禁用所有JS
- **开发者工具**：在Network面板勾选“Disable JavaScript”
- **命令行工具**：用 `curl` 或 `wget` 直接抓取HTML源码查看

密码框不会被动态创建，内容直接显示

## 修改 localStorage 法
### 原理
验证通过后，JS通过 `localStorage.setItem('passwordVerified', 'true')` 标记状态。可伪造该状态

### 操作步骤
1. 打开浏览器控制台（F12 → Console）
2. 输入以下代码并回车：
   ```javascript
   localStorage.setItem('passwordVerified', 'true');
   ```
3. 刷新页面，密码框自动消失
   
绕过密码验证，直接访问内容，甚至一劳永逸

---

## 5. **GitHub 关键词（域名）搜索法**
### 原理
GitHub Pages 托管的东西，当然可以去 GitHub 搜索

### 操作步骤
1. 在 GitHub 搜索栏输入关键词：
   - 哈希值 `686f746a95b6f836d7d70567c302c3f9ebb5ee0def3d1220ee9d4e9f34f5e131`
   - 域名
   - ……
2. 直接阅读 GitHub 渲染的 Markdown 文件