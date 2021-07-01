import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'lib-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @ViewChildren(StarComponent, { read: ElementRef })
  stars!: QueryList<ElementRef>;

  @Input("numberofstar") numberofstar = 1;
  arrayOfNumber: number[] = []

  constructor() { }

  ngOnInit(): void {
    console.log('Hello training')
    console.log(this.numberofstar)
    // array for ngFor
    for (let i= 0; i < +this.numberofstar  ; i++) {
      this.arrayOfNumber.push(i)
    }
    console.log(this.arrayOfNumber)

  }

  mouseOverChanges(rating: number){
    //console.log(rating)
        for (let index = 0; index < rating ; index++) {
      const starElement = this.stars.get(index)
      const star = starElement?.nativeElement.querySelector('li')
      star?.classList.add("star-filled")
    }
  }
  mouseLeaveChanges(rating: number){
    //console.log(rating)
      for (let index = rating; index < this.numberofstar; index++) {
      const starElement = this.stars.get(index)
      const star = starElement?.nativeElement.querySelector('li')
      star?.classList.remove("star-filled")
    }
  }




}
