import { Component, OnInit } from '@angular/core';
import { UserCrudService } from './../services/user-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  Motorbikes: any = [];

  constructor(
    private userCrudService: UserCrudService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.userCrudService.getMotorbikes().subscribe((response) => {
      this.Motorbikes = response;
    })
  }

  removeMotorbike(motorbike :any, i:number) {
    if (window.confirm('Are you sure')) {
      this.userCrudService.deleteMotorbike(motorbike.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('User deleted!')
        }
      )
    }
  }

}
