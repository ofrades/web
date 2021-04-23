---
title: "Editor to rule them all"
description: "My imperial editor"
date: "23-04-2021"
---

## Some Background

I was first introduced to the world of editors when my wife asked me to install
emacs for hers science studies and I was a bit choked of how old looking it was
compared to what I thought was and editor. Why not just use Microsoft Word 😁 or
something instead of that crap, I thought. I had almost no knowledge of
programming, the things I did at that time was in dreamweaver and flash, and I
used Visual Studio to learn C# in my college.

After some years I convinced her to use something more modern like Atom, Sublime,
or the new Visual Studio Code which was growing in popularity. She liked vscode
and for a good reason, it is a nice piece of software.

I myself used vscode when I started programming. I created a nice color theme
[teppz](https://marketplace.visualstudio.com/items?itemName=ofrades.Teppz) for
it and used it to code in C# and Javascript and for some after I left vscode
I missed some of its features, like source control and search.

What made me follow a different path was a bit mysterious, is that kind of thing
difficult to explain, you see something and you feel you can live without it.
The first time I saw a professor of mine moving through some folders in the
terminal and opening a file, edit it, jump out of the file and start going back
and forward again through the folders I was poisoned. There was no turning back.

### Vim

Vim is pretty nice, because I can learn in steps. Is is like a regular skill of
life, like trying to be a good person. You need to try and fight, be persistent
and when you get it becomes part of you, like an habit.

You combine actions with movements without taking your hands of the keyboard
Atomic commands performs tasks, like `dj` d(delete)j(down) and so on.

The journey started by using
[vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
in vscode. It is nice to start learning the vim keys and get the vscode
mature integration with language server protocols, emmet, search, and source
control. I once was under the opinion this was the best match, vim ♥️ vscode.

But with time I started to get annoyed with the vim extension being slow with
simple task as scrolling a file. And the love for the terminal and with doing
everything in one place got the better of me and I started configuring the vimrc.

Was when I discovered that vscode just gives you a lot out of the box and to have
the same in vim you will need plugins like
[coc](https://github.com/neoclide/coc.nvim).
I used it and really enjoyed, searching was great, lsp perfect, configuration
easy. The only problem was my 16GB of ram and this plugin alone consumed at least
3 of those 16,was not as bad as vscode but at that time I was using it and vscode
for source control, managing merge conflicts etc...

### Philosophy

> [The Vim Philosophy](https://github.com/mhinz/vim-galore#the-vim-philosophy)

> Vim adheres to the modal editing philosophy. This means that it provides multiple modes and the meaning of keys changes according to the mode. You navigate files in normal mode, you insert text in insert mode, you select lines in visual mode, you access commands in command-line mode and so on. This might sound complicated at first, but has a huge advantage: you don't have to break your fingers by holding several keys at once, most of the time you simply press them one after the other. The more common the task, the fewer keys are needed.

> A related concept that works well with modal editing are operators and motions. Operators start a certain action, e.g. changing, removing, or selecting text. Afterwards you specify the region of text you want to act on using a motion. To change everything between parentheses, use ci( (read change inner parentheses). To remove an entire paragraph of text, use dap (read delete around paragraph).

> If you see advanced Vim users working, you'll notice that they speak the language of Vim as well as pianists handle their instruments. Complex operations are done using only a few key presses. They don't even think about it anymore as muscle memory took over already. This reduces cognitive load and helps to focus on the actual task.

### Neovim

So I jumped to the native neovim lsp when the neovim core team started adding
lsp natively in the nightly builds and moving things to lua, which I was
familiar because of latex.

With lua adoption and native lsp things are looking quite wonderful for neovim.
I can use a fast terminal like
[kitty](https://sw.kovidgoyal.net/kitty/invocation.html) with neovim to get a
fast and nice looking editor. I have managed to use git in the terminal and
inside vim with simple [configs](https://github.com/ofrades/configs).
And because of lua lot's of plugins are emerging like, search with
[nvim-spectre](https://github.com/windwp/nvim-spectre) or navigate files with
[telescope](https://github.com/nvim-telescope/telescope.nvim).
And even source control with [neogit](https://github.com/TimUntersberger/neogit).

But the goal is the same for every developer, being productive and happy with
the tools he needs. And another thing I feel is that the tools should have a
a difficult learning curve at start but which will simplify workflows after a
while. That is why I do not like to have very complex configs with lot's of
plugins, that I will need to keep an eye at, like I mentioned in the previous
[post](htts://ofrades.com/blog/my-setup)
Simple, fast, learnable, that is exactly what I get with neovim.
