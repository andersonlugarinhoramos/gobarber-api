import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddUserFieldProvider1619200662587
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'provider',
        type: 'boolean',
        isNullable: true,
        default: 'false',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('users', 'provider');
  }
}
