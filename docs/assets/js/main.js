;(function(win, doc, $){

    "use strict";

    var $title  = $("title"),
        $body   = $(doc.body),
        $iPhone = $(".body"),
        $badgeH = $body.find(".badge.shiro"),
        $scoreH = $badgeH.find(".score"),
        $badgeA = $body.find(".badge.kuro"),
        $scoreA = $badgeA.find(".score"),
        ua      = win.navigator.userAgent,
        isSetup = false,
        API     = "http://chibadge.kimizuka.fm/api/game/score";

    $(init);

    function init() {
        checkScore();

        new ScrollBtn($("#btnShiro"));
        new ScrollBtn($("#btnVS"));
        new ScrollBtn($("#btnKuro"));
    }

    function setup() {
        isSetup = true;
        win.scrollTo(0, 1);

        if (/iPhone/.test(ua) || /iPad/.test(ua) || /iPod/.test(ua)) {
            $title.html("VS");
        }
    }

    function checkScore() {
        handleCheckSocoreSuccess({score: {
            chiba: 4,
            rival: 1
        }});
        // $badgeH.addClass("invisible");
        // $badgeA.addClass("invisible");

        // $.ajax({
        //     type: "GET",
        //     url:  API,
        //     success: handleCheckSocoreSuccess,
        //     error:   handleCheckSocoreError
        // });
    }

    function handleCheckSocoreSuccess(data) {
        writeScore(data);
        if (!isSetup) {
            setup();
        }
    }

    function handleCheckSocoreError(data) {
        writeScore();
        if (!isSetup) {
            setup();
        }
    }

    function writeScore(data) {
        var score = (!!data) ? data.score : null;

        if (!!score) {
            $scoreH.html(score.chiba);
            $scoreA.html(score.rival);
            $badgeH.removeClass("invisible");
            $badgeA.removeClass("invisible");
        }
    }

    function ScrollBtn($elm) {
        var $base = $("html, body");

        init();

        function init() {
            $elm.on('click', handleClick);
        }

        function handleClick(evt) {
            var $target = $(this),
                currentScrollTop = $base.scrollTop(),
                targetScrollTop  = $($target.attr("href")).offset().top,
                scrollValue      = Math.abs(currentScrollTop - targetScrollTop),
                SPEED = 0.25;

            setTimeout(function() {
                $base.animate({scrollTop: targetScrollTop}, scrollValue * SPEED);
            }, 0);

            evt.preventDefault();
        }
    }

})(this, document, $);