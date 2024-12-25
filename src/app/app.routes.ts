import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RevealComponent } from './reveal/reveal.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'reveal', component: RevealComponent },
];
