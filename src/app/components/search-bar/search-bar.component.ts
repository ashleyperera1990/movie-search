import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchString = '';
  navbarOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  search() {
    this.toggleNavbar();
    this.router.navigate(['/search'], { queryParams: { search: this.searchString } });
  }

}
