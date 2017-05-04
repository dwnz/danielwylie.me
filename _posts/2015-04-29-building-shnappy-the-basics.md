---
layout: post
title: 'Building Shnappy: The Basics'
excerpt_separator: <!--more-->
---

Hey! Welcome to the first post in my "Building Shnappy" mini-series, nice to see you! 

Mini-series? Yup! I enjoy reading others' posts about how they built their software<!--more--> and the good and bad parts along the way and I thought, “I can do that too.”

Every second Wednesday for the next few weeks I’ll be posting some insights about how Shnappy was built, what’s worked, and what hasn’t so well. Don’t want to miss out on a post? You can follow along on Twitter - [@dwnz](https://twitter.com/dwnz). You can also keep up with Shnappy by following [@shnappyapp](https://twitter.com/shnappyapp).

### What is Shnappy?

[Shnappy](https://shnappy.com) is a platform for photographers that gives them a much easier way of uploading photos and collaborating with their clients. By ditching the traditional browser upload dialog (which we all know is a pain) and using [Dropbox](https://dropbox.com), creating large galleries is simplified - photographers export high quality photos from [Lightroom](http://www.adobe.com/products/photoshop-lightroom.html) and they appear in Shnappy almost instantly.

Shnappy also ties in the feedback loop meaning photographers know what their clients think of the photos. 

### Technology Stack

The whole reason you’re here, right? Let’s get into it!

* [NodeJS](http://nodejs.org/) - All the back-end things run on NodeJS
* [MongoDB](https://www.mongodb.org/) - Where the data lives
* [nginx](http://nginx.org/) - Reverse proxy from the internet to NodeJS
* [Ubuntu](http://www.ubuntu.com/) - NodeJS runs best on Linux, and I already knew Ubuntu
* [Microsoft Azure VMs](http://azure.microsoft.com/) - Awesome place to run virtual machines
* [AngularJS](https://angularjs.org/) - Powers all the shiny front-end bits of Shnappy
* [PM2](https://github.com/Unitech/pm2) - Stops NodeJS processes from misbehaving

### Why Node?

Good question! I have around eight years of experience in the .NET framework working on Windows, so that would have been the obvious choice. But where’s the fun in that? I didn’t want to get stuck knowing only one framework/language and I was sick of booting up a Windows VM just to do development, so I wanted something that would run in OS X too.

I’m a big fan of Javascript and had been following the NodeJS community for a while, so when starting Shnappy for real (fun fact: I built a prototype in .NET around six months earlier) I decided to take the plunge and go all out Node. Having come from a strongly-typed, object-orientated language like C# the initial Shnappy code was far from brilliant, but given a bit of time and practise and a lot of reading, the most recent stuff is much better. You can never learn too much, right?

MongoDB was a simple choice as most of the data in Shnappy is non-relational and accessed through a REST API - plus it goes hand-in-hand with Node. It was simply a matter of installing mongoose and defining a model or two to get something running. There have been a few times when it would have been nice to have a relational database, I must admit, as I’ve had to build (for example) a cool as key table ‘hack’ to map users to their studios.

Azure may initially come across as a strange place to run Linux servers, but Microsoft are really open these days and aim to provide you with a place to run whatever server software you’d like, free of bias. Shnappy is part of the Bizspark startup program that Microsoft offers, which provides a decent amount of free Azure credit, making getting off the ground that little bit easier by providing enough resource to run three small virtual machines each month.

Having come from the Windows world, Linux was a slight shock to the system. I picked Ubuntu as I had previous experience setting it up while finding out how the other half lived. It took a few server builds to get it right - I kept breaking things - but thanks to the [Digital Ocean tutorials](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04) I got everything fully setup and scripted for building future servers without too much fuss. 

P.S. Sneaky tip: Are you on Bizspark too? Each user gets a free Azure allocation each month, meaning any leftover user spots can be dedicated to extra infrastructure. For example, we have a ‘user’ dedicated to our testing environment, which lets us try out the latest code before pushing it live - all for free!

---

Next week I’ll be going over what tools we use to build and test Shnappy! Catch you then.

---

Want an awesome way to distribute photos to your clients? Give [Shnappy](https://shnappy.com) a go! It’s free for all beta users.