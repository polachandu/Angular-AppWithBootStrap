import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-directives',
  templateUrl: './practice-directives.component.html',
  styleUrls: ['./practice-directives.component.css']
})
export class PracticeDirectivesComponent {
    showSecret= false;
    log=[];

  onToggle(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }  
  getColor(){
    
    return this.log.length >= 5 ? 'blue' : 'red';
  }
}
