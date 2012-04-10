
/*
jQuery Stack
Copyright 2012 Kevin Sylvestre
*/

(function() {
  "use strict";
  var $, Stack;

  $ = jQuery;

  Stack = function(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, $.fn.stack.defaults, options);
  };

  Stack.prototype = {
    constructor: Stack,
    push: function(options) {
      return this.$element.prepend($("<img />").attr('src', options.url));
    }
  };

  $.fn.stack = function(options) {
    return $(this).each(function() {
      var $this, data;
      $this = $(this);
      data = $this.data('stackerino');
      if (data == null) $this.data('stackerino', data = new Stack(this, options));
      if (typeof options === 'string') data[options]();
      if (options && typeof options.action === 'string') {
        return data[options.action](options);
      }
    });
  };

  $.fn.stack.defaults = {
    limit: 3
  };

  $(function() {
    return $('[data-stack="photos"]').stack();
  });

}).call(this);
