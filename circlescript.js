const quadrants = document.querySelectorAll('.quadrant');

quadrants.forEach(quadrant => {
    quadrant.addEventListener('mouseover', function() {
        switch (this.id) {
            case 'q1':
                this.style.setProperty('--tx', '-25px');
                this.style.setProperty('--ty', '-25px');
                break;
            case 'q2':
                this.style.setProperty('--tx', '25px');
                this.style.setProperty('--ty', '-25px');
                break;
            case 'q3':
                this.style.setProperty('--tx', '25px');
                this.style.setProperty('--ty', '25px');
                break;
            case 'q4':
                this.style.setProperty('--tx', '-25px');
                this.style.setProperty('--ty', '25px');
                break;
        }
    });

    // quadrant.addEventListener('mouseup', function() {
    //     this.style.setProperty('--tx', '0');
    //     this.style.setProperty('--ty', '0');
    // });

    quadrant.addEventListener('mouseleave', function() {
        this.style.setProperty('--tx', '0');
        this.style.setProperty('--ty', '0');
    });
});
