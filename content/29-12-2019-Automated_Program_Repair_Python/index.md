---
title: "PyFix"
cover: "../../src/static/yaktocat.png"
template: project
date: "29/10/2019"
slug: "automated-program-repair"
category: "null"
timestamp: "Spring 2018"
repo: "https://github.com/ZainQasmi/Automated-Program-Repair"
tags:
  - Python
  - Program Analysis
---

Pyfix is an automated program repair tool that given a Python script, a list of line of codes susceptible to bugs which were reported by TarantulaPy and a test suite, determines to fix the bug(s). It takes cues from the lexical scope and enumerates the variables and comparison conditions in suspected loc, run them against test cases and report if all of them passed which implies that the enumeration worked. I intend to extend this work exploring ML options, migrate to Python3 and add a GUI for ease-of-use.
