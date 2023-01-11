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

loadBraceletImages = () => {
    $('div#gallery-bracelets').loadFlickrPhotos({ 
        photoset_id: '72157713029394207',
        classes: ''
    });
}

loadMural1Images = () => {
    $('div#gallery-mural1').loadFlickrPhotos({ 
        photoset_id: '72157713038981951',
        classes: ''
    });
}

loadMural2Images = () => {
    $('div#gallery-mural2').loadFlickrPhotos({ 
        photoset_id: '72157713030791308',
        classes: ''
    });
}

loadDigitalArtImages = () => {
    $('div#gallery-digital-art').loadFlickrPhotos({ 
        photoset_id: '72157713029383051',
        classes: ''
    });
}

loadCollageImages = () => {
    $('div#gallery-collages').loadFlickrPhotos({ 
        photoset_id: '72177720305141461',
        classes: ''
    });
}

loadMuralImages = () => {
    loadMural1Images();
    loadMural2Images();
}

setSelectedTab = (className) => {
    const allTabs = document.getElementsByClassName("tab");
    Array.from(allTabs).forEach((tab) => {
        tab.classList.remove("selected");
    })

    const selectedTab = document.getElementsByClassName(className)[0];
    selectedTab.classList.add("selected");
}

// on the projects page, show or hide content based on which category has been selected
// ref: https://stackoverflow.com/questions/23340995/toggle-hidden-divs-by-clicking-on-navigation
switchCategory = (id) => {
    $('.category').hide();
    $(('#' + id)).show();

    setSelectedTab(id);

    switch(id) {
        case 'bracelets': 
            loadBraceletImages();
            break;
        case 'murals': 
            loadMuralImages();
            break;
        case 'digital-art': 
            loadDigitalArtImages();
            break;
        case 'collages': 
            loadCollageImages();
            break;
    }
}

// on the travel page, set the width and height of the map
function setMapSize() {
    const map = document.getElementById('google-map');
    // subtract 4px becuase the idrame comes with a 2px border
    // map.style.width = (window.innerWidth - 4) + 'px';

    // subtract height of header to prevent vertical scrollbar
    map.style.height = (window.innerHeight - 200) + 'px';
}
