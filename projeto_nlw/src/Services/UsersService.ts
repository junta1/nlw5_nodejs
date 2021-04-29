import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";

class UsersService{
  async create(email: string) {
    const usersRepository = getCustomRepository(UserRepository);
    
    //Verificar se usuário existe
    const usersExists = await usersRepository.findOne({
      email, 
    });
    
    // Se existir, retornar usuário
    if(usersExists){
      return usersExists;
    }

    const user = usersRepository.create({
      email,
    });
    
    await usersRepository.save(user);

    return user;
  }
}

export {UsersService};