
const uname = localStorage.getItem('uname')
 
if (uname)
{ 

    document.write(`
    <div class="topnav">
            <div class="topnav_bd w1210 bc">
                <div class="topnav_left" style="line-height: 30px; padding-left: 20px;display:inline-block;">
                    定位：城市
                </div>
                <div class="topnav_right fr">
                    <ul>
                        <li>您好，<a href="user.html">${uname}</a> 欢迎来到京西！[<a href="logout.html">退出</a>]</li>
                        <li class="line">|</li>
                        <li><a href="./order.html">我的订单</a></li>
                        <li class="line">|</li>
                        <li>客户服务</li>
    
                    </ul>
                </div>
            </div>
        </div>
    `)
    
} else {

    document.write(`
    <div class="topnav">
            <div class="topnav_bd w1210 bc">
                <div class="topnav_left" style="line-height: 30px; padding-left: 20px;display:inline-block;">
                    定位：城市
                </div>
                <div class="topnav_right fr">
                    <ul>
                        <li>您好，欢迎来到京西！[<a href="login.html">登录</a>] [<a href="regist.html">免费注册</a>] </li>
                        <li class="line">|</li>
                        <li>我的订单</li>
                        <li class="line">|</li>
                        <li>客户服务</li>
    
                    </ul>
                </div>
            </div>
        </div>
    `)
    
}