import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

export class chats1598983680181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'chats',
        columns: [
          {
            name: "id",
            type: "integer",
            isGenerated: true,
            generationStrategy: "increment",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "nickName",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "message",
            type: "varchar",
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chats');
  }
}
