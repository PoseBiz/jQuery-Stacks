# jQuery Stacks

Stacks is a jQuery plugin that animates displaying stacks of photos.

## Installation

To install copy the *javascripts* and *stylesheets* directories into your project and add the following snippet to the header:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.17/jquery-ui.min.js" type="text/javascript"></script>
    <script src="javascripts/jquery.stacks.js" type="text/javascript"></script>
    <link href="stylesheets/jquery.stacks.css" rel="stylesheet" type="text/css" />

## Use

Setup the following basic markup:

    <div class='stack' data-stack='photos'>
      <img src='samples/image-1.png' />
      <img src='samples/image-3.png' />
      <img src='samples/image-2.png' />
    </div>
    <div class='stack' data-stack='photos'>
      <img src='samples/image-4.png' />
      <img src='samples/image-5.png' />
      <img src='samples/image-6.png' />
    </div>
    <div class='stack' data-stack='photos'>
      <img src='samples/image-7.png' />
      <img src='samples/image-8.png' />
      <img src='samples/image-9.png' />
    </div>

Images can be pushed onto a stack using:

    $('.stack').stack({ action: 'push', url: 'http://.../image.png' });
    
## Copyright

Copyright (c) 2010 - 2012 Pose. See LICENSE for details.
