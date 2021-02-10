import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: []
})
export class MaterialModule {
  constructor() {
  }
}
