<html lang="en">
<head>
    <meta charset="en">
    <title>学生进出校报备结果页</title>
    <script src="jquery.js"></script>
</head>
<style>
    .input {
        padding: 1.7rem 0rem;
        font-size: 2.5rem;
        border-bottom: grey solid 0.03rem;
    }

    .right {
        float: right;
        color: #A1A1A1;
    }

    .pic {
        width: 40rem;
        height: 40rem;
        background-color: #1D8FFF;
        margin: 10rem auto 0;
    }

    .time {
        font-size: 4rem;
        font-weight: bold;
        margin: 3rem auto 0;
        text-align: center;
    }

    .picTitle {
        text-align: center;
        font-size: 7rem;
        color: white;
        line-height: 1.7;
        display: inline-block;
        margin: 0 auto;
        width: 100%;
        position: relative;
        top: 8rem;
    }

    input, button {
        width: 20rem;
        height: 4rem;
        margin: 5rem auto 0;
        border: 1px solid;
    }

    input {
        font-size: 2rem;
    }

    .hidden {
        display: none;
    }
</style>
<body>
<div id="div" style="padding: 0rem 3rem;">
    <div class="input">姓名
        <font id="lxm" class="right">123</font>
    </div>
    <div class="input">学号
        <font id="lxh" class="right">123</font>
    </div>
    <div class="input">学院
        <font id="lxy" class="right">123</font>
    </div>
    <div class="input">年级
        <font id="lnj" class="right">123</font>
    </div>
    <div class="input">班级
        <font id="lbj" class="right">123</font>
    </div>

    <div class="pic">
        <font class="picTitle">出校<br/>已报备</font>
    </div>
    <div class="time"><span id="cg">2016-12-21 12:00:00</span>
<script>
setInterval("cg.innerHTML=new Date().toLocaleString()",1000);
</script></div>
</div>
<script>
  $("#ok").click(function () {
    $("#form").addClass('hidden')
    $("#div").removeClass('hidden')
    $("#lxm").html($('#xm').val())
    $("#lxh").html($('#xh').val())
    $("#lxy").html($('#xy').val())
    $("#lnj").html($('#nj').val())
    $("#lbj").html($('#bj').val())
    $(".time").html($('#sj').val())
  })
</script>
</body>
</html>
