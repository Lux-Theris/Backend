import bcrypt from "bcrypt";
import { DataSource } from "typeorm";
import { User } from "../entities/User";

export async function createUser(appDataSource: DataSource) {
  const userData = new User();

  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash("Pecege@1", salt);

  userData.uid = "af702b78-db96-40a3-a659-fdc43be2d257";
  userData.full_name = "admin";
  userData.email = "admin@teste.com";
  userData.document = "12312312312";
  userData.password = hashed_password;
  userData.created_at = new Date();

  const userExist = await appDataSource.manager.findBy(User, {
    uid: userData.uid,
  });

  if (userExist.length === 0) {
    await appDataSource.manager.save(userData);

    console.log("create user with success!");
  }
}
