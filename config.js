var $ = jQuery.noConflict();

$.fn.inlineStyle = function (prop) {
	return this.prop("style")[$.camelCase(prop)];
};

$.fn.doOnce = function( func ) {
	this.length && func.apply( this );
	return this;
} 

var SHTHEMES = SHTHEMES || {};

(function($){

	// USE STRICT
	"use strict";
	

	// Google Map

	$('#google-map').gMap({

        address: '100 Metropolitan Ave, Brooklyn, NY 11211',
        maptype: 'ROADMAP',
        zoom: 16,
        markers: [
            {
                address: "100 Metropolitan Ave, Brooklyn, NY 11211",
                html: '<p class="no-b-margin">Here is our Beautiful Office!</p>',
                icon: {
                    image: "images/icons/map-icon.png",
                    iconsize: [60, 110],
                    iconanchor: [30, 55]
                }
            }
        ],
        doubleclickzoom: false,
        controls: {
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false
        }

    });

    // Contact Form

	$("#template-contactform").validate({
	    submitHandler: function(form) {
	        $('.form-process').fadeIn();
	        $(form).ajaxSubmit({
	            target: '#contact-form-result',
	            success: function() {
	                $('.form-process').fadeOut();
	                $('#template-contactform').find('.sm-form-control').val('');
	                $('#contact-form-result').attr('data-notify-msg', $('#contact-form-result').html()).html('');
	                SHTHEMES.widget.notifications($('#contact-form-result'));
	            }
	        });
	    }
	});

	// Quick Contact Form

	$("#quick-contact-form").validate({
	    submitHandler: function(form) {
	        $(form).animate({ opacity: 0.4 });
	        $(form).find('.form-process').fadeIn();
	        $(form).ajaxSubmit({
	            target: '#quick-contact-form-result',
	            success: function() {
	                $(form).animate({ opacity: 1 });
	                $(form).find('.form-process').fadeOut();
	                $(form).find('.form-control').val('');
	                $('#quick-contact-form-result').attr('data-notify-msg', $('#quick-contact-form-result').html()).html('');
	                SHTHEMES.widget.notifications($('#quick-contact-form-result'));
	            }
	        });
	    }
	}); 

	// Subscribe Form

	jQuery("#widget-subscribe-form").validate({
	    submitHandler: function(form) {
	        jQuery(form).find('.icon-placeholder-div').find('.icon-placeholder').removeClass('icon-placeholder').addClass('fa fa-spinner icon-spin');
	        jQuery(form).ajaxSubmit({
	            target: '#widget-subscribe-form-result',
	            success: function() {
	                jQuery(form).find('.fa-spinner').removeClass('fa fa-spinner icon-spin').addClass('icon-placeholder');
	                jQuery('#widget-subscribe-form').find('.form-control').val('');
	                jQuery('#widget-subscribe-form-result').attr('data-notify-msg', jQuery('#widget-subscribe-form-result').html()).html('');
	                SHTHEMES.widget.notifications(jQuery('#widget-subscribe-form-result'));
	            }
	        });
	    }
	});

	// Twitter Feed

    jQuery(function($){
        $.getJSON('include/twitter/tweets.php?username=envato&count=2', function(tweets){
            $("#sidebar-twitter-list").html(sm_format_twitter(tweets));
        });
    });

	// Infinite Items Loader

	$.extend($.infinitescroll.prototype,{
		_setup_portfolioinfiniteitemsloader: function infscr_setup_portfolioinfiniteitemsloader() {
			var opts = this.options,
				instance = this;
			// Bind nextSelector link to retrieve
			$(opts.nextSelector).click(function(e) {
				if (e.which == 1 && !e.metaKey && !e.shiftKey) {
					e.preventDefault();
					instance.retrieve();
				}
			});
			// Define loadingStart to never hide pager
			instance.options.loading.start = function (opts) {
				opts.loading.msg
					.appendTo(opts.loading.selector)
					.show(opts.loading.speed, function () {
						instance.beginAjax(opts);
					});
			}
		},
		_showdonemsg_portfolioinfiniteitemsloader: function infscr_showdonemsg_portfolioinfiniteitemsloader () {
			var opts = this.options,
				instance = this;
			//Do all the usual stuff
			opts.loading.msg
				.find('img')
				.hide()
				.parent()
				.find('div').html(opts.loading.finishedMsg).animate({ opacity: 1 }, 2000, function () {
					$(this).parent().fadeOut('normal');
				});
			//And also hide the navSelector
			$(opts.navSelector).fadeOut('normal');
			// user provided callback when done
			opts.errorCallback.call($(opts.contentSelector)[0],'done');
		}
	});

	// Process Tabs 3 Elements

	$(function() {
	    $( "#processTabs-3" ).tabs({ show: { effect: "fade", duration: 400 } });
	    $( ".tab-linker" ).click(function() {
	        $( "#processTabs-3" ).tabs("option", "active", $(this).attr('rel') - 1);
	        return false;
	    });
	});

	// Process Tabs 4 Elements

	$(function() {
	    $( "#processTabs-4" ).tabs({ show: { effect: "fade", duration: 400 } });
	    $( ".tab-linker" ).click(function() {
	        $( "#processTabs-4" ).tabs("option", "active", $(this).attr('rel') - 1);
	        return false;
	    });
	});

	// Process Tabs 5 Elements

    $(function() {
        $( "#processTabs-5" ).tabs({ show: { effect: "fade", duration: 400 } });
        $( ".tab-linker" ).click(function() {
            $( "#processTabs-5" ).tabs("option", "active", $(this).attr('rel') - 1);
            return false;
        });
    });

    // Tabs

	$(function() {
	    $( "#tab-1,#tab-2,#tab-3,#tab-4,#tab-5,#tab-6" ).tabs({ show: { effect: "fade", duration: 400 } });
	});

    // Sidebar Tabs

    $(function() {
        $( "#sidebar-tabs" ).tabs({ show: { effect: "fade", duration: 400 } });
    });

})(jQuery);