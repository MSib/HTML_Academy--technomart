'use strict';
(function () {
  var Slider = {
    'root': 'offers__slider',
    'next': 'slider__btn-next',
    'prew': 'slider__btn-prev',
    'slide': 'slide',
    'active': 'slide--active',
    'control': 'control-slider__dot',
    'controlActive': 'control-slider__dot--active',
  };

  var offersSlider = document.querySelector('.' + Slider.root);

  var buttonNext = offersSlider.querySelector('.' + Slider.next);
  var buttonPrev = offersSlider.querySelector('.' + Slider.prew);

  var slidesArray = offersSlider.querySelectorAll('.' + Slider.slide);
  var controlsArray = offersSlider.querySelectorAll('.' + Slider.control);

  var getPosition = function (arr, name) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains(name)) {
        return i;
      }
    }
    return 0;
  };

  var currentPosition = getPosition(slidesArray, Slider.active);

  var swichTo = 0;

  var switchToSlide = function (next, current) {
    current = typeof current !== 'undefined' ? current : currentPosition;
    currentPosition = next;
    slidesArray[current].classList.remove(Slider.active);
    controlsArray[current].classList.remove(Slider.controlActive);
    slidesArray[next].classList.add(Slider.active);
    controlsArray[next].classList.add(Slider.controlActive);
  };

  var changeSlide = function (evt) {
    if (evt.target.classList.contains(Slider.prew)) {
      if (currentPosition === 0) {
        swichTo = slidesArray.length - 1;
        switchToSlide(swichTo);
      } else {
        swichTo = currentPosition - 1;
        switchToSlide(swichTo);
      }
    } else {
      if (currentPosition == (slidesArray.length - 1)) {
        swichTo = 0;
        switchToSlide(swichTo);
      } else {
        swichTo = currentPosition + 1;
        switchToSlide(swichTo);
      }
    };
  }

  buttonNext.addEventListener('click', changeSlide);
  buttonPrev.addEventListener('click', changeSlide);

  var getSelectedControl = function (e) {
    for (var i = 0; i < controlsArray.length; i++) {
      if (e.target === controlsArray[i]) {
        switchToSlide(i);
      }
    }
  };

  for (var i = 0; i < controlsArray.length; i++) {
    // fallback for ie
    if (controlsArray[i].addEventListener) {
      controlsArray[i].addEventListener('click',getSelectedControl);
    } else if (controlsArray[i].attachEvent) {
      controlsArray[i].attachEvent("on"+'click', getSelectedControl);
    } else {
      controlsArray[i]['click'] = getSelectedControl;
    }
  }

})();
