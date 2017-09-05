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
      title: 'CloudFB云飨',
      keyword: '供应链金融、微信商城',
      description: [
        '这是一个私活项目，写于2017年年中。项目团队：2*Java + 1*设计 + 1*前端 + 2*测试。开发测试耗时约1.5月，维护3个月。',
        '该项目属于供应链金融方向的一个中英文双语项目。包含一个后台管理系统和一个微信端微商城项目，我负责微信微商城项目的前端开发，涉及购物车、预付单/订单/送货单状态管理、微信在线支付等常规功能。',
        '说明：因为自家项目部的几个项目长期处于未上线/不可用/内部使用的状态，不适合放出来，就拿这个当生产项目案例了-_-',
        '技术栈：Vue2全家桶+Webpack'
      ],
      gitUrl: '',
      demoUrl: '',
      imgUrl: 'img/qrcode_CloudFB_1.jpg'
    },
    {
      title: '咕咕机学习',
      keyword: '网页转图片',
      description: [
        '这个公众号找不到二维码，需要在微信里手动输入“咕咕机学习”搜索添加。重点说“答案”这个微信菜单。项目团队：3后端+1前端。耗时约1个月（私活项目）。',
        '点击打开页面后输入题号可以搜索显示对应题目的问题、答案和解析，然后在页面底部会出现一个打印按钮，点击后会请求服务端去跟用户绑定的咕咕机设备（一种打印机）通讯（发送图片给咕咕机），后者会直接将图片进行打印。',
        '项目难点在于数学题目涉及到数学公式和图片较多，最终的解决方案是后端同事用java类库对语文和英语题目生成图片（html简单文本转图片，速度快），我用node将数学题目对应的网页转成图片（将PhantomJS无界面webkit内核浏览器打开的网页转图片，不稳定，需要写守护进程，而且因为需等待js渲染数学公式，速度极慢，平均6s一张图，用两个服务器跑了两三天的程序才跑完数学题目，但是效果较好）。'
      ],
      gitUrl: '',
      demoUrl: '',
      imgUrl: 'img/guguji.png'
    },
    {
      title: '博客',
      keyword: 'Express + MySQL + EJS, Angular1',
      description: [
        '个人项目，非私活。最早上线的是一个前端Angular SPA + 后端Express提供API接口的版本，代码和在线地址见上面链接。后期考虑到SEO的问题，在后端用EJS作为模版重写了一版本，在线地址：<a href="http://www.yxeye.com/blog">http://www.yxeye.com/blog</a>。',
        'Angular版本开发环境使用gulp，支持模版文件，请求转发等常见功能，发表评论的功能被我禁掉了，因为自己后端安全方面知识欠缺，数据库里的东西对我又很重要，怕出问题。',
        '数据库使用MySQL而非前端爱用的NoSQL，我用MySQL是因为一直在用WordPress这个历史原因，前端爱用NoSQL大抵是因为最初几本翻译过来Node书籍里涉及到数据库的地方讲的是NoSQL所以后面上来的很多都用NoSQL了吧-_-。我觉得MySQL对大部分场景都是够用的。',
        '注册功能目前存在未解决的技术问题，网上大部分demo都是新建的数据库，我要跟现有的数据库打通，有一种方法是访问Wordpress提供的用户相关API，但是我想直接跟数据库里的账号信息进行比对，在把Wordpress保存的密码在Node端进行加解密这块算是卡住了。'
      ],
      gitUrl: 'https://git.oschina.net/yakima/blog',
      demoUrl: 'http://yakima.oschina.io/blog',
      imgUrl: 'img/post_English.png'
    }
    // {
    //   title: '车险投保PC端管理系统',
    //   keyword: '2012.11-Now',
    //   description: [
    //     '未使用框架（jQuery是库不是框架）',
    //     '无限嵌套的勾选树',
    //     '打印'
    //   ],
    //   gitUrl: '',
    //   demoUrl: '',
    //   imgUrl: ''
    // },
    // {
    //   title: '车辆估损PC端后台管理系统',
    //   keyword: '2012.11-Now',
    //   description: [
    //     'Vue1、websocket聊天、图片上传'
    //   ],
    //   gitUrl: '',
    //   demoUrl: '',
    //   imgUrl: ''
    // },
    // {
    //   title: '车险比价微信端项目',
    //   keyword: '2012.11-Now',
    //   description: [
    //     'Vue1、一堆表单、借助rem单位实现自适应布局'
    //   ],
    //   gitUrl: '',
    //   demoUrl: '',
    //   imgUrl: ''
    // },
    // {
    //   title: '博客',
    //   keyword: '2012.11-Now',
    //   description: [
    //     'Angular1，接口由NodeJS+Mysql提供',
    //     '支持根据来源显示对应的上一篇文章和下一篇文章',
    //     '支持简单的评论功能'
    //   ],
    //   gitUrl: 'https://github.com/Yakima-Teng/blog',
    //   demoUrl: 'http://www.orzzone.com/blog/',
    //   imgUrl: ''
    // },
    // {
    //   title: 'react-webpack项目脚手架',
    //   keyword: '2012.11-Now',
    //   description: [
    //     'react + react-router + webpack + ES6 + babel + eslint',
    //     '由Vue官方webpack模版改造而来的react项目开发脚手架，预置了一个可由鼠标操控的六面体'
    //   ],
    //   gitUrl: 'https://github.com/Yakima-Teng/react-webpack-boilerplate',
    //   demoUrl: 'http://www.orzzone.com/react-webpack-boilerplate/',
    //   imgUrl: ''
    // },
    // {
    //   title: 'vue2-webpack项目脚手架',
    //   keyword: '2012.11-Now',
    //   description: [
    //     'vue2 + vue-router + vuex + webpack + ES6 + eslint',
    //     '由Vue官方webpack模版改造而来的vue2项目开发脚手架'
    //   ],
    //   gitUrl: 'https://github.com/Yakima-Teng/vue2-webpack-boilerplate',
    //   demoUrl: 'https://yakima-teng.github.io/vue2-webpack-boilerplate/',
    //   imgUrl: ''
    // },
    // {
    //   title: 'mock server',
    //   keyword: '2012.11-Now',
    //   description: [
    //     '服务器端数据模拟，方便前端工程师独立于后端进行开发',
    //     '支持代理请求、响应静态JSON文件数据、响应自定义动态数据'
    //   ],
    //   gitUrl: 'https://github.com/Yakima-Teng/mock-server',
    //   demoUrl: '',
    //   imgUrl: ''
    // },
    // {
    //   title: 'iframe application',
    //   keyword: '2012.11-Now',
    //   description: [
    //     '基于iframe实现的类SPA应用脚手架',
    //     '适用于有对前端了解较少的后端参与的前端应用类项目的开发'
    //   ],
    //   gitUrl: 'https://github.com/Yakima-Teng/iframe-application',
    //   demoUrl: '',
    //   imgUrl: ''
    // }
  ]
}
