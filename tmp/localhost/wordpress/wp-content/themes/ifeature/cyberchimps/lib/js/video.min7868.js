jQuery(document).ready(function(e){jQuery("iframe[src^='http://www.youtube.com']").wrap("<div class='flex-video' />");jQuery("iframe[src^='//www.youtube.com']").wrap("<div class='flex-video' />");jQuery("iframe[src^='http://player.vimeo.com']").wrap("<div class='flex-video' />");jQuery("iframe[src^='//player.vimeo.com']").wrap("<div class='flex-video' />");jQuery("embed[type^='application/x-shockwave-flash']").wrap("<div class='flex-video' />")})