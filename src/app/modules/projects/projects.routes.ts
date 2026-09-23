import { Routes } from '@angular/router';


export const PROJECTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
    }
];