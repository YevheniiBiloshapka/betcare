class SlideAnimator {
    constructor(selector, options = {}) {
        this.container = $(selector);
        this.items = this.container.children(); // Assuming each item is a direct child
        this.gap = options.gap || 0; // Gap in pixels between items
        this.totalHeight = 0; // Total height to scroll including gaps

        this.applyGaps(); // Apply gaps to items and calculate total height

        this.container.append(this.container.contents().clone());

        this.currentTop = 0;
        this.startY = 0;
        this.speed = options.speed || 10;
        this.defaultSpeed = this.speed;
        this.frameRate = options.frameRate || 16;
        this.direction = options.direction || "toTop"; // "toTop" or "toBottom"
        this.interval = null;

        this.attachEventHandlers();
        this.startAnimation();
    }

    applyGaps() {
        // Apply gaps and calculate the total height
        this.items.each((index, item) => {
            var marginTop = this.gap;
            $(item).css('margin-top', marginTop + 'px');
            this.totalHeight += $(item).outerHeight() + marginTop;
        });
    }

    animate() {
        if (this.direction === "toBottom") {
            this.currentTop -= this.speed;
            if (this.currentTop <= -this.totalHeight) {
                this.currentTop = 0;
            }
        } else {
            this.currentTop += this.speed;
            if (this.currentTop >= this.totalHeight) {
                this.currentTop = 0;
            }
        }
        this.container.css('top', -this.currentTop + 'px');
    }

    startAnimation() {
        if (!this.interval) {
            this.interval = setInterval(() => this.animate(), this.frameRate);
        }
    }

    stopAnimation() {
        clearInterval(this.interval);
        this.interval = null;
    }

    setDirection(newDirection) {
        this.direction = newDirection;
    }

    attachEventHandlers() {
        this.container.hover(() => {
            this.stopAnimation();
        }, () => {
            this.speed = this.defaultSpeed;
            this.startAnimation();
        });

        this.container.on('mousedown', (event) => {
            this.startY = event.pageY;
            this.stopAnimation();

            $(document).on('mousemove', (e) => {
                var diff = this.startY - e.pageY;
                if (this.direction === "toBottom") {
                    this.currentTop -= diff;
                } else {
                    this.currentTop += diff;
                }
                this.container.css('top', this.direction === "toBottom" ? this.currentTop + 'px' : -this.currentTop + 'px');
                this.startY = e.pageY;
                this.speed = Math.max(30, this.defaultSpeed + Math.abs(diff) * 0.2);

                clearTimeout(this.speedTimeout);
                this.speedTimeout = setTimeout(() => {
                    this.speed = this.defaultSpeed;
                }, 500);
            }).on('mouseup', () => {
                $(document).off('mousemove');
                $(document).off('mouseup');

                clearTimeout(this.speedTimeout);
                this.speed = this.defaultSpeed;

                this.startAnimation();
            });
        });
    }
}
export default SlideAnimator;