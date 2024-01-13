# Youtube Ad Skiper Chrome Extension

## Description
Here is a chrome extension that automatically skips the ads on youtube videos as soon as the button "**Skip**" appears.  

It works by automatically **simulating a click** on the **skip button** when it appears.  

It works only in **French** and **English** (because it checks that the button does contain a specific text (i.e. "Skip") and therefore it does not yet work in other languages).

*Initially, the extension was indeed meant to skip the ad by automatically clicking on the "Skip" button on the video **when it appears**, often after a countdown of 5 seconds. But interestingly enough, even when the button is not visible on the webpage, it still exists somewhere and is clickable. As a result, the extension skips the ads without waiting for the countdown to end.  
I guess it does the same as AdBlock then...*

## Installation
I won't push this extension on the chrome extensions marketplace, therefore you need to manually install it if you want to use it.  

The process is described below and is not difficult at all:

- Step 1: clone the repo.
```bash
git clone https://github.com/valentingorce/yt-adskiper-ext.git
```
- Step 2: Enable developer mode on Chrome.  
Open Chrome and go to your "Extensions", either by clicking on the puzzle piece and then clicking on "Manage extensions" or by going to the options dropdown and clicking on "Extensions".  
Finally click on the "developer mode" switch to enable developer mode.

- Step 3: Load the unpacked extension.  
Now click on "Load unpacked" and browse to the repo you've cloned locally. Click on the "yt-adskiper-ext" folder and then "Select this folder".

- Step 4: Enable the extension.  
The extension should have been added to your extension now. If it is not enabled, click on the switch.  
Now you can go to youtube, and everything should work.