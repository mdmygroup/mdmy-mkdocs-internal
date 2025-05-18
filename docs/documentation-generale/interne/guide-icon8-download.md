# Icons8 Downloads

Follow these steps to download an icon from [Icons8](https://icons8.com/):

1. **Navigate to Icons8 Website:**
   - Go to [https://icons8.com/](https://icons8.com/).

2. **Search and Select Your Icon:**
   - Use the search bar to find the icon you need.
   - Click on the icon you want to download.

3. **Download the Icon:**
   - Click the `Download` button located below the selected icon.

4. **Inspect Element:**
   - Right-click between the `Download` button and the icon image.
   - Select `Inspect` from the context menu to open the developer tools.

5. **Locate the Image Element:**
   - In the Elements tab, find a `div` element similar to this structure:
     ```html
     <div class="accordion-preview-icon" ...>
       <nuxtlink ...>
         <div class="app-preview">
           <img class="app-preview__image-origin" srcset="https://img.icons8.com/?size=512w&id=YOUR_ICON_ID&format=png" ...>
         </div>
       </nuxtlink>
     </div>
     ```
   - Note the `srcset` attribute in the `img` tag which contains the URL of the icon.

6. **Modify the Image URL:**
   - Copy the URL from the `srcset` attribute.
   - Remove any character (like `w` at the end of `size=(512w`) to remove the free-tier copyright grid.

7. **Download the Icon:**
   - Paste the modified URL into a new browser tab.
   - Now the premium icon (512 x 512) can be downloaded for free.
   - Right-click on the image and select `Save image as...` to download the icon to your local machine.

This method ensures you can download the highest quality icon available from Icons8 tailored to your needs.
