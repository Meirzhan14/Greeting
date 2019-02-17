import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NameService } from './name.service';
import { NameAddComponent } from './name-add/name-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NameAddComponent
  ],
  imports: [
    SlimLoadingBarModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ NameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
