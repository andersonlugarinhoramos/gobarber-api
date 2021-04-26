import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddSuccessAppointment1619201381059
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'success',
        type: 'boolean',
        default: 'false',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('appointments', 'success');
  }
}
