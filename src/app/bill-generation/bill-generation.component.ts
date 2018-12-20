import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { AbstractControl, FormArray, FormBuilder, FormControl,
  FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-bill-generation',
 templateUrl: './bill-generation.component.html',
  styleUrls: ['./bill-generation.component.css']
})
export class BillGenerationComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // build the form model
    this.myForm = this.fb.group({
      items: this.fb.array(
        [this.buildItem('aaa'), this.buildItem('')],
        ItemsValidator.minQuantitySum(300)
    })
  }

  submit() {
    console.log("Reactive Form submitted: ", this.myForm)
  }

  buildItem(val: string) {
    return new FormGroup({
      name: new FormControl(val, Validators.required),
      quantity: new FormControl(100)
    })
  }
}

class ItemsValidator {

  static minQuantitySum(val: number) {
    return (c: AbstractControl) => {
      let sum = c.value
        .map(item => item.quantity)
        .reduce((acc, cur) => acc + cur, 0 );
      if (sum < val) {
        return { minSum: val }
      }
    })
  }
}
