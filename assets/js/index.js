(function() {
    // ajaxPrefilter函数拼接请求路径
    $.ajaxPrefilter(function(options) {
        options.url = "http://api-breakingnews-web.itheima.net" + options.url;
        // 统一为有权限的接口，设置headers请求头
        if (options.url.indexOf('/my/') != -1) {
            options.headers = {
                Authorization: localStorage.getItem('token') || ''
            }
        }

        // 统一挂载complete
        options.complete = function(res) {
            if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
                localStorage.removeItem('token');
                //    跳转页面
                location.href = '/login.html';
            }
        }
    })

    // 获取用户基本信息
    getUserInfo();
    // 获取退出按钮

    $('.out_btn').on('click', function() {
        layer.confirm('确定要退出?', { icon: 3, title: '提示' }, function(index) {
            // 清空本地存储的token
            localStorage.removeItem('token');
            //    跳转页面
            location.href = '/login.html';
            layer.close(index);
        });
    })
})()


// 获取用户基本信息

function getUserInfo() {
    $.ajax({
        method: 'get',
        url: '/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败！')
            }
            renderAvatar(res.data);
        },
        // 用complete回调函数
        complete: function(res) {
            if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
                localStorage.removeItem('token');
                //    跳转页面
                location.href = '/login.html';
            }
        }
    });
};



function renderAvatar(user) {
    var name = user.nickname || user.username;
    if (user.user_pic !== null) {
        $('.tou_user').attr("src", user.user_pic).show();
        $('.img_user').hide();
    } else {
        $('.tou_user').hide();
        var fname = name[0].toUpperCase();
        $('.img_user').html(fname).show();

    }
}