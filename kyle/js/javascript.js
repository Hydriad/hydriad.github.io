(function( $ ) {
    $.fn.flickr = function(options) {
        var url = 'https://api.flickr.com/services/rest/?jsoncallback=?';

        var settings = $.extend( {
            api_key: 'aeda2b39f3ef21354552421c8a04241c', // TODO KYLE replace this with your own api key
            user_id: '162412704@N08', // Kyle's user id
            photoset_id: '72157704053325964', // Kyle's photoset id
            per_page: 100
        }, options);

        function view_image(event) {
            var target = $(event.target);

            if(target.is('img')) {
                var url = target.attr('data-url');
                var cache = new Image();
                cache.src = url;
                var gallery = target.parents('.flickr-gallery:first').children('div.viewport');
                var info = gallery.children('div.image-info');
                var image = gallery.children('img');
                image.fadeOut('slow', function () {
                    image.attr('src', url);
                    image.fadeIn('slow');
                    info.html(target.attr('data-title') + '<br />' + target.attr('data-tags'));
                });
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
                extras: 'url_q,url_m,url_z,date_taken,tags' // photo size options https://www.flickr.com/services/api/misc.urls.html
            }).success(function(state) {
                var list = gallery.find('ul:first');
                list.html('');

                $.each(state.photoset.photo, function(index){
                    list.append('<li><img src="' + this.url_z + '" ' +
                        'data-title="' + this.title + '" ' +
                        'alt="photo-' + index + '"' +
                        '/></li>');
                });

            }).fail(function(state) {
                alert("Unable to retrieve photos.");
            });
    });

    };
})( jQuery );

$(document).on('ready', function(){
    $('div#gallery').flickr({ photoset_id: '72157626766436507'});
});