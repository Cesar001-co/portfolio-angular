import { Routes } from '@angular/router';
import { MainComponent } from '../ui/pages/main/main.component';
import { MoreProjectsComponent } from '../ui/pages/more-projects/more-projects.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'more-projects', component: MoreProjectsComponent },
    { path: '**', redirectTo: '/home' }
];
