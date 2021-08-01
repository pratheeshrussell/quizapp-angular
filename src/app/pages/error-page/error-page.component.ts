import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit, AfterViewInit {
  // https://codepen.io/saransh/pen/aezht
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  gotoHome(): void{
    this.router.navigate(['home']);
  }


}
