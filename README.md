# Project Password Validator :zap:

![Print of the App](https://github.com/damaris-uchuaia/Login-Validation-React.js-and-Jest/blob/main/public/loginValidator.png?raw=true)

This project consists of a password validation component that provides visual feedback to the user about the strength of the entered password. If the password does not meet the defined requirements, informative messages are displayed in the user interface.

## Features
Password Validation: The component validates whether the password meets specific criteria, such as the presence of numbers, special characters, uppercase letters, and the absence of consecutive letters.

**Visual Feedback:** Provides visual feedback to the user through icons and messages, indicating whether the password meets the criteria or not.

**Extensible Style:** The component is styled according to a provided design and is also extensible for future customizations.

**Responsiveness:** The application is responsive, adapting to different screen sizes to offer a consistent experience on various devices.

## Tests
Tests are implemented using the Jest library and the Testing Library. They ensure that the password validation component works as expected in different scenarios.

## Installation
Before running the project, make sure to install the necessary dependencies. Run the following command:

**npm install**

## Main Dependencies

- **Styled Components: npm install styled-components**
  
- **Material-UI Core: npm install @mui/material @emotion/react @emotion/styled**
  
- **Material-UI Icons: npm install @mui/icons-material**

## Available Scripts

- **npm start: Starts the application in development mode.**
  
- **npm test: Runs tests using Jest.**

## Directory Structure

-src/: Contains the application files.

-App.js: Main component of the application.

-PasswordValidatorComponent.js: Password validation component.

-styled.js: Styles using Styled Components.

-PasswordValidatorComponent.test.js: Tests for the password validation component.

-Other files related to the project.
