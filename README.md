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
A table with all available npm commands

| Command  | Description |
| --- | --- |
| clean | Removes the dist folder |
| build:dev | Compiles all files in development mode |
| build:prod | Removes dist folder and compiles all files in production mode |
| dev | Start a watcher in development mode |
| release | Runs a release sequence in production mode |

## Authors

* **Joren Rothman** - *Initial work* - [Github](https://github.com/jorenrothman)

