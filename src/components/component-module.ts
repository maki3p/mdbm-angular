import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule,FormsModule, } from "@angular/forms"
import {AddDvdComponent} from "./add-dvd"
import { WelcomeComponent} from "./welcome"
import { MovieService } from "../services/movie.service";
@NgModule({
  declarations: [
  AddDvdComponent,
  WelcomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports: [
    AddDvdComponent
  ],
  providers: [MovieService],
})
export class ComponentModule { }