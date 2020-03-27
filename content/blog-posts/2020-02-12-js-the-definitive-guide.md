---
title: 'Reflections from "JavaScript: The Definitive Guide"'
date: 2020-02-12
template: post
slug: js-the-definitive-guide
tags:
  - javascript
---

##### Before we begin, I'm going to digress so please bear with me.
##### This marks the first blog post on my website. While where I want to lead this is still in infancy and going through a thought process, I have built a rough idea of how my blog posts will be categorized. The idea is to divide into two concrete categories:

1. ##### Mere reflections on ongoing work or rather simply put, making notes of what I study. Most of the posts here would be relavant to my ongoing research at school but will not be limited to it. The first post(this post) belongs here and I'm hoping more revisions as I go through the content. The goal behind this series is to consolidate learning and build logically over something I'm working on.
2. ##### Structured and thoughtful blog posts: this is the normal kind of blog posts which is ubiquitous on the internet. Most of the stuff here will come from the world of software development especially React ecosystem which I so dearly loved when I was in the industry.

##### Now back to the original topic.

##### I've started reading the book JavaScript: The Definitive Guide (5th edition) as part of my research work to better understand the intricate details of language features. I know the book is over 10 years old and JS has evolved so much since then. But my goal is more oriented towards understanding the core JavaScript features and how JQuery comes into the game exploiting many of those properties. I'll probably then build up on them with further editions of the book but I'm not really focused on the ES6 world as of now.

##### I'm going to list some of the findings from the book:

- ##### JS interpreter can run scripts in different global contexts and those contexts need not be entirely separate; they can refer to each other. But this possesses a security problem.
- ##### About variable scoping: every variable is defined in a scope chain. For a nested function, multiple objects will be in a scope chain. Lets say x is defined inside a nested function inside a function. The scope chain starts from nested function to function to global context and when x scope has to be found it starts from the bottom (that is nested fn). It goes up all the way to global context, if not found there its undefined.
