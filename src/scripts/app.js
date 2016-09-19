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
		isLookingForJob: false,
		homepageTitle: 'Yakima Teng',
		myChineseName: '滕运锋',
		myEnglishName: 'Yakima Teng',
		welcome: '早上好',
		sidebar: [
			{
				txt: '自我介绍',
				url: 'intro'
			},
			{
				txt: '教育经历',
				url: 'education'
			},
			{
				txt: '工作经历',
				url: 'work-experience'
			},
			{
				txt: '一些作品',
				url: 'demos'
			},
			{
				txt: '看过的书',
				url: 'reading'
			},
			{
				txt: '一些照片',
				url: 'photos'
			}
		],
		demos: [
			{
				txt: '微信端·车险比价',
				description: '公司原有的车险比价项目（维护了四个月）的目标群体由C端改为代理端，故原有项目需重写，借此机会进行了重构，将所用框架由AngularJS改为了VueJS',
				url: '/demos/quote_vue/quote.html'
			},
			{
				txt: '无分类·几种幻灯',
				description: 'JS实现的2D、3D幻灯片，CSS实现的3D幻灯片：其中JS实现的3D幻灯片会根据鼠标在六面体单面上的位置进行相应的旋转',
				url: '/demos/slider_angular'
			},
			{
				txt: '无分类·省市列表',
				description: '暂无描述',
				url: '/demos/cities_vue'
			},
			// {
			//     txt: '微信端·车险比价N',
			//     description: '刚到公司时既有的AngularJS项目，负责日常项目维护',
			//     url: '/demos/quote_angular/quote.html'
			// },
			// {
			//     txt: '微信端·拍照活动V',
			//     description: '一个简单的VueJS项目，上传照片功能是借用微信JSSDK的接口实现的',
			//     url: '/demos/tirepressure_vue'
			// },
			{
				txt: '手机端·图片上传',
				description: '刚转行时在一个外包公司做的项目，后面到新公司几个月后把这个旧项目重构了一下，主要是写了一个上传图片的功能（非微信接口）',
				url: '/demos/beloved_vue'
			},

			{
				txt: '响应式·个人博客',
				description: '用Angular搭建的SPA，做了响应式，适配手机端',
				url: '/blog'
			},
			{
				txt: '响应式·企业网站',
				description: 'Bootstrap搭建的传统网站',
				url: '##'
			},
			{
				txt: '无分类·简单动画',
				description: 'H5 Canvas的使用',
				url: '##'
			},
			{
				txt: '小游戏·炸弹超人',
				description: 'Bootstrap搭建的传统网站',
				url: '##'
			},
			{
				txt: '无分类·在线聊天',
				description: 'H5 WebSocket的使用',
				url: '/demos/cities_vue'
			}
		],
		description: [
			'出生于上海，户籍浙江永嘉，求学于沈阳药科大学药学（食品药学方向）专业，于2013年毕业。',
			'现在上海从事WEB前端开发工作。',
			'闲暇时喜好羽毛球、户外、阅读和写博客。'
		],
		introFields: [
			{
				title: '毕业院校',
				detail: '沈阳药科大学'
			},
			{
				title: '最高学历',
				detail: '一本'
			},
			{
				title: '就读专业',
				detail: '药学(食品药学)方向'
			},
			{
				title: '当前职业',
				detail: 'WEB前端开发工程师'
			},
			{
				title: '出生性别',
				detail: '1991年、男'
			},
			{
				title: '身高体重',
				detail: '1.77m、72kg'
			},
			{
				title: '腾讯企鹅',
				detail: '821135564 (请备注“来自博客”)'
			},
			{
				title: '联系邮箱',
				detail: 'cleveryun@163.com'
			},
			{
				title: '英语水平',
				detail: 'CET-6'
			},
			{
				title: '地理信息',
				detail: '户籍浙江永嘉，当前坐标上海'
			},

			{
				title: '兴趣爱好',
				detail: '羽毛球、码字'
			}
		],
		education: [
			{
				title: '一本 (非985、211)',
				name: '沈阳药科大学',
				duration: '2009.09-2013.07',
				description: '药学(食品药学)专业'
			},
			{
				title: '高中',
				name: '浙江省永嘉中学',
				duration: '2006.09-2009.07',
				description: '理科'
			},
			{
				primary: '小学换过5次学校',
				english: 'CET-6',
				computer: '计算机二级 (VB)',
				jump: '跳级到初中，保送到高中',
				others: '公共营养师三级、助理工程师'

			}
		],
		workExperience: [
			{
				imgSrc: 'homepage/img/logo_junye_520x260.png',
				company: '浙江仙居君业药业有限公司',
				duration: '2013年7月-2013年10月',
				job: '质量保证(QA)',
				descriptions: [
					'对质量体系有了初步的认识',
					'时间过短，并没做啥事情'
				]
			},
			{
				imgSrc: 'homepage/img/logo_apeloa_320x160.png',
				company: '浙江普洛康裕制药有限公司',
				duration: '2013年10月-2015年7月',
				job: '国际药品注册专员(RA)',
				descriptions: [
					'注册文件的组织、申报',
					'与注册当局/代理、终端用户沟通',
					'负责认证所需资料的准备和提交'
				]
			},
			{
				imgSrc: 'homepage/img/logo_apeloa_320x160.png',
				company: '上海麦索美思广告有限公司',
				duration: '2015年11月-2015年11月',
				job: '手机端H5开发',
				descriptions: [
					'时间过短，并未做啥事情'
				]
			},
			{
				imgSrc: 'homepage/img/logo_apeloa_320x160.png',
				company: '上海优保网络科技有限公司',
				duration: '2015年12月-?',
				job: '前端开发工程师',
				descriptions: [
					'负责公司微信项目的前端开发'
				]
			}
		],
		books: '',
		numOfBooks: 0,
		photos: [
			{
				url: 'img/photo_1.jpeg',
				description: '2015年普洛康裕羽毛球团体赛第二，别问我为什么跑到歌山队去了，我左边的那位领导是浙江省千人！'
			},
			{
				url: 'img/photo_2.jpeg',
				description: '2014年普洛康裕篮球赛第二，大大的酱油'
			},
			{
				url: 'img/photo_3.jpeg',
				description: '2014年普洛康裕气排球赛第一，中间拿奖状的领导已经到退休年龄了，参加了好几届气排球赛'
			},
			{
				url: 'img/photo_6.jpeg',
				description: '2014年十一去深圳和老祖、杨建在小梅沙'
			},
			{
				url: 'img/photo_8.jpeg',
				description: '2014年横店玫瑰星城夜跑活动结束后的合影'
			},
			{
				url: 'img/photo_9.jpeg',
				description: '2015年五一，大学室友齐聚杭州，图为绕西湖外围骑行一周后合影'
			},
			{
				url: 'img/photo_10.jpeg',
				description: '不记得哪一年的了，大学时一次老乡篮球赛结束后的合影'
			},
			{
				url: 'img/photo_12.jpeg',
				description: '某一年食品药学班部分同学在集体游玩千山后的合影'
			},
			{
				url: 'img/photo_13.jpg',
				description: '2015年普洛康裕组织的为期两三个月的外教课结束后在外教准备回英国前的散会饭后的合影'
			},
			{
				url: 'img/photo_14.jpg',
				description: '2015年在普洛康裕的沈药校友聚会后的合影，左1左6、右1右2是两队沈药校友夫妻档，他们很照顾我'
			}
		],
		video: {
			url: 'http://player.youku.com/player.php/sid/XNTcwMTU5Mjk2/v.swf',
			description: '大学练棍的时候室友录的'
		},
		articles: ''
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

