# hacker-news-react
Project site built using React, Redux and Hacker News' API for the stories

## Running

First `npm install` to grab all the necessary dependencies.

Then run `npm start` and open [localhost:7770](http://localhost:7770/) in your browser.

## Tech Details

* Once the component is mounted we fetch the top stories from Hacker News
* The API returns 500 top story IDs so we grab the first 25 and save them to the Redux Store.
* Then we map each of the IDs to a Story component, fetching the details for that story and saving it to the React State.
