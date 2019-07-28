$(document).ready(function(){
	"use strict";

	// Gallery with justified Gallery
    $(".gallery").justifiedGallery({
        rowHeight: 180,
        captions: true,
        lastRow: 'justify'
    });

    // Lightbox gallery with magnificPopup
    $('.tiled-gallery, .justified-gallery').each(function (i) {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            },
            titleSrc: 'title',
        });
    });

    // data map infowindow
    var map_lat = $('#map').attr('data-lat');
    if( map_lat === "" ){ map_lat = ""; }
    var map_lng = $('#map').attr('data-lng');
    if( map_lng === "" ){ map_lng = ""; }
    var map_address = $('#map').attr('data-address');
    if( map_address === "" ){ map_address = ""; }
    var map_phone = $('#map').attr('data-phone');
    if( map_phone === "" ){ map_phone = ""; }
    var map_email = $('#map').attr('data-email');
    if( map_email === "" ){ map_email = ""; }
    var map_fax = $('#map').attr('data-fax');
    if( map_fax === "" ){ map_fax = ""; }
    var map_time = $('#map').attr('data-time');
    if( map_time === "" ){ map_time = ""; }

    // Map with Gmap3
    $("#map").gmap3({
        map:{
            options:{
                center: [map_lat,map_lng],
                zoom: 12,
                scrollwheel: false
            }
        },
        marker:{
            values:[
                {
                    latLng:[map_lat,map_lng], 
                    data:"" + map_address +" "+ map_phone +" "+ map_email +" "+ map_fax +" "+ map_time +" "
                },
            ],
            options:{
                draggable: false
            },
            events:{
                mouseover: function(marker, event, context){
                    var map = $(this).gmap3("get"),
                    infowindow = $(this).gmap3({get:{name:"infowindow"}});
                    if (infowindow){
                        infowindow.open(map, marker);
                        infowindow.setContent(context.data);
                    } else {
                        $(this).gmap3({
                            infowindow:{
                                anchor:marker, 
                                options:{content: context.data}
                            }
                        });
                    }
                },
                mouseout: function(){
                    var infowindow = $(this).gmap3({get:{name:"infowindow"}});
                    if (infowindow){
                        infowindow.close();
                    }
                }
            }
        }
    });

    // Counting Project Statistic
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // masonry
    $('.container-masonry').masonry();

})