var App = function() {
  this.actions();
  return this;
};

/* Bind actions for buttons / etc... */
App.prototype.actions = function() {

  // Toggle nav on / off in mobile site
  $('.nav-trigger')
    .unbind('click')
    .click(function(e) {
      e.preventDefault();
      $('nav').toggle();
    });

};

window.app = new App();