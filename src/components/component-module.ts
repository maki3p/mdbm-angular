import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {ReactiveFormsModule,FormsModule, } from "@angular/forms"
import {AddDvdComponent} from "./add-dvd"
import { WelcomeComponent} from "./welcome"
import { MovieService } from "../services/movie.service";
import {MovieLibaryComponent} from "./movie-libary"
@NgModule({
  declarations: [
  AddDvdComponent,
  WelcomeComponent,
  MovieLibaryComponent
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