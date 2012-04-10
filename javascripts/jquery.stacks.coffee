###
jQuery Stack
Copyright 2012 Kevin Sylvestre
###

"use strict"

$ = jQuery

Stack = (element, options) ->
  @$element = $(element)
  @options = $.extend {}, $.fn.stack.defaults, options
  return

Stack.prototype =
  constructor: Stack
  push: (options) ->
    @$element.prepend($("<img />").attr('src', options.url))

$.fn.stack = (options) ->
  $(this).each () ->
    $this = $(this)
    data = $this.data('stackerino')
    $this.data('stackerino', data = new Stack(this, options)) unless data?
    data[options]() if typeof options is 'string'
    data[options.action](options) if options and typeof options.action is 'string'

$.fn.stack.defaults =
  limit: 3

$ ->
  $('[data-stack="photos"]').stack()
