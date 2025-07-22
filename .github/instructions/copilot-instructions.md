---
applyTo: '**'
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.

1. **Project Structure**: The project is a simple calculator application built with React. The main components are located in the `src` directory, with `App.tsx` as the primary component.

2. **Coding Standards**:
   - Use functional components and React hooks (e.g., `useState`) for state management.
   - Keep the component structure flat and avoid deeply nested components.
   - Use TypeScript for type safety and to improve code quality.

3. **Styling**: The application uses a CSS file (`App.css`) for styling. Follow BEM (Block Element Modifier) naming conventions for class names.

4. **Functionality**:
   - The calculator should support basic arithmetic operations: addition, subtraction, multiplication, and division.
   - Implement a clear button (C) to reset the calculator.
   - Display error messages for invalid calculations.

5. **Testing**: Write unit tests for critical functions and components using a testing library like Jest or React Testing Library.

6. **Accessibility**: Ensure the application is accessible by following best practices, such as using semantic HTML and ARIA roles where appropriate.

7. **Performance**: Optimize the application for performance by minimizing re-renders and using React.memo or useCallback where necessary.

8. **Documentation**: Comment the code where necessary and provide a README file with instructions on how to run and test the application.

By following these guidelines, the AI can generate code that is consistent with the project's goals and maintainable in the long run.
