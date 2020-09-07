docker-compose run --rm api rails db:create db:migrate &&
docker-compose build && 
docker-compose up 