/* eslint-disable class-methods-use-this */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

// eslint-disable-next-line import/prefer-default-export
export class createOrphanages1631046567289 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'address_id',
            type: 'int',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'key',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'nickname',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'about',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'instructions',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: false,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'orphanages',
      new TableForeignKey({
        columnNames: ['address_id'],
        referencedTableName: 'addresses',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }
}
