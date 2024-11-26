# zoom-tab-closer

A very quick and dirty Chrome/Chromium (Brave, Edge, Opera, Vivaldi, so on) browser extension that will automatically close Zoom meeting launch tabs if they haven't been accessed for ~60 seconds. 

Specifically it will check every 60 seconds, as well as whenever any other tab is loaded or closed, if any tab with the title "Launch Meeting - Zoom" and a URL of the form `https://*.zoom.us/j/*` is open but hasn't been accessed in at least 60 seconds and it will close them. That's the only thing it does.

## Installation

## The Slightly Easier Developer Mode Way

The easiest way to install this extension is probably through Chrome's (or your Chromium browser's) developer mode as an "unpacked" extension (instructions adapted from [here](https://stackoverflow.com/a/24577660)):

1. [Download](https://github.com/coreycwgriffin/zoom-tab-closer/archive/refs/tags/1.0.zip) the zip file of this code and extract it, [download](https://github.com/coreycwgriffin/zoom-tab-closer/releases/download/1.0/zoom-tab-closer.crx) the CRX file and extract it (as you would a zip file), or clone this repo to a local directory.
1. Visit chrome://extensions (via omnibox or menu -> Tools -> Extensions).
1. Enable Developer mode by ticking the checkbox in the upper-right corner.
1. Click on the "Load unpacked extension..." button.
1. Select the directory containing your unpacked extension.


### The Harder, non Developer Mode Way

[Download](https://github.com/coreycwgriffin/zoom-tab-closer/releases/download/1.0/zoom-tab-closer.crx) the `zoom-tab-closer.crx` file somewhere and follow [these instructions](https://developer.chrome.com/docs/extensions/how-to/distribute/install-extensions#prereq-crx) (or whatever instructions are appropriate for your Chromium browser). 
