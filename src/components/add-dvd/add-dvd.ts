import { Component, Input, OnInit,ViewChild } from "@angular/core"
import { Router, ActivatedRoute} from "@angular/router"
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { MovieService } from "../../services/movie.service";
import { Movie } from "../../models/movie";

@Component({ 
    selector: "add-dvd",
    templateUrl: "./add-dvd.html",
    styleUrls: ['./add-dvd.css']
})


export class AddDvdComponent {
   
 
    constructor(private fb: FormBuilder,
        private movieService: MovieService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.params[ "id" ];
        if (id) {
            this.movieService.get(id).subscribe(data => {
                if (data) {
                    this.movie = data;
                    this.movieForm.setValue({dvdNumber: data.dvdNumber, movieTitle: data.movieTitle, year: data.year,
                        time: data.time, genre:data.genre, cover:data.coverUrl, trailerUrl: data.trailerUrl });

                }
            });
        } else {
            this.movie = Movie.empty();
        }
    }
    movieForm: FormGroup = this.fb.group({
        movieTitle: [ "", [ Validators.required ] ],
        dvdNumber: [ "", [ Validators.required ] ]
    });


    createMovie(e): void {

        this.movie.movieTitle = this.movieForm.value[ "movieTitle" ];
        this.movie.dvdNumber = this.movieForm.value[ "dvdNumber" ];
        console.log(this.movie);
        if (this.movie.id) {
            this.movieService.update(this.movie).subscribe(data => {
                if (data) {
                    this.router.navigate([ "add-dvd" ]);
                } else {
                    alert("something went wrong");
                }
            });
        } else {
            this.movieService.create(this.movie).subscribe(data => {
                if (data) {
                    this.router.navigate([ "add-dvd" ]);
                } else {
                    alert("something went wrong");
                }
            });
        }
    }
    @Input()  movie: Movie = Movie.empty();

}