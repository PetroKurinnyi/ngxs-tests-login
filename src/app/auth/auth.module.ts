import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../utils/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import * as fromContainers from './containers';
import * as fromServices from './services';

import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state/auth.state';

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FlexLayoutModule, NgxsModule.forFeature([AuthState])],
  providers: [...fromServices.services],
})
export class AuthModule {}
