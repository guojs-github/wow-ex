$(function () {
	console.log('page ready.')
	
	bind()
});

////////////////////////////////////////////////////
function bind () {
	console.log('bind events')
	
	$('#rubberBand').click(function (e) { test('rubberBand') })
}

function test (name) {
	console.log('test animation')
	console.log('animation name:' + name)
	
	if ((typeof(name) != 'string') || (name.trim().length <=0)) {
		console.log('invalid animation name')
		return
	}
	
	$('#' + name).addClass(name)
					.addClass('animated')
					.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
						, function () {
							$(this).removeClass(name)
								.removeClass('animated')
						})	
}