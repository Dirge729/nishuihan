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



    // =============第一栏菜单：官网首页、下载游戏、账号注册、成长豪礼========
for(let i=0;i<menu_font.length;i++){
    if(i!=2){
        menu_font[i].src = font_list1[i];
    }
}
for(let i=0;i<menu_font.length;i++){
    menu_font[i].onmouseover = ()=>{
        menu_font[i].src = font_list2[i];
    }
}
for(let i=0;i<menu_font.length;i++){
    if(i!=2){
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

}