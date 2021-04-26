import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddConfirmationAppointment1619201305353
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'confirmation',
        type: 'boolean',
        default: 'false',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('appointments', 'confirmation');
  }
}
