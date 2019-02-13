# Gulp taskrunner

A easy to use and extendable task runner setup with gulp as base.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Make sure that you have the latest gulp-cli installed on your machine.

```console
$ npm install --global gulp-cli
```

### Installing

Install all depedencies

```console
$ npm install
```

If this is done run the following command to see if everthing is working correctly

```console
$ npm run build:dev
```

You should see no errors and there while appear a dist folder in your project

### Commands


#### All available npm commands

| Command  | Description |
| --- | --- |
| clean | Removes the dist folder |
| build:dev | Compiles all files in development mode |
| build:prod | Removes dist folder and compiles all files in production mode |
| dev | Start a watcher in development mode |
| release | Runs a release sequence in production mode |

#### example
```console
$ npm run build:dev
```

#### All available gulp commands

| Command | Description | Flags |
| --- | --- | --- |
| clean:dist | Removes the dist folder | no
| compile:js | Compiles all js files | --development or --production
| compile:scss | Compiles all scss files | --development or --production
| compile:all | Compiles all js and scss files | --development or --production
| watch:all | Watches and compiles all js and scss files | --development or --production
| release:all | Remove dist folder and compile all js and scss files | --development or --production

#### example
```console
$ gulp compile:all --development
```

#### Good to know
When there isn't a flag given to a gulp command, the gulp task while run in development mode

## Authors

* **Joren Rothman** - *Initial work* - [Github](https://github.com/jorenrothman)

