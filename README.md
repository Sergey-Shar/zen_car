
# ZEN.CAR App



## About the project:

This project is a partial copy of https://zen.car

My task was to repeat the functionality from this part of the application: https://zen.car/repair-wizard

![testwork example](./assets/images/img1.png)

![testwork example](./assets/images/img2.png)

![testwork example](./assets/images/img3.png)

Here, the user can select services/symptoms step by step and as a result receives a final list of works, which is stored in Local storage, which makes it possible to return to it from any part of the application. Also, the functionality of the application allows the user to navigate back through the tree of services and change the list by adding new and removing unnecessary work from the list.

Service and symptom data is provided by an API implemented with[GraphQl](https://graphql.org/)

For integration with Google Maps I used the library [Google-maps-react](https://www.npmjs.com/package/google-maps-react)


Added automatic geolocation function (so when you open my app, you know I'm following you) joke, google can only do this if you let it.

The application also uses [Firebase](https://console.firebase.google.com/), thanks to which the functionality of registering a new user (client) and its subsequent authentication based on the provided email address and password has been added.


In addition, we have the ability to translate the text of the application from Russian into English and vice versa, to add this feature, I used [i18Next](https://react.i18next.com/)




### The application was developed using the following technologies:

* [React.js](https://reactjs.org/)

* [Redux](https://redux.js.org/)

* [React-router-dom](https://v5.reactrouter.com/)

* [Firebase](https://console.firebase.google.com/)

* [GraphQl](https://graphql.org/)

* [AppoloGraphQl](https://www.apollographql.com/)

* [Lodash](https://lodash.com/)

* [Google-maps-react](https://www.npmjs.com/package/google-maps-react)

* [i18Next](https://react.i18next.com/)

* [Material-UI](https://mui.com/)




If you click here [PRESS ME HARD!!!](https://zen-car-test.web.app) you will see how it all works in the browser.


Fast start:

- Clone repository

```
  git clone https://github.com/Sergey-Shar/zen_car.git
```

- Install dependencies

```
  yarn install
```

- Start project

```
  yarn start
```



