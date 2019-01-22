## questioner
## Web application

[![Build Status](https://travis-ci.org/EmyRukundo/questioner.svg?branch=develop)](https://travis-ci.org/EmyRukundo/questioner)
[![Coverage Status](https://coveralls.io/repos/github/EmyRukundo/questioner/badge.svg?branch=develop)](https://coveralls.io/github/EmyRukundo/questioner?branch=develop)
<a href="https://codeclimate.com/github/EmyRukundo/questioner/maintainability"><img src="https://api.codeclimate.com/v1/badges/aa215b279d54af5bd76c/maintainability" /></a>

## App Description
Crowd-source questions for a meetup. ```Questioner``` helps the meetup organizer prioritize  questions to be answered. Other users can vote on asked questions and they bubble to the top  or bottom of the log. 
This is a web application for meetups, you can create meetup and peole will join your meetup
Users can ask questions, upvote questions and respond Rsvps
Admin creates a meetup and you can see the user profile.

## Some Important links

link for UI pages: https://emyrukundo.github.io/questioner/

link of app files on Gihub:https://github.com/EmyRukundo/questioner

link of Pivotal tracK: https://www.pivotaltracker.com/n/projects/2232492

link of the app on Heroku: https://qmeetup.herokuapp.com/

## List of API Endpints
Here, it is a list of endpoints that you should use to access API Endpoints

GET/api/v1/meetups  -> for get all meetups
GET/api/v1/meetups/:id  ->for get a specific meetup with the given id
GET/api/v1/meetups/upcomming  ->get all upcomming meetups
POST/api/v1/meetups ->for create new meetup
POST/api/v1/meetups/:id/rsvp ->for confirming to attend meetup with the given id as user
PUT/api/v1/questions/:id/upvote  up vote a question with give id parameter
PUT/api/v1/questions/:id/downvote  down vote a question with give id parameter
   
