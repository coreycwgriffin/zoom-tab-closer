# zoom-tab-closer

A very quick and dirty Chrome/Chromium (Brave, Edge, Opera, Vivaldi, so on) browser extension that will automatically close Zoom meeting launch tabs if they haven't been accessed for ~60 seconds. 

Specifically it will check every 60 seconds, as well as whenever any other tab is loaded or closed, if any tab with the title "Launch Meeting - Zoom" and a URL of the form `https://*.zoom.us/j/*` is open but hasn't been accessed in at least 60 seconds and it will close them. That's the only thing it does.

## Installation

[Download](https://github.com/coreycwgriffin/zoom-tab-closer/releases/download/1.0/zoom-tab-closer.crx) the `zoom-tab-closer.crx` file somewhere and follow [these instructions](https://developer.chrome.com/docs/extensions/how-to/distribute/install-extensions#prereq-crx) (or whatever instructions are appropriate for your Chromium browser). 

Alternatively you could clone this repo and install as an unpacked extension.
