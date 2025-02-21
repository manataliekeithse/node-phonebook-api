import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// this is the config object for generating swagger documentation
const swaggerOptions = {
  swaggerDefinition: {
    // this openapi detail comes from the swaggerJsDoc npm documentation.
    openapi: "3.0.0",
    // holds detail or metadata about the api
    info: {
      title: "Contacts API",
      version: "1.0.0",
      description: "API documentation for managing contacts and users",
    },
    // these are the URLs where the APIs will be served.
    servers: [
      {
        url: ["http:localhost:4000"],
      },
      {
        url: ["https://node-contacts-api.onrender.com"],
      },
    ],
    // this is where we declare schemas
    components: {
      schemas: {
        Contact: {
          type: "object",
          required: ["name", "email", "phone"],
          // this is where we declare the schemas or the data types of the properties
          properties: {
            _id: {
              type: "string",
              description: "The auto-generated ID of the contact",
            },
            name: {
              type: "string",
              description: "The name of the contact",
            },
            email: {
              type: "string",
              description: "The email of the contact",
            },
            phone: {
              type: "string",
              description: "The phone number of the contact",
            },
          },
        },
        User: {
          type: "object",
          required: ["email", "password"],
          properties: {
            _id: {
              type: "string",
              description: "The auto-generated ID of the contact",
            },
            name: {
              type: "string",
              description: "The name of the contact",
            },
            email: {
              type: "string",
              description: "The email of the contact",
            },
            phone: {
              type: "string",
              description: "The phone number of the contact",
            },
          },
        },
      },
    },
    // this is source path from where the schema and routes to be documented is coming from
  },
  apis: ["./routes/api*.js", "./models/*.js"],
};

// this variable holds the generated swagger documentation
// swaggerJsDoc -> responsible for creating the swagger documentation
const swaggerSpecs = swaggerJSDoc(swaggerOptions);

export { swaggerSpecs, swaggerUi };
