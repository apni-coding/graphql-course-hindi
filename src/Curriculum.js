import React, { useState } from "react";

const graphqlCurriculum = [
  {
    title: "🟢 Beginner Level",
    topics: [
      {
        label: "Introduction to GraphQL",
        topic:
          "What is GraphQL, REST vs GraphQL, Why use GraphQL, and Core Concepts: Query, Mutation, Subscription, Schema",
      },
      {
        label: "Basic GraphQL Syntax",
        topic:
          "GraphQL Types, Scalars (`Int`, `Float`, `String`, `Boolean`, `ID`), Writing Queries & Mutations, Using Aliases, Fragments, and Variables in Queries",
      },
      {
        label: "Setting Up a GraphQL Server",
        topic:
          "Creating a basic GraphQL API using Node.js + Express + `express-graphql`, and Apollo Server with in-memory/static data",
      },
    ],
  },
  {
    title: "🟡 Intermediate Level",
    topics: [
      {
        label: "GraphQL Schema Design",
        topic:
          "Understanding types: `type`, `input`, `enum`, `interface`, `union`, schema-first vs code-first, and 1:1, 1:N, N:M relationships",
      },
      {
        label: "Resolvers",
        topic:
          "Working with resolver functions, using context, handling nested resolvers, resolver chaining, and error handling",
      },
      {
        label: "Apollo Client (Frontend)",
        topic:
          "Setting up Apollo Client in React, querying using `useQuery`, `useMutation`, and `useLazyQuery` hooks, and managing loading/error/data states",
      },
      {
        label: "GraphQL Tools",
        topic:
          "Working with tools like GraphiQL, Apollo Sandbox, Postman, Playground, and Voyager for better development experience",
      },
      {
        label: "Pagination and Filtering",
        topic:
          "Understanding offset-based and cursor-based pagination, and applying filtering and sorting to GraphQL queries",
      },
    ],
  },
  {
    title: "🔵 Advanced Level",
    topics: [
      {
        label: "Authentication & Authorization",
        topic:
          "Adding JWT or session-based auth, using context for auth, and applying role-based access control (RBAC)",
      },
      {
        label: "Subscriptions",
        topic:
          "Implementing real-time GraphQL using subscriptions with `graphql-ws` or `subscriptions-transport-ws`, and using Apollo in React",
      },
      {
        label: "Performance Optimization",
        topic:
          "Using batching and caching, applying DataLoader to fix N+1 problems, enabling persisted queries, and limiting query depth/complexity",
      },
      {
        label: "Advanced Schema Techniques",
        topic:
          "Implementing custom scalars, interfaces, and unions, schema stitching vs federation",
      },
      {
        label: "GraphQL with Databases",
        topic:
          "Connecting GraphQL to MongoDB, PostgreSQL using Prisma, ORM or raw queries in resolvers",
      },
      {
        label: "GraphQL Federation (Microservices)",
        topic:
          "Using Apollo Federation to split schema into subgraphs and using a gateway service",
      },
      {
        label: "Testing GraphQL APIs",
        topic:
          "Unit and integration testing with `supertest`, `apollo-server-testing`, and mocking GraphQL queries",
      },
      {
        label: "Deploying GraphQL API",
        topic:
          "Deploying to Vercel, Railway, Render, or Heroku; setting up CI/CD; and securing production APIs",
      },
    ],
  },
  {
    title: "🧩 Bonus Topics (Optional)",
    topics: [
      {
        label: "GraphQL Ecosystem Tools",
        topic:
          "Explore GraphQL Codegen, Mesh, Yoga, Hasura, GraphCMS, and combining REST and GraphQL in hybrid APIs",
      },
    ],
  },
  {
    title: "🎓 Project Ideas (For Practice)",
    topics: [
      {
        label: "Blog API",
        topic: "Build a full CRUD API for authors and blog posts",
      },
      {
        label: "E-commerce API",
        topic:
          "Develop a GraphQL API for products, categories, cart, and orders",
      },
      {
        label: "Chat App",
        topic: "Create a real-time chat application using subscriptions",
      },
      {
        label: "User Dashboard",
        topic: "Build a role-based GraphQL API with authentication",
      },
      {
        label: "GraphQL + MongoDB App",
        topic:
          "Full-stack app using GraphQL with Apollo Server and Mongoose",
      },
    ],
  },
];

const Curriculum = ({setIsRepoShow}) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">🧭 GraphQL Roadmap (Beginner to Advanced)</h1>
      {graphqlCurriculum.map((section, idx) => (
        <div className="roadmap-section" key={idx}>
          <button
            onClick={() => toggleSection(idx)}
            className="roadmap-toggle"
          >
            {section.title}
            <span className="arrow">{openSection === idx ? "▲" : "▼"}</span>
          </button>
          {openSection === idx && (
            <div className="roadmap-content">
              {section.topics.map((item, i) => (
                <div key={i} className="roadmap-item">
                  <h4 className="roadmap-item-title">📌 {item.label}</h4>
                  <p className="roadmap-item-description">{item.topic}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="center">
      <button className="home-cta" onClick={()=>setIsRepoShow(true)}>Go to Notes Downloader</button>
      </div>
    </div>
  );
};

export default Curriculum;
