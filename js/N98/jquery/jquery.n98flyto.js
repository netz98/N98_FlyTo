/*
 * must be called on the target
 */
(function($){
    $.fn.flyTo = function(options){
        var defaults = {
            'box'           : '.product-image-zoom',
            'opacity'       : '0.5',
            'destHeight'    : '20px',
            'destWidth'     : '20px'
        };

        var options = $.extend(true, defaults, options);

        var box = null;
        var flyer = null;
        var image = null;

        // initialize
        function init(){
            box = jQuery(options.box);

            var srcImage = $("#image",box);
            srcImageUrl = srcImage.attr("src");
            var html =
                '<img style="display: none; position: absolute; top: 0px; left: 0px; z-index: 99999" id="n98flyto_image" src="' + srcImageUrl + '" alt="Flyer" title="Flyer" />';
            $('body').append(html);

            image = jQuery("#n98flyto_image");
            image.width( box.css("width") );
            image.height( box.css("height") );
            image.css("top", box.offset().top );
            image.css("left", box.offset().left );
            image.css("opacity",options.opacity);
            image.show();
        }

        init();

        return this.each(function(){
            source = box.offset();
            destination = $(this).offset();
            image.animate(
                { top: destination.top,
                  left: destination.left,
                  width: options.destWidth,
                  height: options.destHeight
                },
                1500,
                "swing",
                function() {
                    image.hide();
                }
            );
        });
    }
})(jQuery);
