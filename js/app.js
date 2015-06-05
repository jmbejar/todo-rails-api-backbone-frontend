/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
  'use strict';

  // Make sure we always set content type as json
  Backbone._sync = Backbone.sync;

  Backbone.sync = function(method, model, options) {
    options.beforeSend = function(xhr){
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    };
    return Backbone._sync(method, model, options);
  };


  // kick things off by creating the `App`
  new app.AppView();
});
