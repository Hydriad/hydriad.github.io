var state = {
    photos: [],
    selectedPhotoIndex: null
};

function setOverlayPhotoSrc(src) {
    document.getElementById('enlargedPhoto').src = src;
}

function minimizePhoto() {
    $('body').find($('#overlay-photo')).fadeOut(200);

    state.selectedPhotoIndex = null;
    setOverlayPhotoSrc('');
}

function navigateLeft() {
    // if user clicks left arrow from first item in list, navigate to last photo
    var index = state.selectedPhotoIndex - 1 === -1 ? state.photos.length - 1 : state.selectedPhotoIndex - 1;
    state.selectedPhotoIndex = index;
    setOverlayPhotoSrc(state.photos[index].url_o);
}

function navigateRight() {
    // if user clicks left arrow from first item in list, navigate to last photo
    var index = state.selectedPhotoIndex + 1 === state.photos.length ? 0 : state.selectedPhotoIndex + 1;
    state.selectedPhotoIndex = index;
    setOverlayPhotoSrc(state.photos[index].url_o);
}

function enlargePhoto(event) {
    // only enlarge photo if the screen is wider than 800 px. otherwise the images fill width anyway
    if (window.innerWidth >= 800) {
        var index;
        var target = $(event.target);

        if (target.is('img')) {
            index = target.parent().index();
            state.selectedPhotoIndex = index;
        }

        setOverlayPhotoSrc(state.photos[index].url_o);

        $('body').find($('#overlay-photo')).fadeIn(400);
    }
}

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
                extras: 'url_q,url_m,url_z, url_o, date_taken,tags' // DOCS photo size options https://www.flickr.com/services/api/misc.urls.html
            }).success(function(response) {
                var list = gallery.find('ul:first');
                list.html('');

                // set results to local state var
                state.photos = response.photoset.photo;

                $.each(response.photoset.photo, function(index){
                    list.append(
                        '<li>' +
                            '<img src="' + this.url_z + '" ' +
                                'alt="photo-' + index + '" />' +
                        '</li>'
                    );
                });

                list.on('click', enlargePhoto);

            }).fail(function(state) {
                alert("Unable to retrieve photos.");
            });
    });

    };
})( jQuery );

// if user hits ESC while viewing enlarged photo, minimize it
$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        if (document.getElementById('overlay-photo').style.display === 'block') {
            minimizePhoto()
        }
    }
});

$(document).on('ready', function(){
    $('div#gallery').flickr({ photoset_id: '72157626766436507'});
});