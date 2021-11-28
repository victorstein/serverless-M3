import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthorizerService {
  getHello (): string {
    return 'Hello World!'
  }
}
