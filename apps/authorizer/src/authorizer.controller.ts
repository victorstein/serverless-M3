import { Controller, Get } from '@nestjs/common'
import { AuthorizerService } from './authorizer.service'

@Controller()
export class AuthorizerController {
  constructor (private readonly authorizerService: AuthorizerService) {}

  @Get()
  getHello (): string {
    return this.authorizerService.getHello()
  }
}
