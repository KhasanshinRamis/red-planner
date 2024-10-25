import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @MinLength(6, {
    message: 'Password must be at least 6 characters long'
  })
  password: string
}
