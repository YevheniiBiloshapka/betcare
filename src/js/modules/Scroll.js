export const Scroll = () => {

    let clientHeight = document.documentElement.clientHeight;
    let sectionImages = document.querySelectorAll('.fullpage-section img');
    let btnImages = document.querySelectorAll('.fullpage-section__scroll-btn img');
    let sectionSubtitles = document.querySelectorAll('.fullpage-section__sub-title span');
    let header = document.querySelector('header');
    let servicesOffsetTop = document.querySelector('.services').offsetTop;
    let slotOffsetTop = document.querySelector('.slot').offsetTop;
    let faqOffsetTop = document.querySelector('.faq').offsetTop;
    let footerOffsetTop = document.querySelector('.footer').offsetTop;
    function setActive (scrollPosition) {
        if(scrollPosition == 0 ) {
            sectionImages.forEach((img) => {
                img.classList.remove('active')
            })
            btnImages.forEach((img) => {
                img.classList.remove('active')
            })
            sectionSubtitles.forEach((title) => {
                title.classList.remove('active')
            })
            sectionImages[0].classList.add('active')
            btnImages[0].classList.add('active')
            sectionSubtitles[0].classList.add('active')
        } else if (0 < scrollPosition && scrollPosition < clientHeight) {
            sectionImages.forEach((img) => {
                img.classList.remove('active')
            })
            btnImages.forEach((img) => {
                img.classList.remove('active')
            })
            sectionSubtitles.forEach((title) => {
                title.classList.remove('active')
            })
            sectionImages[1].classList.add('active')
            btnImages[1].classList.add('active')
            sectionSubtitles[1].classList.add('active')
        } else if (clientHeight < scrollPosition && scrollPosition < 2 * clientHeight) {
            sectionImages.forEach((img) => {
                img.classList.remove('active')
            })
            btnImages.forEach((img) => {
                img.classList.remove('active')
            })
            sectionSubtitles.forEach((title) => {
                title.classList.remove('active')
            })
            sectionImages[2].classList.add('active')
            btnImages[2].classList.add('active')
            sectionSubtitles[2].classList.add('active')
        } else if (2 * clientHeight < scrollPosition && scrollPosition < 3 * clientHeight) {
            sectionImages.forEach((img) => {
                img.classList.remove('active')
            })
            btnImages.forEach((img) => {
                img.classList.remove('active')
            })
            sectionSubtitles.forEach((title) => {
                title.classList.remove('active')
            })
            sectionImages[3].classList.add('active')
            btnImages[3].classList.add('active')
            sectionSubtitles[3].classList.add('active')
        }
    }
    function setHeaderBackground(scrollPosition) {
        let checkPosition = ((scrollPosition + 200) >= servicesOffsetTop  && scrollPosition <= slotOffsetTop) || (scrollPosition >= faqOffsetTop && scrollPosition <= footerOffsetTop);
        if(checkPosition) {
            header.classList.add('background')
        } else {
            header.classList.remove('background')
        }
    }
    // Обработчик события прокрутки
    document.querySelector('.page').addEventListener('scroll', function() {
        const scrollPosition = this.scrollTop;
        setActive(scrollPosition);
        setHeaderBackground(scrollPosition);
    });

    let page = document.querySelector('.page');

    btnImages.forEach((img) => {
        img.addEventListener('click', () => {
            page.scrollBy({
                top: clientHeight,
                behavior : "smooth"
            })

        })
    })

}