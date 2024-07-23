import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.ff4c43a7.js";const h=JSON.parse('{"title":"DDL相关语句","description":"","frontmatter":{},"headers":[],"relativePath":"SQL/DDL.md","filePath":"SQL/DDL.md"}'),p={name:"SQL/DDL.md"},e=l(`<h1 id="ddl相关语句" tabindex="-1">DDL相关语句 <a class="header-anchor" href="#ddl相关语句" aria-label="Permalink to &quot;DDL相关语句&quot;">​</a></h1><div class="language-SQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">-- 查看数据库：</span></span>
<span class="line"><span style="color:#E1E4E8;">show databases;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 使用数据库：</span></span>
<span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> 数据库名称;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看当前使用的数据库：</span></span>
<span class="line"><span style="color:#F97583;">select</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">database</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建数据库：</span></span>
<span class="line"><span style="color:#F97583;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">database</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">数据库名称</span><span style="color:#E1E4E8;"> [charset UTF8];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除数据库：</span></span>
<span class="line"><span style="color:#F97583;">drop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">database</span><span style="color:#E1E4E8;"> 数据库名称;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">-- 查看数据库：</span></span>
<span class="line"><span style="color:#24292E;">show databases;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 使用数据库：</span></span>
<span class="line"><span style="color:#D73A49;">use</span><span style="color:#24292E;"> 数据库名称;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看当前使用的数据库：</span></span>
<span class="line"><span style="color:#D73A49;">select</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">database</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建数据库：</span></span>
<span class="line"><span style="color:#D73A49;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">database</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">数据库名称</span><span style="color:#24292E;"> [charset UTF8];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除数据库：</span></span>
<span class="line"><span style="color:#D73A49;">drop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">database</span><span style="color:#24292E;"> 数据库名称;</span></span></code></pre></div><div class="language-SQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">需要先指定在哪个数据库下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看有哪些表：</span></span>
<span class="line"><span style="color:#E1E4E8;">show tables;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建表：</span></span>
<span class="line"><span style="color:#F97583;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">table</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">表名称</span><span style="color:#E1E4E8;">(列名称 列类型, 列名称 列类型, ....);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除表：</span></span>
<span class="line"><span style="color:#F97583;">drop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">table</span><span style="color:#E1E4E8;"> 表名称;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">需要先指定在哪个数据库下</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 查看有哪些表：</span></span>
<span class="line"><span style="color:#24292E;">show tables;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 创建表：</span></span>
<span class="line"><span style="color:#D73A49;">create</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">table</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">表名称</span><span style="color:#24292E;">(列名称 列类型, 列名称 列类型, ....);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">-- 删除表：</span></span>
<span class="line"><span style="color:#D73A49;">drop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">table</span><span style="color:#24292E;"> 表名称;</span></span></code></pre></div>`,3),o=[e];function c(t,r,i,y,E,d){return a(),n("div",null,o)}const A=s(p,[["render",c]]);export{h as __pageData,A as default};
