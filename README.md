# Debunk my misconceptions 

A game-like application where users are quizzed on curated misconceptions and cultural stereotypes. Based on their responses, the user receives instant feedback to correct these myths. Using such a tool replaces preconceptions with new data-based facts about countries, exposing users to accurate cultural information about other countries.  

Check out the application [here](https://debunk-my-misconceptions.netlify.app/), and let us know your score! 

## Application content 
The application is divided into four levels that get harder progressively 

1. Easy level (world media), featuring misconceptions that show how news outlets, Hollywood movies, and social media can perpetuate cultural misconceptions and influence our world perception.
2. Medium and Epic levels (world map), discussing the current most popular world map, why the map can be misleading and how it affects our perception of power distribution around the world.
3. Legendary (world statistics and numbers), providing another perspective of the world using numbers.

## Installation

This project was designed and coded with extensibility in mind to allow for the addition of other misconceptions to the app easily. If you would like to build on the project, follow the guide below.

#### 1. Clone the repository 

```bash
git clone https://github.com/Verina-Armanyous/capstone.git
```
#### 2. Set up Firebase store 
You can follow the official documentation [here](https://firebase.google.com/)

#### 3. Create .env file 
Create a .env file in the cloned repository. Then, go to the project settings page on firebase website, and copy the firebase configuration information in the .env file. 

#### 4. Make a copy of the misconceptions Google sheets 
Visit this [link](https://docs.google.com/spreadsheets/d/1RkLxbg0SB8CDLkKnwEwjqyuaXmhztVg2U5J5J20RC6Y/edit#gid=597552911), and make a copy of the google sheets. Notice how information of each level is located in a separate sheet. You can add either a new level by creating a new sheet, or add more misconceptions to the existing level by filling additional rows. 

#### 5. Connect Apps Script to your Google sheets 
Connect Apps Script by running this [script](https://github.com/Verina-Armanyous/capstone/blob/master/script.js) in your Google sheets. Don't forget to change the client email, private key, and project id. This should trigger the data ingestion process from Google sheets to firebase which is how React fetches the data. 
