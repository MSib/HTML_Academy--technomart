'use strict';
(function () {

  var nowOpens = false;
  var transitionSpeed = 200;
  var transitionStep = 15;
  var intervalID;

  var modalArray = document.querySelectorAll('.modal');

  var modalMap = document.querySelector('.map');
  var modalFeedback = document.querySelector('.feedback');
  var modalAdded = document.querySelector('.added');

  var closeAcitveModal = function () {
    document.removeEventListener('keydown', onShow);
    if (nowOpens) {
      clearInterval(intervalID);
      nowOpens = false;
    }
    for (var i = 0; i < modalArray.length; i++) {
      if (modalArray[i].classList.contains("modal--active")) {
        modalArray[i].classList.remove("modal--active");
        modalArray[i].style.opacity = 0;
        modalArray[i].style.top = "calc(50% - 50px)";
      }
    }
  };

  var onShow = function (e) {
    if (e.keyCode === window.variable.KeyCode.ESCAPE) {
      closeAcitveModal();
    }
  };

  var opens = function (modal) {
    nowOpens = true;
    var stepPerSpeed = transitionSpeed / transitionStep;
    var iteration = 0;
    intervalID = setInterval(function () {
      iteration++;
      modal.style.opacity = ((1 / transitionStep) * iteration).toFixed(3);
      modal.style.top = "calc(50% - " + (50 - (50 / transitionStep) * iteration) + 'px)';

      if (iteration === transitionStep) {
        clearInterval(intervalID);
        iteration = 0;
        nowOpens = false;
      }
    }, stepPerSpeed);
  };

  if (!!modalMap) {
    var btnMapShow = document.querySelector('.contacts-about__map');
    var btnMapClose = modalMap.querySelector('.modal__button-close');

    var showModalMap = function () {
      closeAcitveModal();
      opens(modalMap);
      document.addEventListener('keydown', onShow);
      modalMap.classList.add("modal--active");
    };

    btnMapShow.addEventListener('click', showModalMap);
    btnMapClose.addEventListener('click', closeAcitveModal);
  }

  if (!!modalFeedback) {
    var btnFeedbackShow = document.querySelector('.contacts-about__button');
    var btnFeedbackClose = modalFeedback.querySelector('.modal__button-close');

    var showModalFeedback = function () {
      closeAcitveModal();
      document.addEventListener('keydown', onShow);
      modalFeedback.classList.add("modal--active");
      opens(modalFeedback);
    };

    btnFeedbackShow.addEventListener('click', showModalFeedback);
    btnFeedbackClose.addEventListener('click', closeAcitveModal);
  }

  if (!!modalAdded) {
    var btnAddedShowArray = document.querySelectorAll('.item-catalog__add-to-cart');
    var btnAddedClose = modalAdded.querySelector('.modal__button-close');

    var addToCart = function () {
      closeAcitveModal();
      opens(modalAdded);
      document.addEventListener('keydown', onShow);
      modalAdded.classList.add("modal--active");
    };

    for (var i = 0; i < btnAddedShowArray.length; i++) {
    // fallback for ie
      if (btnAddedShowArray[i].addEventListener) {
        btnAddedShowArray[i].addEventListener('click',addToCart);
      } else if (btnAddedShowArray[i].attachEvent) {
        btnAddedShowArray[i].attachEvent("on"+'click', addToCart);
      } else {
        btnAddedShowArray[i]['click'] = addToCart;
      }
    }

    btnAddedClose.addEventListener('click', closeAcitveModal);
  }


})();
