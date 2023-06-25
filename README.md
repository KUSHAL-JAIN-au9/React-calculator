# React Calculator

The React Calculator project is a web application built with React, a popular JavaScript library for building user interfaces. This calculator provides a user-friendly interface for performing mathematical calculations right in the browser.

## Features

1. Basic Arithmetic Operations: The calculator supports common arithmetic operations such as addition, subtraction, multiplication, and division.

2. Clear and Backspace: Users can easily clear the calculator's display to start a new calculation or use the backspace button to delete the last entered digit.

3. Order of Operations: The calculator follows the standard order of operations (PEMDAS/BODMAS), ensuring accurate results for complex calculations involving multiple operations.

4. Decimal and Negative Numbers: Users can input decimal numbers and perform calculations with negative numbers.

5. Responsive Design: The calculator interface is responsive and adapts to different screen sizes, allowing users to perform calculations on desktops, tablets, and mobile devices.

## Project Setup

To set up the React Calculator project locally, follow these steps:

1. Clone the repository to your local machine using the following command:
   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```
   cd React-calculator
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

   This command will launch the development server and open the calculator application in your default browser.

## Project Structure

The project structure is organized as follows:

```
react-calculator/
  |- public/
  |   |- index.html
  |
  |- src/
  |   |- assets/
  |   |- components/
  |   |   |- Btn.jsx
  |   | 
  |   |-data/
          |-data.js
  |   |- App.jsx
  |   |- App.css
  |   |- main.jsx
  |   |- index.css
  |
  |- .gitignore
  |- package.json
  |- README.md
```

- The `public` directory contains the main `index.html` file, which serves as the entry point for the application.

- The `src` directory contains the React components and the main `App.js` and `index.js` files.

- The `components` directory houses the individual React components that make up the calculator's user interface.

- The `Button.js` component represents a button on the calculator interface.

- The `Calculator.js` component acts as the main calculator container, managing the display and handling user input.

- The `Display.js` component displays the current calculation and result on the calculator's interface.

- The `App.js` file is the entry point for the React application, where the main components are rendered.


# Some snapshots of React-Calculator :

![Screenshot 2023-06-25 181819](https://github.com/KUSHAL-JAIN-au9/React-calculator/assets/36365855/149907b5-c690-45f3-b0be-19c91c2e48c4)






