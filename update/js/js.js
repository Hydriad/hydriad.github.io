var state = {
    photos: [],
    selectedPhotoIndex: null
};

// function to reset the selected overlay photo and its info to empty.
// Without this, we would get a flash of an empty img tag on fadeOut of the selectedPhoto.
function clearVals() {
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

// DOCS for the meat of this: http://www.developerdrive.com/2013/05/creating-a-jquery-gallery-for-flickr/
(function( $ ) {
    $.fn.loadFlickrPhotos = function(options) {
        var url = 'https://api.flickr.com/services/rest/?jsoncallback=?';

        var settings = $.extend( {
            api_key: 'aeda2b39f3ef21354552421c8a04241c',
            user_id: '160623311@N04', // My Flickr user id
            photoset_id: '72157713029394207', // firendship bracelet album id
            per_page: 30
        }, options);

        return this.each(function() {
            var gallery = $(this);
            gallery.addClass('flickr-gallery');
            gallery.append(
                '<div class="browser">' +
                    '<ul class=' + settings.classes + '></ul>' +
                '</div>'
            );

            $.getJSON(url, {
                // DOCS https://www.flickr.com/services/api/flickr.photosets.getPhotos.html
                method: 'flickr.photosets.getPhotos',
                api_key: settings.api_key,
                user_id: settings.user_id,
                photoset_id: settings.photoset_id,
                format: 'json',
                // DOCS photo size options https://www.flickr.com/services/api/misc.urls.html
                extras: 'url_q,url_m,url_z, url_b, date_taken,tags'
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

                // list.on('click', enlargePhoto);

            }).fail(function(state) {
                alert("Unable to retrieve photos.");
            });
        });
    };
})( jQuery );

function loadFriendshipBraceletImages() {
     $('div#gallery').loadFlickrPhotos({ 
            photoset_id: '72157713029394207',
            classes: 'small-photo'
        });
}

function loadMural1Images() {
     $('div#gallery').loadFlickrPhotos({ 
            photoset_id: '72157713038981951',
            classes: 'small-photo'
        });
}

function loadMural2Images() {
     $('div#gallery').loadFlickrPhotos({ 
            photoset_id: '72157713030791308',
            classes: 'small-photod'
        });
}

function loadDigitalArtImages() {
     $('div#gallery').loadFlickrPhotos({ 
            photoset_id: '72157713029383051',
            classes: 'small-photo'
        });
}
