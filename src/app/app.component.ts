import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private msalService: MsalService) {


  }

isLoggedIn(): boolean {

 if(this.msalService.instance.getActiveAccount() != null)
 {
   return true;
 }
 else
 {
   return false;
 }
}

  login(){
  this.msalService.loginPopup().subscribe(

   (response: AuthenticationResult) => {
     this.msalService.instance.setActiveAccount(response.account)
   }

   );
  }



  loginOut(){
   this.msalService.logout();
  }

 ngOnInit(): void {
 }

}
