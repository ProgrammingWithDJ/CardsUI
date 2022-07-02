
import { Component, OnInit } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
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
  id:'',
  cardholderName:'',
  cardNumber: '',
  cvc: '',
  expiryMonth: '',
  expiryYear: ''
    }


    /**
     *
     */
    constructor(private cardService: CardsService) {

    }
    populateForm(card: Card)
    {
      this.card=card;
    }
    deleteCard(id: string){
     // console.log('Deleted Id ' +id);
     this.cardService.deleteCard(id)
     .subscribe(
       response =>{
         this.getAllCards();
       }
     )
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
    onUpdate(){
      console.log("udpated");
      this.cardService.updateCard(this.card)
     .subscribe(
       response => {

        this.getAllCards();
        this.card ={
          id:'',
  cardholderName:'',
  cardNumber: '',
  cvc: '',
  expiryMonth: '',
  expiryYear: ''

        }
       }
     );


    }
    onSubmit(){
     this.cardService.addCard(this.card)
     .subscribe(
       response => {

        this.getAllCards();
        this.card ={
          id:'',
  cardholderName:'',
  cardNumber: '',
  cvc: '',
  expiryMonth: '',
  expiryYear: ''

        }
       }
     );
    }
  }
