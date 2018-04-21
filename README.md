# FootFall System
---

See more details at [Google Drive](https://drive.google.com/drive/folders/1a23Ad9oDTwn10oYGa98jJdUOWWAep72j?usp=sharing)

### Installation
- Install node with npm (or yarm)
- Run `npm install` to add required dependencies
- To start in `development` mode run `npm start` inside the root folder 
(open the browser and type `http://localhost:8080/`)
- To bundle with `production` mode (to `build` folder), run `npm start build`

### Guides
- [React](https://reactjs.org/tutorial/tutorial.html)
- [Redux](https://redux.js.org/introduction)
- [Webpack](https://webpack.js.org/guides/getting-started/)
- Eslint : Airnb Style [js](https://github.com/airbnb/javascript), 
[react](https://github.com/airbnb/javascript/tree/master/react
)
- [React Components](https://github.com/brillout/awesome-react-components)
- [Redux Eco System](https://github.com/markerikson/redux-ecosystem-links)
- [Immutable.js](https://facebook.github.io/immutable-js/)
- [Typed-Immutable](https://github.com/typed-immutable/typed-immutable)
- [Jest](https://facebook.github.io/jest/)
- [React Router](https://reacttraining.com/react-router/web/example/basic)
- [API](http://jsonapi.org/format/upcoming)

### Practises
- Make all view components (react) stateless
- Follow TDD (Test Driven Development) [Hint: `npm run test:watch`]
- Add `dependencies` correctly based on requirements (i.e. `--save` vs `--save-dev`)
- To create FSA ([Flux Standard Action](https://github.com/acdlite/flux-standard-action)) 
compliant actions, please use {createAction} from 'redux-actions' 
- In testing reducers, make sure to test unknown actions and the immutability of initial 
and expected objects
- We will use redux with Immutable.js (and Typed-immutable) for application store. Please follow [Best Practices](https://redux.js.org/recipes/using-immutable.js-with-redux#what-are-some-opinionated-best-practices-for-using-immutable.js-with-redux) 
- We will use 'moment.js' for all date/time related functions

### Notes
- All models (including Immutable.js, Typed-immutable) are exported via 'Models' (models->index.js)

### Dev Tools
- Using [React Developer Tools](https://github.com/facebook/react-devtools) and [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) 
will simply development efforts and enable debugging

### Versions
- Update the `version.md` and `package.json` for each release with correct version number
- Add git tag with corresponding version number


## TODO
- Add storybook
- Add test cases
- Add loading overlay

