import{_ as n,o as e,c as a,O as o}from"./chunks/framework.d7007f4b.js";const d=JSON.parse('{"title":"Node.js 事件循环","description":"","frontmatter":{},"headers":[],"relativePath":"Node/EventLoop.md","filePath":"Node/EventLoop.md"}'),l={name:"Node/EventLoop.md"};function p(t,s,r,c,E,i){return e(),a("div",null,s[0]||(s[0]=[o(`<h1 id="node-js-事件循环" tabindex="-1">Node.js 事件循环 <a class="header-anchor" href="#node-js-事件循环" aria-label="Permalink to &quot;Node.js 事件循环&quot;">​</a></h1><blockquote><p>Node.js是单进程单线程应用程序，因为V8引擎提供异步执行的回调接口，通过这些接口可以处理大量的并发，所以性能非常高。<br> 几乎每一个API都支持回调函数。<br> 基本上所有的事件机制都是用设计模式中的观察者模式实现。<br> 单线程类似进入一个<code>while(true)</code>的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数。</p></blockquote><h2 id="events模块" tabindex="-1">events模块 <a class="header-anchor" href="#events模块" aria-label="Permalink to &quot;events模块&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">events</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;events&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 创建</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">eventEmitter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> events.</span><span style="color:#B392F0;">EventEmitter</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">events</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;events&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6A737D;">// 创建</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">eventEmitter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> events.</span><span style="color:#6F42C1;">EventEmitter</span><span style="color:#24292E;">()</span></span></code></pre></div>`,4)]))}const v=n(l,[["render",p]]);export{d as __pageData,v as default};
