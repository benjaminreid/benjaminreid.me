---
layout: post
title:  "Make cool CSS image gradients"
date:   2014-06-17 12:00:00
---

You've got a rad image of a cityscape to chuck on your new site but wait&hellip;
it's not looking quite cool enough. Time for some *zing!*

{% include img.html src="make-cool-css-image-gradients/new-york.jpg" alt="NYC" %}

### Markup

Let's start out with our quaint little `img` tag. Simple and elegant.

{% highlight html %}
<img src="new-york.jpg">
{% endhighlight %}

It saddens me that you can't use the before/after pseudo elements with an `img`,
so we have to go and spoil it all by adding a wrapper&hellip;

{% highlight html %}
<div class="img-wrap">
  <img src="new-york.jpg">
</div>
{% endhighlight %}

OK, so it's not the end of the world. Using the wrapping `div`, pseudo elements
can now be used in full force.

## Styles

The wrapper is positioned `relative` so that the pseudo element can sit on top
of the `img` and displayed `inline-block` so that it wraps happily around the
`img`.

{% highlight css %}
.img-wrap {
  position: relative;
  display: inline-block;
}
{% endhighlight %}

The `img` inside (though normally done through a reset) is vertically aligned
to the `bottom`, removing any weird spacing below the `img`.

{% highlight css %}
.img-wrap img {
  vertical-align: bottom;
}
{% endhighlight %}

Finally, the pseudo element is setup to act like normal `div` above the `img`
but with `100%` height added to also cover it up.

{% highlight css %}
.img-wrap::before {
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  position: absolute;
}
{% endhighlight %}

Now for the solo. Add this garishly brilliant gradient to the pseudo element,
followed by a touch of `opacity` and we are one step closer to having one
hip image of NYC.

{% highlight css %}
.img-wrap::before {
  /* ... */
  background: linear-gradient(to right, #8a01ff 0%, #ff00ae 100%);
  opacity: .6;
}
{% endhighlight %}

### Result

And here we have it, one rad-tastic CSS gradient image.

<div class="code-example"><p data-height="520" data-theme-id="0" data-slug-hash="uodfa" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/nouveller/pen/uodfa/'>uodfa</a> by Benjamin Reid (<a href='http://codepen.io/nouveller'>@nouveller</a>) on <a href='http://codepen.io'>CodePen</a>.</p><script async src="//codepen.io/assets/embed/ei.js"></script></div>

### Taking it further

We can take this one step further and bring it more inline with say what
we could achieve using Photoshop.

This time we our HTML is simpler, yet we lack an image definition. There are a
few different ways to get around this, but lets run with this for now.

{% highlight html %}
<div class="rad-image"></div>
{% endhighlight %}

The CSS gets a slimming too. The key part here is the multiple
backgrounds (the .jpg and the gradient) followed by a CSS blend mode.

{% highlight css %}
.rad-image {
  width: 690px;
  height: 487px;
  background-image: url(new-york.jpg), linear-gradient(to right, #8a01ff 0%, #ff00ae 100%);
  background-blend-mode: multiply;
}
{% endhighlight %}

This gives us a much stronger result and results in some cleaner code. The blend
modes can be played with to your hearts content along with the gradient to create
that 80's flair.

<div class="code-example"><p data-height="520" data-theme-id="0" data-slug-hash="tsycx" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/nouveller/pen/tsycx/'>tsycx</a> by Benjamin Reid (<a href='http://codepen.io/nouveller'>@nouveller</a>) on <a href='http://codepen.io'>CodePen</a>.</p><script async src="//codepen.io/assets/embed/ei.js"></script></div>
