import { generateElement } from './generateElment'

// 重写es6方法
import '@babel/polyfill'
import './core/fullpage'
import '../scss/main.scss'
import '../scss/fullpage.scss'
import '../scss/normalize.scss'

$(function () {
	generateElement()
		.appendTo('body')
			.fullpage()
})
