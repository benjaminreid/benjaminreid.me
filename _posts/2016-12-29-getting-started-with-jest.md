---
layout: post
title:  "Get your testing feet wet with Jest"
date:   2016-12-29 00:00:00
---

If you’ve never written a test before or usually turned off by the complexities
of setting up and having to write verbose tests, Jest may be up your alley.

### Getting started with Jest

Installing Jest to a new or existing project is easy. Simply install it with
NPM and then&hellip;

{% highlight cli %}
npm install jest --save-dev
{% endhighlight %}

&hellip;add these two scripts to your `package.json`.

{% highlight json %}
{
  "scripts": {
    "test": "jest",
    "test:watch": "npm test -- --watch"
  }
}
{% endhighlight %}

You can run your tests with `npm run test` or have Jest watch for changes in
your code and run the tests with each change using `npm run test:watch`.

But before we get ahead of ourselves, we need to actually write a test for Jest
to test against.

### Writing your first Jest test

For Jest to run your tests, they need to live inside a `__tests__` folder
(this doesn’t have to be at root level and you can have more than one too) or your
files need to end in `.test.js`.

Here I define and export a function called `sum`, it takes two arguments and
adds them together.

`sum.js`

{% highlight javascript %}
function sum(a, b) {
  return a + b;
}

export default sum;
{% endhighlight %}

And here's the test. Fairly straight forward looking right? We define a test,
tell Jest what function to run and what we expect the outcome to be.

`sum.test.js`

{% highlight javascript %}
import sum from './sum';

test('should add two numbers together', () => {
  expect(sum(5, 5)).toBe(10);
});
{% endhighlight %}

Note in the above example I’m importing my `sum` function but where are `test` and
`expect` coming from? These are in the global namespace when the tests are run
by Jest.

Now if you run `npm run test` you shall see Jest’s rather nice output.

{% highlight cli %}
> jest

 PASS  ./sum.test.js
  ✓ should add two numbers together (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.116s
Ran all test suites.
{% endhighlight %}

At a basic level, that’s all there is to it. Of course there are other types
of tests and the like but this should be enough to get you going.

If you’ve taken a likening to Jest you can [read up on the it](https://facebook.github.io/jest/) on the official website.

### Writing more than one test?

Well fear not, Jest still has the common `describe` and `it` blocks that you may
see in other frameworks that help separate out your tests.

{% highlight javascript %}
import sum from './sum';

describe('sum', () => {

  it('should add two numbers together', () => {
    expect(sum(5, 5)).toBe(10);
  });

  it('should handle adding negative numbers', () => {
    expect(sum(10, -5)).toBe(5);
  });

});
{% endhighlight %}
