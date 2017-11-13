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
		scrollOffset: 0,
		menus,
		skills,
		basic,
		career,
		demos,
		footprints
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
			const targetId = element.href.split('#')[1]
			const { scrollOffset } = this
			document.querySelector('html').scrollTop = document.querySelector('#' + targetId).offsetTop + scrollOffset
		}
	},
	events: {
		leaveTop () {
			document.querySelector('.page-header nav').style.backgroundColor = 'rgba(220, 190, 190, .6)'
		},
		onTop () {
			document.querySelector('.page-header nav').style.backgroundColor = 'rgba(0, 0, 0, .6)'
		}
	},
	created () {
		const _this = this
		loadImage('./img/sky.jpg', () => {
      _this.showBody = true
		})
		this.l = (() => {
			const lang = window.navigator.language || window.navigator.userLanguage || ''
			if (window.localStorage.getItem('l')) {
				return window.localStorage.getItem('l')
			} else if (lang && lang.substr(0, 2) === 'en') {
				return 'EN'
			} else if (lang && lang.substr(0, 2) === 'zh') {
				return 'CH'
			} else {
				return 'EN'
			}
		})()
	},
	ready () {
		const _this = this
		function scrollCallback () {
      if (document.querySelector('html').scrollTop > 0) {
        app.$emit('leaveTop');
      } else {
        app.$emit('onTop');
      }
		}

		function resizeCallback () {
      if (window.innerWidth >= 980) {
        _this.scrollOffset = 90
      } else {
        _this.scrollOffset = -18
      }
		}

		let timerForScroll = null
		window.addEventListener('scroll', () => {
      if (timerForScroll) {
        clearTimeout(timerForScroll)
      }
      timerForScroll = setTimeout(() => {
        scrollCallback()
      }, 250)
		}, false)
		let timerForResize = null
		window.addEventListener('resize', () => {
      if (timerForResize) {
        clearTimeout(timerForResize)
      }
      timerForResize = setTimeout(() => {
        resizeCallback()
      }, 250)
		}, false)

		window.addEventListener('load', () => {
      scrollCallback()
      resizeCallback()
		}, false)
	}
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