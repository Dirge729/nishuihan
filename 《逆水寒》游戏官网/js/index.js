window.onload = ()=>{

let font_list1 = [
    "../img/header/header_font01.png",
    "../img/header/header_font02.png",
    "../img/header/header_font03.png",
    "../img/header/header_font04.png",
];
let font_list2 = [
    "../img/header/header_font011.png",
    "../img/header/header_font022.png",
    "../img/header/header_font033.png",
    "../img/header/header_font044.png",
];
let share_list1 = [
    "../img/header/header_share01.png",
    "../img/header/header_share02.png",
    "../img/header/header_share03.png",
    "../img/header/header_share04.png",
];
let share_list2 = [
    "../img/header/header_share011.png",
    "../img/header/header_share022.png",
    "../img/header/header_share033.png",
    "../img/header/header_share044.png",
];
let picList = [
    ["../img/content/index/pic/content_jianhu1.jpg","../img/content/index/pic/content_jianhu2.jpg","../img/content/index/pic/content_jianhu3.jpg","../img/content/index/pic/content_jianhu4.jpg"],
    ["../img/content/index/pic/content_sihai1.jpg","../img/content/index/pic/content_sihai2.jpg","../img/content/index/pic/content_sihai3.jpg","../img/content/index/pic/content_sihai4.jpg"],
    ["../img/content/index/pic/content_aogu1.jpg","../img/content/index/pic/content_aogu2.jpg","../img/content/index/pic/content_aogu3.jpg","../img/content/index/pic/content_aogu4.jpg"],
    ["../img/content/index/pic/content_xiaoyao1.jpg","../img/content/index/pic/content_xiaoyao2.jpg","../img/content/index/pic/content_xiaoyao3.jpg","../img/content/index/pic/content_xiaoyao4.jpg"],
];
let picList_small = [
    ["../img/content/index/pic/content_jianhu_small_1.png","../img/content/index/pic/content_jianhu_small_2.png","../img/content/index/pic/content_jianhu_small_3.png","../img/content/index/pic/content_jianhu_small_4.png"],
    ["../img/content/index/pic/content_sihai_small_1.png","../img/content/index/pic/content_sihai_small_2.png","../img/content/index/pic/content_sihai_small_3.png","../img/content/index/pic/content_sihai_small_4.png"],
    ["../img/content/index/pic/content_aogu_small_1.png","../img/content/index/pic/content_aogu_small_2.png","../img/content/index/pic/content_aogu_small_3.png","../img/content/index/pic/content_aogu_small_4.png"],
    ["../img/content/index/pic/content_xiaoyao_small_1.png","../img/content/index/pic/content_xiaoyao_small_2.png","../img/content/index/pic/content_xiaoyao_small_3.png","../img/content/index/pic/content_xiaoyao_small_4.png"],
];
let videoList = [
    "../img/content/index/role/role1.png",
    "../img/content/index/role/role2.png",
    "../img/content/index/role/role3.png",
    "../img/content/index/role/role4.png",
    "../img/content/index/role/role5.png",
    "../img/content/index/role/role6.png",
    "../img/content/index/role/role7.png",
    "../img/content/index/role/role8.png",
];
let videoRole = [
    "https://n.v.netease.com/r/video/20200520/05d8be74-5213-48ea-95ea-b6d4edf12b27.mp4",
    "https://n.v.netease.com/2019/0626/932ba02823b92bb090ea378ebd8bc4e1qt.mp4",
    "https://nie.v.netease.com/r/video/20181019/baeb7548-74c8-422b-a848-48e76afc3ab2.mp4",
    "https://nie.v.netease.com/r/video/20180531/5733f0ef-0b69-47de-b1a2-ee2c8e6f900e.mp4",
    "https://nie.v.netease.com/r/video/20180531/5c19c048-89e5-43cd-8d50-bf0727de735a.mp4",
    "https://nie.v.netease.com/r/video/20180531/42f17bf8-d7f0-48e1-b098-e9030dae301b.mp4",
    "https://nie.v.netease.com/r/video/20180531/7f1ef065-53ea-4e50-8541-bfb7e32657ee.mp4",
    "https://nie.v.netease.com/r/video/20180531/b4f62eea-d7d2-4108-90b2-7a974af1a55b.mp4",
];
let goodsList = [
    "../img/content/index/left/haoli1.png",
    "../img/content/index/left/haoli2.png",
    "../img/content/index/left/haoli3.png"
];

let goodsList1 = "../img/content/index/goods/content_goods_bth1.png";//立即领取——按钮
let goodsList2 = "../img/content/index/goods/content_goods_bth2.png";
let goodsList3 = "../img/content/index/left/goods_bth1.png";//领取江湖成长豪礼——按钮
let goodsList4 = "../img/content/index/left/goods_bth2.png";
let zhuce1 = "../img/content/index/left/zhuce1.png";//立即注册——按钮
let zhuce2 = "../img/content/index/left/zhuce2.png";
let libao_bth1 = "../img/content/index/tankuang/libao_bth1.png";//江湖萌新成长礼——弹框——按钮
let libao_bth2 = "../img/content/index/tankuang/libao_bth2.png";

let menu_font = document.getElementsByClassName("font_img");
let menu_share = document.getElementsByClassName("share_img");

let content_pic = document.querySelectorAll("content_pic");
let pic_big_li = document.getElementsByClassName("pic_big_li")[0];
let pic_small_li = document.getElementsByClassName("pic_small_li");
let pic_small = document.querySelectorAll(".pic_small li");
let pic_title_li = document.getElementsByClassName("pic_title_li");
let p = document.querySelectorAll(".pic_title_li p");

let content_goods = document.getElementsByClassName("content_goods")[0].getElementsByTagName("img");

let role_video_img = document.getElementsByClassName("role_video_img")[0];
let role_title_li = document.querySelectorAll(".role_title ul li");
let role_bth = document.querySelectorAll(".role_bth");
// let role_bth_p = document.querySelectorAll(".role_bth p");

let video_btn=document.getElementsByClassName('video-btn');
let video_shut=document.getElementsByClassName('video-shut');
let shadow=document.getElementsByClassName('shadow');
let video = document.getElementsByClassName("video");

let end_share = document.getElementsByClassName("end_share");

let left_goods_img = document.querySelectorAll(".left_goods img");
let left_goods_bth1 = document.querySelectorAll(".left_goods_bth1 img");

let pop_haoli=document.getElementsByClassName('pop_haoli');
let pop_haoli_left = document.querySelectorAll(".pop_haoli_left img");
let pop_haoli_shut = document.querySelectorAll(".pop_haoli_shut img");
let right_register_bth1 = document.querySelectorAll(".right_register img");

let left_register_bth1 = document.querySelectorAll(".left_register img");
let title = document.title;

// let titleInt = '';//标题滚动
let picInt = '';//卖点图的轮播
let roleInt = '';//角色的轮播
let goodsInt = '';//豪礼的轮播

let pic_big_next = 0;//大轮播
let pic_small_next = 0;//小轮播
let video_next = 0;//角色视频
let pic_status = true;//卖点图分类文字是否点击
let goods_next = 0;//多重豪礼

var msg="《逆水寒》官方网站 - 二周年资料片“万变不离玄机” – 网易旗舰级武侠游戏！";


    // =============第一栏菜单：官网首页、下载游戏、账号注册、成长豪礼========
    for(let i=1;i<menu_font.length;i++){
        menu_font[i].src = font_list1[i];
    }
    for(let i=0;i<menu_font.length;i++){
        menu_font[i].onmouseover = ()=>{
            menu_font[i].src = font_list2[i];
        }
    }
    for(let i=1;i<menu_font.length;i++){
        menu_font[i].onmouseout = ()=>{
            menu_font[i].src = font_list1[i];
        }
    }
// =============分享到：微信、易信、新浪、QQ空间=================
    for(let i=0;i<menu_share.length;i++){
        menu_share[i].src = share_list1[i];
    }
    for(let i=0;i<menu_share.length;i++){
        menu_share[i].onmouseover = ()=>{
            menu_share[i].src = share_list2[i];
        }
    }
    for(let i=0;i<menu_share.length;i++){
        menu_share[i].onmouseout = ()=>{
            menu_share[i].src = share_list1[i];
        }
    } // console.log(content_goods.length);

    
// =============立即领取 鼠标移动=================
for(let i=0;i<content_goods.length;i++){
    content_goods[i].src = goodsList1;
}
for(let i=0;i<content_goods.length;i++){
    content_goods[i].onmouseover = ()=>{
        content_goods[i].src = goodsList2;
    }
}
for(let i=0;i<content_goods.length;i++){
    content_goods[i].onmouseout = ()=>{
        content_goods[i].src = goodsList1;
    }
}
// =============立即领取   点击按钮=================
for(let i=0;i<content_goods.length;i++){
    content_goods[i].onclick = ()=> {
        pop_haoli[0].style.display='block';
        shadow[0].style.display='block';
        console.log(video[0].src);
    }
}
// =============卖点图=================
for(let i=0;i<p.length;i++){
    p[i].onmouseover = ()=>{
        p[i].className = "pic_title_ps";
    }
}
for(let i=0;i<p.length;i++){
    p[i].onmouseout = ()=>{
        if(!pic_status){
            p[i].className = "";
        }
        pic_status = false;
    }
}

// =============角色视频=================
for(let i=0;i<role_title_li.length;i++){
    role_title_li[i].onmouseover = ()=>{
        video_next = i;
        role_video_img.src = videoList[video_next];
    }
}

// ==========角色按钮============
// role_bth[0].onmouseover = ()=>{
    // console.log("视频进入");
//     clearInterval(roleInt);
//     role_bth_p[0].className = "bth";
// }
// role_bth[0].onmouseout = ()=>{
    // console.log("视频移出");
//     roleBig();
//     role_bth_p[0].className = "";
// }

// ===========点击角色播放视频  弹框=======
role_bth[0].onclick = ()=> {
    video_btn[0].style.display='block';
    shadow[0].style.display='block';
    video[0].src = videoRole[video_next];
    console.log(video[0].src);
}
video_shut[0].onclick= ()=> {
    video_btn[0].style.display='none';
    shadow[0].style.display='none';
    video[0].src = "";
}

// =============header_share_end 分享到：微信、易信、新浪、QQ空间=================
for(let i=0;i<end_share.length;i++){
    end_share[i].src = share_list1[i];
}
for(let i=0;i<end_share.length;i++){
    end_share[i].onmouseover = ()=>{
        end_share[i].src = share_list2[i];
    }
}
for(let i=0;i<end_share.length;i++){
    end_share[i].onmouseout = ()=>{
        end_share[i].src = share_list1[i];
    }
}
// =====================领取多重豪礼===============
left_goods_bth1[0].onmouseover = ()=>{
    left_goods_bth1[0].src = goodsList3;
}
left_goods_bth1[0].onmouseout = ()=>{
    left_goods_bth1[0].src = goodsList4;
}
// ===========点击领取江湖成长豪礼 弹出 弹窗=======
left_goods_bth1[0].onclick = ()=> {
    pop_haoli[0].style.display='block';
    shadow[0].style.display='block';
    console.log(video[0].src);
}

// =====================领取江湖成长豪礼  弹框中的按钮===============
pop_haoli_left[0].onmouseover = ()=>{
    pop_haoli_left[0].src = libao_bth2;
}
pop_haoli_left[0].onmouseout = ()=>{
    pop_haoli_left[0].src = libao_bth1;
}
// =============豪礼弹框  退出按钮=========
pop_haoli_shut[0].onmouseover = ()=>{
    pop_haoli_shut[0].className = "shut_over";
}
pop_haoli_shut[0].onmouseout = ()=>{
    pop_haoli_shut[0].className = "shut_out";
}
pop_haoli_shut[0].onclick = ()=>{
    pop_haoli[0].style.display='none';
    shadow[0].style.display='none';
}
// =====================豪礼弹框  立即注册===============
right_register_bth1[0].onmouseover = ()=>{
    right_register_bth1[0].src = zhuce1;
}
right_register_bth1[0].onmouseout = ()=>{
    right_register_bth1[0].src = zhuce2;
}

// =====================立即注册===============
left_register_bth1[0].onmouseover = ()=>{
    left_register_bth1[0].src = zhuce1;
}
left_register_bth1[0].onmouseout = ()=>{
    left_register_bth1[0].src = zhuce2;
}

    picBig();//卖点图
    roleBig();//角色视频
    leftGoods();//领取多重豪礼
    // scrollTitle();//标题滚动

    // ================标题栏滚动显示效果======
	// function scrollTitle(){
	// 	document.title=msg;
	// 	msg=msg.substring(1,msg.length)+msg.substring(0,1);
	// }
    // setInterval("scrollTitle()",1000);
    
    // function scrollTitle() {  
    //     titleInt = setInterval(()=>{
    //         animate_title();
    //     },1000);
    // }
    // function animate_title() {
    //     // title=msg;
    //     title=title.substring(1,title.length)+title.substring(0,1);
    //     console.log(title);
    // }
    

    //每3秒自动切换一次卖点图
    function picBig(){
        picInt = setInterval(()=>{
            animate_picBig();
        },3000);
    }
    //切换卖点图
    function animate_picBig(){
        pic_small_next ++;
        if(pic_small_next == 4){
            pic_small_next = 0;
            pic_big_next ++;
            if(pic_big_next == 4){
                pic_big_next = 0;
            } 
            small_pic();          
        }
        //卖点图的分类文字 
        for(let i=0;i<p.length;i++){
            if(pic_big_next === i){
                p[i].className = "pic_title_ps";
            } else {
                p[i].className = "";
            }    
        } 
        //卖点图的小图 
        for(let i=0;i<pic_small.length;i++){
            if(pic_small_next === i){
                pic_small[i].className = "pic_small_sty";
            } else {
                pic_small[i].className = "";
            }    
        }      
        pic_big_li.src = picList[pic_big_next][pic_small_next];
        // console.log("123456");       
    }
    //绑定点击卖点图文字的事件
    for(let i=0;i<pic_title_li.length;i++ ){
        pic_title_li[i].onclick = ()=>{
            pic_status = true ;
            pic_big_next = i;
            pic_small_next = 0;
            pic_big_li.src = picList[pic_big_next][pic_small_next];   
            //卖点图的分类文字 
            for(let i=0;i<p.length;i++){
                if(pic_big_next === i){
                    p[i].className = "pic_title_ps";
                } else {
                    p[i].className = "";
                }    
            }
            //卖点图的小图 
            for(let i=0;i<pic_small.length;i++){
                if(pic_small_next === i){
                    pic_small[i].className = "pic_small_sty";
                } else {
                    pic_small[i].className = "";
                }    
            }  
            small_pic();
        }
    }
    //绑定小卖点图
    function small_pic(){
        for(let i=0;i<picList_small[pic_big_next].length;i++){
            pic_small_li[i].src = picList_small[pic_big_next][i];
        }
    }
    //绑定点击小卖点图的事件
    for(let i=0;i<pic_small.length;i++ ){
        pic_small[i].onclick = ()=>{

            console.log("小卖点图"+i);
            // pic_status = true ;
            pic_small_next = i;
            pic_big_li.src = picList[pic_big_next][pic_small_next];   
            //卖点图的小图 
            for(let i=0;i<pic_small.length;i++){
                if(pic_small_next === i){
                    pic_small[i].className = "pic_small_sty";
                } else {
                    pic_small[i].className = "";
                }    
            }  
            small_pic();
        }
    }

    //每3秒自动切换一次角色视频
    function roleBig(){
        roleInt = setInterval(()=>{
            animate_videoBig();
        },5000);
    }
    //切换角色视频
    function animate_videoBig(){
        video_next++;
        if(video_next == videoList.length){
            video_next=0;
        }
        // console.log(video_next);
        role_video_img.src = videoList[video_next];
        // console.log(role_video);
    }
    // 绑定领取多重豪礼，每3秒自动切换一次豪礼
    function leftGoods(){
        goodsInt = setInterval(()=>{
            animate_goodsBig();
        },2000);
    }
    //切换豪礼
    function animate_goodsBig(){
        goods_next++;
        if(goods_next == goodsList.length){
            goods_next=0;
        }
        // console.log(video_next);
        left_goods_img[0].src = goodsList[goods_next];
        // console.log(role_video);
    }
}