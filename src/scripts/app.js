/***********************************************************************************
 *                                                                                  *
 * 关于自己的一些介绍
 *                                                                                  *
 ***********************************************************************************/
let app = new Vue({
	el: 'html',
	data: {
		l: 'CH',
		showBody: false,
		menus,
		skills,
		basic,
		// education,
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
	watch: {
		'l': function (newVal, oldVal) {
			window.localStorage.setItem('l', newVal)
		}
	},
	methods: {
		toggleLanguage () {
			const { l } = this
			this.l = l === 'CH' ? 'EN' : 'CH'
		},
		scroll (e) {
			const element = e.currentTarget
			const targetId = $(element).prop('href').split('#')[1]
			$('html,body').animate({
				scrollTop: $('#' + targetId).position().top - 50 + 'px'
			}, 300, () => {
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
		const _this = this
		loadImage('./img/sky.jpg', () => {
      _this.showBody = true
		})
		this.l = window.localStorage.getItem('l') || 'En'
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
		$(window).scroll(() => {
			if ($(window).scrollTop() > 0) {
				app.$emit('leaveTop');
			} else {
				app.$emit('onTop');
			}
		})
	}
})

$(document).ready(() => {
  $('.lazy').lazyload()
})

function loadImage(url, callback) {
  const img = new Image()
  img.src = url
  // 如果图片已经存在于浏览器缓存，直接调用回调函数
  if(img.complete) {
    callback.call(img)
    return
  }
  //图片下载完毕时异步调用callback函数
  img.onload = function () {
    callback.call(img)
  }
}