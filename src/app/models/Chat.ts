import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn
} from 'typeorm';

@Entity('chats')
class Chat {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  nickName: string;

  @Column()
  message: string;

  @CreateDateColumn({ name: 'created_at'})
  createdAt!: Date;

}

export default Chat;
