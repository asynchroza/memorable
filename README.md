# Prerequisites 

- [Bun](https://bun.sh/docs/installation)
- [Docker](https://docs.docker.com/desktop/install/mac-install/)

# First time running the project 

- `cp .env.example .env` to create a copy of the environment file
- copy paste missing secrets in .env file
- `bun install` to pull the latest package changes 
- `bun db:start` to start the Postgres database
- `bun db:push` to push the prisma schema to the database 
- `bun db:studio` to easily inspect the state of the database
- `bun dev` to start development server

# Drop database

- `bun db:bash` to get into the container's shell
- `psql -U dev -d dev_db` to log into the default database
- run `DROP DATABASE IF EXISTS memorable_db;` to drop the memorable database

## Features
### Networks:
Networks are invite-only systems that allow users to share reviews exclusively with people of their choice. When a network is loaded, the map will display only reviews permitted by the network. If the network is configured to load public reviews, it will showcase private network-only reviews alongside the public database of reviews.