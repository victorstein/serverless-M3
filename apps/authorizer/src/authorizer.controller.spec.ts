import { Test, TestingModule } from '@nestjs/testing'
import { AuthorizerController } from './authorizer.controller'
import { AuthorizerService } from './authorizer.service'

describe('AuthorizerController', () => {
  let authorizerController: AuthorizerController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthorizerController],
      providers: [AuthorizerService]
    }).compile()

    authorizerController = app.get<AuthorizerController>(AuthorizerController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(authorizerController.getHello()).toBe('Hello World!')
    })
  })
})
