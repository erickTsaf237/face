import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';
import { FaceSnapService } from '../services/face-snap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute){}
   faceSnap!: FaceSnap;


  butonText: string = 'oh snap'

  ngOnInit(): void {
    const faceSnapId = +this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapService.getOneFaceSnapById(faceSnapId)
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
