# Retro Typing Game #
![Retro typing game website](/wireframes/amiresponsivetypinggame.PNG "Retro typing game website")
*A Retro themed typing game where you can practice your typing skills.*
---
## **Project contents**
* User Experience
  * User Goals
  * User Stories
  * Site Owner Goals
  * User Requirements and Expectations
    * Requirements
    * Expectations
  * Design Choices and Thoughts
    * Fonts
    * Colour scheme
    * Page layout
  * Wireframes
  * Features
  * Tests
  * Bugs
  ## User Experience
  ---
  ### User Goals
  ---
  * The typing game and website to be responsive on as many possible devices such as Laptops, Tablets, Mobile Phones and PCs.
  * The ability to chose the difficulty of the test for example easy only includes 4 letter words and hard includes longer words.
  * A visual indication when a word is typed or misspelled that it was incorrect.
  * To have a retro theme.
  * A words per minute calculation after test and words per hour.
  * To be able to change the text from retro to something easier to read for accessibility and readability.
  * To have instructions to clearly indicate how to play the game.
  * Have a clear indication that the test has started.

  ### User Stories
  ---
  * As the **user** I want clear feedback when the word was typed correctly and incorrectly.
  * As the **user** I would like to be able to chose the difficult of the test.
  * As the **user** be able to chose how long the test will last.
  * As the **user** expect the word to be judged whether it is correct or not after each space bar press.
  * As the **user** I would like the words to be easy to read.
  * As the **user** I expect the website to work cross browser.
  * As the **user** I expect the website to be responsive and work on more than just Desktop.
  * As the **user** I would want to be able to restart the test in-case of a making a mistake.
  * As the **user** I would like to be able to share my words per minute on Social media.
  * As the **user** I would want to see a rule book/instructions.
  * As the **user** I would maybe want to be able to change the font colour to make it easier to read for the colour blind.

  ### Site Owners Goals
  ---
  * As the **Site owner** I want users to have fun, interaction and intuitive experience.
  * As the **Site owner** I want users to be able to test there typing skills.
  * As the **Site owner** I want it to be able to improve typing skills.
  * As the **Site owner** I want the website to look appealing and eye capturing.

  ### User Requirements and Expectations
  ---
  #### Requirements
  * Clear way to start the typing test.
  * Be responsive across different devices.
  * To be able to contact and be connected in case of there being a bug found.
  * To be able to change the difficulty of the test
  * To be able to reset the test.
  * To be able to share the results.

  #### Expectations
  * Clear indication of words typed correctly and incorrectly
  * Expect it to work on all devices.
  * Website to load quickly.
  * Navigating and interacting to be easy.
  * Reset button works
  * Countdown timer to work correctly
  * Game starts correctly

  ### Design Choices and Thoughts
  ---
  #### Fonts
  When deciding and choosing the font that I will use for the site I took the theme and idea I had in mind being retro and took inspiration from some font styles that was used in that 80s I have decided I will use a font which is an open source font called [Glass TTY VT](https://github.com/svofski/glasstty) I think this provides a retro theme and doesn't harm readability too much. If readability of text is an issue I plan to create a readability/accessibility switch so text can be transformed into an easier to read font.

  #### Colours
  To decide and chose which colours would suit my project I decided to use some inspiration from New York in the 80s at night where there was lots of vibrant colours and glowing accents I will try to create this theme throughout the website. To replicate the night feeling the website background will be dark using #131517 with a hint of #5C0000. To replicate vibrant glowing effects I will use text shadows and box shadows for glowing text throughout the site I will use colour #FF8585 with text shadow of #FF4D4D and #FB0000. Here are my colour choices:
  ![Retro Typing Game Colour Scheme](/wireframes/retro-typing-game-theme.png "Retro Typing Game Colours")

  #### Page layout
  For my project I think I will go with a condensed layout inside containers I will use [Bootstrap](www.bootstrap.com "Bootstrap responsive framework") and the grid system to make the website responsive across devices as-well as using the short hand flexbox classes [Bootstrap](www.bootstrap.com "Bootstrap responsive framework") offers.

  ### Wireframes
  ---
  For building the Wireframes I have used [Balsamiq Wireframes](https://balsamiq.com/) as it allows for easy website Wireframes to be created and to show simply how I want the project to look on Desktop/Tablet and mobile.

  Desktop Wireframes:
  * [Desktop Home Page](/wireframes/desktop-home-page.png "Desktop home page wireframe")
  * [Desktop Typing Game Before Test](/wireframes/desktop-typing-game.png "Desktop typing game wireframe")
  * [Desktop Counter](/wireframes/desktop-counter.png "Desktop counter before game starts")
  * [Desktop Typing Game During Test](/wireframes/desktop-typing-gaming-during.png "Desktop typing game during wireframe")
  * [Desktop Typing Game After Test](/wireframes/desktop-typing-game-after.png "Desktop typing game after wireframe")
  * [Desktop Contact Page](/wireframes/contact-desktop.png "Contact page on Desktop")
  * [Desktop FAQs Page](/wireframes/faqs-desktop.png "FAQs page on Desktop")

  Tablet Wireframes:
  * [Tablet Home Page](/wireframes/tablet-home.png "Tablet home page wireframe")
  * [Tablet Typing Game](/wireframes/tablet-typing-game.png "Tablet typing game wireframe")
  * [Tablet Home Page](/wireframes/tablet-typing-game-results.png "Tablet results wireframe")

  Mobile Wireframes:
  * [Mobile Home Page](/wireframes/mobile-home.png "Mobile home page wireframe")
  * [Mobile Typing Game before](/wireframes/mobile-typing-game.png "Mobile typing game before wireframe")
  * [Mobile Typing Game During](/wireframes/mobile-typing-game-during.png "Mobile typing game during wireframe")
  * [Mobile Typing Game Results](/wireframes/mobile-typing-game-results.png "Mobile typing game results wireframe")
  * [Mobile Contact Page](/wireframes/contact-mobile.png "Contact page on mobile")
  * [Mobile FAQs Page](/wireframes/faqs-mobile.png "FAQs page on mobile")

  ### Features
  ---
  #### Live Features
  * Pre countdown timer with animation
  * Use of random quotes [API](https://api.quotable.io/random)
  * Validation of words typed
  * 1 Minute Game countdown
  * Restart game button
  * Instructions modal
  * FAQ accordion
  * Font switcher for accessibility and readability
  * Share your results functionality which copies your results to the post if the social media platform allows it.
  * Pre countdown game sound on desktop
  * Scroll animation when the user reaches the last word on the line
  * Calculates Results

  #### Future Features
  * Font colour changer for accessibility/readability
  * Live scoreboard
  * An afk keyboard timer
  * Difficulty changer
  * Timer changer
  * Multiplayer live head to head feature

  ### Technologies used
  ---
  #### Coding languages
  * HTML
  * CSS
  * JavaScript, jQuery

  #### Coding library's / dependencies
  * Bootstrap
  * jQuery
  * Font Awesome
  * Facebook Software Development Kit (SDK)

  #### Tools & Applications
  * Git (History/Versioning)
  * Atom (Code editing)
  * Beautify package (Code formatting)
  * Balsamiq (Wireframes)
  * Chrome Dev Tools (Mobile responsiveness, Console error fixing, bug testing)
  * Google Sheets for writing tests and expected results and fixes
  * W3 HTML Validator
  * W3C CSS Validator
  * emailJS for contact form

  ### Testing
  ---
  #### Correct/Wrong word typed indication

  User Story - As the user I want clear feedback when the word was typed correctly and incorrectly.

  * **Plan**

    When the user types and the word is either wrong or correct indicate with highlighting. And when the user starts to type if one letter doesn't match the word they're trying to type actively display that it's wrong.
  * **Implementation**

    Using an input element with the keydown function and event callback with conditions and css methods.
  * **Tested**

    I have tested this by pressing any key that is wrong to match the word which you are trying to type and also by typing the word correctly. This took a few bug fixes to get right.
  * **Result**

    Typing the wrong letters shows a red highlighted word to indicate what has been typed is incorrect, typing the correct word and pressing spacebar highlights the previous word green.

  * **Verdict**

    It is now clearly indicated whether the word has been typed wrong or correct.

  #### Readability

  User Story - As the **user** I would like the words to be easy to read.

  * **Plan**

    For the user to be able to make the words easier to read by a toggle button.

  * **Implementation**

    Using the [Bootstrap docs](https://getbootstrap.com/docs/5.0/forms/checks-radios/#switches) on implementing switches I added jQuery for checking state to change a root CSS variable to an easier to read font.
  * **Tested**

    I tested this for mobile and tested it by pressing the toggle on all pages.

  * **Result**

    The toggle switches the font from Glass_TTY_VT220 to Helvetica font.

  * **Verdict**

    This can be improved by using cookies to remember switch state as currently every page refresh the state of the switch is not remembered by the browser therefore needing to be pressed every time you refresh the page.

  #### Restarting the game

    User Story - As the **user** I would want to be able to restart the test in-case of a making a mistake.

    * **Plan**

      For the user to be able to reset the game so they can try again.

    * **Implementation**

      By implementing a button just to the right of the typing input element which on click runs a function to reset all variables and the game

    * **Tested**

      This works as intended and resets the game completely on click of the button.

    * **Result**

      Restarts the game with a visual loading indicator to the user to give an idea of state after the restart button is clicked.

    * **Verdict**

      This can be improved by only allowing the restart button to be clicked every so often as currently you can keep clicking the restart button which can end up with too many API calls causing problems.

  #### Sharing user results

    As the **user** I would like to be able to share my words per minute on Social media.

    * **Plan**

      When the user finishes the game and the timer is up to display results of what the user achieved and provide options for them results to be shared through buttons on social media platforms.

    * **Implementation**

      By storing results of the user in variables which are passed into a function that shows a box with buttons that have event listeners which trigger share popups.

    * **Tested**

      When testing this there was a few issues with some social media platforms as LinkedIn doesn't allow you to pass a message to a shared post without having access to there development API which requires business page.

      I compromised and just allowed the button to open a LinkedIn share window.

      The other social media buttons work and copy in your results with a message to the post.

    * **Result**

      When you complete the game a box shows with your results and also the option to share your results.

    * **Verdict**

      Overall I think it works well however the LinkedIn share could be improved if it was possible to get access to the development API.

  #### General testing

    When testing functionality and fixing bugs I did my best to write down tests I performed, the expected results and actual results in a google sheet this can be viewed [here.](https://docs.google.com/spreadsheets/d/1oRHwHCrk8LQ9ojLkiROrc9csJuyNwP3HiEUcy2xHKQ0/edit?usp=sharing)

  ### Bugs
  ---
  #### Pre countdown sound effects

    * **Bug**

      When you pressed play only one sound effect would play one mobile.

    *  **Fix**

      Disabled pre countdown sound effects on mobile devices as from researching mobiles don't allow scripts to play audio files without user interaction which is one only one sound effect would play.

    *  **Verdict**

      Sound effects play on Desktop but not on mobile.

  #### Game Countdown

    * **Bug**

      When typing the timer would glitch as the function kept being called every word press.

    * **Fix**

      Fixed by wrapping the countdown function in a condition to stop the function from keep running using a variable called gameCountdownStarted and loading.

    * **Verdict**

      The countdown now works as expected and counts down from 1:00 to 0.
