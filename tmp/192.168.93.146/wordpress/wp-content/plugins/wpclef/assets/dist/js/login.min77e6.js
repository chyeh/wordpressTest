/*! Clef for WordPress - v2.2.1
 * http://getclef.com
 * Licensed GPLv2+ */
(function(e){var n,o;return n=function(){return e(".clef-login-form.clef-login-form-embed").addClass("clef-closed"),!1},o=function(){return e(".clef-login-form.clef-login-form-embed").removeClass("clef-closed"),!1},e(function(){return e(".close-overlay").click(n),e(".open-overlay").click(o),e(".overlay-info .open").click(function(){return e(".overlay-info").removeClass("closed")}),e(".clef-embed-container").length?e("iframe").on("load",function(){return e(this).attr("src").match("clef.io/iframes/qr")?(e(".spinner-container").hide(),setTimeout(function(){return e(".clef-embed-container").slideDown()})):void 0}):void 0})}).call(this,jQuery);