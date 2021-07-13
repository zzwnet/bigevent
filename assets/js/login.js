(function() {
    // 在登录页面时
    $('#link_reg').on('click', function() {
            $('.box_login').hide();
            $('.box_reg').show();
        })
        // 在注册页面时
    $('#link_login').on('click', function() {
        $('.box_login').show();
        $('.box_reg').hide();
    })

    // layui中获取form对象
    var form = layui.form;
    var layer = layui.layer;

    form.verify({
        pwdpass: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function(value) {
            // 通过value拿到确认密码框中的内容
            // 还需拿到密码框中的内容
            // 然后进行一次等于的判断
            // 如果判断失败，则return
            var pwd = $("#reg_pwd").val();
            if (pwd !== value) {
                return '两次密码不一致';
            }
        }
    })

    // ajaxPrefilter函数拼接请求路径
    $.ajaxPrefilter(function(options) {
        options.url = "http://api-breakingnews-web.itheima.net" + options.url;
    })

    // 注册的实现
    $("#reg_form").on('submit', function(e) {
        e.preventDefault();
        var data = { username: $("#reg_username").val(), password: $("#reg_pwd").val() };
        $.post('/api/reguser', data, function(res) {
            if (res.status !== 0) {
                return layer.msg(res.message, { icon: 5 });
            }
            // layer.msg("注册成功 请登录！", { icon: 6 });
            layer.msg('注册成功 请登录！', {
                icon: 1,
                time: 1000 //2秒关闭（如果不配置，默认是3秒）
            }, function() {
                // 模拟点击
                $('#link_login').click();
            });
        })

    });
    // $("#login_form").on('submit', function(e) {
    //     e.preventDefault();
    //     var data = { username: $("#login_username").val(), password: $("#login_pwd").val() };
    //     $.post('http://api-breakingnews-web.itheima.net/api/login', data, function(res) {
    //         console.log(res);
    //     })

    // });

    $('#login_form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: '/api/login',
            method: 'POST',
            data: $(this).serialize(),
            success: function(res) {
                console.log(res);
                if (res.status !== 0) {
                    return layer.msg("登录失败", { icon: 5 });
                }
                layer.msg('登录成功 正在跳转！', {
                    icon: 1,
                    time: 1000 //2秒关闭（如果不配置，默认是3秒）
                }, function() {
                    // 模拟点击
                    localStorage.setItem('token', res.token);
                    location.href = '/index.html';
                });
            }

        })


    });


})();