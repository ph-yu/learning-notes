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

5. ### pm2 常用命令
  ```js
    // 启动项目
    pm2 start npm --name 'my-project' -- run start --watch --ignore-watch="./node_modules" --cluster

    // 查看所有项目状态
    pm2 list

    // 停止项目：
    pm2 stop my-project

    // 重启项目：
    pm2 restart my-project

    // 删除项目：
    pm2 delete my-project

    // 启动项目日志：
    pm2 logs my-project

    // 停止所有项目
    pm2 stop all

    // 重启所有项目
    pm2 restart all

    // 删除所有项目
    pm2 delete all

  ```

6. ### dayjs 获取时间段
   ```js
    import dayjs from 'dayjs'
    import quarterOfYear from 'dayjs/plugin/quarterOfYear'
    dayjs.extend(quarterOfYear)

    export function getTimeRangeByKey(key) {
      let start = undefined
      let end = undefined
      if (key === 'today') { // 今天
        start = end = dayjs()
      }
      if (key === 'yesterday') { // 昨天
        start = end = dayjs().subtract(1, 'day')
      }
      if (key === 'thisWeek') { // 本周
        start = dayjs().startOf('week').add(1, 'day')
        end = dayjs().endOf('week').add(1, 'day')
      }
      if (key === 'lastWeek') { // 上周
        start = dayjs().subtract(1, 'week').startOf('week').add(1, 'day')
        end = dayjs().subtract(1, 'week').endOf('week').add(1, 'day')
      }
      if (key === 'thisMonth') { // 本月
        start = dayjs().startOf('month')
        end = dayjs().endOf('month')
      }
      if (key === 'lastMonth') { // 上月
        start = dayjs().subtract(1, 'month').startOf('month')
        end = dayjs().subtract(1, 'month').endOf('month')
      }
      if (key === 'thisQuarter') { // 本季度
        start = dayjs().startOf('quarter')
        end = dayjs().endOf('quarter')
      }
      if (key === 'lastQuarter') { // 上季度
        start = dayjs().subtract(1, 'quarter').startOf('quarter')
        end = dayjs().subtract(1, 'quarter').endOf('quarter')
      }
      if (key === 'firstHalfYear') { // 上半年
        start = dayjs().quarter(1).startOf('quarter')
        end = dayjs().quarter(2).endOf('quarter')
      }
      if (key === 'lastHalfYear') { // 下半年
        start = dayjs().quarter(3).startOf('quarter')
        end = dayjs().quarter(4).endOf('quarter')
      }
      if (key === 'thisYear') { // 本年
        start = dayjs().startOf('year')
        end = dayjs().endOf('year')
      }
      if (key === 'lastYear') { // 上年
        start = dayjs().subtract(1, 'year').startOf('year')
        end = dayjs().subtract(1, 'year').endOf('year')
      }
      return [start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')]
    }
   ```