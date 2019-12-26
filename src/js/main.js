import {
	isWxClient,
	isMobile
} from './utils'
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

  // audio
  createAudio()
  // pages
  initSection1($sections.eq(0).find('.fp-tableCell'))
  initSection2($sections.eq(1).find('.fp-tableCell'))
  initSection3($sections.eq(2).find('.fp-tableCell'))
  initSection4($sections.eq(3).find('.fp-tableCell'))
  initSection5($sections.eq(4).find('.fp-tableCell'))

  function createAudio() {
    const $audio = $(`
      <div class="resume-audio paused">
        <div class="resume-audio__bg"/>
        <audio src="static/audio/music.mp3" autoplay loop/>
      </div>
    `)
    $('#fp-nav')
      .append($audio)
    bindAudioEvent($audio)
    audioStarter($audio)
  }

  function bindAudioEvent(el) {
    const bgEl = el.find('.resume-audio__bg')
    const audioEl = el.find('audio').get(0)
    el
      .on('click', function () {
        if(audioEl.paused) {
          el.removeClass('paused')
          el.addClass('playing')
          bgEl.addClass('run')
          audioEl.play()
        } else {
          el.removeClass('playing')
          el.addClass('paused')
          bgEl.removeClass('run')
          audioEl.pause()
        }
      })
  }

  function audioStarter(el) {
    const bgEl = el.find('.resume-audio__bg')
    const audioEl = el.find('audio').get(0)
    if (audioEl != null) {
      if (isWxClient()) {
        document.addEventListener('WeixinJSBridgeReady', function () {
          audioEl.play()
          bgEl.addClass('run')
        }, false)
      } else {
        if (isMobile()) {
          document.addEventListener('touchstart', run, false)
        }
      }
    }
  
    function run() {
      audioEl.play()
      bgEl.addClass('run')
    }
  }
})
