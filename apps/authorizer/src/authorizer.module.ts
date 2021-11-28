import { Module } from '@nestjs/common'
import { AuthorizerController } from './authorizer.controller'
import { AuthorizerService } from './authorizer.service'

@Module({
  imports: [],
  controllers: [AuthorizerController],
  providers: [AuthorizerService]
})
export class AuthorizerModule {}
