;(function(win, doc) {

    "use strict";

    init();

    function init() {
        var domNameList = [
                "section",
                "nav",
                "article",
                "aside",
//              "hgroup",
                "header",
                "footer",
                "figure",
                "figcaption",
                "time",
                "mark",
                "ruby",
                "rt",
                "rp",
                "video",
                "audio",
                "source",
                "canvas",
                "datalist",
                "keygen",
                "output",
                "progress",
                "meter",
                "details",
                "summary",
                "command",
                "main"
            ];

        foreach(domNameList, createElement);
    }

    /**
     *  新しいエレメントをつくります
     *  @param {string} domName // エレメント名
     */
    function createElement(domName) {
        if (typeof domName !== "string") {
            return;
        }
        doc.createElement(domName);
    }

    /**
     *  配列の要素を第1引数に指定して関数をどんどん実行します
     *  @param  {array}    array    // 対象配列
     *  @param  {function} callback // 実行関数
     *  @param  {object}   opt_this // thisに指定する値
     *  @param  {array}    opt_arg  // 第2引数以降を要素に持った配列
     */
    function foreach(array, callback, opt_this) {
        if (typeof array !== "object" || typeof callback !== "function") {
            return;
        }
        var self     = opt_this || this,
            newArray = copyArr(array),
            length   = newArray.length,
            i;

        for (i = 0; i < length; i++) {
            callback.call(self, newArray[i], i, newArray);
        }

        self     = null;
        newArray = null;
        length   = null;
        i        = null;
    }

})(this, document);