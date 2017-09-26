/***********************************************************************************
 *                                                                                  *
 * demos
 *                                                                                  *
 ***********************************************************************************/
const demos = {
  title: '作品案例',
  description: '',
  note: '',
  items: [
    {
      title: {
        CH: 'CloudFB云飨',
        EN: 'CloudFB云飨'
      },
      keyword: {
        CH: '供应链金融、微信商城',
        EN: 'supply chain finance, wechat mall'
      },
      description: {
        CH: [
          '这是一个私活项目，写于2017年年中。项目团队：2*Java + 1*设计 + 1*前端 + 2*测试。开发测试耗时约1.5月，维护3个月。',
          '该项目属于<strong>供应链金融</strong>方向的一个<strong>中英文双语</strong>项目。包含一个后台管理系统和一个微信端微商城项目，我负责微信微商城项目的前端开发，涉及购物车、预付单/订单/送货单状态管理、微信在线支付等常规功能。',
          '说明：因为自家项目部的几个项目长期处于未上线/不可用/内部使用的状态，不适合放出来，就拿这个当生产项目案例了，下同-_-',
          '技术栈：Vue2全家桶+Webpack'
        ],
        EN: [
          'A side project written in middle 2017. Team composition：2*Java + 1*Designer + 1*Frontend + 2*Backend. Time consumed: 1.5m for development and 3m for maintainence.',
          'It\'s a <strong>bilingual</strong> project in the domain of <strong>supply chain finance</strong>, including an admin platform and a wechat mall. I\'m responsible for the wechat mall development. Covers shopping cart, order status management, and wechat payment.',
          'Vue2 + Vue-Router + Vuex + ES6 + Webpack + eslint'
        ]
      },
      gitUrl: '',
      demoUrl: '',
      imgUrl: 'img/qrcode_CloudFB_1.jpg'
    },
    {
      title: {
        CH: '石竹科技',
        EN: '石竹科技'
      },
      keyword: {
        CH: '微信端、数据持久化、vue项目优化',
        EN: 'wechat, data persistence, vue project optimization'
      },
      description: {
        CH: [
          '项目将于近期上线，也就是说您访问的时候有可能还未上线-_-。私活项目+1。有产品展示、需求招投标、微信消息推送、公告管理、服务/产品预购等功能。该项目进行了<strong>本地数据持久化</strong>，并根据已有的VueJS开发经验对项目进行了优化，封装了滚动加载更多等常用组件。',
          '以前曾在知乎上写过一个自己积累的<strong>Vue2项目优化经验</strong>。具体可点击链接查看：<a href="https://www.zhihu.com/question/38213423/answer/190371519">国内有哪些公司在用Vue.js，有什么开发心得？</a>'
        ],
        EN: [
          'This side project will be puslished in the near furture, so you may find it unavailable to visit or function abnormally in these days. Covers wechat message push, product/service purchase in advance. This project employs <strong>Data persistence</strong> and is optimized as per my VueJS experience. Common components like alerting, confirming, and loading-more are encapsulated.',
          'I had once posted one article on topic of <strong>VueJS project optimization</strong>, for details, please refer to the following link: <a href="https://www.zhihu.com/question/38213423/answer/190371519">国内有哪些公司在用Vue.js，有什么开发心得？</a>'
        ]
      },
      gitUrl: '',
      demoUrl: '',
      imgUrl: 'img/shizhukeji.png'
    },
    {
      title: {
        CH: '咕咕机学习',
        EN: '咕咕机学习'
      },
      keyword: {
        CH: '网页转图片',
        EN: 'webpage to picture'
      },
      description: {
        CH: [
          '私活项目+1。这个公众号找不到二维码，需要在微信里手动输入“咕咕机学习”搜索添加。重点说“答案”这个微信菜单。项目团队：3后端+1前端。耗时约1个月（私活项目）。',
          '点击打开页面后输入题号可以搜索显示对应题目的问题、答案和解析，然后在页面底部会出现一个打印按钮，点击后会请求服务端去跟用户绑定的咕咕机设备（一种打印机）通讯（发送图片给咕咕机），后者会直接将图片进行打印。',
          '项目难点在于数学题目涉及到数学公式和图片较多，最终的解决方案是后端同事用java类库对语文和英语题目生成图片（html简单文本转图片，速度快），我用node将数学题目对应的网页转成图片（将PhantomJS无界面webkit内核浏览器打开的网页转图片，不稳定，需要写守护进程，而且因为需等待js渲染数学公式，速度极慢，平均6s一张图，用两个服务器跑了两三天的程序才跑完数学题目，但是效果较好）。'
        ],
        EN: [
          'One more side project. I have no wechat code for this project, but you can manually search for keyword "咕咕机学习" in Wechat. There is one Wechat menu named "答案" (answers) which which we\'ll talk about later. Team composition: 3*backend + 1*frontend. Time consumed: about 1 month.',
          'Click "答案", type in question code such as 2100011, and press enter button, you will see a page with content like question, options, answer and explanation, also a bottom button which after clicked can print the current webpage using the printer you account is bound to.' +
          'Actually, we already had screenshots corresponding to these questions stored in the server. And the main technological difficulty I encountered is to get screenshots of maths questions where complicated math formula and images are involved. Finally, with the help of PhantomJS, the difficulty is solved.'
        ]
      },
      gitUrl: '',
      demoUrl: '',
      imgUrl: 'img/guguji.png'
    },
    {
      title: {
        CH: '博客（Angular1）',
        EN: 'Blog (Angular1)'
      },
      keyword: {
        CH: 'Express + MySQL + EJS, Angular1 + gulp',
        EN: 'Express + MySQL + EJS, Angular1 + gulp'
      },
      description: {
        CH: [
          '个人项目，非私活。最早上线的是一个前端Angular SPA + 后端Node(Express框架)提供API接口的版本（数据库使用的是MySQL，模版引擎用的是EJS）。由于码云Pages功能上的限制，直接访问项目在线地址会被跳转，请手动复制以下地址（http://yakima.oschina.io/blog）到浏览器地址栏回车查看效果。后期考虑到SEO的问题，在后端用EJS作为模版重写了一版本，在线地址：<a href="http://www.yxeye.com/blog">http://www.yxeye.com/blog</a>。',
          'Angular版本开发环境使用gulp，支持模版文件，请求转发等常见功能，发表评论的功能（支持<strong>嵌套评论</strong>）被我禁掉了，因为自己后端安全方面知识欠缺，数据库里的东西对我又很重要，开放这种往数据库里写数据的接口怕出问题。',
          '注册功能目前存在未解决的技术问题（与已有的wordpress程序创建的数据库打通账号），有一种方法是访问Wordpress提供的用户相关API，但是我想直接跟数据库里的账号信息进行比对，在把Wordpress保存的密码在Node端进行加解密这块卡住了。'
        ],
        EN: [
          'Personal SPA project using Angular1. API is provided by backend server using Node(Express) and MySQL. For details, please refer to the source code link above. Later on, after SEO-related problems are considered, this project was rewritten in backend using EJS as the template language. For the rewritten version, please refer to: <a href="http://www.yxeye.com/blog">http://www.yxeye.com/blog</a>.',
          'Development environment for the Angular1 version is established with gulp. Supports templates using mechanism of angular1 cache. Common functions like request proxy are also supported. Nested comments are supported but forbidden due to safety reason (database is very important to me).',
        ]
      },
      gitUrl: 'https://git.oschina.net/yakima/blog',
      demoUrl: '',
      imgUrl: 'img/post_English.png'
    },
    {
      title: {
        CH: '公司项目',
        EN: 'Company Projects'
      },
      keyword: {
        CH: '移动端开发，微信JS SDK，车险报价投保业务，PC端管理系统，Websocket',
        EN: 'mobile development, Wechat JS SDK，admin platform, websocket'
      },
      description: {
        CH: [
          '开发过的项目大多是小范围内部使用的，而且由于种种原因，有些项目中途转给北京总部的一个项目组做了，还有些项目夭折了，不过下面提到的都不是凭空捏造的，代码面试的时候可以现场看（不支持拷贝），我面试时会带上电脑^_^。',
          '开发过一个车险投保PC端管理系统，起初使用Vue1全家桶开发，后期应领导要求（为了便于让后端同事也能参与前端开发）进行了重构，采用了传统的iframe + jQuery + html模版（handlebars）开发模式，自行封装了弹框、分页、日期等组件，和路由、页面打印、无限嵌套的勾选树等功能。该项目后来转交给北京项目组了。',
          '开发过一个车辆估损PC端管理系统，使用Vue1全家桶开发，有个通过Websocket<strong>实时通讯</strong>的功能，管理平台内勤最多同时被分配4个微信端用户，聊天支持文本和图片，支持120个微信基础表情。',
          '参与过公司其他项目部一个太平洋保险长期外包的寿险APP项目的开发（<strong>react native + redux + flow类型检查</strong>），独立开发过绑定用户订阅邮箱的功能，和iOS、android同事协同开发过更新用户头像的功能。',
          '最主要的工作成果是一个车险比价投保功能的<strong>移动端项目（微信端页面、安卓/iOS端内嵌页面）</strong>，这个项目改动较为频繁，框架也历经了最初的客户端vue1到vue1+webpack到现在的vue2+webpack，微信JS SDK比较熟，分享、上传图片、支付等功能都开发过。微信公众号开发涉及到的服务端流程我大概知道一点点，因为以前自己用node写过这块的功能（不涉及支付）。'
        ],
        EN: [
          'Most projects developed during working in the company are limited to a small quantity of people. But you can see it during face-to-face interview (I\'ll take my MAC ^_^).',
          'Developed a PC admin platform for car insurances. It was first developed using Vue1, and later refactored to using traditional iframe + jQuery + html template language (handlebars) to make it convenient for backend developers to participate in. Components like alert popup, page navigation, datepicker, and functions like router, printing, nested checkboxes are encapsulated. This project was transferred to Beijing team.',
          'Developed a PC admin platform for assessment of car damage loss. Developed using Vue1 + vue-router + vuex. Websocket was employed to make <strong>real-time communication</strong> available (support text, image, and 120 basic wechat emotions).',
          'Participated in a long-term project outsourced by China Pacific Insurance using <strong>React Native + Redux + flow (a static type checker for js)</strong>. Responsible for user subscription emails binding and user avatar updating.',
          'The most important project was a <strong>mobile project (car insurances) used in Wechat and APP (iOS & Android)</strong>. Vue2 + webpack were used. Functions like sharing, uploading images, payment supported by Wechat JS SDK were involved (I know how to build a simple Wechat backend server using Node).'
        ]
      },
      gitUrl: '',
      demoUrl: '',
      imgUrl: 'img/code_wechat_cby_production.jpeg'
    },
    {
      title: {
        CH: '数据模拟服务',
        EN: 'mock server'
      },
      keyword: {
        CH: '服务端数据模拟、请求转发',
        EN: 'data mock in server end, request proxy'
      },
      description: {
        CH: [
          '业余时间写的一个工具。用于服务器端数据模拟，方便前端工程师独立于后端进行开发。支持<strong>请求转发、响应静态JSON文件数据、响应自定义动态数据（内置mockjs）</strong>，详细说明请点击上面链接地址（<a href="https://git.oschina.net/yakima/mock-server">项目源码</a>）查看README.md文档'
        ],
        EN: [
          'A tool written in part time. It\'s purpose is to mock data in backend server to provide convenience for frontend development. You will not need to wait for backend developer anymore if your team can define data structure in advance of development. This small tools support <strong>request proxy, response using defined static JSON file, response using dynamic data (with the help of mockjs integrated)</strong>. For detail, please refer to the source code link above.'
        ]
      },
      gitUrl: 'https://github.com/Yakima-Teng/mock-server',
      demoUrl: '',
      imgUrl: ''
    },
    {
      title: {
        CH: '项目脚手架',
        EN: 'boilerplates'
      },
      keyword: {
        CH: 'react, vue, iframe+jQuery+handlebars, webpack，gulp',
        EN: 'react, vue, iframe+jQuery+handlebars, webpack，gulp'
      },
      description: {
        CH: [
          'Vue项目脚手架：根据Vue官方webpack模版改造出了一个vue2项目开发环境，vue2 + vue-router + vuex + webpack + ES6 support + babel + eslint，详细介绍请点击相关链接查看：<a href="https://git.oschina.net/yakima/blog-admin">源代码</a>。',
          'React项目脚手架：为了在开发react项目时能有和开发vue项，根据vue-cli webpack模版改编出了一个react项目开发环境，react + react-router + redux + webpack + ES6 support + babel + eslint，预置了几个动画效果，详细介绍请点击相关链接查看：<a href="https://git.oschina.net/yakima/demos">源代码</a>。',
          'iframe项目脚手架：基于iframe + jQuery + handlebars + gulp实现的类SPA应用开发环境，适用于有对前端了解较少的后端同学需要一起参与前端开发工作的的项目，详细介绍请点击相关链接查看：<a href="https://git.oschina.net/yakima/iframe-application">源代码</a>。'
        ],
        EN: [
          'Vue boilerplate: base on Vue-cli official webpack template, vue2 + vue-router + vuex + webpack + ES6 support + babel + eslint. For details, please refer to: <a href="https://git.oschina.net/yakima/blog-admin">Source Code</a>.',
          'React boilerplate: base on Vue boilerplate to provide similar development experience, react + react-router + webpack + ES6 support + babel + eslint. For details, please refer to <a href="https://git.oschina.net/yakima/demos">Source Code</a>.',
          'iframe boilerplate: appropriate for backend developers unfamiliar with new frontend skills, iframe + jQuery + handlebars + gulp. For details, please refer to: <a href="https://git.oschina.net/yakima/iframe-application">Source Code</a>.'
        ]
      },
      gitUrl: 'https://github.com/Yakima-Teng/demos',
      demoUrl: 'http://www.yxeye.com/demos/index.html',
      imgUrl: 'img/react_boilerplate.png'
    }
  ]
}
