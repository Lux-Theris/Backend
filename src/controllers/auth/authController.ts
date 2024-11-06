import { FastifyReply, FastifyRequest } from "fastify";
import { loginValidation } from "./validations/authValidation";

class AuthController {
  async login(request: FastifyRequest, reply: FastifyReply) {
    const res = await loginValidation(request);

    const result = await authService.login(res);

    return reply.code(200).send(result);
  }
}

export const authController = new AuthController();
