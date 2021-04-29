import { Request, Response } from "express";
import { UsersService } from "../Services/UsersService";

class UsersController {
  async create (request: Request, response: Response){
    const { email } = request.body;
    console.log(request.body);undefined

    const userService = new UsersService();

    try {
      const user = await userService.create(email);

      return response.json(user);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export {UsersController};