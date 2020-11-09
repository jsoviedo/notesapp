import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DogComponent } from './components/dog/dog.component';
import { CatComponent } from './components/cat/cat.component';
import { BirdComponent } from './components/bird/bird.component';
import { NoteComponent } from './components/note/note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';



const appRoutes: Routes = [
    { path: '', component: NoteComponent },
    { path: 'dogs', component: DogComponent },
    { path: 'cats', component: CatComponent },
    { path: 'birds', component: BirdComponent },
    { path: 'notes', component: NoteComponent },
    { path: 'list', component: NotesListComponent },
    { path: '**', component: HomeComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);