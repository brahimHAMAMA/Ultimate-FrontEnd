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
});
const myMap = new Map();

const mySet = new Set();