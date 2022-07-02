import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { TokenInterceptorService } from './token-interceptor.service';


export function MSALInstaceFactory(): IPublicClientApplication{
  return new PublicClientApplication({
   auth:{
    clientId: '685b25b0-95f0-4b8a-9529-b6f8bf80c9c0',
    redirectUri: 'http://localhost:4200',
    authority: 'https://login.microsoftonline.com/5f6761ee-f3c6-465c-8beb-8d22fd29f13e'


   }
  })
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MsalModule
  ],
  providers: [{
provide :MSAL_INSTANCE,
useFactory: MSALInstaceFactory
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
MsalService

],
  bootstrap: [AppComponent]
})
export class AppModule { }
