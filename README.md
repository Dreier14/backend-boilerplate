# Backend Boilerplate
This is a backend boilerplate
Configuration for the following is included within:

**TypeScript**

- Dependencies for TypeScript and associated configuration via tsconfig.json.

**Docker**

- A dockerfile for building your backend image.
- A docker-compose file for orchestrating your backend implementation with a postgreSQL database.

**TypeORM**

- TypeORM data source configured for connectivity to the local postgres database.
- An "Example" entity.

**package.json**

- a "dev" script defined with ts-node-dev for compilation and hot reloading.

## Prerequisites

Before building and starting this project, ensure the following prerequisites are met:

1. You have docker installed and running: [https://www.docker.com/](https://www.docker.com/)
2. You have Node.js installed: [https://nodejs.org/en](https://nodejs.org/en)

## Getting Started

Once you have completed installation of the prerequisites, you can begin developing your solution. The following steps will get it running:

1. Clone the repo
2. Install dependencies: `npm install`
3. Build the project: `docker compose build`
4. Start the project: `docker compose up`

## Project Structure

### `src` Directory

This is where you can add your application code. There are a few files present as a starting point:

- `index.ts` - The entry point for the application. The starter code located here initializes the TypeORM datasource and establishes the database connection. This file is a good place to add code for bootstrapping an API process, for example.
- `data-source.ts` - This is the TypeORM datasource configuration. By default, the `sychronize` option is set to true. This ensures that any changes to entities are automatically synced to the database schema so that you don't have to spend time implementing migrations.
- `entity` Directory - This is the place to put your TypeORM entity classes. There is one, "Example", created for you as a starting point. When creating new entities, export them from the index.ts file in the entity directory and the TypeORM datasource will automatically pick them up.

### docker-compose.yml

The default docker-compose configuration in this project specifies 2 containers: The backend container where your code will live, and a postgres container for a local database. The backend container exposes a port mapping on 4000, so your API should run on that port for external connectivity on localhost.

If there is anything limiting about this configuration for your specific solution, feel free to modify it to your needs.

### Dependencies

This project is using npm for managing dependencies. If you need to add additional dependencies, you can do so with `npm install`. **Important**: After installing new dependencies, you must rebuild containers with `docker compose build` in order for them to be available within your environment.


## 🚀 Good luck and have fun!

If you run into any issues with this boilerplate, please reach out to your hiring contact and they will help you resolve it.
