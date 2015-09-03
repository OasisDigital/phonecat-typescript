class PhoneAnimation {
  private animateUp(element: JQuery, className: string, done: Function) {
    if(className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      top: 500,
      left: 0,
      display: 'block'
    });

    jQuery(element).animate({
      top: 0
    }, done);
  }

  private animateDown(element: JQuery, className: string, done: Function): void {
    if(className != 'active') {
      return;
    }
    element.css({
      position: 'absolute',
      left: 0,
      top: 0
    });

    jQuery(element).animate({
      top: -500
    }, done);
  }

  addClass = this.animateUp;
  removeClass = this.animateDown;

  static AnimationObject() {
    return function() {
      return new PhoneAnimation();
    }
  }
}

var phonecatAnimations: ng.IModule = angular.module('phonecatAnimations', ['ngAnimate']);

phonecatAnimations.animation('.phone', PhoneAnimation.AnimationObject());
