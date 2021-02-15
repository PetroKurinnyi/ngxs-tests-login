import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export interface AppStateModel {
  status: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    status: '',
  },
})
@Injectable()
export class AppState {}
