/**
 * netz98 FlyTo magento module
 *
 * LICENSE
 *
 * Copyright © 2011.
 * netz98 new media GmbH. Alle Rechte vorbehalten.
 *
 * Die Nutzung und Weiterverbreitung dieser Software in kompilierter oder nichtkompilierter Form, mit oder ohne Veränderung, ist unter den folgenden Bedingungen zulässig:
 *
 * 1. Weiterverbreitete kompilierte oder nichtkompilierte Exemplare müssen das obere Copyright, die Liste der Bedingungen und den folgenden Verzicht im Sourcecode enthalten.
 * 2. Alle Werbematerialien, die sich auf die Eigenschaften oder die Benutzung der Software beziehen, müssen die folgende Bemerkung enthalten: "Dieses Produkt enthält Software, die von der netz98 new media GmbH entwickelt wurde."
 * 3. Der Name der netz98 new media GmbH darf nicht ohne vorherige ausdrückliche, schriftliche Genehmigung zur Kennzeichnung oder Bewerbung von Produkten, die von dieser Software abgeleitet wurden, verwendet werden.
 * 4. Es ist Lizenznehmern der netz98 new media GmbH nur dann erlaubt die veränderte Software zu verbreiten, wenn jene zu den Bedingungen einer Lizenz, die eine Copyleft-Klausel enthält, lizenziert wird.
 *
 * Diese Software wird von der netz98 new media GmbH ohne jegliche spezielle oder implizierte Garantien zur Verfügung gestellt. So übernimmt die netz98 new media GmbH keine Gewährleistung für die Verwendbarkeit der Software für einen speziellen Zweck oder die generelle Nutzbarkeit. Unter keinen Umständen ist netz98 haftbar für indirekte oder direkte Schäden, die aus der Verwendung der Software resultieren. Jegliche Schadensersatzansprüche sind ausgeschlossen.
 *
 *
 * Copyright © 2011
 * netz98 new media GmbH. All rights reserved.
 *
 * The use and redistribution of this software, either compiled or uncompiled, with or without modifications are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of compiled or uncompiled source must contain the above copyright notice, this list of the conditions and the following disclaimer:
 * 2. All advertising materials mentioning features or use of this software must display the following acknowledgement: “This product includes software developed by the netz98 new media GmbH, Mainz.”
 * 3. The name of the netz98 new media GmbH may not be used to endorse or promote products derived from this software without specific prior written permission.
 * 4. License holders of the netz98 new media GmbH are only permitted to redistribute altered software, if this is licensed under conditions that contain a copyleft-clause.
 * This software is provided by the netz98 new media GmbH without any express or implied warranties. netz98 is under no condition liable for the functional capability of this software for a certain purpose or the general usability. netz98 is under no condition liable for any direct or indirect damages resulting from the use of the software. Liability and Claims for damages of any kind are excluded.
 *
 * @copyright Copyright (c) 2011 netz98 new media GmbH (http://www.netz98.de)
 * @author netz98 new media GmbH <info@netz98.de>
 * @category N98
 * @package N98_FlyTo
 */

/*
 * Animates the product image flying to (for example) the cart.
 * Must be called on the target.
 */
(function($){
    $.fn.flyTo = function(options){
        var defaults = {
            'box'           : '.product-image',
            'opacity'       : '0.5',
            'duration'      : 4500,
            'targetHeight'    : '20px',
            'targetWidth'     : '20px'
        };

        var options = $.extend(true, defaults, options);

        var box = null;
        var flyer = null;
        var image = null;

        // initialize
        function init(){
            box = $(options.box);

            var srcImage = $("img",box);

            srcImageUrl = srcImage.attr("src");
            var html =
                '<img style="display: none; position: absolute; top: 0px; left: 0px; z-index: 99999" id="n98flyto_image" src="' + srcImageUrl + '" alt="Flyer" title="Flyer" />';
            $('body').append(html);

            image = $("#n98flyto_image");
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
            target = $(this).offset();
            image.animate(
                { top: target.top,
                  left: target.left,
                  width: options.targetWidth,
                  height: options.targetHeight
                },
                options.duration,
                "swing",
                function() {
                    image.hide();
                }
            );
        });
    }
})(jQuery);
