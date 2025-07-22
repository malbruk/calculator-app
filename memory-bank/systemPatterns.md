# System Patterns

## System Architecture
The application follows a component-based architecture using React. The main components are located in the `src` directory, with `App.tsx` serving as the primary component.

## Key Technical Decisions
- Use of React functional components and hooks for state management.
- TypeScript for type safety and improved code quality.
- CSS for styling, following BEM naming conventions.

## Design Patterns in Use
- Component-based design for modularity and reusability.
- Separation of concerns: logic is encapsulated within components, and styling is handled in separate CSS files.

## Component Relationships
- `App.tsx` is the root component that manages the overall layout and state.
- Child components handle specific functionalities, such as the display and buttons.
