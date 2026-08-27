import {Component, OnInit} from '@angular/core';
import {Customer} from '../../customer';
import {FormsModule} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';

@Component({
  imports: [FormsModule],
  selector: 'app-customer-add',
  styleUrl: './customer-add.css',
  templateUrl: './customer-add.html',
})
export class CustomerAdd implements OnInit{
  id : number= 0;
  firstName : string='';
  lastName : string='';
  email: string='';

  constructor(private customerService : CustomerService) {

  }

  ngOnInit(): void {
  }

  addCustomer() {
    // Pasa null en lugar de 0 para que JPA/MySQL autogenere el ID
    let customer = new Customer(null, this.firstName, this.lastName, this.email);
    console.log(customer);

    this.customerService.createCustomer(customer).subscribe({
      next: (res) => console.log('Cliente guardado:', res),
      error: (err) => console.error('Error desde el servidor:', err)
    });
  }

}
