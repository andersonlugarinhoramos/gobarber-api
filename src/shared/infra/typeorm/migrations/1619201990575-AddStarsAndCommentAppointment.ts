import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddStarsAndCommentAppointment1619201990575
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'stars',
        type: 'integer',
        default: '0',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'comments',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('appointments', 'stars');
    await queryRunner.dropColumn('appointments', 'comments');
  }
}
