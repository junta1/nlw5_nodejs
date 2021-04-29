import {getCustomRepository} from "typeorm";
import {SettingsRepository} from "../repositories/SettingsRepository";

interface ISettingsCreate{
  chat: boolean;
  username: string;
} 

class SettingsService {

  async create({chat, username}: ISettingsCreate) {

    const settingsRepository = getCustomRepository(SettingsRepository);
    
    const settings = settingsRepository.create({
      chat,
      username
    });

    const userAlreadyExists = await settingsRepository.findOne({
      username,
    });

    if(userAlreadyExists){
      throw new Error("User alredy exists!");
    }

    await settingsRepository.save(settings);

    return settings;
  }

}

export {SettingsService}