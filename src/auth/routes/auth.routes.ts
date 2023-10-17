import { Router } from 'express'

import { validator } from '../../middlewares/validator.middleware'
import { registerDTO } from '../dto/user.dto'
import { AuthControllers } from '../controllers/auth.controllers'

class AuthRoutes extends AuthControllers {
    private router: Router

    constructor() {
        super()
        this.router = Router() as Router
    }

    main(): Router {
        this.router.post('/sign-up', [validator(registerDTO)], this.registerController)

        return this.router
    }
}

export default new AuthRoutes().main()