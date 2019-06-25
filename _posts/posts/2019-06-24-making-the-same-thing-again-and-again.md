---
layout: blog
category: blog
published: true
title: Making the Same Thing Again and Again
tags: [Student Council Elections, Timeline]
comments: true
---

You know, conventional wisdom states that it really isn't that good an idea to do the same thing again and again. And the conventional wisdom is right. As Einstein once famously said: 

> The definition of insanity is doing the same thing over and over and expecting a different outcome.

But, what if we changed something a little each time we did it?

------

Way back when, in grade 8 (year 2015-16), I joined Legacy School Bangalore (super cool place btw). I was a bit introverted and kept to myself for the most part. But, I was (and am) an eager and learning web developer (and really, anything tech-related). And this school that I just joined had an *IT Team*! Guys, you have no idea how excited I was.

Do tech-related work *and* bunk class for it? Sign me up!

With all the pressure that comes with a new school, new faces, new people, I gathered up the courage to join the IT Team. I got in and had such a good time getting to interact with all these people with interests so close to mine. It really was something else...

Anyways, my school (and I'm assuming many other schools) has a Student Council. It was voting season and all the candidates were campaigning. Judgment day arrived and everyone filled out their choices on these paper ballot sheets. We dropped them all in a box and moved on. A week later, after painstakingly counting the votes, the teachers would come back with the results and we would have an Investiture.

Good enough, I thought. But not Desai sir.

Desai sir is an inspiring person to talk to and someone I view as a mentor. The IT Team was his brainchild. He was also the IT Administrator at the time.

For reasons unknown, the school decided to do the elections for the year 2016-17 in the same year (2015-16). It was towards the end of the year and everyone in the IT Team had gotten to know each other a lot better. Desai sir approached me, two weeks to the election, and said, "Pranav, you like web development, right? Why don't you make an app to digitize it?"

Great. Idea.

I spent the weekend solely on whipping together something I was proud of (at the time) and presented it to Desai sir. He liked it, and a few iterations later, we were ready to go!

{% include video.html
  src="/media/sc-elections/2016-17.mp4"
  caption="It ain't much, but it's honest work."
%}

The app worked, and everyone was happy.

**Achievements:**

- Saved trees - check.
- Reduced manual work for teachers *drastically* - check.
- Remove scope of miscounting - check.

------

Another year went by, and it was time to elect again. Yay! Let's just pull the app off its shelf, dust it off and... oh. 

- *Whoever* wrote the code didn't comment!
- Why would *anyone* do it this way?
- **Ugh**, so annoying...

...and other similar thoughts ran through my head. I spent some genuine effort trying to understand what 1-year-ago Pranav was doing. Couldn't get it. *That's fine,* I told my self. *I'll just rewrite it.*

So I did. In the **Right&trade;** way.

I took the help of a friendo this time (Bhavik, cool guy btw.) and we both worked together rebuilding the app using whatever we could scrap from the old one. We had a good idea of what we were trying to achieve at the end of it though, so it was pretty quick.

What we ended up with was a lot more well-organized, looked *slightly* better, and was a bit more stable. I also learned from mistakes from the last time we did this. Hooray for progress!

{% include image.html
  src="/media/sc-elections/comparison.png"
  caption='"What are folders?" Pranav vs. Neat-Freak Pranav'
%}

The idea was still really similar, and the technology stack was nearly identical (PHP, MySQL, jQuery for you tech peeps out there). But it worked.

{% include video.html
  src="/media/sc-elections/2017-18.mp4"
  caption="Why would you vote for anyone but Joe Bob? I mean, look at that
  face!"
%}

**Achievements:**

- Do the same thing as earlier but better - check.

So why touch it?<small>I dunno...</small>

------

Year 2018-19 rolls around and I'm tired of PHP. It's not bad, I'm just bored. And what's the new trend that's soon gonna be old? *NodeJS and Mongo! Yay!* New tech stack, new me.

This wasn't mentioned in the article, but I also made two other smaller apps for the school. Setting up and maintaining the server was becoming a bit of a chore, so I made... the [Legacy App Server](https://github.com/preyneyv/legacy-app-server)! It's effectively a container for multiple apps to be run simultaneously. It requires that your app follows a certain folder structure, which it then takes, processes, and renders as this beautiful app listing.

{% include image.html
  src="/media/sc-elections/las.png"
  caption="Just look at it. Amazing."
%}

So, since the full stack changed, I *guess* that an app rewrite is due. The **Right&trade;** way.

I decided to approach it from a different perspective. This time, we'd give each student, each teacher, each member of the management their own four-digit pin. The pin would be single-use, preventing someone from voting multiple times. Also, the voter can't lie about their grade or house, because that would be linked to the pin.

Also, this was the year my school got iPads, so we wanted to use them for the election process. I thought there wouldn't be many changes, but I was wrong. So, goodbye, nice scrolling animation. You were just too resource-intensive (apparently).

{% include video.html
  src="/media/sc-elections/2018-19.mp4"
  caption="I couldn't get the images to load when recording this video...
  <br><code>¯\_(ツ)_/¯</code>"
%}

But you know what's been missing all these years?

------

*Enter, year 2019-20.*

I mean, the user interface is nice and simple. Clean, easy to understand even for the lower grades. But what I *didn't* do was have a good admin panel. See, all these years (grades 9 - 11), I was there to help set it up. I don't need an admin panel! I just made the changes in the database directly!

If you've been keeping count, however, you'll notice I am now in grade 12. My last year! I don't want this four-year streak of paper-saving to end with me! So I did what anyone would do in my position: I re-re-re-remade it. The **Right&trade;** way.

This time, I wanted it to be like Google Docs--no one has to teach you how to use it. It just... teaches itself to you.

Also, around this time I was fiddling around with Angular 7, so I decided, heck, might as well use it. So I did. This time with complete focus on the admin panel. I spent around 50 hours over a weekend on the admin panel, making it as perfect as I thought was reasonable. I added little hints, suggestions, and descriptions scattered everywhere, just to make it as simple as possible to use.

In fact, when I was adding the data about the candidates and the positions this time, I did it *solely* from the admin panel. No database voodoo this year.

Another thing I added was a concept of "states". The application exists in three states: `Setup`, `Vote`, and `Results`. This acts kinda like a lock so that you can't accidentally change the information once voting has begun.

{% include image.html
  src="/media/sc-elections/closed.png"
  caption="No Mr. Voter, you can't do that yet."
%}

When voting, for example, an admin can't add a candidate. It just doesn't make sense! Users can't vote before the setup is complete and they can't vote once the admin chooses to pull up the results. You *can* change between the states as you please, but this way it encourages integrity of the results.

I also replaced the scrolly thing with a flippy thing, since scrolly performed really bad on the iPads. Flippy, being a smaller animation, should do a lot better.

{% include video.html
  src="/media/sc-elections/2019-20.mp4"
  caption="We all knew who I was gonna vote for..."
%}

Also, where's the fun in a boring table of results right? I mean, the students get such a nice voting interface, with a nice flippy animation! What about the poor administrators who would be bored out of their minds, sifting through pages and pages of results? Well...

{% include video.html
  src="/media/sc-elections/results.mp4"
  caption="\"This system's rigged...\""
%}

------

Thank you so much for reading! For those of you keeping count, that is *five* (count 'em) versions of the same app over a timeline of four years (2015 - 2019). The coolest thing for me is being able to scroll up and compare all these versions of the same app, compare how my designing has changed over the years.

If this sort of thing interests you, feel free to subscribe to the newsletter using the link at the bottom. Or if you're super-fancy, there's an RSS feed too!

*PS: I am so surprised I was able to find all this code! Some of this code is **literally** from four years ago, and it still works (mostly)! I had some compatibility issues between the PHP versions and for the Node dependencies but nothing too nasty.*

*PPS: A lot of the more recent code is available on my [Github](https://github.com/preyneyv) in case you want to poke through it or build on top of it.*