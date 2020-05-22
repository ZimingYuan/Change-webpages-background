# Change-webpages-background
A grease monkey script to change webpages' background.

### Description
Change webpages' background to the image you choose through the image's url. Press F2 to change the image, F4 to change the opacity of the foreground elements.

### Installation
Create a new userscript in your grease monkey script manager and copy the text in 'Change_Webpages_Background.js' to it. Or you can install this script through [Greasy Fork](https://greasyfork.org/en/scripts/389529-change-webpages-background-%E6%94%B9%E5%8F%98%E7%BD%91%E9%A1%B5%E7%9A%84%E8%83%8C%E6%99%AF).
You should input the origin url of image in the F2 popup menu. You can right click the image and click 'copy the image link' and then paste. Because of the limitation of the explorer, this script doesn't support local image.

### Known Problems
* Because of github's security policy, the background can't display on github.
* After zooming the page, you have to flush the page to make the background image fix the screen.

### Pictures
![Before](https://github.com/ZimingYuan/Change-webpages-background/blob/master/Before.jpg)
![After](https://github.com/ZimingYuan/Change-webpages-background/blob/master/After.jpg)

### Update 2020.5.22
Now the script will try to crop the background image to ensure that the picture resolution is correct first.
And fix the bug that the picture cannot be updated in real time.
