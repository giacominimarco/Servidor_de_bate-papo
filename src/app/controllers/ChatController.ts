import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Chat from '../models/Chat';

class ChatController {

  async store(req: Request, res: Response) {
    const repository = getRepository(Chat)
    const { nickName, message } = req.body;

    console.log(nickName);
    // const useExistes = await repository.findOne({ where: {message} });

    const chat = repository.create({
      nickName,
      message
    });
    await repository.save(chat);
    console.log('cadastro realizado');

    return res.json(chat);
  }
}

export default new ChatController();
