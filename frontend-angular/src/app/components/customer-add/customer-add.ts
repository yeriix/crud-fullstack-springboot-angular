import {Component, OnInit} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-customer-add',
  styleUrl: './customer-add.css',
  templateUrl: './customer-add.html',
})
export class CustomerAdd implements OnInit{
  id : string='';
  firstName : string='';
  lastName : string='';
  email: string='';


  ngOnInit(): void {

    }
}
