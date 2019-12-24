export function generateElement() {
  const wrapper = $('<div id="resume-page"></div>')
  const section1 = $('<div class="section resume-page__slide1"></div>')
  const section2 = $('<div class="section resume-page__slide2"></div>')
  const section3 = $('<div class="section resume-page__slide3"></div>')
  const section4 = $('<div class="section resume-page__slide4"></div>')
  const section5 = $('<div class="section resume-page__slide5"></div>')
  wrapper.append(section1, section2, section3, section4, section5).appendTo('body')

  return {
    wrapper,
    section1,
    section2,
    section3,
    section4,
    section5
  }
}
