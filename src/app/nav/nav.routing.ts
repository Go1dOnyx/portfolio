import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
import { ContactComponent } from "./contact";
import { ProjectComponent } from "./projects";
import { ErrorComponent } from "./error";

const routes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectComponent},
    {path: 'contact', component: ContactComponent},

    //otherwise
    {path: '**', component: ErrorComponent}
];

export const navRoutes = RouterModule.forRoot(routes);