import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formValue!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.setForm();
  }

  setForm(){
    this.formValue = this.formBuilder.group({
      // day1: ['0.00',[Validators.pattern('[a-z]')]],
      day1: ['0.00'],
      day2: ['0.00'],
      day3: ['0.00'],
      day4: ['0.00'],
      day5: ['0.00'],
      day6: ['0.00'],
      day7: ['0.00'],
      day8: ['0.00'],
      day9: ['0.00'],
      day10: ['0.00'],
      day11: ['0.00'],
      day12: ['0.00'],
      day13: ['0.00'],
      day14: ['0.00'],
      day15: ['0.00'],
      day16: ['0.00'],
      day17: ['0.00'],
      day18: ['0.00'],
      day19: ['0.00'],
      day20: ['0.00'],
      day21: ['0.00'],
      day22: ['0.00'],
      day23: ['0.00'],
      day24: ['0.00'],
      day25: ['0.00'],
      day26: ['0.00'],
      day27: ['0.00'],
      day28: ['0.00'],
      day29: ['0.00'],
      day30: ['0.00'],
      day31: ['0.00'],
      totalhours: ['0.00']
    });
    this.formValue.controls['totalhours'].disable();
  }


  calculateTotal() {
    let total = 0;

    let d1 = this.formValue.value.day1;
    let D1 = d1.split('.');
    let d2 = this.formValue.value.day2;
    let D2 = d2.split('.');
    let d3 = this.formValue.value.day3;
    let D3 = d3.split('.');
    let d4 = this.formValue.value.day4;
    let D4 = d4.split('.');
    let d5 = this.formValue.value.day5;
    let D5 = d5.split('.');
    let d6 = this.formValue.value.day6;
    let D6 = d6.split('.');
    let d7 = this.formValue.value.day7;
    let D7 = d7.split('.');
    let d8 = this.formValue.value.day8;
    let D8 = d8.split('.');
    let d9 = this.formValue.value.day9;
    let D9 = d9.split('.');
    let d10 = this.formValue.value.day10;
    let D10 = d10.split('.');
    let d11 = this.formValue.value.day11;
    let D11 = d11.split('.');
    let d12 = this.formValue.value.day12;
    let D12 = d12.split('.');
    let d13 = this.formValue.value.day13;
    let D13 = d13.split('.');
    let d14 = this.formValue.value.day14;
    let D14 = d14.split('.');
    let d15 = this.formValue.value.day15;
    let D15 = d15.split('.');
    let d16 = this.formValue.value.day16;
    let D16 = d16.split('.');
    let d17 = this.formValue.value.day17;
    let D17 = d17.split('.');
    let d18 = this.formValue.value.day18;
    let D18 = d18.split('.');
    let d19 = this.formValue.value.day19;
    let D19 = d19.split('.');
    let d20 = this.formValue.value.day20;
    let D20 = d20.split('.');
    let d21 = this.formValue.value.day21;
    let D21 = d21.split('.');
    let d22 = this.formValue.value.day22;
    let D22 = d22.split('.');
    let d23 = this.formValue.value.day23;
    let D23 = d23.split('.');
    let d24 = this.formValue.value.day24;
    let D24 = d24.split('.');
    let d25 = this.formValue.value.day25;
    let D25 = d25.split('.');
    let d26 = this.formValue.value.day26;
    let D26 = d26.split('.');
    let d27 = this.formValue.value.day27;
    let D27 = d27.split('.');
    let d28 = this.formValue.value.day28;
    let D28 = d28.split('.');
    let d29 = this.formValue.value.day29;
    let D29 = d29.split('.');
    let d30 = this.formValue.value.day30;
    let D30 = d30.split('.');
    let d31 = this.formValue.value.day31;
    let D31 = d31.split('.');

    let minit = (+D1[1]) + (+D2[1]) + (+D4[1]) + (+D5[1]) + (+D6[1]) + (+D7[1]) + (+D8[1]) + (+D9[1]) + (+D10[1]) + (+D11[1]) + (+D12[1]) + (+D13[1]) + (+D14[1]) + (+D15[1]) + (+D16[1]) + (+D17[1]) + (+D18[1]) + (+D19[1]) + (+D20[1]) + (+D21[1]) + (+D22[1]) + (+D23[1]) + (+D24[1]) + (+D25[1]) + (+D26[1]) + (+D27[1]) + (+D28[1]) + (+D29[1]) + (+D30[1]) + (+D31[1]);
    
    let hour = (+D1[0]) + (+D2[0]) + (+D4[0]) + (+D5[0]) + (+D6[0]) + (+D7[0]) + (+D8[0]) + (+D9[0]) + (+D10[0]) + (+D11[0]) + (+D12[0]) + (+D13[0]) + (+D14[0]) + (+D15[0]) + (+D16[0]) + (+D17[0]) + (+D18[0]) + (+D19[0]) + (+D20[0]) + (+D21[0]) + (+D22[0]) + (+D23[0]) + (+D24[0]) + (+D25[0]) + (+D26[0]) + (+D27[0]) + (+D28[0]) + (+D29[0]) + (+D30[0]) + (+D31[0]);


    let minitis = Math.floor(minit%60);
    let min = Math.floor(minit/60);

    let hours = hour + min;    

    this.formValue.controls['totalhours'].setValue(hours+"."+minitis);
  }


}