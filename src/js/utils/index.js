export function isWxClient() {
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true
  }
  return false
}

export function isMobile() {
  return navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null
}
