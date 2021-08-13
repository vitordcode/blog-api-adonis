import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import authConfig from 'Config/auth'

export default class Acl {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    allowedRoles: string[]
  ) {
    const user = await auth.authenticate()

    if (!allowedRoles.includes(user.role)) {
      return response.unauthorized({ error: { message: 'access denied' } })
    }

    await next()
  }
}
