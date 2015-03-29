/*
Copyright 2015 Lcf.vs
 -
Released under the MIT license
 -
https://github.com/Lcfvs/number-accelerator
*/
void function () {
    var accelerate;
    
    accelerate = function accelerate(input) {
        var modifier,
            previousValue,
            originalStep,
            step;

        modifier = 1;
        previousValue = +input.value;
        originalStep =
            step = +input.getAttribute('step');

        input.addEventListener('input', function (event) {
            var value;

            modifier += 1;
            value = +input.value;

            if ((value % step) !== 0) {
                value -= value % originalStep;

                if (value > previousValue) {
                    value += originalStep;
                }

                input.value = value;
            }

            if ((modifier % 10) === 0) {
                step = step * 5;
                input.setAttribute('step', step);
            }
        }, false);

        input.addEventListener('mouseup', function (event) {
            modifier = 1;

            step = originalStep;
            input.setAttribute('step', step);
        }, false);

        input.addEventListener('change', function (event) {
            previousValue = +input.value;
        }, false);
    };
    
    if (typeof module === 'object' && module.exports !== undefined) {
        module.exports = accelerate;
    } else if (typeof window === 'object') {
        window.accelerate = accelerate;
    }
}();