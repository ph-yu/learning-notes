1. ### win11系统，uniapp安装插件失败：检查网络问题和 `nvm install 18`
  ![nvm安装失败](../assets/images/nvm-install-fail.png)
  > 因为软件的权限不足，需要通过 **以管理员身份** 运行

2. ### uniapp开发：运行到模拟器中，需要的配置
   - 打开 “工具-设置-运行配置”
   ![安卓模拟器adb配置](../assets/images/adb-setting.png)
   - 运行MuMu模拟器
   - 在adb目录执行命令：`.\adb connect 127.0.0.1:7555`
   - 在HbuilderX点击：运行到手机或模拟器
  
3. ### socket.io-client
  ```js
    const socket = io('wss://localhost:3000', {
      path: `/ws/${123}`,
      transports: ['websocket']
    })
    socket.on('connect', () => {
      console.log('connect success', socket.id)
    })
    socket.on('message', message => {
      console.log(message)
    })
    socket.on('connect_error', error => {
      console.log(error)
    })
    socket.on('disconnect', (reason, details) => {
      console.log(reason, details)
    })
  ```

4. ### TypeIt
  ```js
    const typedRef = useRef<TypeIt | null>(null)
    const outputRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const typedOutput = outputRef.current as HTMLDivElement
      const listEls = document.getElementById('listEl')
      if (typedOutput && listEls) {
        typedRef.current = new TypeIt(typedOutput, {
          strings: Array.from(listEls.children).map(el => el.innerHTML),
          speed: 16,
          loop: false
        }).go()
        return () => {
          typedRef.current?.destroy()
        }
      }
    }, [])
  ```