---
layout: post
title:  "Integrating Laravel and Angular views"
date:   2014-03-04 12:00:00
---

Recently I've been laying down the foundations for a web application me and Penny have thought up. A lot of that time so far has been me scratching my head about what technologies we'd need to build it and I now ~~think~~ know what we're going to use.

For a backend framework I knew exactly what we needed to use, Laravel. This PHP framework has been making leaps and bounds recently and after having worked with it before as well, I knew this was the right choice.

Though, this decision wavered a bit when thinking about what front end framework to use. I'd looked at Angular but wasn't really convinced until Adam showed me how capable it was and acutally how easy it is to work with.

### Angular Router

The router is setup much like any other Angular router, which is a very good thing. Any developers coming onto the project will get what they're expecting.

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

### Laravel routes

This is where the magic happens.

`app/routes.php`

{% highlight php %}
Route::get('/views/{name}', function($name) {
  $view_path = 'app.' . $name;

  if (View::exists($view_path)) {
    return View::make($view_path);
  }

  App::abort(404);
});
{% endhighlight %}
