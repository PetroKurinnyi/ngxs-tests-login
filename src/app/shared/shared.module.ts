import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../utils/material.module';

import * as fromComponent from './components';

@NgModule({
  declarations: [...fromComponent.components],
  imports: [CommonModule, MaterialModule],
  providers: [],
})
export class SharedModule {}
