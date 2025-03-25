import { Routes } from '@angular/router';
import { MainComponent } from '../ui/pages/main/main.component';

export const routes: Routes = [
    // { path: '', component: MainComponent }
    {
        path: ':lang',
        children: [
            { path: 'home', component: MainComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' }
        ]
    },
    // {
    //     path: '**',
    //     redirectTo: '/en/home'
    // }
];
