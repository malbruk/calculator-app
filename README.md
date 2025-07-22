# React Calculator App

![React Calculator](public/vite.svg)

A simple and interactive calculator application built with React and TypeScript. This project demonstrates the use of React functional components, hooks, and TypeScript for building a responsive and accessible web application.

---

## Features

- **Basic Arithmetic Operations**: Perform addition, subtraction, multiplication, and division.
- **Clear Functionality**: Reset the calculator input and result.
- **Error Handling**: Displays error messages for invalid calculations.
- **Responsive Design**: Optimized for various screen sizes.
- **Accessible**: Built with semantic HTML and ARIA roles for better accessibility.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/malbruk/calculator-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd calculator-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## Project Structure

```
calculator-app/
├── public/          # Static assets
├── src/             # Source code
│   ├── App.css      # Styles for the App component
│   ├── App.tsx      # Main App component
│   ├── index.css    # Global styles
│   ├── main.tsx     # Application entry point
│   └── assets/      # Additional assets
├── package.json     # Project metadata and dependencies
├── vite.config.js   # Vite configuration
└── README.md        # Project documentation
```

---

## Development

### Code Standards

- **React Functional Components**: Leverage hooks like `useState` for state management.
- **TypeScript**: Ensure type safety and improved code quality.
- **BEM Naming Convention**: Follow BEM for CSS class names.

### Testing

Write unit tests for critical components and functions using Jest or React Testing Library.

### Performance Optimization

- Minimize re-renders using `React.memo` or `useCallback` where necessary.
- Optimize the application for fast load times.

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

---

## Acknowledgments

This project is inspired by the need for a simple yet functional calculator application to demonstrate React and TypeScript capabilities.
