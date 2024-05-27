import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
/* Enregistrer l'employé  */
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
    //  console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }
  /* Liste des l'employés dans la page employée  */
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  /* Enregistrer l'employé dans La ReactiveForm */
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
