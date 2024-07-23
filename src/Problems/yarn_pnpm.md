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