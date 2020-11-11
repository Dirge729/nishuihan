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

    let two_gift = document.querySelectorAll(".two_gift li");
    let two_gift_a = document.querySelectorAll(".two_gift_a li img");

    let grow_1_right_login = document.querySelectorAll(".grow_1_right_login p");
    let grow_1_right_register = document.querySelectorAll(".grow_1_right_register");

    let prow_2_look = document.querySelectorAll(".prow_2_look p");
    let look_down = document.querySelectorAll(".look_down");
    let prow_2_get = document.querySelectorAll(".prow_2_get");
    let grow_gift = document.querySelectorAll(".grow_gift");
    let new_gift = document.querySelectorAll(".new_gift");

    let content = document.querySelectorAll(".content");



    // =============第一栏菜单：官网首页、下载游戏、账号注册、成长豪礼========
for(let i=0;i<menu_font.length;i++){
    if(i!=3){
        menu_font[i].src = font_list1[i];
    }
}
for(let i=0;i<menu_font.length;i++){
    menu_font[i].onmouseover = ()=>{
        menu_font[i].src = font_list2[i];
    }
}
for(let i=0;i<menu_font.length;i++){
    if(i!=3){
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
} 

// =================成长豪礼 (江湖成长礼包，预约新服有礼) 两个礼包========
for(let i=0;i<two_gift.length;i++){
    two_gift[i].onclick = ()=>{
        switch(i){
            case 0:{
                two_gift_a[0].src = "../img/content/gift/li_bg.png";
                two_gift_a[1].src = "";

                two_gift[0].className = "two_gift_11";
                two_gift[1].className = "two_gift_2";

                grow_gift[0].style.display = "block";
                new_gift[0].style.display = "none";

                content[0].style.height = "2900px";

                grow_1_right_login[0].style.display = "block";
                grow_1_right_register[0].style.display = "none";

                prow_2_look[0].style.display = "block";
                look_down[0].style.display = "block";
                prow_2_get[0].style.display = "none";
                break;
            }case 1:{
                two_gift_a[0].src = "";
                two_gift_a[1].src = "../img/content/gift/li_bg.png";

                two_gift[0].className = "two_gift_1";
                two_gift[1].className = "two_gift_22";

                grow_gift[0].style.display = "none";
                new_gift[0].style.display = "block";

                content[0].style.height = "880px";
                break;
            }
        }
    }
}
// =================成长豪礼 (江湖成长礼包，预约新服有礼)  我要领取按钮========
grow_1_right_login[0].onmouseover = ()=>{
    grow_1_right_login[0].className = "p2";
}
grow_1_right_login[0].onmouseout = ()=>{
    grow_1_right_login[0].className = "p1";
}
grow_1_right_login[0].onclick = ()=>{
    grow_1_right_login[0].style.display = "none";
    grow_1_right_register[0].style.display = "block";
}
// =================成长豪礼 (江湖成长礼包，预约新服有礼)  查看详情领取礼包========
prow_2_look[0].onmouseover = ()=>{
    prow_2_look[0].className = "look_p2";
}
prow_2_look[0].onmouseout = ()=>{
    prow_2_look[0].className = "look_p1";
}
prow_2_look[0].onclick = ()=>{
    prow_2_look[0].style.display = "none";
    look_down[0].style.display = "none";
    prow_2_get[0].style.display = "block";
}


}