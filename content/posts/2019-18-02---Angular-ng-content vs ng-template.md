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

The first transition took away a large part of humanity from written communication. Industrialisation, the second transition described by Eric Gill, took away most of what was left. But it’s the third transition that stripped it naked. Typefaces are faceless these days. They’re just fonts on our computers. Hardly anyone knows their stories. Hardly anyone cares. Flicking through thousands of typefaces and finding the “right one” is a matter of minutes.

> In the new computer age the proliferation of typefaces and type manipulations represents a new level of visual pollution threatening our culture. Out of thousands of typefaces, all we need are a few basic ones, and trash the rest.
>
— Massimo Vignelli

Typography is not about typefaces. It’s not about what looks best, it’s about what feels right. What communicates the message best. Typography, in its essence, is about the message. “Typographical design should perform optically what the speaker creates through voice and gesture of his thoughts.”, as El Lissitzky, a famous Russian typographer, put it.

## Loss of humanity through transitions

Each transition took away a part of humanity from written language. Handwritten books being the most humane form and the digital typefaces being the least. Overuse of Helvetica is a good example. Messages are being told in a typeface just because it’s a safe option. It’s always there. Everyone knows it but yet, nobody knows it. Stop someone on the street and ask him what Helvetica is? Ask a designer the same question. Ask him where it came from, when, why and who designed it. Most of them will fail to answer these questions. Most of them used it in their precious projects but they still don’t spot it in the street.

<figure>
	<blockquote>
		<p>Knowledge of the quality of a typeface is of the greatest importance for the functional, aesthetic and psychological effect.</p>
		<footer>
			<cite>— Josef Mueller-Brockmann</cite>
		</footer>
	</blockquote>
</figure>

Typefaces don’t look handmade these days. And that’s all right. They don’t have to. Industrialism took that away from them and we’re fine with it. We’ve traded that part of humanity for a process that produces more books that are easier to read. That can’t be bad. And it isn’t.

> Humane typography will often be comparatively rough and even uncouth; but while a certain uncouthness does not seriously matter in humane works, uncouthness has no excuse whatever in the productions of the machine.
>
> — Eric Gill

We’ve come close to “perfection” in the last five centuries. The letters are crisp and without rough edges. We print our compositions with high–precision printers on a high quality, machine made paper.

![type-through-time.jpg](/media/type-through-time.jpg)

*Type through 5 centuries.*

We lost a part of ourselves because of this chase after perfection. We forgot about the craftsmanship along the way. And the worst part is that we don’t care. The transition to the digital age made that clear. We choose typefaces like clueless zombies. There’s no meaning in our work. Type sizes, leading, margins… It’s all just a few clicks or lines of code. The message isn’t important anymore. There’s no more “why” behind the “what”.

## Chasing perfection

Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what we want to communicate with it? What will be the leading and why? Will there be more typefaces in our design? On what ground will they be combined? What makes our design unique and why? This is the part of humanity that is left in typography. It might be the last part. Are we really going to give it up?

*Originally published by [Matej Latin](http://matejlatin.co.uk/) on [Medium](https://medium.com/design-notes/humane-typography-in-the-digital-age-9bd5c16199bd?ref=webdesignernews.com#.lygo82z0x).*