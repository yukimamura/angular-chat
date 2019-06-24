import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
// import { FormsModule } from '@angular/forms';
import { TimelineModule } from './timeline/timeline.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HogehogeComponent } from './hogehoge/hogehoge.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SignUpComponent,
    LoginComponent,
    HogehogeComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    TimelineModule,
//    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
