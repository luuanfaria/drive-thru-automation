# Vox AI Test Project

**Demo:** [Vox AI Test Project](https://drive-thru-automation-luuanfaria.vercel.app/)

## About the Project

This is a test project for Vox AI, aimed at creating a web/kiosk page for voice-activated orders. The project utilizes modern web technologies and AI voice interactions.

## Folder Structure

The project folder structure is organized as follows:

- **public**: This folder contains public files such as images, icons, and audio files.

  - **icon**: Icons used in the project.
  - **image**: Images used in the project.
  - **voice**: AI voice files used for voice interactions.

- **src**: The main source code of the project.
  - **app**: Application-specific components and pages.
    - **order**: Pages related to orders.
      - **layout.tsx**: Common layout for order pages.
      - **page.tsx**: Main order page.
      - **checkout**: Pages related to the checkout process.
        - **page.tsx**: Order checkout page.
    - **globals.css**: Global styles for the application.
    - **layout.tsx**: Common layout for all application pages.
    - **page.tsx**: Initial application page.
  - **components**: Reusable components used across various parts of the application.
    - **Banner.tsx**: Banner component.
    - **CategoryMenu.tsx**: Category menu component.
    - **Container.tsx**: Container component.
    - **FloatingIcons.tsx**: Floating icons component.
    - **Menu.tsx**: Menu component.
    - **OrderItem.tsx**: Order item component.
    - **OrderSummary.tsx**: Order summary component.
    - **Voice.tsx**: AI voice control component.
  - **mocks**: Simulated data used for development and testing.
  - **types**: Data types used in the project.
  - **utils**: Utility functions and helper functions.

## How to Use

Users can interact with the application as follows:

1. On the home page, users can click the voice button to play the AI voice.
2. Users will be redirected to the order page, where they can add items to their order and view the order summary.
3. Users can click "Checkout" to proceed with payment.
4. There are two guide icons at the bottom right on the order route: one to return to the general items menu and another to cancel the operation.

## To-Do

Up to this point, the project includes the following features and planned improvements:

- Add the remaining AI voice interactions.
- Implement animation on the voice button.
- Add text guides above the voice button.

## Development and Planning

You can check all the development planning details and milestones on our [GitHub milestones page](https://github.com/luuanfaria/drive-thru-automation/milestones).

## Requirements

To develop and run the project locally, you will need to have [Node.js](https://nodejs.org/) and [Yarn](https://classic.yarnpkg.com/en/) installed.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project folder in your terminal.
3. Run the command `npm install` to install the dependencies.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles the application for production.
- `npm start`: Starts the application in a production environment.
- `npm run lint`: Performs linting checks on the code.

## Key Dependencies

- [Next.js](https://nextjs.org/): React framework for web applications.
- [Phosphor Icons](https://phosphoricons.com/): Icon library.

---

<p align="center">
  <samp>
    <a href="https://luuanfaria.dev">website</a> .
    <a href="https://linkedin.com/in/luuanfaria">linkedin</a> .
    <a href="https://twitter.com/luuanfariaf">twitter</a> .
  </samp>
</p>
