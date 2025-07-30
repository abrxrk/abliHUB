const roadmaps = {
  "React.js": {
    title: "React.js",
    description: "Build modern user interfaces",
    levels: [
      {
        title: "Beginner",
        id: "beginner",
        steps: [
          { title: "JSX and Components", completed: true },
          { title: "State and Props", completed: true },
          { title: "Handling Events", completed: false },
          { title: "Mini-Project: Interactive To-Do List", completed: false },
        ],
      },
      {
        title: "Intermediate",
        id: "intermediate",
        steps: [
          { title: "React Hooks (useEffect, useContext)", completed: false },
          { title: "API Calls with React", completed: false },
          { title: "React Router", completed: false },
          { title: "Mini-Project: Blog with API Data", completed: false },
        ],
      },
      {
        title: "Advanced",
        id: "advanced",
        steps: [
          { title: "State Management (Redux/Zustand)", completed: false },
          { title: "Performance Optimization", completed: false },
          { title: "Mini-Project: E-commerce Shopping Cart", completed: false },
        ],
      },
    ],
  },
  // Other skills will be added later
};

export default roadmaps;
