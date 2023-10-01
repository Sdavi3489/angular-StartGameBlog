import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  cardTitle:string = ""
  @Input()
  photoCover:string = ""
  @Input()
  description:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
