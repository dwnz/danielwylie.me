---
layout: post
title: 'An easier way to do webhooks'
excerpt_separator: <!--more-->
---
Recently I've been working on a few *Proof Of Concept* internal apps to hook Slack, TeamCity, Bugherd and a couple of other tools together, which has <!--more-->been awesome except that I rely on webhooks and that's an issue when you can't put a site online to accept them. I also didn't want them to require high uptimes, as they're concept apps.

##Say hi to [hooq.io](http://hooq.io)!

[![hooq logo](http://hooq.io/img/logo.png)
](http://hooq.io)

hooq has one job - accept webhooks and push them to an Azure or Amazon queue instantly. hooq even sends you all the querystring and header items from the request.

You can then process items on the queue in your own time.

Simple.

Like, really simple. That's all there is to it. hooq is still pretty new, so there are a few missing features - but they will be rolled out over time.

I am however keen for any feedback - say [hello@hooq.io](mailto:hello@hooq.io)

Enjoy!