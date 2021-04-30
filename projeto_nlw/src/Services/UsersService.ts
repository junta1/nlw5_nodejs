import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UsersRepository";

class UsersService{

  private usersRepository: Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {
    //Verificar se usuário existe
    const usersExists = await this.usersRepository.findOne({
      email, 
    });
    
    // Se existir, retornar usuário
    if(usersExists){
      return usersExists;
    }

    const user = this.usersRepository.create({
      email,
    });
    
    await this.usersRepository.save(user);

    return user;
  }
}

export {UsersService};