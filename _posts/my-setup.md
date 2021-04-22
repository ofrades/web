---
title: "My setup"
description: "The what's and why's of my setup"
date: "22-04-2021"
---

## Background

My first computer ⌨️ was a windows 95 I guess, and was just when I was graduating
in a design related course that I first changed operating system. I fell for
the apple wonderfull laptops poison. It was great, but expensive, and after
that I used windows again, windows 8, until I changed career from 3D/desgin to
software engineering and fell again, this time for, less expensive, an used
macbook air, bought on ebay, which was great until coffee joined the party and
the laptop was ruined.

## Windows

Well, I was already working in software engineering, and some fast solution was
needed, I had no time to waste. In the office I had an old computer tower with
a nice setup.

### Pc:
  - CPU: Intel i7-4790K(8) @ 4.400GHz
  - Memory: 16GB of Ram
  - GPU: NVIDIA GeForce GTX 970

I was at that time very attached to the Unix family and was difficult to go back
to windows. But since I was programming in C# and using some Microsoft services
like Azure and vscode, I thought, why not? And Windows with WSL looked promising.
It was not to my taste I guess. It was cumbersome to manage the files, some on
ubuntu wsl, some on windows, it was a big mess for me in the end and I just
ended switching to [Ubuntu](https://ubuntu.com/).

## Linux

Everything was really nice when I installed Ubuntu for the first time. Just as
good as a good experience can be. Similar with what the good experience I had
with the apple operating system and I had lot's of fun learning new things,
the terminal, git, vim and was when I started working with Javascript.

Then I discovered window managers(wm) and I went in another ride(or rice :)),
i3, regolith, pop shell and some other popular ones. Decided to try a very
beautiful distro I saw called ArchCraft, without knowing anything at all about
arch linux, I just went for it. And was fun, I configured it nicely, with the
bspwm window manager, rofi polybar, sxhkd and all those scripts needed to get
it working.

Until after some update I was unable to login. I was then a bit tired of
managing all this scripts and was aiming for a more simple, working, nice out
of the box solution to replace arch and [Pop!_Os](https://pop.system76.com/)
looked like was the best solution.

### Pop

[Pop!_Os](https://pop.system76.com/) is built on top of Ubuntu, which is very
stable. And gives a very nice out of the box window manager which works as
expected. Uses Gnome which is huge, but works well with messy things I had in
my arch setup like wifi and printers 🥣.

I created a
[script](https://github.com/ofrades/configs/blob/master/install-essential.sh)
which install everything I need to start working in a new machine fast. If for some
reason I need to start again, install a new ubuntu distro or change my machine
I just need to clone my 
[dotfiles](https://github.com/ofrades/configs) and run
`sh ~/configs/install-essential.sh` and I am good to go 🚀.

The script installs [neovim](https://github.com/neovim/neovim) as my editor, Javascript
related projects will need node, npm, yarn, language server protocols for web
development, all there. I use the [kitty](https://sw.kovidgoyal.net/kitty/index.html)
terminal, the [fish](https://fishshell.com/) shell and the
[starship](https://starship.rs/) prompt. I was using
[zsh](https://www.zsh.org/) but more stuff to manage,
[plugins](https://github.com/ohmyzsh)! and fish gives me the same with no
plugins, and I like that, less things to install and control.

All this and my [configs](https://github.com/ofrades/configs), colors, etc... are done once the
script runs, creates a bare git repo where I link all my configs and I can
edit and manage them easily. Now I only have to keep an eye in my neovim configs,
everything else is managed automagically, and I can be more productive and sane 😁.

