import {Component, OnInit } from "@angular/core";
import {Movie} from "../../models/movie";
import {Router} from "@angular/router";
import {MovieService} from "../../services/movie.service"
@Component({
    selector:"movie-libary",
    templateUrl:"./movie-libary.html",
    styleUrls:["./movie-libary.css"]
})


export class MovieLibaryComponent implements OnInit{
    movieList: Movie[];

    constructor(private router: Router, private movieService: MovieService){
        
    }
    ngOnInit() {
        this.movieService.getAll().subscribe(data=>{
            console.log(data);
            this.movieList = data;
        });
    }
}

    
