import { app } from "./app";
import { appDataSource } from "./database/dataSource";
import { createUser } from "./database/seeds/createUser";
import { env } from "./env";

export async function initServer() {
  try {
    const dataSource = await appDataSource.initialize();

    await app.listen({ port: env.PORT });

    await createUser(dataSource);

    console.log(
      `Iniciado o banco de dados na seguinte página http://localhost:${env.PORT}`
    );
  } catch (error) {
    app.log.error("error:", error);
    process.exit(1);
  }
}

initServer();
