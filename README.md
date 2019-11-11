## About

A slide menu as often used in touch settings app.

## Demo

https://menujs.netlify.com

## Installing
This project is built using [React](https://reactjs.org). Make sure it is [installed](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) on your system.

Using a terminal, navigate to the project folder.
```
$ cd menu
```
Before you can start the development server, install all dependencies.
```
$ npm install
```
Then start the server.
```
$ yarn start
```

## Usage

Usage of the react component.
```
<Menu
  slides={ slidesObject }
  settings={ settingsObject }/>
```

The slides prop contains all data regarding the slides as an object.
```
slides: {
  'Login': {
    component: Login,
    props: {
      myFirstProp: 'someValue',
      mySecondProp: 'someOtherValue',
    }
  },
  'Password': {
    component: Password,
    props: {
      myFirstProp: 'someValue',
      mySecondProp: 'someOtherValue',
    }
  },
}
```

And the settings prop contains all data regarding the menu settings.
```
slides: {
  'Login': {
    component: Login,
    props: {
      myFirstProp: 'someValue',
      mySecondProp: 'someOtherValue',
    }
  },
  'Password': {
    component: Password,
    props: {
      myFirstProp: 'someValue',
      mySecondProp: 'someOtherValue',
    }
  },
}
```
