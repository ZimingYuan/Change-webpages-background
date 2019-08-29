// ==UserScript==
// @name         Change webpages' background(改变网页的背景)
// @version      2.0
// @description  Change webpages' background to the picture you choose. Press F2 to change the picture, F4 to change the opacity of the foreground elements.(根据你选择的图片更换网页的背景，按F2更换背景，按F4改变前景元素的透明度。)
// @author       Jeremy Yuan QQ:1223962053
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @match        http://*/*
// @match        https://*/*
// @match        file:///*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @noframes

// ==/UserScript==

(function() {
    'use strict';

    let url = GM_getValue('url');
    let opacity = GM_getValue('opacity');
    if (opacity == undefined) opacity = '0.8';

    function ChangeOpacity() {
        $('body').children('#GM_Background').css('opacity', (1 - parseFloat(opacity)).toString());
    }

    function AddValuebar() {
        GM_addStyle('#GM_ValuebarContainer { position: fixed; top: 40px; left: 45%; width: 15%; height: 20px; background-color: #66cccc; display: none; border: 0.5px solid; border-radius: 8px; z-index: 10000; }');
        GM_addStyle('#GM_Valuebar { -webkit-appearance: none; transform: translateX(5%); width: 91%; height: 100%; background-color: #0000; }');
        GM_addStyle('#GM_Valuebar::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; transform: translateY(-3px); border-radius: 7px; border: 0.5px solid #000; background-color: #ff99cc; }');
        GM_addStyle('#GM_Valuebar::-webkit-slider-runnable-track { -webkit-appearance: none; height: 8px; border-radius: 4px; border: 0.5px solid #000; background-color: #ccff66; }');
        GM_addStyle('#GM_Background { position: fixed; top: 0; left: 0; z-index: 9999; pointer-events:none; }');
        let valuebar = '<div id="GM_ValuebarContainer"><input type="range" id="GM_Valuebar" min="0.0" max="1.0" step="0.05" value="' + opacity + '"></div>';
        $('body').append(valuebar);
        $('#GM_Valuebar').change(() => {
            opacity = document.getElementById('GM_Valuebar').value.toString();
            GM_setValue('opacity', opacity);
            ChangeOpacity(opacity);
        });
        $(document).keydown((event) => {
            if (event.which == 115) {
                let tag = $('#GM_ValuebarContainer');
                if (tag.css('display') == 'none') tag.css('display', 'block'); else tag.css('display', 'none');
            }
        });
    }

    function DrawBackground(url) {
        let canvas = $('#GM_Background')[0];
        canvas.width = screen.width;
        canvas.height = screen.height;
        let ctx = canvas.getContext('2d');
        let img = new Image(); img.src = url;
        img.onload = () => {
            let scale = window.devicePixelRatio / 1.25;
            ctx.scale(screen.width / img.width / scale, screen.height / img.height / scale);
            ctx.drawImage(img, 0, 0);
        };
    }

    function AddBackground() {
        let background = '<canvas id="GM_Background"></canvas>';
        $('body').append(background);
        DrawBackground(url);
        ChangeOpacity(opacity);
        AddValuebar();
    }

    if (url != undefined) {
        AddBackground();
    }

    $(document).keydown((event) => {
        if (event.which == 113) {
            var geturl = prompt('请输入图片的网址，按确定生效。');
            if (geturl != null) {
                GM_setValue('url', geturl);
                if (url == undefined) { url = geturl; AddBackground(); }
                else { url = geturl; DrawBackground(url); }
            }
        }
    });
})();
