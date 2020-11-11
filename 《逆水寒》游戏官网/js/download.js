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

let menu_font = document.getElementsByClassName("font_img");
let menu_share = document.getElementsByClassName("share_img");

let download_one_gbx = document.querySelectorAll(".download_one ul li");

let yinghua = document.getElementById("yinghua");
let dasongyinghua = document.getElementById("dasongyinghua");
// let yinghua1 = document.querySelectorAll("yinghua1");
let UU = document.getElementById("UU");

let content = document.querySelectorAll(".content");
let three_download = document.querySelectorAll(".three_download li");
let download_one = document.querySelectorAll(".download_one");
let download_two = document.querySelectorAll(".download_two");
let download_three = document.querySelectorAll(".download_three");
let install = document.querySelectorAll(".install");
let shadow = document.querySelectorAll(".shadow");
let install_shut = document.querySelectorAll(".install_shut img");


// =============第一栏菜单：官网首页、下载游戏、账号注册、成长豪礼========
for(let i=0;i<menu_font.length;i++){
    if(i!=1){
        menu_font[i].src = font_list1[i];
    }
}
for(let i=0;i<menu_font.length;i++){
    menu_font[i].onmouseover = ()=>{
        menu_font[i].src = font_list2[i];
    }
}
for(let i=0;i<menu_font.length;i++){
    if(i!=1){
        menu_font[i].onmouseout = ()=>{
            menu_font[i].src = font_list1[i];
        }
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
// ===============点击客户端、补丁、大宋映画，分别打开各自的下载页面=======
for(let i=0;i<three_download.length;i++){
    three_download[i].onclick = ()=>{
        for(let j=0;j<three_download.length;j++){
            if(j==i){
                three_download[j].className = "three_download_li";
            }else{
                three_download[j].className = "";
            }
        }
        switch(i){
            case 0:{
                content[0].style.height = "1800px";
                download_one[0].style.display = "block";
                download_two[0].style.display = "none";
                download_three[0].style.display = "none";
                break;
            }
            case 1:{
                content[0].style.height = "19100px";
                download_one[0].style.display = "none";
                download_two[0].style.display = "block";
                download_three[0].style.display = "none";
                break;
            }
            case 2:{
                content[0].style.height = "800px";
                download_one[0].style.display = "none";
                download_two[0].style.display = "none";
                download_three[0].style.display = "block";
                break;
            }
        }
    }
}

//======客户端下载的三个版本=======
for(let i=0;i<download_one_gbx.length;i++){
    download_one_gbx[i].onmouseover = ()=>{
        switch(i){
            case 0: {
                download_one_gbx[i].className = "guanfang2";
                break;
            }
            case 1:{
                download_one_gbx[i].className = "biaozhun2";
                break;
            }
            case 2:{
                download_one_gbx[i].className = "xianyu2";
                break;
            }
        }
    }
}
for(let i=0;i<download_one_gbx.length;i++){
    download_one_gbx[i].onmouseout = ()=>{
        switch(i){
            case 0: {
                download_one_gbx[i].className = "guanfang1";
                break;
            }
            case 1:{
                download_one_gbx[i].className = "biaozhun1";
                break;
            }
            case 2:{
                download_one_gbx[i].className = "xianyu1";
                break;
            }
        }
    }
}
// =============大宋映画的两个下载按钮=========
yinghua.onmouseover = ()=>{
    yinghua.className = "yinghua2";
}
yinghua.onmouseout = ()=>{
    yinghua.className = "yinghua1";
}
UU.onmouseover = ()=>{
    UU.className = "UU2";
}
UU.onmouseout = ()=>{
    UU.className = "UU1";
}

// =======弹框   大宋映画下载按钮=======
dasongyinghua.onmouseover = ()=>{
    dasongyinghua.className = "dasongyinghua1";
}
dasongyinghua.onmouseout = ()=>{
    dasongyinghua.className = "dasongyinghua2";
}

// =======点击  大宋映画下载  打开弹框=====
yinghua.onclick = function(){
    console.log("123456789");
    install[0].style.display = "block";
    shadow[0].style.display = "block";
}
// =============大宋映画下载弹框  退出按钮=========
install_shut[0].onmouseover = ()=>{
    install_shut[0].className = "shut_over";
}
install_shut[0].onmouseout = ()=>{
    install_shut[0].className = "shut_out";
}
install_shut[0].onclick = ()=>{
    install[0].style.display = "none";
    shadow[0].style.display = "none";
}





}