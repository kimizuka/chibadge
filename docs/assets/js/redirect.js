;(function() {
    "use strict";

    var NEW_URL       = "http://chibadge.kimizuka.fm",
        OLD_HOST_NAME = "chibadge.kimizuka.org";

    if (location.hostname === OLD_HOST_NAME) {
        location.replace(NEW_URL);
    }

})();