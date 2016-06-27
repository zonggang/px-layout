#px-navbar

[![Build Status](https://travis-ci.org/PredixDev/px-navbar.svg?branch=master)](https://travis-ci.org/PredixDev/px-navbar)

[![Coverage Status](https://coveralls.io/repos/github/PredixDev/px-navbar/badge.svg?branch=master)](https://coveralls.io/github/PredixDev/px-navbar?branch=master)

## Overview

px-navbar is a Predix UI component.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

## Getting Started

First, install the component via bower on the command line.

```
bower install px-navbar --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="/bower_components/px-navbar/px-navbar.html"/>
```

Finally, use the component in your application:

```
<px-navbar id="navbar1">
	<div left>

	</div>
	<div title>

  </div>
	<div right>

	</div>
</px-navbar>
```

<br />
<hr />

## Documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-navbar).

The documentation in this repository is supplemental to the official Predix documentation, which is continuously updated and maintained by the Predix documentation team. Go to [http://predix.io](http://predix.io)  to see the official Predix documentation.


## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ grunt sass
```

From the component's directory, to start a local server run:

```
$ grunt depserve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.


### DevMode
Devmode runs `grunt depserve` and `grunt watch` concurrently so that when you make a change to your source files and save them, your preview will be updated in any browsers you have opened and turned on LiveReload.
From the component's directory run:

```
$ grunt devmode
```

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-navbar/issues) to submit any bugs you might find.
