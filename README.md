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

```
<Menu slides={ slidesObject } settings={ settingsObject }/>
```

The slides prop object contains all data regarding the slides and the settings prop object contains all data regarding the menu settings. See sections below for details.

## Important notes

It is intended that each slide has a shadow, and this shadow spans an area over other slides. Therefore a slide lying to the right, cant lie immediately next to the menu container because this would show an unwanted shadow on the active slide. The best way to solve this is to extend the width of the slide container. This extended spacing is set to equal the sum of the shadows blur and spread. The slides on the right will now lie immediately next to the active slide. This extended width will make sure no gap appears during animation and that no shadow is visible on the active slide. Make sure to keep this in mind when you start implementing the component content in each slide.

The width of the slide container is extended in the following way.

```
width: calc( 100% + ${ spread + blur } );
```

This will cause overflow in the content of the slide. To overcome this, i suggest setting the width of the content using the calc css function.

```
width: calc( 100% - ${ spread + blur } );
```

Or using absolute positioning.

```
position: absolute;
left: 0px;
right: ${ spread + blur };
```

Also, some content is indeed intended to equal the full width of the slide container including the extra spacing. Such as section lines, background colors and other markup structure. But text, icons and buttons should never lie all to the right.

If you don't like this width implementation, i suggest you use a darkened custom transparent overlay on the slides when they move from center to left. Remember to remove the shadow in the settings object to remove the extra spacing.

This somewhat strange implementation is favored over other alternatives such as using a delay, because it is more favorable for the end user as well as it is easier to implement for cross browser support and bezier customization.

## Settings prop object

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
#### Left

This value determines the distance the active slide should animate to the left.

#### Active

This value determines which slide should be visible at initial render.

#### Bezier

The four values in the bezier object determines the progress of the animation. Here are some common settings for the [basic css transition timing functions](https://www.w3.org/TR/css-easing-1/#cubic-bzier-easing-function).

[Ease](https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease)
```
bezier: {
  x1: 0.25,
  y1: 0.1,
  x2: 0.25,
  y2: 1
}
```

[Ease-in](https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease-in)
```
bezier: {
  x1: 0.42,
  y1: 0,
  x2: 1,
  y2: 1
}
```

[Ease-out](https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease-out)
```
bezier: {
  x1: 0,
  y1: 0,
  x2: 0.58,
  y2: 1
}
```

[Ease-in-out](https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease-in-out)
```
bezier: {
  x1: 0.42,
  y1: 0,
  x2: 0.58,
  y2: 1
}
```

Linear (example)
```
bezier: {
  x1: 0.25,
  y1: 0.25,
  x2: 0.75,
  y2: 0.75
}
```

## Slides prop object

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

Each component in the slides object gets passed into each slide container along with the props you provide and a function to change to a new slide.

```
this.props.get('Login', 'r');
```

The first argument is the name of the new slide and the second argument decides if the new slide is to enter from right or left. Valid values are 'r' and 'l'.
