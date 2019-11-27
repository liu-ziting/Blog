module.exports = {
		base: '',// 设置站点根路径
    title: 'Liuziting', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '刘子亭的个人博客', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/xiao.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        logo: '/xiao.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: '文章', link: '/pages/article/frontend/Adminair.md' },
                    { text: '软件', link: '/pages/software/index.md' },
										{ text: '项目', link: '/pages/project.md' },
										{ text: '航拍', link: '/pages/video.md' },
                ]
            },
						{ text: '关于我', link: '/pages/about.md' },
						{ text: '图传工具', link: 'https://bat.lihail.cn' },
						{ text: 'Wiki', link: 'https://wiki.lihail.cn' },
            { text: 'Github', link: 'https://github.com/liu-ziting' },
        ],
        sidebar: {
            '/pages/article/':[
                {
                    title: '前端开发',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
												['frontend/Adminair.md', '1、Vue+El构建的后台管理系统'],
												['frontend/Layui.md', '2、基于Layui的博客后台管理系统'],
												['frontend/Vue.md', '3、Vue相关开源项目库汇总'],
                        ['frontend/Jrx.md', '4、前端兼容性问题总结'],
												['frontend/Js.md', '5、常用js方法整理'],
												['frontend/Fx.md', '6、移动端键盘遮住输入框问题'],
												['frontend/Bsx.md', '7、ios返回后页面不刷新的问题'],
												['frontend/Jz.md', '8、多种方法实现水平居中垂直居中'],
												['frontend/Html.md', '9、你不知道的HTML'],
												['frontend/Ajax.md', '10、ajax长轮询、轮询应用和介绍'],
												
                    ]
                },
                {
                    title: '博客搭建',
                    collapsable: false, // 可选的, 默认值是 true,
										sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['blog/Hexo.md', '1、最快的 Hexo 博客搭建方法'],
												['blog/Wiki.md', '2、Wiki 知识库管理搭建']
                    ]
                },
								{
								    title: '开发流程',
								    collapsable: false, // 可选的, 默认值是 true,
										sidebarDepth: 1,    // 可选的, 默认值是 1
								    children: [
								        ['blog/Wx.md', '1、微信公众号开发流程'],
												['blog/Dd.md', '2、钉钉微应用接入']
								    ]
								},
								{
								    title: 'Python',
								    collapsable: false, // 可选的, 默认值是 true,
										sidebarDepth: 1,    // 可选的, 默认值是 1
								    children: [
								        ['python/Python.md', '1、微信防撤回的监听'],
								    ]
								},
								{
								    title: '工具',
								    collapsable: false, // 可选的, 默认值是 true,
										sidebarDepth: 1,    // 可选的, 默认值是 1
								    children: [
												['tool/Natapp.md', '1、内网穿透工具natapp'],
												['tool/Eruda.md', '2、移动端调试神器eruda'],
												['tool/Vconsole.md', '3、移动端调试神器vconsole'],
								    ]
								},
								{
								    title: '网络',
								    collapsable: false, // 可选的, 默认值是 true,
										sidebarDepth: 1,    // 可选的, 默认值是 1
								    children: [
												['network/basic.md', '1、网络基础知识']
								    ]
								},
								{
								    title: '其他',
								    collapsable: false, // 可选的, 默认值是 true,
										sidebarDepth: 1,    // 可选的, 默认值是 1
								    children: [
												['other/Tt.md', '1、头条是如何挖掘多级朋友圈关系链的'],
												['other/Hyjs.md', '2、微信群里各种「好友加速」真的可以加速成功吗？'],
								        ['other/Jj.md', '3、基金新手入门必看知识点'],
												['other/Kf.md', '4、Facebook 上一位大佬发表的代码看法'],
												['other/Qkl.md', '5、浅谈区块链技术'],
												['other/Bn.md', '6、JavaScript和地球变暖的关系'],
								    ]
								},
								{
								    title: '琐碎',
								    collapsable: false, // 可选的, 默认值是 true,
										sidebarDepth: 1,    // 可选的, 默认值是 1
								    children: [
												['life/Pz.md', '1、你比我想的更偏执'],
												['life/Sd.md', '2、你们觉得这个时代好还是父母那个时代好？'],
												['life/Xh.md', '3、喜欢是多么不靠谱的事情'],
												['life/Dd.md', '4、滴血的滴滴：你想知道的，正是他不愿说的'],
												['life/Jk.md', '5、从这件事情为什么发生在我身上到这件事情教会我什么'],
												
								    ]
								},
								{
								    title: '总结',
								    collapsable: false, // 可选的, 默认值是 true,
										sidebarDepth: 1,    // 可选的, 默认值是 1
								    children: [
												['life/2018.md', '1、2018年度总结'],
												
								    ]
								},
            ],
        }
    }
}