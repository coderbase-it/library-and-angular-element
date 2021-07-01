import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';


@Component({
  selector: 'lib-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() dataRating!: number;
  @Output() renderChanges: EventEmitter<number> = new EventEmitter();
  @Output() mouseOverChanges: EventEmitter<number> = new EventEmitter();
  @Output() mouseLeaveChanges: EventEmitter<number> = new EventEmitter();

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
    ) { }

  ngOnInit(): void {
  }

  @HostListener('mouseover', ['$event'])
  mouseOver(e: any){
    // when mouse over star-filled class is add to li ( star element)
    const elRef =  this.elRef.nativeElement
    const li = elRef.querySelector('li')
    this.renderer.addClass(li, 'star-filled')

    const { rating } = e.target.dataset;

    if (rating){
      console.log(rating)
      this.mouseOverChanges.emit(rating)
    }

  }


  @HostListener('mouseleave', ['$event'])
  mouseLeave(e: any){
   // console.log('mouseleave')
     // when mouse leave  star-filled class is remove to li ( star element)
    const elRef =  this.elRef.nativeElement
    const li = elRef.querySelector('li')
    this.renderer.removeClass(li, 'star-filled')
  }

  OnClick(e:any){
    let star = e.target ?? e;
    let { rating } = star.dataset;
    this.renderChanges.emit(rating)
  }



}
