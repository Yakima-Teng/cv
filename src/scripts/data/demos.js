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
        CH: '微信商城、供应链金融',
        EN: 'wechat mall, supply chain finance'
      },
      description: {
        CH: [
          '该项目属于<strong>供应链金融</strong>方向的一个<strong>中英文双语</strong>项目。包含一个后台管理系统和一个微信端微商城项目，我负责微信微商城项目的前端开发，涉及购物车、预付单/订单/送货单状态管理、微信在线支付等常规功能。',
          '技术栈：Vue2全家桶'
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
        CH: '苏通云课堂',
        EN: '苏通云课堂'
      },
      keyword: {
        CH: '在线视频点播、教育类',
        EN: 'online video play, education'
      },
      description: {
        CH: [
          '该项目属于微信公众号内的<strong>在线视频点播</strong>项目。包含一个后台管理系统和一个微信端微商城项目，我负责微信端的前端开发，涉及视频的序列号付款、微信支付功能，涉及阿里Aliplayer JSSDK。',
          '技术栈：Vue2全家桶'
        ],
        EN: [
          'It\'s an <strong>online video play</strong> website in wechat. I\'m responsible for the wechat frontend development. Covers payment by serial number/wechat, and Aliplayer JSSDK.',
          'Vue2 + Vue-Router + Vuex + ES6 + Webpack + eslint'
        ]
      },
      gitUrl: '',
      demoUrl: '',
      imgUrl: 'img/wechat_sutongyun.jpg'
    },
    {
      title: {
        CH: '石竹科技',
        EN: '石竹科技'
      },
      keyword: {
        CH: '微商城',
        EN: 'wechat mall'
      },
      description: {
        CH: [
          '有产品展示、需求招投标、微信消息推送、公告管理、服务/产品预购等功能。',
          '技术栈：Vue全家桶'
        ],
        EN: [
          'Covers wechat message push, product/service purchase in advance.',
          'Vue2 + Vue-Router + Vuex + ES6 + Webpack + eslint'
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
          '点击微信菜单的“答案”打开页面后输入题号可以搜索显示对应题目的问题、答案和解析，然后在页面底部会出现一个打印按钮，点击后会请求服务端去跟用户绑定的咕咕机设备（一种打印机）通讯（发送图片给咕咕机），后者会直接将图片进行打印。',
          '项目难点在于数学题目涉及到数学公式和图片较多，最终的解决方案是后端同事用java类库对语文和英语题目生成图片（html简单文本转图片，速度快），我用node将数学题目对应的网页转成图片（将PhantomJS无界面webkit内核浏览器打开的网页转图片，不稳定，需要写守护进程，而且因为需等待js渲染数学公式，速度极慢，平均6s一张图，用两个服务器跑了两三天的程序才跑完数学题目，但是效果较好）。'
        ],
        EN: [
          'Click "答案" menu, type in question code such as 2100011, and press enter button, you will see a page with content like question, options, answer and explanation, also a bottom button which after clicked can print the current webpage using the printer you account is bound to.' +
          'Actually, we already had screenshots corresponding to these questions stored in the server. And the main technological difficulty I encountered is to get screenshots of maths questions where complicated math formula and images are involved. Finally, with the help of PhantomJS, the difficulty is solved.'
        ]
      },
      gitUrl: '',
      demoUrl: '',
      imgUrl: 'img/wechat_guguji.jpeg'
    },
    {
      title: {
        CH: 'Node博客',
        EN: 'Node blog'
      },
      keyword: {
        CH: 'Express + MySQL + EJS',
        EN: 'Express + MySQL + EJS'
      },
      description: {
        CH: [
          '使用Node（Express框架）、MySQL。模版引擎用的是EJS',
          '发表评论的功能（支持<strong>嵌套评论</strong>）被我禁掉了，因为自己后端安全方面知识欠缺，数据库里的东西对我又很重要，开放这种往数据库里写数据的接口怕出问题。',
          '注册功能目前存在未解决的技术问题（想与已有的wordpress程序创建的数据库打通账号），有一种方法是访问Wordpress提供的用户相关API，但是我想直接跟数据库里的账号信息进行比对，在把Wordpress保存的密码在Node端进行加解密这块卡住了。'
        ],
        EN: [
          'Node(Express) and MySQL. EJS is used to display views.',
          'Nested comments are supported but forbidden due to safety reason (database is very important to me).',
        ]
      },
      gitUrl: 'https://github.com/Yakima-Teng/yakima',
      demoUrl: 'http://www.yxeye.com/blog',
      imgUrl: 'img/post_English.png'
    },
    {
      title: {
        CH: '车保赢',
        EN: 'Car insurances & win'
      },
      keyword: {
        CH: '微信JS SDK，车险报价投保业务',
        EN: 'Wechat JS SDK，websocket'
      },
      description: {
        CH: [
          '车险报价投保、下单支付',
          '技术栈：Vue全家桶'
          // '开发过的项目大多是小范围内部使用的，而且由于种种原因，有些项目中途转给北京总部的一个项目组做了，还有些项目夭折了，不过下面提到的都不是凭空捏造的，代码面试的时候可以现场看（不支持拷贝），我面试时会带上电脑^_^。',
          // '开发过一个车险投保PC端管理系统，起初使用Vue1全家桶开发，后期应领导要求（为了便于让后端同事也能参与前端开发）进行了重构，采用了传统的iframe + jQuery + html模版（handlebars）开发模式，自行封装了弹框、分页、日期等组件，和路由、页面打印、无限嵌套的勾选树等功能。该项目后来转交给北京项目组了。',
          // '开发过一个车辆估损PC端管理系统，使用Vue1全家桶开发，有个通过Websocket<strong>实时通讯</strong>的功能，管理平台内勤最多同时被分配4个微信端用户，聊天支持文本和图片，支持120个微信基础表情。',
          // '参与过公司其他项目部一个太平洋保险长期外包的寿险APP项目的开发（<strong>react native + redux + flow类型检查</strong>），独立开发过绑定用户订阅邮箱的功能，和iOS、android同事协同开发过更新用户头像的功能。',
          // '最主要的工作成果是一个车险比价投保功能的<strong>移动端项目（微信端页面、安卓/iOS端内嵌页面）</strong>，这个项目改动较为频繁，框架也历经了最初的客户端vue1到vue1+webpack到现在的vue2+webpack，微信JS SDK比较熟，分享、上传图片、支付等功能都开发过。微信公众号开发涉及到的服务端流程我大概知道一点点，因为以前自己用node写过这块的功能（不涉及支付）。'
        ],
        EN: [
          'Look up quotation results for car insurances, submit order and pay.',
          'Vue2 + Vue-Router + Vuex + ES6 + Webpack + eslint'
          // 'Most projects developed during working in the company are limited to a small quantity of people. But you can see it during face-to-face interview (I\'ll take my MAC ^_^).',
          // 'Developed a PC admin platform for car insurances. It was first developed using Vue1, and later refactored to using traditional iframe + jQuery + html template language (handlebars) to make it convenient for backend developers to participate in. Components like alert popup, page navigation, datepicker, and functions like router, printing, nested checkboxes are encapsulated. This project was transferred to Beijing team.',
          // 'Developed a PC admin platform for assessment of car damage loss. Developed using Vue1 + vue-router + vuex. Websocket was employed to make <strong>real-time communication</strong> available (support text, image, and 120 basic wechat emotions).',
          // 'Participated in a long-term project outsourced by China Pacific Insurance using <strong>React Native + Redux + flow (a static type checker for js)</strong>. Responsible for user subscription emails binding and user avatar updating.',
          // 'The most important project was a <strong>mobile project (car insurances) used in Wechat and APP (iOS & Android)</strong>. Vue2 + webpack were used. Functions like sharing, uploading images, payment supported by Wechat JS SDK were involved (I know how to build a simple Wechat backend server using Node).'
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
          '业余时间写的一个工具。用于服务器端数据模拟，方便前端工程师独立于后端进行开发。支持<strong>请求转发、响应静态JSON文件数据、响应自定义动态数据（内置mockjs）</strong>，详细说明请点击查看README.md文档'
        ],
        EN: [
          'A tool written in part time. It\'s purpose is to mock data in backend server to provide convenience for frontend development. You will not need to wait for backend developer anymore if your team can define data structure in advance of development. This small tools support <strong>request proxy, response using defined static JSON file, response using dynamic data (with the help of mockjs integrated)</strong>. For detail, please refer to the README.md in source code.'
        ]
      },
      gitUrl: 'https://github.com/Yakima-Teng/mock-server',
      demoUrl: '',
      imgUrl: 'img/mock-server.png'
    },
    {
      title: {
        CH: '门店登记系统',
        EN: 'Store registry system'
      },
      keyword: {
        CH: '门店登记',
        EN: 'store registry system'
      },
      description: {
        CH: [
          '门店登记、供应商登记、积分查询等功能',
          '技术栈：react全家桶'
        ],
        EN: [
          'store/supplier registry, brokerage looking-up',
          'React + React-Router + Redux'
        ]
      },
      gitUrl: '',
      demoUrl: 'http://www.cloudfb.cn/scf/www/extension/index.html',
      imgUrl: 'img/store-registry-system.png'
    },
    {
      title: {
        CH: 'Djax - 多页应用脚手架',
        EN: 'Djax - multi-page application boilerplate'
      },
      keyword: {
        CH: '多页应用脚手架',
        EN: 'MPA boilerplate'
      },
      description: {
        CH: [
          '开箱即用、技术栈简单实用的项目脚手架，可用于传统多页应用的开发',
          '技术栈：gulp + ES6 support + eslint + pug + sass'
        ],
        EN: [
          'Out-of-box boilerplate used to develop traditional multi-page application',
          'gulp + ES6 support + eslint + pug + sass',
        ]
      },
      gitUrl: 'https://github.com/Yakima-Teng/djax',
      demoUrl: 'http://www.verysites.com/',
      imgUrl: 'img/djax.png'
    },
    {
      title: {
        CH: 'React项目脚手架',
        EN: 'React boilerplate'
      },
      keyword: {
        CH: 'react 脚手架',
        EN: 'react boilerplate'
      },
      description: {
        CH: [
          '为了在开发react项目时能有和开发vue项，根据vue-cli webpack模版改编出了一个react项目开发环境，预置了几个好看的动画效果。',
          '技术栈：react + react-router + redux + webpack + ES6 support + eslint'
        ],
        EN: [
          'Base on Vue boilerplate to provide similar development experience.',
          'react + react-router + webpack + ES6 support + eslint.',
        ]
      },
      gitUrl: 'https://github.com/Yakima-Teng/demos',
      demoUrl: 'http://www.yxeye.com/demos/index.html',
      imgUrl: 'img/react_boilerplate.png'
    }
  ]
}
