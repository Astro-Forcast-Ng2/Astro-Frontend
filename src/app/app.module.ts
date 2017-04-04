import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RocksService } from './rocks.service';

import { AppComponent } from './app.component';
import { RocksComponent } from './rocks/rocks.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: RocksComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RocksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app

  ],
  providers: [RocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

