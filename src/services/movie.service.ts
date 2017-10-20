import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Movie } from "../models/movie";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class MovieService {
    private baseUrl: string;
    private moviesRoute: string;

    constructor(private http: Http) {
        this.baseUrl = "http://localhost:3000";
        this.moviesRoute = this.baseUrl + "/movies"
    }

    getAll(): Observable<Movie[]> {
        return this.http.get(this.moviesRoute)
            .map(res => {
                let result = res.json() as Movie[];
                return result;
            }, error => { console.warn(error); });
    }

    get(id: number) {
        return this.http.get(this.moviesRoute + "/" + id)
            .map(res => {
                let result = res.json() as Movie;
                return result;
            }, error => { console.warn(error); });
    }

    create(movie: Movie) {
        if (movie) {
            return this.http.post(this.moviesRoute, movie)
                .map(res => {
                    let result = res.json() as Movie;
                    return result;
                }, error => { console.warn(error); });
        }
        return Observable.of(null);
    }

    update(movie: Movie) {
        if (movie && movie.id) {
            return this.http.put(this.moviesRoute + "/" + movie.id, movie)
                .map(res => {
                    let result = res.json() as Movie;
                    return result;
                }, error => { console.warn(error); });
        }
        return Observable.of(null);
    }
    


}