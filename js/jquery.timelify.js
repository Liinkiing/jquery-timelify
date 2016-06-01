
$.fn.timelify = function(options){

	var settings = $.extend({
			animLeft: "bounceInLeft",
			animRight: "bounceInRight",
			animCenter: "bounceInUp"
	}, options);

	var timeline_items = $(this).find('.timeline-items li');

	window.addEventListener('scroll', function(){
		$(timeline_items).each(function () {
			if ($(this).isVisible()) {
				$(this).removeClass('is-hidden').addClass('animated');
				if (!$(this).hasClass('inverted')) {
					if ($(this).hasClass('centered')) {
						$(this).addClass(settings.animCenter)
					} else {
						$(this).addClass(settings.animLeft)
					}
				} else {

					$(this).addClass(settings.animRight)

				}
			}
		});
	});

	return this;
};