// ==UserScript==
// @name         Change webpages' background(改变网页的背景)
// @version      1.0
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
    if (opacity == undefined) opacity = '0.9';

    function ChangeOpacity() {
        $('body').children(':not(#GM_ValuebarContainer, #GM_Background, style, script, iframe, svg, #initial-loading, #isolated)').css('opacity', opacity);
    }

    function AddValuebar() {
        GM_addStyle('#GM_ValuebarContainer { position: fixed; top: 40px; left: 45%; width: 15%; height: 20px; background-color: #66cccc; display: none; border: 0.5px solid; border-radius: 8px; z-index: 100; }');
        GM_addStyle('#GM_Valuebar { -webkit-appearance: none; transform: translateX(5%); width: 91%; height: 100%; background-color: #0000; }');
        GM_addStyle('#GM_Valuebar::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; transform: translateY(-3px); border-radius: 7px; border: 0.5px solid #000; background-color: #ff99cc; }');
        GM_addStyle('#GM_Valuebar::-webkit-slider-runnable-track { -webkit-appearance: none; height: 8px; border-radius: 4px; border: 0.5px solid #000; background-color: #ccff66; }');
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

    function AddBackground() {
        $('body').css('opacity', '0.999');
        GM_addStyle('#GM_Background { background-image: url(' + url + '); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -10; background-repeat: no-repeat; background-size: cover; background-color: #fff; opacity: 0.6; }');
        let background = '<div id="GM_Background"></div>';
        $('body').append(background);
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
                else { url = geturl; $('#GM_Background').css('background-image', 'url(' + url + ')'); }
            }
        }
    });
})();
