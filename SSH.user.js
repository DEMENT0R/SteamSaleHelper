// ==UserScript==
// @name         SteamSaleHelper
// @namespace    SSH
// @description  Simple button Clicker
// @version      0.05
// @author       DEMENT0R
// @downloadURL  https://github.com/DEMENT0R/SteamSaleHelper/raw/master/SSH.user.js
// @updateURL    https://github.com/DEMENT0R/SteamSaleHelper/raw/master/SSH.user.js
// @license      GNU v3
// @noframes
// @match        http://store.steampowered.com/*
// @match        https://store.steampowered.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    if(document.querySelector('.next_in_queue_content')){
        document.querySelector('.next_in_queue_content').click();
    }
    /*
    setTimeout(function(){
        document.querySelector('.next_in_queue_content').click();
    }, 1);
    */
})();
