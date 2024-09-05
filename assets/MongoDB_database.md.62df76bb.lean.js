import{_ as s,o as e,c as o,O as n}from"./chunks/framework.d7007f4b.js";const b=JSON.parse('{"title":"database 数据库操作","description":"","frontmatter":{},"headers":[],"relativePath":"MongoDB/database.md","filePath":"MongoDB/database.md"}'),l={name:"MongoDB/database.md"};function t(p,a,c,r,d,i){return e(),o("div",null,a[0]||(a[0]=[n(`<h1 id="database-数据库操作" tabindex="-1">database 数据库操作 <a class="header-anchor" href="#database-数据库操作" aria-label="Permalink to &quot;database 数据库操作&quot;">​</a></h1><h2 id="查看所有数据库" tabindex="-1">查看所有数据库 <a class="header-anchor" href="#查看所有数据库" aria-label="Permalink to &quot;查看所有数据库&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dbs</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">show</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dbs</span></span></code></pre></div><h2 id="创建" tabindex="-1">创建 <a class="header-anchor" href="#创建" aria-label="Permalink to &quot;创建&quot;">​</a></h2><blockquote><p>mongoDB中默认的数据库是<code>test</code>，如果未创建新的数据库，则集合会存储到<code>test</code>中。 在MongoDB中，创建集合后要再向其插入数据(文档/记录)后才会真正创建。</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">DATABASE_NMAE</span></span>
<span class="line"><span style="color:#6A737D;"># 如果数据库不存在，则会创建；否则会切换到指定数据库。</span></span>
<span class="line"><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my_blog</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">DATABASE_NMAE</span></span>
<span class="line"><span style="color:#6A737D;"># 如果数据库不存在，则会创建；否则会切换到指定数据库。</span></span>
<span class="line"><span style="color:#6F42C1;">use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my_blog</span></span></code></pre></div><h2 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">db.dropDatabase</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">db.dropDatabase</span><span style="color:#24292E;">()</span></span></code></pre></div><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><p><a href="https://cloud.tencent.com/developer/article/2344837" target="_blank" rel="noreferrer">MongoDB入门</a></p>`,10)]))}const u=s(l,[["render",t]]);export{b as __pageData,u as default};
