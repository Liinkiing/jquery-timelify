
$.fn.timelify = function(){
	var timeline_items = $(this).find('.timeline-items li');

	window.addEventListener('scroll', function(){
		$(timeline_items).each(function () {
			if ($(this).isVisible()) {
				$(this).removeClass('is-hidden').addClass('animated');
				if (!$(this).hasClass('inverted')) {
					if ($(this).hasClass('centered')) {
						$(this).addClass('bounceInUp')
					} else {
						$(this).addClass('bounceInLeft')
					}
				} else {

					$(this).addClass('bounceInRight')

				}
			}
		});
	});

	return this;
};