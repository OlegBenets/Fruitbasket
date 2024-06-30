import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitdataService } from '../fruitdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitdataService)

  addComment(comment:string, index:number) {
    this.fruitlistdata.addCommentToFruit(comment, index);
  }

  nameLog(name:string) {
    console.log(name);
  }
}
