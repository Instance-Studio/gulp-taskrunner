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

### Creating a new command
To create a new command open up the gulpfile.js just create a new task with the default gulp.task function
more information can be found on [tasks()](https://gulpjs.com/docs/en/api/task).

### Creating a new compiler
To create a new compiler there are a few steps required.

#### Creating the task
Goto the config/tasks folder create a new file with a good descriptive name like 'optimize-images'
the basic template for creating a task is below

```
module.exports = (gulp, plugins, config) => {
    return () => {
    }
}
```

Copy and paste it typos are never fun.

in the return statement right your normal [gulp task](https://gulpjs.com/docs/en/api/task)

the gulp parameter contains the gulp instance
the plugins parament contains all gulp plugins
the config contains all the configurations

that's it nice and easy

#### Registering your newly made task
To register your newly made task goto the gulpfile.js
use the following function
```
    addTask(task name, filename)
```
The addTask function accepts two parameters the

first one is the name of the task this could be 'optimize:images' i can be anything you want. 

The second parameter is the filename of your task this would be 'optimize-images' **don't add the file extension**

test your new function by using

```
gulp <task name>
```

That's it have fun!

## Authors

* **Joren Rothman** - *Initial work* - [Github](https://github.com/jorenrothman)

