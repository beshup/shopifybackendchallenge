## PREFACE

With regards to acting as an image repository, this project supports/has:

- Uploading an image
- Updating image details such as name, author, description
- Deleting an image
- A **paginated** display of all images

Docker was used as this project was developed on a Windows machine, and Ruby on Rails on Windows is.. not the most fun.

The choice of the stack was to reflect Shopify's known stack, ala Rails / GraphQL / React. At this point in time, these are also technologies I have been extensively using for the past few months. 

I wanted to challenge myself with image upload with GraphQL specifically. Typically I would deem this particular project as a **terrible use case for GraphQL**.

This project contains a frontend and backend server, hosted on ports 5000 and 3000 respectively, when run locally. Unfortunately the frontend server is not containerized and you will have to start them seperately.

## GET STARTED

Have Docker, npm, and Yarn installed.

**If you don't:**

https://docs.docker.com/get-docker/
https://www.npmjs.com/get-npm

Once you have npm, run
```
npm install -g yarn
```

**Once/if you do:**

```
git clone https://github.com/beshup/shopifybackendchallenge.git
```
```
cd into directory
```
```
docker-compose build
docker-compose up
```
Wait until your terminal has signalled "PostgreSQL init process complete; ready for start up.
<img width="770" alt="shopifybackendchallengedocker" src="https://user-images.githubusercontent.com/55633921/92408825-a0544400-f10c-11ea-8cce-779977cbadfa.png">

Open new terminal
```
docker-compose run --rm api rails db:create db:migrate
```
```
cd frontend
```
```
yarn install
yarn start 
```

Head on over to localhost:5000!

To stop docker service:

```
docker-compose down
```

To start app up again, run 
```
docker-compose up
```
