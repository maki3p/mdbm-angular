import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../../models/movie";
import { MovieService } from "../../services/movie.service";

@Component({
    selector:"movie-details",
    templateUrl:"./movie-details.html"
})

export class MovieDetailsComoponent implements OnInit{
    movieList : Movie[]
    id: string
    movieTitle: string
    
    movie: Movie = Movie.empty()
    constructor(private activatedRoute: ActivatedRoute,
        private movieService: MovieService) {

        }
      ngOnInit() {
         
        this.id = this.activatedRoute.snapshot.params[ "id" ];
        this.movieService.get(this.id).subscribe(data => {
            this.movie = data; 
            this.movie.time
            
        });
      
        
      

    }
}
