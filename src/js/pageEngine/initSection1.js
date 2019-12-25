import {
	isWxClient,
	isMobile
} from '../utils/index'

export function initSection1(el) {
  audioStarter(el)
}

function audioStarter(el) {
  const audio = el.find('.resume-page__slide1-audio audio').get(0)
  if (audio != null) {
    if (isWxClient()) {
      document.addEventListener('WeixinJSBridgeReady', function () {
        audio.play()
      }, false)
		} else {
			if (isMobile()) {
				document.addEventListener('touchstart', run, false)
			}
		}
  }

  function run() {
    audio.play()
  }
}
