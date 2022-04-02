# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Ibrahim Nabid

Time spent: 5 hours spent in total

Link to project: 
https://glitch.com/edit/#!/island-glittery-swan

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played

The following **additional** features are implemented:

- [X] Added a help button to provide user instructions on how to play the game
- [X] Added new fonts to make game more interesting to interact with
- [X] Added gradient color background to improve aesthetics of the game

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![game2](https://user-images.githubusercontent.com/79735610/161360717-84894369-dc1d-4172-9fff-bcef5373dc92.gif)
![game1](https://user-images.githubusercontent.com/79735610/161360251-30311a29-3c69-4658-9012-ed37fd246e65.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   https://www.w3schools.com/colors/default.asp - I used this site to find different colors I can use for the website and eventually learned about gradient  color from here as well.
   
   https://www.w3schools.com/cssref/css_websafe_fonts.asp - I used this site to find and learn about different fonts that I can use.
   
   https://www.tutorialspoint.com/html/html_fonts.htm - I also used this site to learn more about font size and how I can alter it to my liking.
   
   https://html.form.guide/snippets/css-button-rounded-corners/ - I also used this site to learn more about how I can alter the buttons because I was curious and wanted to learn more beyond just the description given in the prework instructions. I ended up following this website and made my buttons into circles.
   
   https://www.w3schools.com/js/default.asp - I used this site to learn more about javascript and how I can improve my code. I especially used this to help me figure out how to create lists of random numbers in JavaScript.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I experienced were major bugs in the game as the game would stop midway sometimes randomly. To be more specific, after running fine for a few colors, the game suddenly didn't run anymore. I kept testing the game and also asked my friends to test it as well. Usually, it worked fine but there were a few instances where it did not work. I tackled this issue by revisiting the code I wrote for the game logic. However, I realized that the code I wrote for the game logic was correct. I then wrote some notes down and thought about what changes I made that could have this impact. I suspected that the issue lied in the function that randomized the pattern as I did not encounter this bug before adding the random pattern creator function. After spending some time to look over the code that I wrote for the pattern randomizer function and asking peers for feedback, I realized that I had made a small error in my logic for the code. I quickly corrected this error and began testing different parts of the code to confirm that it works. This experience taught me about how important it is to test one's code constantly both in parts and as a whole. It taught me to test my code as I wrote it so I can catch any errors early on. Another challenge that I encountered in creating this submission was that my start and stop buttons would not work. To be more specfic, although I had carefully followed all the instructions in the pre-work guide, my start and stop buttons would both appear simultaneously and even if I clicked on any of them, the other button would not hide. I proceeded to overcome this in a couple of steps. First, I compared my code with that of the pre-work guide and spent some time on getting a good understanding of the logic behind the code so I can debug if needed. Then I began playing around with the code and testing different bits to pinpoint which part was wrong. However, even after doing these two steps, I still could not find the error. Then, I decided to show my code to a friend and get a second opinion on what could be wrong. Although he could not find it either, he gave me advice and tips on how to debug in glitch such as using the terminal or logs option. After that, I began doing more research about HTML to learn it deeper and realized that I had a minor syntax error in the CSS file as there was a semicolon instead of a colon after display. This made me realize how important it is to review one's code as well as try to understand the logic behind it. This experience also showed me how helpful and important pair programming or asking for help is since it allowed me to find the solution much faster and I was also able to learn alot from my friend in the process. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

A question I had was how would we create different webpages and create buttons that allow the user to go back and forth between the two webpages. I am also interested in learning more about how we can add and create animations or features that interact with the reader. I have seen cool features on other websites where the website changes based on how the user scrolls down or moves their mouse and I was interested in learning more about how that is done. When viewing this game from my phone, I also realized that there were some issues concerning how it was showing up on my phone and how the different buttons worked so I was curious about how we can alter the code such that the website renders well both on desktop and mobile applications. Specifically, I was wondering how we can make the webpage automatically adjust for different screen sizes and devices. I also learned about autolayout in iOS App development and was wondering whether there is something similar in web development and if so, how do we implement constraints. A question I also have about web development is how the front end can be connected to a database system or backend so user data can be stored, retrieved, deleted, created or changed. I want to learn more about dufferent types of databases and how they can be used to store data efficiently. I also have a lot of questions about HTML and CSS as I am curious about how different HTML and CSS properties can be used and the benefits of each. I also want to learn more about how APIs can be called in JavaScript to display certain information. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours for this project, I would expand it to include different levels of difficulties for the game as it would allow the player to feel challenges. More difficult versions of the game would last longer and include time constraints and be faster. I would add also feature that allows a player to register with their name. username, password and email so they can save their progress and perhaps compete with other players online. I would also allow the player to select a level of diffculty from beginner, intermediate, advanced and unlimited. The unlimited level would be a game where the game does not stop and players would keep playing until they get it wrong. I would like to have a button that leads to a leadership board that displays the different players and their highest score in the unlimited game. I would also add a heading that displays the player's highest score as they play. I would also add a different musical tune to every button and add a feature that allows the player to choose a theme for the musical tunes. I would also add a feature where the background color of the game changes depending on what level of difficulty the player is currently on. I would also give the user the option to play a timed or untimed game as it would allow the player to feel challenged and make the game more interactive. I would also make the game more aesthetically pleasing by adding different images or features related to the 'jazzy' theme. I would also add a background music that would play so the game is more enjoyable for the player. I would also add an option where the player can turn off sounds and/or music so they can play just with the colors if they want to.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=Xq0D_Bh7Oiw)


## License

    Copyright Ibrahim Nabid

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
