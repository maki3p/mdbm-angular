import {Routes } from "@angular/router"
import {AddDvdComponent,WelcomeComponent,MovieLibaryComponent} from "../components";


export const routes: Routes = [
    
    {
        path: 'add-dvd', 
        component: AddDvdComponent
    },
    {
        path:"movie-libary",
        component:MovieLibaryComponent
    },
    {
        path: 'add-dvd/:id', 
        component: AddDvdComponent
    },
    {
        path:"**",
        component:WelcomeComponent
    }

]