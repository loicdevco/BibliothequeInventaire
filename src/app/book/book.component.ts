import { Component, OnInit, Input } from '@angular/core';
import { LivreService } from '../service/SKService.service';
import { Livre } from '../models/LivreStephenKing.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() livre!: Livre;

  buttonText!: string;

  constructor(private LivreService: LivreService,
    private router: Router) { }

  ngOnInit() {
    this.buttonText = "😊 lu 😊";
  }

  onAddLike() {
    if (this.buttonText === "😊 lu 😊") {
      this.LivreService.livreLuById(this.livre.id, 'read');
      this.buttonText = "😈 pas lu 😈";
    } else {
      this.LivreService.livreLuById(this.livre.id, 'unread');
      this.buttonText = "😊 lu 😊";
    }
  }

  onViewImage() {
    this.router.navigateByUrl(`bibliographie/${this.livre.id}`);
  }
}
