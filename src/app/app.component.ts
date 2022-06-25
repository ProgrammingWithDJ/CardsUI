import { Component, OnInit } from '@angular/core';
import { CardsService } from './services/cards.service';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getAllCards();
}
  title = 'cards';
  cards: Card[] =[];
  card: Card = {
Id:'',
cardholderName:'',
cardNumber: '',
CVC: '',
expiryMonth: '',
expiryYear: ''
  }


  /**
   *
   */
  constructor(private cardService: CardsService) {

  }

  getAllCards()
  {
this.cardService.getAllCards()
.subscribe(
response =>{
  this.cards =response;

console.log(response);
}
);
  }

  onSubmit(){
   this.cardService.addCard(this.card)
   .subscribe(
     response => {

      this.getAllCards();
      this.card ={
        Id:'',
cardholderName:'',
cardNumber: '',
CVC: '',
expiryMonth: '',
expiryYear: ''

      }
     }
   );
  }
}
