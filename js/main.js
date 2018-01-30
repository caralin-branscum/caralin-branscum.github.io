$(document).ready(function(){

"use strict";

    var navWaypoints = function() {
        var sections = $(".waypoint-target"),
            navigation_links = $("#nav li a");
            window.console&&console.log('init');
        sections.waypoint( {
            handler: function(direction) {
                var active_section;
                active_section = $('section#' + this.element.id);

          //       window.console&&console.log("PrevAll List:");
        		// window.console&&console.log(active_section);
        		window.console&&console.log("PrevAll List:");
        		window.console&&console.log(active_section.prevAll(".waypoint-target"));

                if (direction === "up") active_section = active_section.prevAll(".waypoint-target").first();
        		
        		window.console&&console.log("Direction:");
        		window.console&&console.log(direction);
        		window.console&&console.log("Current Active Section:");
        		window.console&&console.log(active_section);

                var active_link = $('#nav li a[href="#' + active_section.attr("id") + '"]');
                
                navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");
            },
            offset: '25%'
        });
    };


    /* Only if requested
    var navHideWaypoints = function() {
        var nav_wrap = $("#nav-wrap"); // nav hiding
        var banner_section = $("#banner"); 
        banner_section.waypoint({
            handler: function(direction) {
                if (direction === "up") {
                    
                }
            },
            offset: '25%'
        })
    };
    */


    navWaypoints(); 

});

