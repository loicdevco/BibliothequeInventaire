import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/LivreStephenKing.model';
import { LivreService } from '../service/SKService.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-simple-book',
  templateUrl: './simple-book.component.html',
  styleUrls: ['./simple-book.component.scss']
})
export class SimpleBookComponent implements OnInit {

  Livre$!: Observable<Livre>;

  buttonText!: string;

  constructor(private LivreService: LivreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = "😊 lu 😊";
    const livreId = +this.route.snapshot.params['id'];
    this.Livre$ = this.LivreService.getLivreById(livreId);
  }

  onAddRead(livreId: number) {
    if (this.buttonText === "😊 lu 😊") {
      this.Livre$ = this.LivreService.livreLuById(livreId, 'read').pipe(
        tap(() => this.buttonText = '😈 pas lu 😈')
      )
        ;

    } else {
      this.Livre$ = this.LivreService.livreLuById(livreId, 'unread').pipe(
        tap(() => this.buttonText = '😊 lu 😊')
      )
    }
  }

}
