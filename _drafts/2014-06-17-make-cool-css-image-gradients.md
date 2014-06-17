---
layout: post
title:  "Make cool CSS image gradients"
date:   2014-06-17 12:00:00
---

So you've got your rad city landscape but it isn't quite cool enough right? It needs some zing!

{% include img.html src="make-cool-css-image-gradients/new-york.jpg" alt="NYC" %}

Lets go ahead and add a CSS gradient (of course). To start, we have some nice simple markup for our image.

{% highlight html %}
<img src="new-york.jpg">
{% endhighlight %}

The first thing that saddens me is that you can't use psudeo before/after elements to an image tag, sad. So we have to go and spoil it by adding a wrapper&hellip;

{% highlight html %}
<div class="img-wrap">
  <img src="new-york.jpg">
</div>
{% endhighlight %}

With the wrapping div, psudeo elements can now be used so let's place one over the image.

{% highlight css %}
.img-wrap {
  position: relative;
  display: inline-block;
}

.img-wrap img {
  vertical-align: bottom;
}

.img-wrap::before {
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  position: absolute;
}
{% endhighlight %}

For the gradient, I'm going to generate a grarishly brilliant gradient using [this handy tool](http://www.colorzilla.com/gradient-editor/).

{% highlight css %}
.img-wrap::before {
  /* ... */
  background: #8a01ff; /* Old browsers */
  background: -moz-linear-gradient(left,  #8a01ff 0%, #ff00ae 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,#8a01ff), color-stop(100%,#ff00ae)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left,  #8a01ff 0%,#ff00ae 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left,  #8a01ff 0%,#ff00ae 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(left,  #8a01ff 0%,#ff00ae 100%); /* IE10+ */
  background: linear-gradient(to right,  #8a01ff 0%,#ff00ae 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8a01ff', endColorstr='#ff00ae',GradientType=1 ); /* IE6-9 */
}
{% endhighlight %}


