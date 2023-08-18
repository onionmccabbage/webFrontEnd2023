import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { GetSwapiService } from '../get-swapi.service'
import { StatusObj } from '../models/statusObj';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [GetSwapiService]
})
export class ChildComponent implements OnInit {

  @Input() category: string = 'people'
  @Input() itemNum: number = 1
  @Output() SWAPI_EVENT = new EventEmitter<Object>()

  statusObj: StatusObj = new StatusObj('Received OK')
  swapiReport: any = {}
  filmDetails: any = {}

  doEmitEvent() {
    this.SWAPI_EVENT.emit(this.statusObj);
  }
  constructor(private getSwapiService: GetSwapiService) { }

  getSwapiData() {
    this.getSwapiService.getSwapiReport(this.category, this.itemNum)
      .subscribe(
        (swapiReport) => {
          console.log(this.category)
          this.swapiReport = swapiReport
          this.doEmitEvent()
        }, error => {
          this.statusObj.status = `Could not find item ${this.itemNum} in category ${this.category}`
          this.swapiReport = {}
          this.doEmitEvent()
        }
      )
  }

  getFilmDetails(paramFilmUrl:string) {
    console.log(paramFilmUrl)
    // event.preventDefault()
    this.getSwapiService.getRelatedFilmData(paramFilmUrl)
      .subscribe(
        (returnedFilmDetails) => {
          this.filmDetails = returnedFilmDetails
        }, error => {
          this.statusObj.status = `Could not find film at ${paramFilmUrl}`
        }
      )
  }

  ngOnInit() {
  }

}
