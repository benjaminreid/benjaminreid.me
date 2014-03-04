---
layout: post
title:  "Integrating Laravel and Angular views"
date:   2014-03-04 12:00:00
---

Recently I've been laying down the foundations for a web application me and Penny have thought up. A lot of that time so far has been me scratching my head about what technologies we'd need to build it and I now know what we're going to use.

I'd been keen to start seriously using [Angular](http://angularjs.org/) after [Adam](https://twitter.com/adambu1988) showed me how capable and easy it was to use. Luckily, it also fit perfectly with what I had in mind for the front-end of our app.

For a back-end framework I knew exactly what I wanted to use, and that was [Laravel](http://laravel.com). The Laravel (PHP) framework had been making leaps and bounds recently and after having worked with it before as well I knew this was the right choice.

Though, pairing Angular and Laravel together was something I'd never tried. One evening I started to jam them together and within about 30 minutes I was convinced.

Laravel and Angular have become best friends.

### Set up an Angular router

The router is setup much like any other Angular router, which is a very good thing. Any developers coming onto the project will get excalty what they're expecting.

`public/js/coffee/application.coffee`

{% highlight coffeescript %}
myApp = angular.module 'myApp', ['ngRoute']

myApp.config ['$routeProvider', ($routeProvider) ->
  $routeProvider.when '/index', templateUrl: 'views/index'
  $routeProvider.when '/view1', templateUrl: 'views/view1'
  $routeProvider.when '/view2', templateUrl: 'views/view2'
  $routeProvider.otherwise redirectTo: '/index'
]
{% endhighlight %}

### Configure the Laravel routes

This is what convinced me Laravel was going to sit nicely with Angular. Using Laravel's brilliant routing, you can quickly hook up Angular's template requests.

`app/routes.php`

{% highlight php startinline %}
Route::get('/views/{name}', function($name) {
  $view_path = 'app.' . $name;

  if (View::exists($view_path)) {
    return View::make($view_path);
  }

  App::abort(404);
});
{% endhighlight %}

This was just a quick solution I knocked up and I'll probably end up handing the requests off to a view controller but that's how easy you can hook up Laravel and Angular's views.

Please leave a comment if you've found any different or more efficient ways of doing this.
