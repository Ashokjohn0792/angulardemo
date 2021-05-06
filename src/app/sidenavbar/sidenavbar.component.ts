
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

  constructor(private router:Router, private activated:ActivatedRoute) { 
    console.log('Sidenavbar component');
  }

  ngOnInit(): void {
    console.log(this.router);
    console.log(this.activated);
  }
}
