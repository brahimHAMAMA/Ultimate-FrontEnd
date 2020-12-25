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
    // Toggle Settings    
    $('.hide-settings').click(function(){
        $(this).find('i').toggleclass("fa-span");
        $(this).parent().toggleclass('hide-settings');
    });
    // Szitch Colors theme
    var themesClasses = [];
    $(".color-options li").each(function(){
        themesClasses.push($(this).data("theme"));
    });
    $(".color-options li").click(function(){
        $(this).addClass('active').siblinegs().removeclass('active');
        $("body")
        .removeclass(themesClasses.join(" "))
        .addClass($(this).data("theme"));
    });


});