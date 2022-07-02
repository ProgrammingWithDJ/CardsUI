import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseUrl ='https://localhost:7045/api/cards'
  constructor(private http:HttpClient) { }

  getAllCards() :Observable<Card[]>
  {
 return this.http.get<Card[]>(this.baseUrl);
  }

  addCard(card: Card): Observable<Card>
  {
    card.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Card>(this.baseUrl,card);

  }

  updateCard(card: Card): Observable<Card>
  {

    return this.http.put<Card>(this.baseUrl + '/' + card.id,card);

  }

  deleteCard(id: string):Observable<Card>
  {
  return this.http.delete<Card>(this.baseUrl + '/' + id)
  }

  getCard(id: string):Observable<Card>
  {
    return this.http.get<Card>(this.baseUrl + '/' + id);
  }
}
