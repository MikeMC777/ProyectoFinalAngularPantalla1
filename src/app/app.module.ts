import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistropadreComponent } from './registropadre/registropadre.component';
import { MenuComponent } from './menu/menu.component';

import {FormsModule} from '@angular/forms'

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { CrudserviceService} from '../app/service/crudservice.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistropadreComponent,
    MenuComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [CrudserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
