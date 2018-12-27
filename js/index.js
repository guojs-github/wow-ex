$(function () {
	console.log('page ready.')
	
	showBasic()
});

////////////////////////////////////////////////////
var basics = [
	'bounce',
	'flash',
	'pulse',
	'rubberBand',
	'shake',
	'headShake',
	'swing',
	'tada',
	'wobble',
	'jello',
	'bounceIn',
	'bounceInDown',
	'bounceInLeft',
	'bounceInRight',
	'bounceInUp',
	'bounceOut',
	'bounceOutDown',
	'bounceOutLeft',
	'bounceOutRight',
	'bounceOutUp',
	'fadeIn',
	'fadeInDown',
	'fadeInDownBig',
	'fadeInLeft',
	'fadeInLeftBig',
	'fadeInRight',
	'fadeInRightBig',
	'fadeInUp',
	'fadeInUpBig',
	'fadeOut',
	'fadeOutDown',
	'fadeOutDownBig',
	'fadeOutLeft',
	'fadeOutLeftBig',
	'fadeOutRight',	
	'fadeOutRightBig',
	'fadeOutUp',
	'fadeOutUpBig',
	'flipInX',
	'flipInY',
	'flipOutX',
	'flipOutY',
	'lightSpeedIn',
	'lightSpeedOut',
	'rotateIn',
	'rotateInDownLeft',
	'rotateInDownRight',
	'rotateInUpLeft'
]

function showBasic () {
	console.log('show basic effects.')
	
	var basicsEl = $('.basic.section')
	if (basicsEl.length != 1) {
		console.log('Basics element display area not found')
		return
	}
	for (var i = 0; i < basics.length; i ++) {
		// 考虑到目前似乎无法在同一个元素上实现加载页面时候动画一遍，再在点击的时候再演示一遍，因此用两个元素
		// 添加加载就显示动画的元素
		basicsEl.append('<div id="' + basics[i] + '" class="once row button wow ' + basics[i] + '"> 欢迎使用wow.js(' + basics[i] +')</div>')
		$('#' + basics[i] + '.once').click(function (e) { //用户点击的时候隐藏自身，显示可供点击演示的元素
			$(this).css('display', 'none') 
			$('#' + e.currentTarget.id + '.demo').css('display', '')
			$('#' + e.currentTarget.id + '.demo').click() // 立即启动演示
		})

		// 添加可供点击演示的元素，并隐藏
		basicsEl.append('<div id="' + basics[i] + '" class="demo row button"> 欢迎使用wow.js(' + basics[i] +')</div>')
		$('#' + basics[i] + '.demo').css('display', 'none') // 初始化的时候隐藏
		$('#' + basics[i] + '.demo').click(function (e) { // 点击演示
			test(e.currentTarget.id) 
		})
	}	
}

function test (name) {
	console.log('test animation')
	console.log('animation name:' + name)
	
	if ((typeof(name) != 'string') || (name.trim().length <=0)) {
		console.log('invalid animation name')
		return
	}
	
	$('#' + name + '.demo').addClass(name)
		.addClass('animated')
		.one(
			'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			function () {
				$(this).removeClass(name)
					.removeClass('animated')
			}
		)
}