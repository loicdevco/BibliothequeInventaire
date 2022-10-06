import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from '../models/LivreStephenKing.model';
import { LivreService } from '../service/SKService.service';


@Component({
  selector: 'app-bibliographie',
  templateUrl: './bibliographie.component.html',
  styleUrls: ['./bibliographie.component.scss']
})
export class BibliographieComponent implements OnInit {

  Livre$!: Observable<Livre[]>

  constructor(private LivreService: LivreService) { }

  ngOnInit(): void {
    this.Livre$ = this.LivreService.getAllLivre();
  }

}
