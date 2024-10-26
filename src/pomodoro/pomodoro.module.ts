import { Module } from '@nestjs/common'
import { PomodoroService } from './pomodoro.service'
import { PomodoroController } from './pomodoro.conroller'
import { PrismaService } from 'src/prisma.service'
import { UserModule } from 'src/user/user.module'

@Module({
    imports: [UserModule], // add UserModule here
    controllers: [PomodoroController],
    providers: [PomodoroService, PrismaService],
    exports: [PomodoroService]
})
export class PomodoroModule {}
