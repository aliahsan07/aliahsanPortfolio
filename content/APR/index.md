---
title: "PyFix"
cover: "../../src/static/yaktocat.png"
template: project
date: "31/10/2019"
slug: "automated-program-repair"
category: "null"
timestamp: "Spring 2018"
repo: "https://github.com/ZainQasmi/Automated-Program-Repair"
tags:
  - Python
  - Program Analysis
---

Pyfix is an automated program repair tool that given a Python script, a list of lines of code susceptible to bugs which were reported by TarantulaPy and a test suite, determines to fix the bug(s). It takes cues from the lexical scope, and enumerates the variables and comparison conditions in suspected loc, run them against test cases and reports if all of them passed, which implies that the enumeration worked. PyFix is one of the earliest works in the domain of analysis of Python programs. 