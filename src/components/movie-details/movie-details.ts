import { Component, OnInit,Sanitizer } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../../models/movie";
import { MovieService } from "../../services/movie.service";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    selector:"movie-details",
    templateUrl:"./movie-details.html",
    styleUrls:["./movie-details.css"]
})

export class MovieDetailsComoponent implements OnInit {
    
    id:string;
    dvdNumber: number;
    genre: string;
    year: number;
    time: number;
    movieTitle: string;
    cast: string;
    coverUrl: string;
    trailerUrl: string;
  

    movie: Movie = Movie.empty()
    constructor(private activatedRoute: ActivatedRoute,
        private movieService: MovieService) {
         
        }
      ngOnInit() {
         
        this.id = this.activatedRoute.snapshot.params[ "id" ];
        this.movieService.get(this.id).subscribe(data => {
            this.movie = data; 
            this.movieTitle = data.movieTitle;
            this.cast = data.cast;
            this.coverUrl = data.coverUrl;
            this.dvdNumber = data.dvdNumber;
            this.time = data.time;
            this.year = data.year;
            this.trailerUrl = data.trailerUrl;
            this.genre = data.genre;
        });   
    }
      
};
