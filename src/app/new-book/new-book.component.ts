import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livre } from '../models/LivreStephenKing.model';
import { map, tap } from 'rxjs/operators';
import { LivreService } from '../service/SKService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  livreForm!: FormGroup;
  livreApercu$!: Observable<Livre>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private livreService: LivreService,
    private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    // test avec cette url : https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png
    this.livreForm = this.formBuilder.group({
      title: [null, Validators.required],
      resume: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      Parution: [null]
    }, {
      updateOn: 'blur'
    });
    this.livreApercu$ = this.livreForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        dateCreation: new Date(),
        id: 0,
        like: 0
      }))
    );
  }

  onSubmitForm(): void {
    this.livreService.addLivreStephenKing(this.livreForm.value).pipe(
      tap(() => this.router.navigateByUrl('/bibliographie'))
    ).subscribe();
  }
}
