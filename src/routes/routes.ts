import {Routes } from "@angular/router"
import {AddDvdComponent,WelcomeComponent} from "../components";


export const routes: Routes = [
    
    {
        path: 'add-dvd', 
        component: AddDvdComponent
    },
    {
        path:"welcome",
        component:WelcomeComponent
    }

]