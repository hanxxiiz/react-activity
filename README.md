# React Activity

## Components

There are three components created:

### Student Information

This is a form component that handles user input for student information. It asks the user for their name (first name and last name), course, year level, and position. This component includes a text input field for entering the name, along with dropdown menus for selecting the course, year level, and position. Upon submission, the component triggers an event to navigate to the next page.

### WelcomeCard

A presentational component that displays a personalized welcome message. It receives the user's name and position as props, along with additional built-in message.

### Counter

An interactive component that demonstrates basic state management in React.

Instead of using increment and decrement buttons, this component uses an engaging, clickable interface. It leverages Click Spark (grabbed from https://www.reactbits.dev/animations/click-spark) for a more visually appealing user experience. Each user click triggers a spark animation and increments the counter.
