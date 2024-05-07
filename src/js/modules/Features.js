export const initFeaturesBlock = () => {
    const tabs = document.querySelectorAll('.features__tab');

    let observer = new IntersectionObserver(function (entries) {
        // entries содержит информацию о пересечении
        entries.forEach(function (entry) {
            // Если элемент входит в видимую область
            if (entry.isIntersecting) {
                let video = document.querySelector("video ");
                video.play();
                setTimeout(() => {
                    tabs.forEach((tab) => {
                        tab.classList.remove('active')
                    })
                    tabs[1].classList.add('active')
                }, 1000)
                setTimeout(() => {
                    tabs.forEach((tab) => {
                        tab.classList.remove('active')
                    })
                    tabs[2].classList.add('active')
                }, 3000)
                setTimeout(() => {
                    tabs.forEach((tab) => {
                        tab.classList.remove('active')
                    })
                    tabs[3].classList.add('active')

                }, 4000)

            } else {
                console.log('Элемент покинул поле видимости');
                // Добавьте здесь свой код для выполнения действий при выходе элемента из видимой области
            }
        });
    });

    let targetElement = document.querySelector('.features__phone');

    observer.observe(targetElement);
}

document.querySelectorAll('.vip-block__item').forEach(item => {
    item.addEventListener('mousemove', function (e) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.
        const maxX = rect.width;
        const maxY = rect.height;

        const red = Math.floor((x / maxX) * 255);
        const blue = Math.floor((y / maxY) * 255);
        const green = 150; // Static green value for contrast

        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    });
});
