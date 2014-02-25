# socialshare.js

Simple Social Sharing via Facebook and Twitter

## Installing

* [Create a Facebook App](https://developer.facebook.com)
	* Make sure to set it up as a website-based APP
* Set up the Facebook JS SDK

Paste directly after the `<body>` opening tag.p
```html
<div id="fb-root"></div>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      status     : true,
      xfbml      : true
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
```

* Add a reference to this script: <script language="javascript" src="/js/socialshare.js"></script>
* `socialshare.js` will automatically hook into buttons that has the `facebook-share` or `twitter-share` classes.
* Share options can be specified with `data-` attributes

> **Note:** Make sure to add appriopriate [Facebook OpenGraph](http://davidwalsh.name/facebook-meta-tags) meta tags (And [Twitter Cards](https://dev.twitter.com/docs/cards))

## Facebook share button example
```html
<a href="#" class="facebook-share" data-share-link="http://example.com" data-share-caption="Facebook caption goes here">
  <i class="fa fa-facebook"></i>
</a>
```

## Twitter share button example
```html
<a href="#" class="twitter-share" data-share-text="Twitter share text goes here">
  <i class="fa fa-twitter"></i>
</a>
```

## Print button example
```html
<a href="#" class="print-share">
  <i class="fa fa-print"></i>
</a>
```

## Share count

`socialshare.js` also supports displaying share count, just add an element with the `count` class as the child of your share button and `socialshare.js` will automatically detect and load share count via *AJAX*.

```html
<a href="#" class="facebook-share" data-share-link="http://example.com" data-share-caption="Facebook caption goes here">
  <i class="fa fa-facebook"></i>
  <span class="count"></span>
</a>
```