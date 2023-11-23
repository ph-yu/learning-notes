import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.2c467624.js";const d=JSON.parse('{"title":"Node.js path模块","description":"","frontmatter":{},"headers":[],"relativePath":"Node/path.md","filePath":"Node/path.md"}'),o={name:"Node/path.md"},l=p(`<h1 id="node-js-path模块" tabindex="-1">Node.js path模块 <a class="header-anchor" href="#node-js-path模块" aria-label="Permalink to &quot;Node.js path模块&quot;">​</a></h1><ol><li><code>path.normalize(p)</code> 规范化路径</li><li><code>path.join([path1], [path2], [,...])</code> 用于连接路径。主要用途在于：会正确使用当前系统的路径分隔符，Unix系统是&quot;/&quot;，Windows系统是&quot;&quot;</li><li><code>path.resolve([from ...], to)</code> 将<strong>to</strong>参数解析为绝对路径，给定的路径的序列是从右向左被处理的，后面每个<code>path</code>被依次解析，直到构造完成一个绝对路径。<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/foo/bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;baz&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// E:\\foo\\bar\\baz</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/foo/bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./baz&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// E:\\foo\\bar\\baz</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/foo/bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/test/baz&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// E:\\test\\baz</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./www&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;public&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;../test/baz&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// E:\\Node\\www\\test\\baz</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;www&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;public&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;../test/baz&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// E:\\Node\\www\\test\\baz</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;www&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;public/assets/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;../test/baz&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// E:\\Node\\www\\public\\test\\baz</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;www&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;public/assets/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./test/baz&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// E:\\Node\\www\\public\\assets\\test\\baz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/foo/bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;baz&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// E:\\foo\\bar\\baz</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/foo/bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./baz&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// E:\\foo\\bar\\baz</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/foo/bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;/test/baz&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// E:\\test\\baz</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./www&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;public&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;../test/baz&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// E:\\Node\\www\\test\\baz</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;www&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;public&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;../test/baz&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// E:\\Node\\www\\test\\baz</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;www&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;public/assets/&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;../test/baz&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// E:\\Node\\www\\public\\test\\baz</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;www&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;public/assets/&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./test/baz&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// E:\\Node\\www\\public\\assets\\test\\baz</span></span></code></pre></div></li><li><code>path.isAbsolute(path)</code> 判断参数 <strong>path</strong> 是否是绝对路径</li><li><code>path.relative(from, to)</code> 用于将绝对路径转为相对路径，返回从from到to的相对路径（基于当前工作目录）<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">relative</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">Node</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">foo</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">test&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">Node</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">foo</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// ..\\path</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">relative</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">Node</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">foo</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">test&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">Node</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">src</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// ..\\..\\src\\path</span></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">relative</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">Node</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">foo</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">test&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">bingo</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">src</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// ..\\..\\..\\bingo\\src\\path</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">relative</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">Node</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">foo</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">test&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">Node</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">foo</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// ..\\path</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">relative</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">Node</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">foo</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">test&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">Node</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">src</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// ..\\..\\src\\path</span></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">relative</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">Node</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">foo</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">test&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">bingo</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">src</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// ..\\..\\..\\bingo\\src\\path</span></span></code></pre></div></li><li><code>path.dirname(p)</code> 返回路径中代表文件夹的部分<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;E:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">study-pro</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">Node</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">basic-learning</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">src</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">path.ts&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// E:\\study-pro\\Node\\basic-learning\\src</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">dirname</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;E:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">study-pro</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">Node</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">basic-learning</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">src</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">path.ts&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// E:\\study-pro\\Node\\basic-learning\\src</span></span></code></pre></div></li><li><code>path.basename(p[, ext])</code> 返回路径中最后一部分<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;E:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">study-pro</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">Node</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">basic-learning</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">src</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">path.ts&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// path.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;E:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">study-pro</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">Node</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">basic-learning</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">src&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// src</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">dirname</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;E:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">study-pro</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">Node</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">basic-learning</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">src</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">path.ts&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// path.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">path.</span><span style="color:#6F42C1;">dirname</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;E:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">study-pro</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">Node</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">basic-learning</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">src&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// src</span></span></code></pre></div></li><li><code>path.extname(p)</code> 返回路径中文件的后缀名。如果路径中不包含&#39;.&#39;或路径中只包含一个&#39;.&#39;且为路径的第一个字符，则返回空字符串<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">extname</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;src/path.ts&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// .ts</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">extname</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path.ts&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// .ts</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">extname</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.ts&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// &#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">extname</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;basic-learning/src&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// &#39;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">extname</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;src/path.ts&#39;</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// .ts</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">extname</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path.ts&#39;</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// .ts</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">extname</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.ts&#39;</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// &#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">extname</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;basic-learning/src&#39;</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// &#39;&#39;</span></span></code></pre></div></li><li><code>path.parse(pathString)</code> 返回路径字符串的对象</li><li><code>path.format(pathObject)</code> 从对象中返回路径字符串</li></ol>`,2),e=[l];function t(c,r,y,E,F,i){return a(),n("div",null,e)}const h=s(o,[["render",t]]);export{d as __pageData,h as default};
