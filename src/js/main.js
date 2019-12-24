import { initSection1 } from './pageEngine/initSection1'
import { initSection2 } from './pageEngine/initSection2'
import { initSection3 } from './pageEngine/initSection3'
import { initSection4 } from './pageEngine/initSection4'
import { initSection5 } from './pageEngine/initSection5'

// 重写es6方法
import '@babel/polyfill'
import '../scss/main.scss'

$(function () {
  const $root = $('#resume-page')
  const $sections = $root.find('.section')

  $root
    .fullpage({
      navigation: true,
      navigationPosition: 'right'
    })

  initSection1($sections.eq(0).find('.fp-tableCell'))
  initSection2($sections.eq(1).find('.fp-tableCell'))
  initSection3($sections.eq(2).find('.fp-tableCell'))
  initSection4($sections.eq(3).find('.fp-tableCell'))
  initSection5($sections.eq(4).find('.fp-tableCell'))
})
