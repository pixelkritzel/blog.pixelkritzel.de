---
title: "How to add the Nord color scheme to the new Microsoft terminal app"
date: 2019-06-29T18:26:14+02:00
draft: false
---

![Screenshot of my Windows terminal with the Nord color scheme](/posts/microsoft-terminal-nord/terminal-nord.png)

Microsoft released the [preview of their new terminal application](https://www.microsoft.com/de-de/p/windows-terminal-preview/9n0dx20hk701?activetab=pivot:overviewtab) which looks promising and for some people it might be a replacement for third party termimal emulators. But it looks a little bit old faschioned to say it polite. Personally I'm a big fan of the [Nord theme](https://www.nordtheme.com/). So I added it to the terminal application and this how to it.

<!--more-->

* Open the `profiles.json` by selecting it in the menu or pressing `CTRL+,`
* Add this to the `schemes` entry of the json:

```json
{
  "background" : "#3B4252",
  "black" : "#3B4252",
  "blue" : "#81A1C1",
  "brightBlack" : "#4C566A",
  "brightBlue" : "#81A1C1",
  "brightCyan" : "#8FBCBB",
  "brightGreen" : "#A3BE8C",
  "brightPurple" : "#B48EAD",
  "brightRed" : "#BF616A",
  "brightWhite" : "#ECEFF4",
  "brightYellow" : "#EBCB8B",
  "cyan" : "#B48EAD",
  "foreground" : "#D8DEE9",
  "green" : "#A3BE8C",
  "name" : "Nord",
  "purple" : "#B48EAD",
  "red" : "#BF616A",
  "white" : "#E5E9F0",
  "yellow" : "#EBCB8B"
}

```

This are the values I copied and pasted from the [hyper-nord](https://www.npmjs.com/package/hyper-nord) package.

* In the `profiles` section you can assign a `colorScheme` to a profile. So in my case: `"colorScheme": "Nord"

You can find my configuration this [gist](https://gist.github.com/pixelkritzel/ae9cc902294acb61b20b2553dd176737)

