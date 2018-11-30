// DOCS for the meat of this: http://www.developerdrive.com/2013/05/creating-a-jquery-gallery-for-flickr/
(function( $ ) {
    $.fn.flickr = function(options) {
        var url = 'https://api.flickr.com/services/rest/?jsoncallback=?';

        var settings = $.extend( {
            api_key: 'aeda2b39f3ef21354552421c8a04241c', // TODO KYLE replace this with your own api key
            user_id: '162412704@N08', // Kyle's user id
            photoset_id: '72157704053325964', // Kyle's photoset id
            per_page: 100
        }, options);

        function enlargePhoto(event) {
            var target = $(event.target);

            if(target.is('img')) {
                var url = target.attr('data-url');

                // build an overlay and a photo to go on top of it
                // TODO add right and left arrows
                var overlayPhoto =
                    '<div class="overlayPhoto">' +
                        '<div class="overlay"></div>' +
                        '<div class="photo">' +
                            '<img src="' + url + '" />' +
                        '</div>' +
                    '</div>';

                // DOCS https://stackoverflow.com/questions/12454858/display-larger-version-of-image-when-image-clicked
                $('body').append(overlayPhoto);
                $('.photo').animate({
                    opacity: 1
                },400); // duration of fade-in animation in ms

                var overlay = $('.overlayPhoto').find('.overlay');
                overlay.on('click', enlargePhoto);
            }
        }

        return this.each(function() {

            var gallery = $(this);
            gallery.addClass('flickr-gallery');
            gallery.append('<div class="viewport"></div><div class="browser"><ul></ul></div><div class="clear"></div>');

            $.getJSON(url, {
                method: 'flickr.photosets.getPhotos', // DOCS https://www.flickr.com/services/api/flickr.photosets.getPhotos.html
                api_key: settings.api_key,
                user_id: settings.user_id,
                photoset_id: '72157704053325964',
                format: 'json',
                extras: 'url_q,url_m,url_z,date_taken,tags' // DOCS photo size options https://www.flickr.com/services/api/misc.urls.html
            }).success(function(state) {
                var list = gallery.find('ul:first');
                list.html('');

                $.each(state.photoset.photo, function(index){
                    list.append('<li><img src="' + this.url_z + '" ' +
                        'data-title="' + this.title + '" ' +
                        'data-url="' + this.url_z + '" ' +
                        'alt="photo-' + index + '"' +
                        '/></li>');
                });

                list.on('click', enlargePhoto);

            }).fail(function(state) {
                alert("Unable to retrieve photos.");
            });
    });

    };
})( jQuery );

$(document).on('ready', function(){
    $('div#gallery').flickr({ photoset_id: '72157626766436507'});
});