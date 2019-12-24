import { generateElement } from './generateElment'
import { initSection1 } from './pageEngine/initSection1'
import { initSection2 } from './pageEngine/initSection2'
import { initSection3 } from './pageEngine/initSection3'
import { initSection4 } from './pageEngine/initSection4'
import { initSection5 } from './pageEngine/initSection5'

// 重写es6方法
import '@babel/polyfill'
import 'fullpage.js'
import '../scss/main.scss'

$(function () {
	const {
    wrapper,
    section1,
    section2,
    section3,
    section4,
    section5
  } = generateElement()

  console.log(
    section1,
    section2,
    section3,
    section4,
    section5
  )

  wrapper
    .fullpage()

  initSection1(section1.find('.fp-tableCell'))
  initSection2(section2.find('.fp-tableCell'))
  initSection3(section3.find('.fp-tableCell'))
  initSection4(section4.find('.fp-tableCell'))
  initSection5(section5.find('.fp-tableCell'))
})
