/***********************************************************************************
 *                                                                                  *
 * 关于自己的一些介绍
 *                                                                                  *
 ***********************************************************************************/
let app = new Vue({
	el: 'html',
	data: {
		homepageTitle: 'Yakima Teng\'s CV',
		menus,
		skills,
		basic,
		education,
		career,
		demos,
		footprints
		// books: {
		// 	total: 0,
		// 	details: [
		// 		// {
		// 		// 	book: {
		// 		// 		title: '',
		// 		// 		images: {
		// 		// 			large: ''
		// 		// 		},
		// 		// 		isbn13: '',
		// 		// 		summary: ''
		// 		// 	},
		// 		// 	rating: {
		// 		// 		value: ''
		// 		// 	},
		// 		// 	updated: ''
		// 		// }
		// 	]
		// }
	},
	methods: {
		scroll (e) {
			var element = e.currentTarget
			var targetId = $(element).prop('href').split('#')[1]
			$('html,body').animate({
				scrollTop: $('#' + targetId).position().top - 50 + 'px'
			}, 300, function() {
			// Animation complete
			})
		}
	},
	events: {
		leaveTop () {
			$('.page-header nav').css({
				'background-color': 'rgba(220, 190, 190, .6)'
			})
		},
		onTop () {
			$('.page-header nav').css({
				'background-color': 'rgba(0, 0, 0, .6)'
			})
		}
	},
	created () {
		// let _this = this
		// const promiseBooks = $.ajax({
		// 	url: '//yakima.duapp.com/douban/v2/book/user/cleveryun/collections',
		// 	type: 'GET',
		// 	dataType: 'jsonp',
		// 	jsonp: 'callback',
		// 	data: {
		// 		status: 'read'
		// 	},
		// 	timeout: 30000
		// })
		// promiseBooks.success(data => {
		// 	_this.books.total = data.total
		// 	_this.books.details = data.collections.map(item => {
		// 		return {
		// 			book: {
		// 				title: item.book.title,
		// 				images: {
		// 					large: item.book.images.large
		// 				},
		// 				isbn13: item.book.isbn13,
		// 				summary: item.book.summary
		// 			},
		// 			rating: {
		// 				value: item.rating.value
		// 			},
		// 			updated: item.updated
		// 		}
		// 	})
		// })
		// promiseBooks.error(data => console.log(data))
	},
	ready () {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 0) {
				app.$emit('leaveTop');
			} else {
				app.$emit('onTop');
			}
		})
	}
})

$(document).ready(function () {
  $('.lazy').lazyload()
})