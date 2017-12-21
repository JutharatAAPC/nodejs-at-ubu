import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PigService } from '../services/pig.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Pig } from '../shared/models/pig.model';

@Component({
  selector: 'app-pigs',
  templateUrl: './pigs.component.html',
  styleUrls: ['./pigs.component.scss']
})
export class PigsComponent implements OnInit {

  pig = new Pig();
  pigs: Pig[] = [];
  isLoading = true;
  isEditing = false;

  addPigForm: FormGroup;
  name = new FormControl('', Validators.required);
  age = new FormControl('', Validators.required);
  weight = new FormControl('', Validators.required);

  constructor(private pigService: PigService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getPigs();
    this.addPigForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getPigs() {
    this.pigService.getPigs().subscribe(
      data => this.pigs = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addPig() {
    this.pigService.addPig(this.addPigForm.value).subscribe(
      res => {
        this.pigs.push(res);
        this.addPigForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(pig: Pig) {
    this.isEditing = true;
    this.pig = pig;
  }

  cancelEditing() {
    this.isEditing = false;
    this.pig = new Pig();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the pigs to reset the editing
    this.getPigs();
  }

  editPig(pig: Pig) {
    this.pigService.editPig(pig).subscribe(
      () => {
        this.isEditing = false;
        this.pig = pig;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deletePig(pig: Pig) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.pigService.deletePig(pig).subscribe(
        () => {
          const pos = this.pigs.map(elem => elem._id).indexOf(pig._id);
          this.pigs.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
