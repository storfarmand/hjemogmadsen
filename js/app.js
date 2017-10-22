var toggleClass = function (el, className) {
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push(className);

        el.className = classes.join(' ');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var mobileToggle = document.querySelector('.mobile-nav');
    var nav = document.querySelector('nav');
    mobileToggle.addEventListener('click', function(e) {
        toggleClass(nav, 'mobile-active');
    })
});

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 260,
        itemMargin: 5,
        maxItems: 4
    });
    
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
    
    $(".fancybox-trigger").bind('click', function(e) {
        e.preventDefault();
        $('.flexslider').flexslider("stop");
        $(this).find('+ .fancybox-gallery > a:first-child').click();
    });
    
});