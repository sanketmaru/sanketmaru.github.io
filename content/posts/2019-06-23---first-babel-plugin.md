---
title: "Wrote my first babel plugin!( Its Simple )"
date: "2019-06-22T02:40:32.169Z"
template: "post"
draft: false
slug: "/posts/create-babel-plugin/"
category: "Babel"
tags:
  - "Babel"
  - "React"
  - "JSX"
  - "Mobile"
  - "Optimization"
description: "I wrote my first babel plugin which reduces the size of the web app my removing class methods and jsx elements. The motivation is to remove class methods which are not executed when app is viewed in mobile view."
---


**First Babel Plugin**

To write a babel plugin first you need to understand how babel plugins work. I will write down the things i required to write the plugin :-

1. Go through the basics of [Babel-handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md).
Basics will help to understand what is an AST, parsing, traversal of AST (Stages of Babel).
&nbsp;
2. Play with [Ast-explorer](https://astexplorer.net)
This will help to identify the different visitors of AST and which visitor you want to catch them to manipulate the paths.
&nbsp;
3. Setup a CRA (create-react-app) or a simple node project with a webpack config  [createapp.dev](https://createapp.dev/) is useful to get things done fast.
&nbsp;
3. Debug, debug and debug........ 
Debug other plugins code. 
Setup vscode to debug the babel plugins inside node_modules.
&nbsp;
  *I will be covering a seperate blog on debbuging plugins and difficulties i faced developing a babel plugin*
&nbsp;
  Below is my vscode launch.json
&nbsp;
  ```json
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/scripts/build.js"
    }
  ```




