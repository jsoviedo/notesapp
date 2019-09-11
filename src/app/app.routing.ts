import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { DogComponent } from './components/dog/dog.component';
import { CatComponent } from './components/cat/cat.component';
import { BirdComponent } from './components/bird/bird.component';
import { NoteComponent } from './components/note/note.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dogs', component: DogComponent },
    { path: 'cats', component: CatComponent },
    { path: 'birds', component: BirdComponent },
    { path: 'notes', component: NoteComponent },
    { path: '**', component: HomeComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);