import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable, throwError } from 'rxjs';
import { AuthApiService } from '../services';
import { Login, LoginFail, LoginSuccess } from './auth.action';

import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/shared/services';

export interface AuthStateModel {
  email: string;
  status: 'untuched' | 'error' | 'confirmed' | 'loading';
  accessToken?: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    email: '',
    status: 'untuched',
  },
})
@Injectable()
export class AuthState {
  constructor(private authApiService: AuthApiService, private notificationService: NotificationService) {}

  @Selector()
  static getLoginStatus(state: AuthStateModel): string {
    return state.status;
  }

  @Action(Login)
  login({ patchState, dispatch }: StateContext<AuthStateModel>, { payload }: Login): Observable<any> {
    patchState({ email: payload.email, status: 'loading' });

    return this.authApiService.loginReq(payload).pipe(
      tap((res) => {
        dispatch(new LoginSuccess(res));
      }),
      catchError((error: any) => {
        dispatch(new LoginFail(error.error.message));
        return throwError(error);
      })
    );
  }

  @Action(LoginFail)
  loginFail({ patchState }: StateContext<AuthStateModel>, { payload }: LoginFail): void {
    this.notificationService.openSnackBar('error', 5, payload);
    patchState({ status: 'error' });
  }

  @Action(LoginSuccess)
  loginSuccess({ patchState }: StateContext<AuthStateModel>, { payload }: LoginSuccess): void {
    patchState({ status: 'confirmed', accessToken: payload.accessToken });
  }
}
