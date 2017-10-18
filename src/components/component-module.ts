import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import {AddDvdComponent} from "./add-dvd"

@NgModule({
  declarations: [
  AddDvdComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddDvdComponent
  ],
  providers: [],
})
export class ComponentModule { }