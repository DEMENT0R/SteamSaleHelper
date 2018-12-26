// ==UserScript==
// @name         SteamSaleHelper
// @namespace    SSH
// @description  Simple button Clicker
// @icon         https://store.steampowered.com/favicon.ico
// @version      0.09
// @author       DEMENT0R
// @downloadURL  https://github.com/DEMENT0R/SteamSaleHelper/raw/master/SSH.user.js
// @updateURL    https://github.com/DEMENT0R/SteamSaleHelper/raw/master/SSH.user.js
// @license      GNU v3
// @noframes
// @match        http://store.steampowered.com/app/*
// @match        https://store.steampowered.com/app/*
// @match        http://store.steampowered.com/explore/*
// @match        https://store.steampowered.com/explore/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(fullCicle, 2000);

    function fullCicle(){
        //start
        if(document.querySelector('#refresh_queue_btn')){
            document.querySelector('#refresh_queue_btn').click();
        }
        //next game
        if(document.querySelector('.next_in_queue_content')){
            document.querySelector('.next_in_queue_content').click();
        }
        //skip adult content
        if(document.querySelector('.btn_next_in_queue_trigger')){
            document.querySelector('.btn_next_in_queue_trigger').click();
        }
        //error code skip
        if(document.querySelector('.error-code')){
            window.location.reload();
        }
    }
})();
