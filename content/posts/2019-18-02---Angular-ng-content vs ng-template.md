---
title: Insights into Angular ng-template
date: "2019-02-18T08:40:32.169Z"
template: "post"
draft: false
slug: "/posts/ng-template-use-case/"
category: "Angular"
tags:
  - "Angular"
  - "Web Development"
description: "Angular uses ng-template, ng-content extensively. It becomes sometimes confusing how to use this concepts and more importantly when to use it. We will see one of the use cases where ng-template and ng-content are helpful."
---


## Problem Statement

We want to build a simple component which gives a grid view of cards or a list view ( Similar to what Amazon Prime has which shows list of movies in a carousel effect and when you click on See More it just redirects to grid page.)

We want to build a similar component where carousel accepts the card or the grid and list can also accept the same card.

![Carousel Items.png](/media/carousel-items.png)

![Grid Items.png](/media/grid-items.png)

*Images are taken from Amazon Prime.*

As it can be seen in both the images there are some common cards which can be reused in both effects. 

We will see how ng-template helps here. 


## Building the component
