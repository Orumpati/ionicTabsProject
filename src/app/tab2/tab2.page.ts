import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private Routes:ActivatedRoute, private router: Router) {}
  ngOnInit() {
  }

  navigateToLoginPage(){
 this.router.navigate(['Tab3'])
  }
}
