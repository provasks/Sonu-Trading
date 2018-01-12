import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private admin: number;
  constructor(
    // private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.admin = +params['admin'];
    });
    // let link:any[] = ['/dashboard', this.admin];
    // this.router.navigate(link);
    // this.router.navigate('/dashboard/'+this.admin);
    // this.admin = +this.route.snapshot.paramMap.get('admin');
    // this.initialiseState();
  }
  // ngOnChanges(){
  //   debugger;
  //   this.admin = +this.route.snapshot.paramMap.get('admin');
  // }
}
