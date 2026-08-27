import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from '../../customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  imports: [RouterLink],
  selector: 'app-customer-list',
  styleUrl: './customer-list.css',
  templateUrl: './customer-list.html',
})
export class CustomerList implements OnInit {

  customers = signal<Customer[]>([]);

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers() {
    this.customerService.getCustomerList().subscribe(
      data => {
        this.customers.set(data);
        console.log(this.customers());
      }
    );
  }
}
