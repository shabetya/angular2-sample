import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { DepartmentsService } from '/app/home/departments.service';

@Component({
  template: `
	<h3>All Departments</h3>
	<table class="table table-striped table-bordered">
		<thead>
			<tr>
				<th>Number</th>
				<th>Name</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="let dep of departments">
				<td>{{dep.deptNo}}</td>
				<td>{{dep.deptName}}</td>
				<td>
					<button class='btn btn-default' (click)='removeDep(dep.deptNo)'>Remove</button>
					<button class='btn btn-default' (click)='modifyDep(dep.deptNo)'>Edit</button>
				</td>
			</tr>
		</tbody>
	</table>

	<button class='btn btn-default' (click)='addNewDep()'>Add new department</button>
  `,
  providers:[DepartmentsService]
})

export class HomeComponent implements OnInit{ 

	constructor(
		private departmentsService: DepartmentsService,
		private router: Router) { }

	ngOnInit() {
    	this.initPage();
	}

	initPage(){
		this.departmentsService.getDepartaments()
    	    .then(departments =>
    	    	 this.departments = departments);
	}

	addNewDep(){
		this.router.navigate(['Edit']);
	}

	removeDep(id){
		this.departmentsService.removeDepartament(id)
    	    .then(resp =>
    	    	 this.initPage());
	}

	modifyDep(id){
		let link = ['Edit', { id: id }];
		this.router.navigate(link);
	}

}