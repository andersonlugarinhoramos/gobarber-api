import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProviderSchedule1619196294160
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'provider_schedule',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider_id',
            type: 'uuid',
          },
          {
            name: 'day_availability',
            type: 'date',
          },
          {
            name: 'start_hour_availability',
            type: 'time',
          },
          {
            name: 'end_hour_availability',
            type: 'time',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'ProviderSchedule',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['provider_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('provider_schedule');
  }
}
