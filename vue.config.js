module.exports = {
	// 执行 npm run build 统一配置文件路径（本地访问dist/index.html需'./'）
	chainWebpack: config => {
		config.plugin('html')
			.tap(args => {
				args[0].title = "项目标题";
				return args;
			})
	},
	publicPath: './',
	outputDir: 'dist', // 输出文件目录
	lintOnSave: false, //设置是否在开发环境下每次保存代码时都启用 eslint验证
	configureWebpack: { // 别名配置
		resolve: {
			alias: {
				'api': '@/api',
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'router': '@/router',
				'config': "@/config",
				'Layout': '@/Layout',
				'store': '@/store',
				'utils': '@/utils',
				'views': '@/views',
			}
		}
		// 使用前面可加~
	},
	devServer: {
		hotOnly: false, // 热更新
		open: true, //配置自动启动
		host: "127.1.1.110",
		port: 3000,
		inline: true,
		compress: true,
		overlay: {
			warnings: false,
			errors: false
		},
		disableHostCheck: true, //webpack4.0 开启热更新
		proxy: {
			'/api': {
				target: process.env.VUE_APP_URL,
				changeOrigin: false, // 是否跨域
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	}
}