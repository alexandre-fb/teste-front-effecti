![effecti](https://www.effecti.com.br/wp-content/uploads/2023/07/logotipo.svg)

# Developer technical assessment

This repository contains the technical assessment for developers applying to work at Effecti. The assessment consists of developing a ToDo application using Vue.js 2.

### Objective

Develop a ToDo application in Vue.js 2 that allows users to manage a list of tasks with features like creating, editing, deleting, filtering, and local storage, focusing on state management with Vuex and performance optimization techniques.

### Functional requirements

| # | Title                      | Description                                                                                      |
|---|----------------------------|--------------------------------------------------------------------------------------------------|
| 1 | **Add task**               | Create new tasks with fields for `title`, `description`, and `priority` (low, medium, high).     |
| 2 | **Edit task**              | Update existing tasks.                                                                           |  
| 3 | **Delete task**            | Delete existing tasks.                                                                           |   
| 4 | **Mark task as completed** | Mark tasks as completed or pending.                                                              |
| 5 | **Filter tasks**           | Filter tasks by status (completed, pending, or all).                                             |   
| 6 | **Sorting tasks**          | Order tasks by priority (low, medium, high).

### Technical requirements

| # | Requirement                          | Description                                                                                       |
|---|--------------------------------------|---------------------------------------------------------------------------------------------------|
| 1 | **State Management with Vuex**       | Use Vuex to manage the state of the application.                                                  |
| 2 | **Actions & Mutations**              | Define actions and mutations to update the state of the application.                              |
| 3 | **Modularization**                   | Organize actions, mutations, and state into modules if needed for clarity.                        |
| 4 | **Data persistence**                 | Persist task data in `localStorage` so tasks remain available upon page reload.                   |
| 5 | **Responsive Layout**                | Ensure the app is mobile-friendly and functions well on various screen sizes.                     |
| 6 | **Reusable Components**              | Organize components for reusability and maintainability.                                          |
| 6.1 | **Task List Component**            | Create a reusable component for displaying a list of tasks.                                       |
| 6.2 | **Task Item Component**            | Create a reusable component for displaying individual tasks.                                      |
| 6.3 | **Task Form Component**            | Create a reusable component for adding, editing, and deleting tasks.                              |


### Bonus points

1. **Large Data Set Simulation**: Simulate a large number of tasks (e.g., 100+ tasks) to test the app’s responsiveness.
2. **Search Feature**: Implement a quick search to find tasks by `title` or `description`.
3. **Optimized Rendering**: Use techniques such as `virtual scroll` to handle large task lists efficiently.

### Documentation

- **README**: Provide instructions for setup and execution, as well as a brief explanation of the main technical decisions regarding Vuex usage and performance optimization.


### Evaluation criteria

- **Functionality**: Implementation of the required features.
- **Effective Vuex Implementation**: Correct usage of state management and modularization.
- **Code quality**: Readability, organization, and adherence to Vue.js best practices.
- **Documentation**: Clear and concise instructions and reasoning for technical choices.
- **User Experience**: Intuitive interface, responsiveness, and visual appeal.
- **Bonus points**: Implementation of the bonus points.
