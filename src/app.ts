import fastify from "fastify";
import { authPublicRoutes } from "./routes/auth/authPublicRoutes";

export const app = fastify();

app.addHook("preHandler", async (request) => {
  console.log(`[${request.method}] ${request.url}`);
});

app.register(authPublicRoutes);

// app.register(socialProjectsPrivateRoutes, {
//   prefix: "soialProjects",
// });

// app.register(socialProjectsPublicRoutes, {
//   prefix: "public",
// });

// app.addHook("onError", errorHandler);
