/*
* This piece of code is extracted from
* https://github.com/codebrew/backbone-rails/blob/d7f06407ab0adcc08b1cd79257a01a3a58560b00/vendor/assets/javascripts/backbone_rails_sync.js
*/


(function($) {
  Backbone._sync = Backbone.sync;

  Backbone.sync = function(method, model, options) {

    // Serialize data, optionally using paramRoot
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      options.contentType = 'application/json';
      data = JSON.stringify(options.attrs || model.toJSON(options));
      if (model.paramRoot) {
        data = {};
        data[model.paramRoot] = model.toJSON(options);
      } else {
        data = model.toJSON();
      }
      options.data = JSON.stringify(data);
    }

    return Backbone._sync(method, model, options);
  };

})(jQuery);
