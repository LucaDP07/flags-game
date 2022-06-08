# Flags Game

**SITE OVERVIEW**
- - - 

The Flags Game is a way to test and train the player's reaction time, while having fun.

The player has to deal with a different set of six flags every three seconds. Five of these represent the Irish flag, while the last one it's the flag of the Ivory Coast, very similar to the Irish one. The player needs to catch the Ivory Coast flag (the intruder). Everytime the player clicks on the Ivory Coast flag a point will be added to the score, and to make sure the player is paying attention, every click onthe Irish flag will take away 2 points.

![Alternate text](/assets/images/amIresponsive.png)

You can view the deployed website [here](https://lucadp07.github.io/flags-game/).

**UX**
- - -

The website is designed for any type of screen in mind (Desktop, Smartphone and Tablet). The structure of each section is simple,  user friendly and clear. The selection of colors are inspired by the Irish and Ivory Coast flag, which are the core of the game. The main board has been created to contain the instructions, the game itself and a message showing the final score. All this provides a familiar and not confusing experience to the user. 

**User Stories**

As someone who is passionate about reaction time games, I want to challenge my reflexes.

As a flags lover I would like to experience a game based on flags. 

As a random gamer I would like to experience a clear design for each section and an easy navigation through all of them.

**WIREFRAMES**
- - -

**Home Page**

![Alternate text](/assets/images/1desktop.png)

**Gallery Page**

![Alternate text](/assets/images/2desktop.png)

**Contact Page**

![Alternate text](/assets/images/3desktop.png)

**Mobile View**

![Alternate text](/assets/images/1mobile.png)

**Tablet View**

![Alternate text](/assets/images/1tablet.png)


**FEATURES**
- - -

 - Navigation Bar 
 
 In order to easily navigate through the website, the Navigation Bar is simple and essential with the Logo of the Club on the left side
 (clicking on it the user is able to reach the Home Page from any section) and the links to all the other pages on the right side. The Navigation Bar is consistent in all the sections.

 ![Alternate text](/assets/images/NavigationBar.png)

- Footer Links

Here the user can find all the Social Media links to the club. Just like the Navigation Bar, also the Footer can be found in all the pages. This provides armony and a better experience to the user.

![Alternate Text](/assets/images/Footer.png)

 - Home Page
 
 In the Home Page the users can find information about the Club, the memberships available and the location. All this is provided thanks to three boxes. This has been done to reach a better visual experience and also to make the content easy to be understood.
 Just below the three boxes, the user cand find the Training Sessions. Four boxes have been created for each day of training. A background picture related to the main topic of the website has also been added in order to cover all the four boxes.

 ![Alternate text](/assets/images/Home.png)

 - Gallery Page
 
 A selection of 9 pictures has been created for the Gallery Page. These are random pictures that show players in action or friends having fun while playing.

 ![Alternate text](/assets/images/GalleryPage.png)
 
 - Contact Page
 
 In order to get in touch with the club, has been created a form to collect the details and to sumbit any query the users should have. this section helps the user to make any question and to submit their details. 

 ![Alternate text](/assets/images/ContactForm.png)

 - The Confirm Page

 Once the user submit all the details through the form the Confirm Page opens to inform the user the message has been received and the data provided collected properly.

 ![Alternate text](/assets/images/Thankyou.png)
 

**TECHNOLOGIES USED**
- - -

- HTML: HTML has been used to give structure and content to the website.
- CSS: In order to style the content created with HTML, the CSS language has been used.
- Google Fonts: I used the Lato and Open Sans font.
- Font Awesome: I used ther Font Awesome icons for the logo of the Club located at the top-left of the header.
- Pixabay & Pexels: I used a combination of these two platforms for the images of the Gallery.
- Balsamiq Wireframes: I used it to produce low fidelity wireframes to organise the structure of the pages.


**TESTING**
- - - 

All the pages of the website have ben tested using the developer tools in Google Chrome. The code had to be changed along the process in order to achieve the responsiveness required for the project. The preview from Gitpod helped to constantly check all the changes made.

Testing was performed using a MacBook Air (M1, 2020) on macOS Monterey with the following browsers:
- Google Chrome 100.0.4896.127
- Safari 15.3
- Mozilla Firefox 100.0

After testing the website I can confirm the project it's responsive in its all pages and works properly on all standard screen sizes.

The hyperlinks are working in each section of the project. 
- The Header contains links to all the pages and the logo on the left side is a link to the Home Page.
- The Footer contains links to the Social Media pages.

The form in the Contact Page also works.

- Every field requires an entry and the email field only accepts an email. The submit button works and leads to a "Thank You" page where the user is informed about the correct submission of the details.


- BUGS

In the Gallery, while testing the page on an iPhone SE (375X667), I noticed that at the bottom of the page there was a scroll bar. The problem was caused by some pictures that were off screen. I sorted it out by adding a media query for screens up to 400px.

* VALIDATOR TESTING

HTML: No errors were returned when passing through the official W3C Validator. (https://validator.w3.org/).

1. [Home Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Flucadp07.github.io%2Ftable-tennis-club07%2F)
2. [Gallery Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Flucadp07.github.io%2Ftable-tennis-club07%2Fgallery.html)
3. [Contact Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Flucadp07.github.io%2Ftable-tennis-club07%2Fcontact.html)
4. [Confirm Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Flucadp07.github.io%2Ftable-tennis-club07%2Fconfirm.html%3Fname%3Dwewewe%26lname%3Dwewew%26email%3Dqwewew%2540wewew%26message%3Dswewew)

CSS: No errors were returned when passing through the official (Jigsaw) Validator (https://jigsaw.w3.org/css-validator/).

Accessibility: I generated a desktop and mobile report for the deployed site through the Google Chrome Dev Tools.

 - Home Page - Mobile
 ![Alternate text](/assets/images/Home%20Page.png)
 - Home Page - Desktop
 ![Alternate text](/assets/images/Home%20Page-Desktop.png)
 - Gallery Page - Mobile
 ![Alternate text](/assets/images/Gallery.png)
 - Gallery Page - Desktop
 ![Alternate text](/assets/images/Gallery-Desktop.png)
 - Contact Page - Mobile
 ![Alternate text](/assets/images/Contact%20Page.png)
 - Contact Page - Desktop
 ![Alternate text](/assets/images/Contact%20Page-Desktop.png)
 


- UNFIXED BUGS

No unfixed bugs.

**DEPLOYMENT**
- - -
The site was deployed to GitHub Pages. The steps to deploy are as follows:

1. Navigate to my Github repository: https://github.com/LucaDP07/table-tennis-club07
2. In the GitHub repository navigate to the settings tab.
3. Select the pages link from the setting menu on the left hand side.
4. After selecting the main branch, the page provides the link to the completed website
The live link can be found here: https://lucadp07.github.io/table-tennis-club07/

**CREDITS**
- - - 

**Content**

- Header and Footer structure was taken from CI [Love Running](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/f2db5fd401004fccb43b01a6066a5333/) Project.

- In the Home Page the structure of the 3 boxes was inspired by [SoftCode](https://www.youtube.com/channel/UCFMUDZwgjuh0mf9pV0ZaqTw).

- In the Home Page the section "Training Sessions" was inspired by [Love Running](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/f2db5fd401004fccb43b01a6066a5333/) Project.

- Gallery structure was inspired by [Web Master](https://www.youtube.com/channel/UCftpQ1d4SbYDrv6MfCel_iw).

- Form structure for the Contact Page was inspired by [DarkCode](https://www.youtube.com/c/DarkCodeOnline).

**Media**

- The icons used for the logo and in the footer were taken from [Font Awesome](https://fontawesome.com/).

- All fonts imported from [Google Fonts](https://fonts.google.com/).

- Screenshot under the section "site overview" was created with [Am I responsive](https://ui.dev/amiresponsive).

- Pictures used for the Gallery Page have been taken from [Pixabay](https://pixabay.com/).

- The wireframes have been created using [Balsamiq Wireframes](https://balsamiq.com/wireframes/).