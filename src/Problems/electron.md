# Electron

## CORS跨域问题
> 使用axios发送http请求时，报CORS跨域问题
1. 在renderer的inex.html，meta标签需要增加 `connect-src *;`，这样才不会使用 `default-src 'self';` 配置
  ```js
    <meta
      http-equiv="Content-Security-Policy"
      content="connect-src *; default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:"
    />
  ```
2. 后端和Nginx 不需要配置 `Access-Control-Allow-Origin: *`，否则会报错 The 'Access-Control-Allow-Origin' header contains multiple values 'http://localhost:5173/, *', but only one is allowed.
3. 在主进程 `index.ts` 文件中添加如下配置：
  ```js
  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        'Access-Control-Allow-Origin': ['*'],
        ...details.responseHeaders
      }
    })
  })
  ```

## 主进程与渲染进程通信问题
> 主进程 主动发送数据给渲染进程，在渲染进程 App.vue 中接收不到
1. main
  ```js
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('send-msg', '主进程主动发送消息')
  })
  ```
2. preload
  ```js
  contextBridge.exposeInMainWorld('api', {
    getSendMsg: (callback) => ipcRenderer.on('send-msg', (_, value) => callback(value))
  })
  ```
3. renderer
  ```vue
  <script lang="ts" setup>
  window.api.getSendMsg((value) => {
    console.log(value)
  })
  </script>
  ```
4. win10系统怎么都接收不到，win11却可以接收到。win10中采用了迂回策略，在App.vue中先向主进程invoke事件，主进程接收到后再使用 `webContents.send`
  ```js
  <!-- renderer进程  App.vue -->
  window.electron.ipcRenderer.invoke('getSendMsg')

  <!-- main进程 -->
  ipcMain.handle('getSendMsg', () => {
    mainWindow.webContents.send('send-msg', '主进程主动发送消息')
  })
  ```