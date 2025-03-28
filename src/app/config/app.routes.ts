import { Routes } from '@angular/router';
import { MainComponent } from '../ui/pages/main/main.component';
import { MoreProyectsComponent } from '../ui/pages/more-proyects/more-proyects.component';

export const routes: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'more-projects', component: MoreProyectsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
