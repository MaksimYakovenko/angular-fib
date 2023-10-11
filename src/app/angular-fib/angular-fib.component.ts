import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-fib',
  templateUrl: './angular-fib.component.html',
  styleUrls: ['./angular-fib.component.css']
})
export class AngularFibComponent {
  n: number = 0;
  result: number = 0;

  calculate() {
    this.result = this.fibonacci(this.n);
  }

  fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  }
}
