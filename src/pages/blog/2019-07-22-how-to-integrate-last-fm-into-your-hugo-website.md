---
templateKey: blog-post
title: How To Integrate Last.fm Into Your Hugo Website
date: 2016-10-01T14:16:00.000Z
featuredimage: /uploads/integrating-lastfm-into-your-hugo-site_header.jpg
tags:
  - hugo
  - last.fm
  - api
  - tutorial
---
This is a quick tutorial to teach you how to integrate your [Last.fm feed](http://www.last.fm/user/alrayyes) into [your hugo site](/tunes). To keep things nice and simple I've created a [demo theme](https://github.com/alrayyes/lastfm-hugo-demo-theme) to get you started, which you can see running [here](https://lastfm-hugo-demo.ryankes.eu/).

The demo is basically a one page template. I've highlighted the important part.

```html{31-42}{numberLines: true}
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="author" content="Ryan Kes">
    <meta name="generator" content="Hugo 0.16" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="A page that demonstrates Hugo working with the Last.fm api">
    <meta name="keywords" content="Last.fm, Hugo, api, tutorial, demo">
    <meta name="generation-date" content="{{ .Now }}">

    <title>Last.fm Hugo Demo</title>
    <link href="/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="/css/style.css" type="text/css"/>
    {{ template "_internal/google_analytics_async.html" . }}
</head>

<body>

<a href="https://github.com/alrayyes/lastfm-hugo-demo-theme"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a>
<div class="container-fluid">
    <div class="row text-center">
        <h3 style="color:white;font-family:verdana;">
            <a href="http://www.last.fm" target="_new">Last.fm</a> <a href="https://gohugo.io/" target="_new">Hugo</a> Demo<br><small><a href="http://ryankes.eu">Ryan Kes</a></small><br>
            Design inspired by <a href="http://bootsnipp.com/snippets/featured/image-tiles-full-width" target="_new">Snap TightImage Tiles snippet</a><br>
            See blog post for more information
        </h3>
    </div>
    <div class="row">
        {{ $dataJ := getJSON (printf "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=%s&api_key=%s&format=json&limit=%s" .Site.Params.username .Site.Params.apikey (.Site.Params.limit) ) }}
        {{ range $dataJ.recenttracks.track }}
        <a href="{{ .url }}" target="_new">
        <div class="cover-card col-sm-4" style="background: url({{ range last 1 .image }}{{ index . "#text" }}{{ end }}) no-repeat center top;background-size:cover;">
            <p>
                {{ printf "%s - %s" (index .artist "#text") .name }}<br>
                -<br>
                {{ if isset .date "#text" }}<span class="play-date" data-date="{{ (index .date "uts") }}">{{ index .date "#text" }}</span>{{ else }}<span class="play-date" data-date="">Now playing...</span>{{ end }}
            </p>
        </div>
        </a>
        {{ end }}
    </div>
</div>

<script src="/js/jquery-1.10.2.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/moment.min.js"></script>
<script>
    $(document).ready(function() {
        $('span.play-date').each(function(i, e) {
            var date = moment.unix($(e).data('date'));
            $(e).html(date.fromNow());
        });
    });
</script>
</body>
</html>​
```

On line 31 we connect to the [Last.fm api](http://www.last.fm/api) with 3 parameters:
 
 1. username
 1. limit (aka how many results do you want with a maximum of 200)
 1. api key (which you can get [here](http://www.last.fm/api/account/create))
 
This returns something like:

```json
{
  "recenttracks": {
    "track": [{
      "artist": {
        "#text": "Years  Years",
        "mbid": ""
      },
      "name": "1977",
      "streamable": "0",
      "mbid": "",
      "album": {
        "#text": "Communion",
        "mbid": ""
      },
      "url": "https://www.last.fm/music/Years++Years/_/1977",
      "image": [{
        "#text": "https://lastfm-img2.akamaized.net/i/u/34s/bcf1058b23fb9871695ac9e57582e095.png",
        "size": "small"
      }, {
        "#text": "https://lastfm-img2.akamaized.net/i/u/64s/bcf1058b23fb9871695ac9e57582e095.png",
        "size": "medium"
      }, {
        "#text": "https://lastfm-img2.akamaized.net/i/u/174s/bcf1058b23fb9871695ac9e57582e095.png",
        "size": "large"
      }, {
        "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/bcf1058b23fb9871695ac9e57582e095.png",
        "size": "extralarge"
      }],
      "date": {
        "uts": "1475601846",
        "#text": "04 Oct 2016, 17:24"
      }
    }],
    "@attr": {
      "user": "alrayyes",
      "page": "1",
      "perPage": "1",
      "totalPages": "175083",
      "total": "175083"
    }
  }
}
```

Lines 32 - 42 basically just loop through this json and output corresponding html.

The rest of the html is basically styling and using [momentjs](http://momentjs.com/) to generate pretty human readable datetimes. There is one small caveat though, as the generated site is static you need to rebuild it sporadically to keep the scrobbles up to date. I accomplish this using a [cron job to trigger wercker]({{< ref "/posts/how-to-trigger-wercker-builds-with-the-wercker-api.md" >}}).

And that's all there is to it. The same principle can also be used to [integrate Instagram into your site]({{< ref "/posts/integrating-instagram-into-your-hugo-site.md" >}}). Hopefully this tutorial was clear and concise enough. If not please let me know in the comments below.
