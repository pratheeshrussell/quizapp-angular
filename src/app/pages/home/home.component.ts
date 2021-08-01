import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void {
    if (form.valid){
      this.router.navigate(['quiz'], {queryParams: {name: form.value.name}});
    }
  }

}
