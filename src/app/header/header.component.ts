import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scrollCSSEnable: boolean = false;
  scrollCSSDisable: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 25) {
      this.scrollCSSDisable = false;
      this.scrollCSSEnable = true;
    } else {
      this.scrollCSSDisable = true;
      this.scrollCSSEnable = false;
    }
  }

  navigateToRestaurantsListPage(): void{
    this.router.navigate(['home']);
  }
}
