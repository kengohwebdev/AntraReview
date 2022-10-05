import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  _control = this.fb.control('', Validators.required)
  _group = this.fb.group({
    username: this.fb.control('', Validators.required),
    name: this.fb.control('', Validators.required),
  }) //new formControl({})

  _array = this.fb.array([
    this.fb.control('', Validators.required),
    this.fb.control('', Validators.required),

  ]) //new formArray([])

  _arrayWithGroup = this.fb.array([
    this.fb.group({
      name: this.fb.control(''),
      username: this.fb.control('',Validators.required)
    }),
    this.fb.group({
      name: this.fb.control('',Validators.required),
      username: this.fb.control('',Validators.required)
    }),
  ])

  GetValue() {
    console.log(this._array.value)
    console.log(this._array.valid)
    console.log(this._arrayWithGroup.value)
    console.log(this._arrayWithGroup.valid)
  }

  SetValue() {
    this._control.setValue('Ken')
    this._group.setValue({ name: 'Ken', username: "KenG" })
    this._array.setValue(["K", "L"])
    this._arrayWithGroup.setValue([{ name: 'Ken', username: "KenG" }, { name: 'Ken', username: "KenG" }])
  }


}
