import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "NEWS POST API",
    description: "This is api documentation for my new posts service",
  },
  host: "localhost:3000",
  schemes: ["http"],
};
const outputFile = "../swagger-output.json";
const endpointsFiles = ["./server.ts"];
swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
  await import("./server.ts");
});
