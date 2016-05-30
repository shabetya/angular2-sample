import { Component, OnInit } from '@angular/core';
import { NgForm, ControlGroup, Control, Validators }    from '@angular/common';
import { Router, OnActivate, RouteSegment } from '@angular/router-deprecated';

import { Departament } from '/app/home/departament';

import { DepartmentsService } from '/app/home/departments.service';
import { NameValidator } from '/app/edit/name.validator';

@Component({
  templateUrl: '/app/edit/edit.component.html',
  providers:[DepartmentsService],
  directives:[NameValidator]
})

export class EditComponent implements OnActivate{ 

	constructor(
		private departmentsService: DepartmentsService,
		private router: Router) { }

	onSubmit(){
		this.departmentsService.addDepartament(this.model, this.state)
			.then(resp =>
    	    	 	this.initForm();
    	    	 	this.goHome();)
	}

	validateNumber(c: Control) {
  		let number_REGEXP = new RegExp('^n_', 'i');
  		return number_REGEXP.test(c.value) ? null : {
    		validateNumber: {
      			valid: false
    		}
  		};
	}

	initForm(){
		this.state = "new";
		this.active=true;
		this.model = new Departament();
		if(this.id){
			this.state="modify";
			this.departmentsService.getDepartament(this.id)
			.then(resp =>
    	    	 	this.model = resp;)
		}
		// Model-driven approach 
		this.form = new ControlGroup({
      		name: new Control('', Validators.required),
     		number: new Control('', Validators.compose([this.validateNumber]))
    	});
	}

	routerOnActivate(curr: RouteSegment): void {
    	this.id = curr.params.id;
    	this.initForm();
  	}

	goHome(){
		this.router.navigate(['Home']);
	}

}