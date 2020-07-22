# Change-webpages-background
A grease monkey script to change webpages' background.

### Description
Change webpages' background to the image you choose through the image's url. Press F2 to change the image, F4 to change the opacity of the foreground elements.

### Installation
Create a new userscript in your grease monkey script manager and copy the text in 'Change_Webpages_Background.js' to it. Or you can install this script through [Greasy Fork](https://greasyfork.org/en/scripts/389529-change-webpages-background-%E6%94%B9%E5%8F%98%E7%BD%91%E9%A1%B5%E7%9A%84%E8%83%8C%E6%99%AF).
You should input the origin url of image in the F2 popup menu. You can right click the image and click 'copy the image link' and then paste. Pressing F6 will pop up a file selection box, please select a file of image type as the background.

### Known Problems
* Some online images may not be able to use as background because of the limitations of their servers, and some web pages may not display the background image properly because of cross-domain rules on their servers(such as github). Both problems can be solved by using local image as background.
* After zooming the page and change the image, you have to flush the page to make the background image fix the screen.

### Pictures
![Before](https://github.com/ZimingYuan/Change-webpages-background/blob/master/Before.jpg)
![After](https://github.com/ZimingYuan/Change-webpages-background/blob/master/After.jpg)

### Update 2020.5.22
Now the script will try to crop the background image to ensure that the picture resolution is correct first.
And fix the bug that the picture cannot be updated in real time.

### Update 2020.7.22
Now the script supports the local image.
