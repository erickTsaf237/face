import { FaceSnapService } from './../services/face-snap.service';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  constructor(private faceSnapService: FaceSnapService, private router: Router){}
  @Input() faceSnap!: FaceSnap;


  butonText: string = 'oh snap'

  ngOnInit(): void {
  }

  onViewFaceSnap(){
      this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`,  )
  }

  onClickSnaps(){
    if( this.butonText === 'oh snap' ){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    }
    else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unSnap');
    }
    this.butonText = this.butonText=='oh snap'?'ohhh':'oh snap'
  }
}
