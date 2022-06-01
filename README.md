## Circle CI status
[![<ORG_NAME>](https://circleci.com/gh/arzek/xendit-home-task.svg?style=svg)](https://app.circleci.com/pipelines/github/arzek/xendit-home-task)


## Demo playground

- Swagger - [xendit-home-task](https://xendit-home-task-production.up.railway.app/api/)
- Code coverage - [Code coverage](https://output.circle-artifacts.com/output/job/26e2bc28-aa6e-40dd-a204-cb69c075fd29/artifacts/0/coverage/lcov-report/index.html)

## Installation

1. Create .env file
2. Set vars:
```bash
PGHOST=
PGPASSWORD=
PGDATABASE=
PGUSER=
PGPORT=
```
3. Install dependency
```bash
$ yarn
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test and lint

```bash
# lint
npm run lint

# test coverage
$ npm run test:cov

# load test
$ npm run test:load
```

