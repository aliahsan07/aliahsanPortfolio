---
title: "A primer on GitHub Actions"
date: 2020-08-19
template: post
slug: github-actions
tags:
  - GitHub Actions
  - Actions Hackathon
---

[DEV](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn) is running a GitHub Actions Hackathon till 17th September, so I figured this might be the right time to dive deep in GitHub Actions.

GitHub Actions automate the custom workflows inside of GitHub. Kyle Daigle, the director of ecosystem engineering at that time of launch, described Actions as "GitHub running code on your behalf for the first time" on a Changelog podcast. This line will make more sense when we go over a few examples, but this definition alone should give you some idea about how powerful this feature can be.


One common use case is sending a message in a Slack channel when code is pushed to a repository. The action gets triggered when code is pushed, or it could be when a pull request is created. Similarly, there is an action that reminds the reviewers on Slack to merge the pull request. What is seemingly a simple task has quite an impact as recounted by the creator of [Pull Reminders](https://pullreminders.com/) himself. Pinging everyone on slack to merge a pull request is a tedious task and might need multiple rounds of messages before every reviewer approves the request. The action automated the reminders thus ensuring speedier review and merge of code (and this is how GitHub is running code for you).

<h4>Using an action in your codebsase</h4>
The hackathon folks at Dev are running is looking for developers to build an action. This can be achieved in multiple ways; the two most common are:
1. Docker container actions
2. JavaScript actions
  
Right now, I'm going over how to use an existing action (tonnes of GitHub actions present in the marketplace) in your codebase.

To configure a workflow inside your repository, create a YAML file inside (.yml/.yaml) inside the `.github/workflows` directory. The official documentation delineates how to create an action and the various properties that are associated with it. I'll give a small example and discern the key components of it. 

The following configuration sets up a unit suite to run whenever a pull request is created against the master branch on a node application. (Full Disclosure: The snippet is inspired by this [Youtube Video](https://www.youtube.com/watch?v=F3wZTDmHCFA))

```
name: Node Unit Tests

on:
  pull_request:
    branches:
      - master

jobs:
  test:
    name: Running Unit Tests
    runs-on: ubuntu-latest

    steps:
    uses: actions/checkout@v2
    name: Use Node.js ${{ matrix.node-version }}

    uses: actions/setup-node@v2
    with:
      node-version: ${{ matrix.node-version }}
    - name: installing dependencies
      run: npm install
    - nam: running tests
      run: npm test

```

`name` defines the title of the GitHub Action.
`on` is required, which specifies the GitHub event that triggers the workflow. In this example, a pull request to the master branch stimulates the proceedings. 
`jobs` make up a workflow. They run in parallel by default. Here, we have one job we call `test`. Inside it, we name the job `Running Unit Tests`. It's running on `ubuntu-latest` container. This is followed by the steps the workflow carries out. 
`uses` refers to the action we're using, the first action is `actions/checkout@v2` which checkouts your repository so that your workflow can access it. The next step is more interesting in which we use `actions/setup-node@v2` action to install node dependencies and run `npm test`. The `name` gets printed whenever the corresponding step starts executing, so it's imperative to write meaningful names. `installing dependencies` and then `running tests` will give the user a good sense of how the flow is executing. Both of the actions used in this example are open-source.

Using an existing action in your codebase is usually very straightforward. Let's say you want to delete a branch when the pull request is merged from that branch—a fairly common use case, which prevents the accumulation of unused branches. There is an action [Delete merged branch](https://github.com/marketplace/actions/delete-merged-branch) in the marketplace that you can use for it. The YAML file can be as follows:
```
  name: Delete merged branch
  uses: SvanBoxel/delete-merged-branch@v1.3.3
```

That's it, that takes care of branches merged into your codebase. I just had to visit the repo of the [action]((https://github.com/marketplace/actions/delete-merged-branch)) and copy this small snippet to make it work. Of course, you can modify the workflow to suit your needs but this gets the ball rolling for a very minimal setup.

<h4>What's next?</h4>
As we move towards the hackathon deadline, I'm searching the web and brainstorming ideas about possible useful action. You're allowed to use any open source technology to build your own GitHub Action, which makes the competition more broad and exciting. I intend to write next on what goes on under the hood and convey a better understanding of the internals. For now, I'm focusing on building a badass GitHub Action that will win me the grand prize 🤩