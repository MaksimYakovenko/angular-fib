import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}


//   inputNumber: number;
//   result: any = null;
//
//   calculateFibonacci() {
//     if (this.inputNumber <= 0) {
//       this.result = null;
//     } else if (this.inputNumber === 1 || this.inputNumber === 2) {
//       this.result = 1;
//     } else {
//       let a = 1;
//       let b = 1;
//       for (let i = 3; i <= this.inputNumber; i++) {
//         const temp = a + b;
//         a = b;
//         b = temp;
//       }
//       this.result = b;
//     }
//   }

