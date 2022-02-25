# weather-app
## About the app
Technologies: VueJS 2, Bootstrap
Helpers: Vuex, Axios
Description: The app fetches weather info about the desired city using the help of the OpenWeatherMap API.
How it works: The app is concluded of two inputs (city name and country code). The user types in the desired city and after the submit button is clicked, the weather info is displayed in a weather widget beneath.
There are two components, App.vue and WeatherWidget.vue. In the App.vue, the main logic is implemented (fething the data, input models, etc.). In the WeatherWidget.vue, the data is being displayed and styled with Bootstrap. 
The fetched data is managed through the vuex store which is being delegated to the main component (App.vue) and then passed through props to the child component (WeatherWidget.vue).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Runs unit tests
```
npm run test:unit
```

### What could be improved
1. Validation of the form:
  - Submit button to be disabled when component is rendered and input values are empty
  - Validate if both of the inputs are populated and inform the user if they are not
  - Form to be submitted on keypress enter also

2. Create a helper function for the dispatching of the store action which will help with the DRY

3. Bootstrap:
  - Better organization of the bootstrap classes
  - Configure bootstrap with custom classes so the css would be used less

4. Better UX:
  - Not to load the widget component initially, instead some welcoming message to be inserted
  - Or the widget can be loaded with the weather of the current location
