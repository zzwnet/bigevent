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

## 注册页面提交

1. 先给注册的form表单添加一个id
2. js中先将form表单的默认提交行为取消
3. post请求
4. 用layui的msg提示框美化

![image-20210713195852011](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713195852011.png)

用layui的msg提示框美化——实现注册成功后的提示

![image-20210713211832940](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713211832940.png)

## 登录页面的提交

1. 阻止默认行为
2. data数据快速获取 .serialize() 函数
3. 登录成功后，需要保存token到本地localStorage中
4. 路径跳转：location.href='/index.html'
5. ajaxPrefilter函数拼接请求路径

![image-20210713212822072](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713212822072.png)

![image-20210713213000992](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713213000992.png)

ajaxPrefilter函数拼接请求路径

![image-20210713220418737](C:\Users\北方\AppData\Roaming\Typora\typora-user-images\image-20210713220418737.png)