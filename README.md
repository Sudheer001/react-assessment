# Instructions
Hello and welcome! Thank you for your interest in working with us at One Degree. The following describes a made up scenario modeled from our typical product development process. Please clone or fork this repo, update the project to meet all requirements below, and upload the code to your github account.

### Scenario: 

On the One Degree website there are several Assessments that community members can fill out to receive more customized information about resources available for their situation. We want to build a page in React that shows some basic information about all these Assessments. 

The Assessment data is mocked as a fake API response in `src/api/odas/index.js`. Use this data to build the page. The design requirements for desktop and mobile can be reviewed in the included screenshots: `assessment-screen-mock.png` and `assessment-screen-mock-mobile.png`. 

This project already includes react-bootstrap which can be used to complete the requirements. You may install other libraries as needed. 

### Requirements
- The page you build must match the design mocks on desktop and mobile screen sizes
- The colored icon to the left of each Assessment name should have a color corresponding to the Assessment “tag” according to the following mapping:
  - Health => Red
  - Food => Purple
  - Housing => Light blue
  - No tag => Dark blue
- Clicking any “Get Started” button should simply display an alert that shows the selected Assessment title  


### Submission

When you are satisfied that your work is complete according to the requirements, please send an email to engineering@1degree.org and include a link to where you have uploaded the code (github link is preferred). 

------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
