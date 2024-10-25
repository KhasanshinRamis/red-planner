import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import type { User } from 'prisma/generated/client'

export const CurentUser = createParamDecorator(
  (data: keyof User, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    const user = request.user

    return data ? user[data] : user
  }
)
