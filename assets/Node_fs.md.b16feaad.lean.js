import{_ as a,o as l,c as n,O as o}from"./chunks/framework.d7007f4b.js";const d=JSON.parse('{"title":"Node.js fs文件系统","description":"","frontmatter":{},"headers":[],"relativePath":"Node/fs.md","filePath":"Node/fs.md"}'),p={name:"Node/fs.md"};function t(e,s,r,c,E,y){return l(),n("div",null,s[0]||(s[0]=[o(`<h1 id="node-js-fs文件系统" tabindex="-1">Node.js fs文件系统 <a class="header-anchor" href="#node-js-fs文件系统" aria-label="Permalink to &quot;Node.js fs文件系统&quot;">​</a></h1><blockquote><p>fs模块的方法 均有 异步和同步版本。异步方法回调函数最后一个参数为回调函数，回调函数第一个参数是错误信息对象error。 异步方法性能更高，速度更快，而且没有阻塞</p></blockquote><h2 id="打开文件" tabindex="-1">打开文件 <a class="header-anchor" href="#打开文件" aria-label="Permalink to &quot;打开文件&quot;">​</a></h2><p><code>fs.open(path, flags[, mode], callback)</code></p><ul><li>path - 文件的路径</li><li>flags - 文件打开的行为</li><li>mode - 设置文件的模式（权限），文件创建默认权限为0666（可读，可写）</li><li>callback - 回调函数，带有两个参数：<code>callback(err, fd)</code></li></ul><p><strong>flags</strong>参数：</p><table><thead><tr><th>Flag</th><th>描述</th></tr></thead><tbody><tr><td>r</td><td>以读取模式打开文件，如果不存在就抛出异常</td></tr><tr><td>r+</td><td>以读写模式打开文件</td></tr><tr><td>rs</td><td>以同步的方式读取文件</td></tr><tr><td>rs+</td><td>以同步的方式读取和写入文件</td></tr><tr><td>w</td><td>以写入模式打开文件，如果文件不存在则创建</td></tr><tr><td>w+</td><td>以读写模式打开文件，如果文件不存在则创建</td></tr><tr><td>wx</td><td>类似&#39;w&#39;，但如果文件存在则写入失败</td></tr><tr><td>wx+</td><td>类似&#39;w+&#39;，但如果文件路径存在则读写失败</td></tr><tr><td>a</td><td>以追加模式打开文件，如果文件不存在则创建</td></tr><tr><td>a+</td><td>以读取追加模式打开文件，如果文件不存在则创建</td></tr><tr><td>ax</td><td>类似&#39;a&#39;，但如果文件路径存在则文件追加失败</td></tr><tr><td>ax+</td><td>类似&#39;a+&#39;，但如果文件路径存在则文件读取追加失败</td></tr></tbody></table><h2 id="关闭文件" tabindex="-1">关闭文件 <a class="header-anchor" href="#关闭文件" aria-label="Permalink to &quot;关闭文件&quot;">​</a></h2><p><code>fs.close(fd, callback)</code> 使用文件描述符来读取文件</p><h2 id="获取文件信息" tabindex="-1">获取文件信息 <a class="header-anchor" href="#获取文件信息" aria-label="Permalink to &quot;获取文件信息&quot;">​</a></h2><p><code>fs.stat(path, callback)</code></p><ul><li>path: 文件路径</li><li>callback： 回调函数，两个参数err, stats(fs.Stats对象)</li><li>stats 类的方法有 <table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>stats.isFile()</td><td>如果是文件则返回true</td></tr><tr><td>stats.isDirectory()</td><td>如果是目录则返回true</td></tr><tr><td>stats.isBlockDevice()</td><td>如果是块设备则返回true</td></tr><tr><td>stats.isCharacterDevice()</td><td>如果是字符设备则返回true</td></tr><tr><td>stats.isSymbolicLink()</td><td>如果是软链接则返回true</td></tr><tr><td>stats.isFIFO()</td><td>如果是FIFO则返回true。FIFO是UNIX中一种特殊类型的命令管道</td></tr><tr><td>stats.isSocket()</td><td>如果是Socket则返回true。</td></tr></tbody></table></li></ul><h2 id="写入文件" tabindex="-1">写入文件 <a class="header-anchor" href="#写入文件" aria-label="Permalink to &quot;写入文件&quot;">​</a></h2><p><code>fs.writeFile(file, data[, options], callback)</code><br> writeFile 直接打开文件默认是 <strong><code>w</code></strong> 模式，如果文件存在，该方法写入的内容会覆盖旧的文件内容</p><ul><li>file 文件名</li><li>data - 要写入文件的数据，可以是字符串或Buffer(缓冲)对象</li><li>options 一个对象，<code>{ encoding: &#39;utf-8&#39;, mode: &#39;0666&#39;, flag: &#39;w&#39; }</code></li><li>callback 回调函数，参数只包括错误信息err，在写入失败时返回</li></ul><h2 id="读取文件" tabindex="-1">读取文件 <a class="header-anchor" href="#读取文件" aria-label="Permalink to &quot;读取文件&quot;">​</a></h2><p><code>fs.read(fd, buffer, offset, length, position, callback)</code> 使用文件描述符来读取文件</p><ul><li>fd - 通过<code>fs.open()</code>返回的文件描述符</li><li>buffer - 数据写入的缓冲区</li><li>offset - 缓冲区写入的写入偏移量</li><li>length - 要从文件中读取的字节数</li><li>position - 文件读取的起始位置</li><li>callback - 回调函数三个参数err: 错误信息, bytesRead: 读取的字节数, buffer: 缓冲区对象、</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { open, read } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;fs&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">buf</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">alloc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">testRead</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(filePath, </span><span style="color:#9ECBFF;">&#39;r+&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">fd</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(err)</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;文件打开成功，开始读取&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">read</span><span style="color:#E1E4E8;">(fd, buf, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, buf.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">bytes</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`读取文件err: \`</span><span style="color:#E1E4E8;">, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`文件读取的字节数: \${</span><span style="color:#E1E4E8;">bytes</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (bytes </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf.</span><span style="color:#B392F0;">subarray</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, bytes).</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">testRead</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { open, read } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;fs&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">buf</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">alloc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">testRead</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(filePath, </span><span style="color:#032F62;">&#39;r+&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">fd</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(err)</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;文件打开成功，开始读取&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">read</span><span style="color:#24292E;">(fd, buf, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, buf.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">bytes</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`读取文件err: \`</span><span style="color:#24292E;">, err)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`文件读取的字节数: \${</span><span style="color:#24292E;">bytes</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (bytes </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf.</span><span style="color:#6F42C1;">subarray</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, bytes).</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">testRead</span><span style="color:#24292E;">()</span></span></code></pre></div><h2 id="截取文件" tabindex="-1">截取文件 <a class="header-anchor" href="#截取文件" aria-label="Permalink to &quot;截取文件&quot;">​</a></h2><p><code>fs.ftruncate(fd, len, callback)</code></p><ul><li>fd - <code>fs.open()</code>返回的文件描述符</li><li>len - 文件内容截取的长度</li><li>callback - 回调函数，无参数</li></ul><h2 id="删除文件" tabindex="-1">删除文件 <a class="header-anchor" href="#删除文件" aria-label="Permalink to &quot;删除文件&quot;">​</a></h2><p><code>fs.unlink(path, callback)</code></p><ul><li>path - 文件路径</li><li>callback - 回调函数，无参数</li></ul><h2 id="创建目录" tabindex="-1">创建目录 <a class="header-anchor" href="#创建目录" aria-label="Permalink to &quot;创建目录&quot;">​</a></h2><p><code>fs.mkdir(path [, options], callback)</code></p><ul><li>path - 文件路径</li><li>options <ul><li>recursive - 是否以递归的方式创建目录，默认 false</li><li>mode - 设置目录权限，默认为0777</li></ul></li><li>callback 无参数的回调函数</li></ul><h2 id="读取目录" tabindex="-1">读取目录 <a class="header-anchor" href="#读取目录" aria-label="Permalink to &quot;读取目录&quot;">​</a></h2><p><code>fs.readdir(path, callback)</code></p><ul><li>path - 文件路径</li><li>callback - 回调函数，两个参数err, files(目录下文件列表)</li></ul><h2 id="删除目录" tabindex="-1">删除目录 <a class="header-anchor" href="#删除目录" aria-label="Permalink to &quot;删除目录&quot;">​</a></h2><p><code>fs.rmdir(path, callback)</code></p><ul><li>path - 文件路径</li><li>callback - 回调函数，无参数</li></ul>`,34)]))}const f=a(p,[["render",t]]);export{d as __pageData,f as default};
