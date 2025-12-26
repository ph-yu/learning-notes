import{_ as a,c as i,o as n,ae as l}from"./chunks/framework.BoX2Qm4w.js";const g=JSON.parse('{"title":"DDL相关语句","description":"","frontmatter":{},"headers":[],"relativePath":"SQL/DDL.md","filePath":"SQL/DDL.md"}'),p={name:"SQL/DDL.md"};function e(t,s,h,k,d,r){return n(),i("div",null,[...s[0]||(s[0]=[l(`<h1 id="ddl相关语句" tabindex="-1">DDL相关语句 <a class="header-anchor" href="#ddl相关语句" aria-label="Permalink to &quot;DDL相关语句&quot;">​</a></h1><div class="language-SQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 查看数据库：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show databases;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 使用数据库：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 数据库名称;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 查看当前使用的数据库：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">select</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 创建数据库：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> database</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 数据库名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [charset UTF8];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 删除数据库：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">drop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> database</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 数据库名称;</span></span></code></pre></div><div class="language-SQL vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">SQL</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">需要先指定在哪个数据库下</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 查看有哪些表：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show tables;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 创建表：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 表名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(列名称 列类型, 列名称 列类型, ....);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 删除表：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">drop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名称;</span></span></code></pre></div>`,3)])])}const D=a(p,[["render",e]]);export{g as __pageData,D as default};
