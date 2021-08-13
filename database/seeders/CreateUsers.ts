import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Vitor de Paula',
        email: 'admin@admin.com',
        password: '27081998',
        role: 'admin'
      },
      {
        name: 'Josiane Lopes',
        email: 'normal@gmail.com',
        password: '27081998',
        role: 'normal'
      }
    ])
  }
}
