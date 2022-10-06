import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Livre } from "../models/LivreStephenKing.model";
import { map, Observable, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LivreService {

    constructor(private http: HttpClient) { }

    Livre: Livre[] = [];

    getAllLivre(): Observable<Livre[]> {
        return this.http.get<Livre[]>('http://localhost:3000/livres');
    }

    getLivreById(livreId: number): Observable<Livre> {
        return this.http.get<Livre>(`http://localhost:3000/livres/${livreId}`)

    }

    livreLuById(LivreId: number, readType: 'read' | 'unread'): Observable<Livre> {
        return this.getLivreById(LivreId).pipe(
            map(Livres => ({
                ...Livres,
                like: Livres.lu + (readType === 'read' ? 1 : -1)
            })),
            switchMap(updateLivre => this.http.put<Livre>(`http://localhost:3000/livres/${LivreId}`, updateLivre))
        )
    }

    addLivreStephenKing(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<Livre> {
        return this.getAllLivre().pipe(
            map(livre => [...livre].sort((a: Livre, b: Livre) => a.id - b.id)),
            map(sortedLivre => sortedLivre[sortedLivre.length - 1]),
            map(previousLivre => ({
                ...formValue,
                like: 0,
                dateCreation: new Date(),
                id: previousLivre.id + 1
            })),
            switchMap(NewLivre => this.http.post<Livre>('http://localhost:3000/livres', NewLivre))
        );
    }
}