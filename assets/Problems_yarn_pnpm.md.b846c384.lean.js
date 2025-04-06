import{_ as n,o as a,c as o,O as l}from"./chunks/framework.54bd01e4.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Problems/yarn_pnpm.md","filePath":"Problems/yarn_pnpm.md"}'),p={name:"Problems/yarn_pnpm.md"};function e(c,s,t,r,y,E){return a(),o("div",null,s[0]||(s[0]=[l(`<h3 id="yarn修改全局安装目录和缓存目录" tabindex="-1">yarn修改全局安装目录和缓存目录 <a class="header-anchor" href="#yarn修改全局安装目录和缓存目录" aria-label="Permalink to &quot;yarn修改全局安装目录和缓存目录&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global-folder</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">NodeConfig</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">yarn</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">global</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache-folder</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">NodeConfig</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">yarn</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">cache</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global-folder</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache-folder</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global-folder</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">NodeConfig</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">yarn</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">global</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache-folder</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">NodeConfig</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">yarn</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">cache</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global-folder</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache-folder</span></span></code></pre></div><h3 id="pnpm修改全局安装目录、缓存目录、存储目录" tabindex="-1">pnpm修改全局安装目录、缓存目录、存储目录 <a class="header-anchor" href="#pnpm修改全局安装目录、缓存目录、存储目录" aria-label="Permalink to &quot;pnpm修改全局安装目录、缓存目录、存储目录&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global-dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">NodeConfig</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">pnpm</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">global</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">store-dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">NodeConfig</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">pnpm</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">store</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache-dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">NodeConfig</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">pnpm</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">cache</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">global-dir</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">store-dir</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cache-dir</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global-dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">NodeConfig</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">pnpm</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">global</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">store-dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">NodeConfig</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">pnpm</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">store</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache-dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">NodeConfig</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">pnpm</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">cache</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">global-dir</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">store-dir</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cache-dir</span></span></code></pre></div><h2 id="package-json中版本号解释" tabindex="-1">package.json中版本号解释 <a class="header-anchor" href="#package-json中版本号解释" aria-label="Permalink to &quot;package.json中版本号解释&quot;">​</a></h2><ol><li><code>^</code> 符号： 允许安装与指定版本主版本号相同且兼容的最新版本。 <ul><li>主版本号不能改变。例如，<code>^7.2.0</code> 不允许升级到 <code>8.x.x</code></li><li>次版本号和修订版本号可以升级到最新版本。例如，<code>^7.2.0</code> 允许升级到 <code>7.2.5</code>，<code>7.3.0</code> 等。</li></ul></li><li><code>~</code>符号：允许更新到修订版本号，但不允许更新到次版本号。 <ul><li>例如，<code>~7.2.0</code> 允许升级到 <code>7.2.5</code>，但不允许升级到 <code>7.3.0</code></li></ul></li><li><code>=</code>符号：严格匹配指定的版本号，不允许任何更新。</li><li><code>*</code>符号：允许更新到任何版本。</li><li><code>&lt;</code>、<code>&gt;</code>、<code>&lt;=</code>、<code>&gt;=</code>符号：允许安装指定范围版本的包。 <ul><li><code>&gt;=7.2.0 &lt;8.0.0</code>表示允许安装版本号在 <code>7.2.0</code> 和 <code>8.0.0</code> 之间的包。</li><li>这种写法等价于<code>^7.2.0</code></li></ul></li><li><code>||</code>符号：表示逻辑“或”，用于指定多个版本范围。 <ul><li><code>&gt;=7.2.0 &lt;8.0.0 || &gt;=9.0.0</code> 表示允许安装版本号在 <code>7.2.0</code> 和 <code>8.0.0</code> 之间，或者 <code>9.x.x</code>版本。</li></ul></li></ol><h2 id="安装依赖-锁定版本" tabindex="-1">安装依赖，锁定版本 <a class="header-anchor" href="#安装依赖-锁定版本" aria-label="Permalink to &quot;安装依赖，锁定版本&quot;">​</a></h2><blockquote><p>问题说明：项目中依赖的包在package.json中版本格式可能为<code>^4.0.19</code>，有时我们删除了<code>node_modules</code>，重新安装依赖时，一些包可能有了新的版本。而且这些包内部还会依赖别的包，这些包也可能有新的版本。如果有的包没适配，就会造成错误。</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">├─┬</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jest-expo</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">52.0</span><span style="color:#9ECBFF;">.6</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">✕</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unmet</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">peer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react-dom@19.0.0-rc-6230622a1a-20240610:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">found</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">18.3</span><span style="color:#9ECBFF;">.1</span></span>
<span class="line"><span style="color:#B392F0;">├─┬</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@gluestack-ui/checkbox</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.1</span><span style="color:#9ECBFF;">.39</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">└─┬</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@react-native-aria/checkbox</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.2</span><span style="color:#9ECBFF;">.10</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">└─┬</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@react-aria/checkbox</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3.2</span><span style="color:#9ECBFF;">.1</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">✕</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unmet</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">peer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react@&quot;^16.8.0 || ^17.0.0-rc.1&quot;:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">found</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">18.3</span><span style="color:#9ECBFF;">.1</span></span>
<span class="line"><span style="color:#B392F0;">├─┬</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@react-navigation/bottom-tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7.2</span><span style="color:#9ECBFF;">.0</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">└─┬</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@react-navigation/elements</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2.3</span><span style="color:#9ECBFF;">.7</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">✕</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unmet</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">peer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@react-navigation/native@^7.1.5:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">found</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7.0</span><span style="color:#9ECBFF;">.14</span></span>
<span class="line"><span style="color:#B392F0;">└─┬</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">expo-router</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4.0</span><span style="color:#9ECBFF;">.20</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">└─┬</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@react-navigation/native-stack</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7.3</span><span style="color:#9ECBFF;">.9</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">✕</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unmet</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">peer</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@react-navigation/native@^7.1.5:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">found</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">7.0</span><span style="color:#9ECBFF;">.14</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">expo-router</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">├─┬</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jest-expo</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">52.0</span><span style="color:#032F62;">.6</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">✕</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unmet</span><span style="color:#24292E;"> </span><span style="color:#032F62;">peer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react-dom@19.0.0-rc-6230622a1a-20240610:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">found</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">18.3</span><span style="color:#032F62;">.1</span></span>
<span class="line"><span style="color:#6F42C1;">├─┬</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@gluestack-ui/checkbox</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.1</span><span style="color:#032F62;">.39</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;"> </span><span style="color:#032F62;">└─┬</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@react-native-aria/checkbox</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.2</span><span style="color:#032F62;">.10</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">└─┬</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@react-aria/checkbox</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3.2</span><span style="color:#032F62;">.1</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">     </span><span style="color:#032F62;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">✕</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unmet</span><span style="color:#24292E;"> </span><span style="color:#032F62;">peer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react@&quot;^16.8.0 || ^17.0.0-rc.1&quot;:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">found</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">18.3</span><span style="color:#032F62;">.1</span></span>
<span class="line"><span style="color:#6F42C1;">├─┬</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@react-navigation/bottom-tabs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7.2</span><span style="color:#032F62;">.0</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;"> </span><span style="color:#032F62;">└─┬</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@react-navigation/elements</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2.3</span><span style="color:#032F62;">.7</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">✕</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unmet</span><span style="color:#24292E;"> </span><span style="color:#032F62;">peer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@react-navigation/native@^7.1.5:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">found</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7.0</span><span style="color:#032F62;">.14</span></span>
<span class="line"><span style="color:#6F42C1;">└─┬</span><span style="color:#24292E;"> </span><span style="color:#032F62;">expo-router</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4.0</span><span style="color:#032F62;">.20</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">└─┬</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@react-navigation/native-stack</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7.3</span><span style="color:#032F62;">.9</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">✕</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unmet</span><span style="color:#24292E;"> </span><span style="color:#032F62;">peer</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@react-navigation/native@^7.1.5:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">found</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">7.0</span><span style="color:#032F62;">.14</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">expo-router</span></span></code></pre></div><p>解决方案：<strong>强制覆盖依赖树中的某个包版本</strong>，删除package-lock.json和node_modules文件夹，重新安装依赖。<br> 在package.json中添加如下代码：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># npm</span></span>
<span class="line"><span style="color:#B392F0;">&quot;overrides&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">&quot;@react-navigation/bottom-tabs&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;7.2.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">----------------------</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#B392F0;">&quot;pnpm&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">&quot;overrides&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">&quot;@react-navigation/bottom-tabs&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;7.2.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#B392F0;">&quot;resolutions&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">&quot;@react-navigation/bottom-tabs&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;7.2.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># npm</span></span>
<span class="line"><span style="color:#6F42C1;">&quot;overrides&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&quot;@react-navigation/bottom-tabs&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;7.2.0&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">----------------------</span></span>
<span class="line"><span style="color:#6A737D;"># pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">&quot;pnpm&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&quot;overrides&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">&quot;@react-navigation/bottom-tabs&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;7.2.0&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;"># yarn</span></span>
<span class="line"><span style="color:#6F42C1;">&quot;resolutions&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&quot;@react-navigation/bottom-tabs&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;7.2.0&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,11)]))}const C=n(p,[["render",e]]);export{i as __pageData,C as default};
