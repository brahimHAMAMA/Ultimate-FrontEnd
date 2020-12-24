/* global console, $*/
$(function(){
    "use strict";
    $('.toggle-sidebar').click(function(){
        $('.content-area').toggleclass('no-sidebar');
    });
    // Toggle submenu
    $(".toggle-submenu").on("click",function(){
        $(this).find("fa-angle-right").toggleclass("down");
        $(this).next(".child-links").slideToggle();
    });
    // Toggle fullscreen
    //$(".toggle-fullscreen").on("click",function(){

    //)};
    
    $('.hide-settings').click(function(){
        $(this).find('i').toggleclass("fa-span");
        $(this).parent().toggleclass('hide-settings');
    });
});