## About

A slide menu as often used in touch settings app. Be sure to read the important notes section.

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
slidesObject = {
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
settingsObject = {
  shadow: {
    color: {
      red: 154,
      green: 154,
      blue: 154,
      alpha: 0.75,
    },
    spread: 0,
    blur: 10,
    vOffset: 0,
    hOffset: 0,
  },
  animation: {
    duration: 0.4,
    bezier: {
      x1: 0.25,
      y1: 0.1,
      x2: 0.25,
      y2: 1,
    },
  },
  active: 'Password',
  left: {
    value: 40,
    unit: '%',
  },
},
```

Each component in the slides object gets passed into each slide container along with the props you provide and a function to change to a new slide.

```
this.props.get('Login', 'r');
```

The first argument is the name of the new slide and the second argument decides if the new slide is to enter from right or left. Valid values are therefore 'l' and 'r'.
## Important notes

It is intended that each slide has a shadow, and this shadow spans an area over other slides. Therefore a slide lying to the right, cant lie next to the active slide because this would show an unwanted shadow and introduce a gap during animation. The best way to solve this is to introduce a spacing between the slides on the right and the active slide. This spacing is set to equal the sum of the shadows blur and spread. The width of the slides is equal to the width of the menu container plus the spacing. Make sure to keep this in mind when you start implementing each slides content.

```
spacing = spread + blur;
```

```
width: calc( 100% + ${spacing} );
```
