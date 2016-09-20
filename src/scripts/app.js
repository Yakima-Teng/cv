/**
 * Created by Administrator on 4/1.
 */
var app = new Vue({
	el: 'html',
	created: function() {
		var self = this;
		self.$http.jsonp('http://yakima.duapp.com/douban/v2/book/user/cleveryun/collections', {
			status: 'read'
		}, {
			jsonp: 'callback'
		}).then(function(resp) {
			self.numOfBooks = resp.data.total;
			self.books = resp.data.collections;
		}, function(resp) {});

		self.$http.get('/blog/v1/posts', {
			order: 'rand',
			limit: 20
		}, {}).then(function(resp) {
			console.log(resp);
			self.articles = resp.data.responseBody;
		}, function(resp) {});

		var currentHour = new Date().getHours();
		if (currentHour < 6) {
			self.welcome = '凌晨好';
		} else if (currentHour < 11) {
			self.welcome = '早上好';
		} else if (currentHour < 13) {
			self.welcome = '中午好';
		} else if (currentHour < 18) {
			self.welcome = '下午好';
		} else {
			self.welcome = '晚上好';
		}
	},
	data: {
		menus: [
		]
	},
	events: {
		leaveTop: function() {
			$('.page-header nav').css({
				'background-color': 'rgba(220, 190, 190, .6)'
			});
			// $('.page-header a').removeClass('black').addClass('white');
		},
		onTop: function() {
			$('.page-header nav').css({
				'background-color': 'rgba(0, 0, 0, .6)'
			});
			// $('.page-header a').removeClass('white').addClass('black');
		}
	},
	methods: {
		scroll: function(e) {
			var element = e.currentTarget;
			console.log(element.href);
			var targetId = $(element).prop('href').split('#')[1];
			console.log(targetId);
			$('html,body').animate({
				scrollTop: $('#' + targetId).position().top - 50 + 'px'
			}, 300, function() {
			//    Animation complete
			});
			// scrollTop();
		}
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 0) {
		app.$emit('leaveTop');
	} else {
		app.$emit('onTop');
	}
});

