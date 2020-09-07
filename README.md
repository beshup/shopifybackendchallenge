# README

Preface: 

Docker was used as this project was developed on a Windows machine, and Ruby on Rails on Windows is.. not the most fun.

The choice of the stack was to reflect Shopify's known stack, ala Rails / GraphQL / React. At this point in time, these are also technologies I have been extensively using for the past few months. 

I wanted to challenge myself with image upload with GraphQL specifically. 

This project contains a frontend and backend server, hosted on ports 5000 and 3000 respectively, when run locally. Apologies for not containerizing the frontend server.

GET STARTED

Have Docker, npm, and Yarn installed.

```
git clone https://github.com/beshup/Image-Repository-Shopify-W2021-Challenge-.git
```
```
cd into directory
```
```
docker-compose build
docker-compose up 
```
Open new terminal
```
cd frontend
```
```
yarn install
yarn start 
```
