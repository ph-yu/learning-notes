# Git


### 修改历史提交记录中的邮箱，使用`git-filter-repo`这个脚本
1. 这是一个Python包，需要先安装Python环境，要求Python3.5以上
2. 执行`pip install git-filter-repo`来安装
3. 安装完成后，可在cmd中使用`where git-filter-repo`查看安装位置，如果不能正常输出则要将它的安装位置添加到系统环境变量中的Path
4. 在要操作的项目文件夹下，使用`git bash`打开，并执行一下命令
   1. xxx@163.com 为要被替换的邮箱
   2. 123@qq.com 为要替换成的邮箱
   
  ```bash
    git-filter-repo --email-callback 'return email.replace(b"xxx@163.com", b"123@qq.com")' --force
  ```
5. 执行成功后，查看当前项目的配置`git config --local --list`，会发现`remote.origin`没有了，需要重新添加
   ```bash
    git remote add origin http://xxxxxx
   ```
6. 将更改后的`git log`推送到远程仓库
   ```bash
   git push -f origin --all
   ```
