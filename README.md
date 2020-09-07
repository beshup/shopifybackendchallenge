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

```
git clone https://github.com/beshup/shopifybackendchallenge.git
```
```
cd into directory
```
```
docker-compose build
docker-compose run --rm api rails db:create db:migrate
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

Head on over to localhost:5000!

To stop docker service:

```
docker-compose down
```

To start app up again, there is no need to run ./dev.sh, again, just run 
```
docker-compose up
```
