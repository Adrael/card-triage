import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card, Cards, CardStatusChange } from '@card-triage/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class CardsRepository {
    constructor(private readonly _httpClient: HttpClient) {}

    public fetchCards(): Observable<Cards> {
        return this._httpClient.get<Cards>('/api/cards');
    }

    public fetchFilteredCards(query: string): Observable<Cards> {
        const httpParams = new HttpParams().append('query', query);
        return this._httpClient.get<Cards>('/api/cards', { params: httpParams });
    }

    public changeCardStatus({ card, status }: CardStatusChange): Observable<Card> {
        return this._httpClient.put<Card>(`/api/cards/${card.id}/status/${status}`, {});
    }
}
