# youtube-ad-skipper
Skip to the end of an ad as soon as it plays. I'm not sure how long this will be effective, but it is currently working.

# installation
This isn't available on any extension store, so you will have to install it manually.
## firefox
1. Open about:debugging#/runtime/this-firefox
2. Click "Load Temporary Add-on..."
3. Open the folder "youtube-ad-skipper-firefox" (selecting any file within the folder auto selects the folder)
<br><br>
With this method you will need to re-do this every time you start your browser.

## brave
1. Open brave://extensions
2. Click "Load unpacked" button
3. select the folder "youtube-ad-skipper-chrome"

## Google Chrome

1. [Download](https://github.com/xyzpw/youtube-ad-skipper/archive/refs/heads/main.zip) the latest version.
2. Navigate to `chrome://extensions` (type it in the address bar)
3. Toggle `Developer Mode` (click the toggle button)
> This will only show you some extra buttons. It does not change your browser's behaviour. This is used for developers that write Google Chrome extensions. It's safe to leave it enabled.
4. Drag the `youtube-ad-skipper-chrome` directory (from the .zip file) to the `chrome://extensions` tab.
> You'll notice a `Drop to install` message. If you do not see that message, you didn't enable `Developer Mode`.

IMPORTANT: Do not remove or change the location of the `youtube-ad-skipper-chrome` directory. When you do, you have to install (drag & drop) the extension again (the next time you start your browser). If the directory is still there, the extension will be loaded until you choose to disable or remove it.

To remove the extension:\
• In `chrome://extensions`, find the extension and click the delete button.\
-OR-\
• Click the toggle button to disable the extension but not remove it.\
-OR-\
• Remove the extension directory and restart your browser.

# usage
If there are any remaining ads you can remove every ad within the adElements array by right clicking anywhere and clicking "Remove Remaining Ads."
