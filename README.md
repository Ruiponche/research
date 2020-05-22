This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## About

Technical task for Morresier 

### Known issues
- Need to add PropTypes to everything.
- instead of redeclaring ` let history = useHistory()` and `var location = useLocation()` in various components I should add it to the context and access from each component.
- The page limit '32' should be a gloal constant.
- I'm adding new events entities to the redux store even when the search has changed. E.g. search for 'photon' and some events (physic congress...) are added into the store, then search for 'blod cells' and the new events (medicine congres...) are added to instead of being replaced.
- There is no back button in the header for mobile.
