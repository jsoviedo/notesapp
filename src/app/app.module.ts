import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { DogComponent } from './components/dog/dog.component';
import { CatComponent } from './components/cat/cat.component';
import { BirdComponent } from './components/bird/bird.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoteComponent } from './components/note/note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DogComponent,
    CatComponent,
    BirdComponent,
    FooterComponent,
    NoteComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
