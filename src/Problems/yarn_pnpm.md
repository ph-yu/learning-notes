### yarn修改全局安装目录和缓存目录
```bash
yarn config set global-folder D:\\NodeConfig\\yarn\\global
yarn config set cache-folder D:\\NodeConfig\\yarn\\cache

yarn config get global-folder
yarn config get cache-folder
```

### pnpm修改全局安装目录、缓存目录、存储目录
```bash
pnpm config set global-dir D:\\NodeConfig\\pnpm\\global
pnpm config set store-dir D:\\NodeConfig\\pnpm\\store
pnpm config set cache-dir D:\\NodeConfig\\pnpm\\cache

pnpm config get global-dir
pnpm config get store-dir
pnpm config get cache-dir
```

## package.json中版本号解释
1. `^` 符号： 允许安装与指定版本主版本号相同且兼容的最新版本。
   - 主版本号不能改变。例如，`^7.2.0` 不允许升级到 `8.x.x`
   - 次版本号和修订版本号可以升级到最新版本。例如，`^7.2.0` 允许升级到 `7.2.5`，`7.3.0` 等。 
2. `~`符号：允许更新到修订版本号，但不允许更新到次版本号。
   - 例如，`~7.2.0` 允许升级到 `7.2.5`，但不允许升级到 `7.3.0`
3. `=`符号：严格匹配指定的版本号，不允许任何更新。
4. `*`符号：允许更新到任何版本。
5. `<`、`>`、`<=`、`>=`符号：允许安装指定范围版本的包。
   - `>=7.2.0 <8.0.0`表示允许安装版本号在 `7.2.0` 和 `8.0.0` 之间的包。
   - 这种写法等价于`^7.2.0`
6. `||`符号：表示逻辑“或”，用于指定多个版本范围。
   - `>=7.2.0 <8.0.0 || >=9.0.0` 表示允许安装版本号在 `7.2.0` 和 `8.0.0` 之间，或者 `9.x.x`版本。
   

## 安装依赖，锁定版本
> 问题说明：项目中依赖的包在package.json中版本格式可能为`^4.0.19`，有时我们删除了`node_modules`，重新安装依赖时，一些包可能有了新的版本。而且这些包内部还会依赖别的包，这些包也可能有新的版本。如果有的包没适配，就会造成错误。
```bash
├─┬ jest-expo 52.0.6
│   └── ✕ unmet peer react-dom@19.0.0-rc-6230622a1a-20240610: found 18.3.1
├─┬ @gluestack-ui/checkbox 0.1.39
│ └─┬ @react-native-aria/checkbox 0.2.10
│   └─┬ @react-aria/checkbox 3.2.1
│     └── ✕ unmet peer react@"^16.8.0 || ^17.0.0-rc.1": found 18.3.1
├─┬ @react-navigation/bottom-tabs 7.2.0
│ └─┬ @react-navigation/elements 2.3.7
│   └── ✕ unmet peer @react-navigation/native@^7.1.5: found 7.0.14
└─┬ expo-router 4.0.20
  └─┬ @react-navigation/native-stack 7.3.9
    └── ✕ unmet peer @react-navigation/native@^7.1.5: found 7.0.14 in expo-router
```
解决方案：**强制覆盖依赖树中的某个包版本**，删除package-lock.json和node_modules文件夹，重新安装依赖。  
在package.json中添加如下代码：
```bash
# npm
"overrides": {
  "@react-navigation/bottom-tabs": "7.2.0"
}
----------------------
# pnpm
"pnpm": {
  "overrides": {
    "@react-navigation/bottom-tabs": "7.2.0"
  }
}
# yarn
"resolutions": {
  "@react-navigation/bottom-tabs": "7.2.0"
}
```
