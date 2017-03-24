## create-sdk-app

-------------------------------

### Introduction

Create SDK APP works on macOS, windows, may be Linux.
If something is wrong, please [issue](https://github.com/eryue0220/create-sdk-app/issues) let me know. This is a solution for building web develop environment, inspired by [create-react-app](https://github.com/facebookincubator/create-react-app)

### Installation

```bash
$ npm install create-sdk-app -g
```

### Quick Start

The quickest start way to start developing your web utils project as show below:

Installation the package is the basic step:

```bash
$ npm install -g create-sdk-app
```

Then change the directory to your project directory:
```bash
$ cd project_name
$ create-sdk-app init <project_name> | <options>
```

And then
```bash
$ npm start
```
![image](https://raw.githubusercontent.com/eryue0220/create-sdk-app/master/statics/intro.jpeg)

And then
```bash
$ npm start
```

### More Options

#### ECMAScript 2015

`create-sdk-app` support `ES6` to better develop. Use `ES 6` as follow:

```bash
create-sdk-app i sdk-name es6
```

In default, `create-sdk-app` sets the develop environment is `ES 5`。

#### TODO

In future, `create-sdk-app` will support more environment. such as `React`、`Vue` or others.

### More Info

If you want to get more info, you can run the code as below:
```bash
$ create-sdk-app help
```

### License

[MIT](https://opensource.org/licenses/MIT)
