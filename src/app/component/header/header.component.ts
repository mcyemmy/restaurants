import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() hidenElement = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  gotToPreviousPage() {
    this.router.navigate(['/list'])
  }
}
