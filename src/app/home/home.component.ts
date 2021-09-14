import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }

}
