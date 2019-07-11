// ==UserScript==
// @name         Change webpages' background(改变网页的背景)
// @version      1.0
// @description  Change webpages' background to the picture you choose. Press F2 to change the picture, F4 to switch whether the background displays.(根据你选择的图片更换网页的背景，按F2更换背景，按F4切换是否显示背景。)
// @author       Jeremy Yuan QQ:1223962053
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @match        http://*/*
// @match        https://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @noframes

// ==/UserScript==

(function() {
    'use strict';

    function AddBackground(url) {
        $('body').css('opacity', '0.9');
        $('body').children(':not(style,script,iframe, svg, #initial-loading)').css('opacity', '0.9');
        var background = '<div id="GM_Background" style="background-image: url(' + url + '); position:fixed; top: 0; left: 0; width:100%; height:100%; z-index:-10; background-repeat: no-repeat; background-size: cover; background-color:#fff; opacity:0.6;"></div>';
        $('body').append(background);
    }

    function RemoveBackground() {
        $('body').css('opacity', '');
        $('body').children(':not(style,script,iframe, svg, #initial-loading)').css('opacity', '');
        $('#GM_Background').remove();
    }

    var url = GM_getValue('url');
    if (url != undefined) {
        AddBackground(url);
        $(document).keydown((event) => {
        if (event.which == 115) {
            if ($('body').css('opacity') == '0.9') {
                RemoveBackground();
            } else {
                AddBackground(GM_getValue('url'));
            }
        }
    });
    }
    $(document).keydown((event) => {
        if (event.which == 113) {
            var geturl = prompt('请输入图片的网址，按确定生效。');
            if (geturl != null) {
                if (GM_getValue('url') != undefined) RemoveBackground();
                GM_setValue('url', geturl);
                AddBackground(geturl);
            }
        }
    });
})();
