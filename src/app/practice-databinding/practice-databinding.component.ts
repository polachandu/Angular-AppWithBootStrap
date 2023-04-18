import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-databinding',
  templateUrl: './practice-databinding.component.html',
  styleUrls: ['./practice-databinding.component.css']
})
export class PracticeDatabindingComponent {

  userName = '';
  
  resetTheUserName(){
    this.userName = '';
  }
}
