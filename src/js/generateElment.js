export function generateElement() {
    return $(`
        <div id="resume-page">
            <div class="section resume-page__slide1">Slide 1</div>
            <div class="section resume-page__slide2">Slide 2</div>
            <div class="section resume-page__slide3">
                <div class="slide">Slide 3.1</div>
                <div class="slide">Slide 3.2</div>
                <div class="slide">Slide 3.3</div>
            </div>
            <div class="section resume-page__slide4">Slide 4</div>
            <div class="section resume-page__slide5">Slide 5</div>
        </div>
    `)
}
