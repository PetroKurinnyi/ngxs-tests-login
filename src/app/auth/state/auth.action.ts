export class Login {
  static readonly type = '[auth] login';
  constructor(public payload: { email: string; password: string }) {}
}

export class LoginSuccess {
  static readonly type = '[auth] login success';
  constructor(public payload: { accessToken: string }) {}
}

export class LoginFail {
  static readonly type = '[auth] login fail';
  constructor(public payload: string) {}
}
