$(document).ready(function() {
    scrollAnimator.calculateTrigger();
    scrollAnimator.runDetector();
});


const scrollAnimator = {
    schoolTrigger: 0,
    mapTrigger: 0,
    winHeight: 0,
    schoolDivId: null,
    mapDivId: null,
    calculateTrigger: function() {
        const self = this;
        this.schoolDivId = $("#schoolComeTo");
        this.mapDivId = $("#mapArea");
        calculate();

        setTimeout(calculate, 4000);

        $(window).resize(function() {
            calculate();
        });

        function calculate() {
            self.winHeight = $(window).height();
            self.schoolTrigger = self.schoolDivId.offset().top + (self.schoolDivId.height() / 1.4);
            self.mapTrigger = self.mapDivId.offset().top + (self.mapDivId.height() / 1.2);
        }
    },
    runDetector: function() {
        const self = this;
        const html = $('html');
        const state = [false, false];
        const oldState = [false, false];
        $(document).scroll(function() {
            const pos = html.scrollTop() + self.winHeight;

            state[0] = (pos > self.schoolTrigger);
            state[1] = (pos > self.mapTrigger);

            tryAnimate(0, self.schoolDivId);
            tryAnimate(1, self.mapDivId);
        });

        function tryAnimate(stateId, div) {
            if ($(document).width() < 993) {
                div.addClass('active');
                return;
            }

            if (state[stateId] !== oldState[stateId]) {
                oldState[stateId] = state[stateId];
                if (state[stateId]) {
                    div.addClass('active');
                } else {
                    div.removeClass('active');
                }
            }
        }
    },
};