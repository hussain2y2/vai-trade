# VAI Trade Code Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Commands

In the project directory, you can run:

### `yarn start` OR `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test` OR `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` OR `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` OR `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project, so you have full control over them. All the commands except `eject` will still work, but they will point to the copied scripts, so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Technologies Used

Following are the latest and updated technologies which I have used to build this code challenge:

| Tech              | Version | Short Description                                                                                                    |
|-------------------|---------|----------------------------------------------------------------------------------------------------------------------|
| React             | 17.0.2  | A JavaScript library for building user interfaces.                                                                   |      
| React Redux       | 7.2.6   | Official React bindings for Redux.                                                                                   |
| React Toolkit     | 1.7.1   | The official, opinionated, batteries-included toolset for efficient Redux development.                               |
| SASS Preprocessor | 1.45.1  | Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.                |
| TypeScript        | 7.2.6   | TypeScript is a programming language developed and maintained by Microsoft.                                          |
| Hero Icons        | 1.0.5   | Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.                                                     |
| API Sauce         | 7.2.6   | low-fat wrapper for the amazing axios http client library.                                                           |
| TailwindCss       | 3.0.8   | A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup. |
| PostCSS           | 3.0.8   | A tool for transforming CSS with JavaScript.                                                                         |
| Autoprefixer      | 10.4.0  | Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes.                                     |

## Improvements

There are some points which can be really impact on the results like adding/removing passengers and adding unit test cases but due to lack of time I didn't focus on it.

1. **Starships API Response** is not always in same format, so if we make it more readable like the `passengers` and `crew` are sometimes numbers, but sometimes we get text like: `n/a`.
2. **Unit Testing** I didn't focus on any type of testing either unit or E2E due to time limitation.
3. **End-End Testing** 