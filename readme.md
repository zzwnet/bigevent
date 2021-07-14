# **导入js的顺序一定要清楚**

## 准备工作

### 1、创建github新仓库

### 2、将项目上传到仓库

### 3、建立并使用login分支

![image-20210713154459371](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713154459371.png)

## login页面搭建



### 1、在放背景图片的时候，让background-size:cover;

![image-20210713160719904](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713160719904.png)

### 2、实现登录和注册的按钮切换

注意！！！

**隐藏和显示的是登录和注册包括表单的外盒子**

![image-20210713163124085](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713163124085.png)

### 3、表单项验证

步骤：

1. 验证密码的位数
2. 验证两次密码是否一致

layui为我们提供了 lay-verify 来验证，必须导入layui的js文件

![image-20210713185627330](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713185627330.png)

layui的自定义规则：

1、验证密码位数为6-12位

![image-20210713191523408](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713191523408.png)

2、验证注册页面确认密码是否一致

![image-20210713192727030](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713192727030.png)

### 注册页面提交

1. 先给注册的form表单添加一个id
2. js中先将form表单的默认提交行为取消
3. post请求
4. 用layui的msg提示框美化

![image-20210713195852011](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713195852011.png)

用layui的msg提示框美化——实现注册成功后的提示

![image-20210713211832940](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713211832940.png)

### 登录页面的提交

1. 阻止默认行为
2. data数据快速获取 .serialize() 函数
3. 登录成功后，需要保存token到本地localStorage中
4. 路径跳转：location.href='/index.html'
5. ajaxPrefilter函数拼接请求路径

![image-20210713212822072](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713212822072.png)

![image-20210713213000992](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713213000992.png)

ajaxPrefilter函数拼接请求路径

![image-20210713220418737](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713220418737.png)

### git操作

- git add . 
- git commit -m '分支完成' 
- git push -u origin login  --上传到远程仓库
- git branch  --查看当前分支
- git checkout main  --切换到main主分支
- git merge login --合并login分支
- git push  更新上传到远程仓库



## index页面的布局

### 1、给侧边导航添加这个属性，展开一个时，关闭其他

![image-20210714101805889](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210714101805889.png)

### 2、添加图标

### 3、了解iframe标签

1. 给iframe添加src路径时，指的是刚开始默认打开的页面
2. 首页导航标签默认选中，添加layui-this

![image-20210714103811455](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210714103811455.png)

#### 注意点！

- css添加user-select:none 表示文字不会被选中

## 渲染头像名字

1. 将ajax成功返回的数据中的data传给函数renderAvatar
2. 获取name值，若有nickname则先显示，没有则显示username
3. 判断是都user_pic中有头像，若有，则将地址渲染给tou.user
4. 若没有，则先获取name中的第一个字母，用toUpperCase()方法转化为大写
5. 转化完成后传给img_user的文本替换

![image-20210714153710105](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210714153710105.png)

### 统一给有权限的接口，在ajaxPrefilter中添加

#### 用indexOf判断

![image-20210714154911417](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210714154911417.png)

![image-20210714154708336](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210714154708336.png)

### 退出功能的实现

1. 先清空本地存储的token值  localStorage.removeItem('roken')
2. 跳转页面 locatiob.href

![image-20210714160116724](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210714160116724.png)

## 控制用户访问权限

![image-20210714194522932](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210714194522932.png)

![image-20210714194541553](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210714194541553.png)
