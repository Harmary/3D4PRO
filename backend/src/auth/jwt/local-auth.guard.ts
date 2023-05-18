import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') { 
    handleRequest(err, user, info, context, status) {
        const request = context.switchToHttp().getRequest();
        const { login, password } = request.body;
        if (err || !user) {
            if (!login) {
                throw new HttpException({ message: 'Логин не может быть пуст' }, HttpStatus.OK);
            } else if (!password) {
                throw new HttpException({ message: 'Пароль не может быть пуст' }, HttpStatus.OK);
            } else {
                throw err || new UnauthorizedException();
            }
        }
        return user;
    }
}