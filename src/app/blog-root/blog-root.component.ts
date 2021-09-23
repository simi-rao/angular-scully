import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-root',
  templateUrl: './blog-root.component.html',
  styleUrls: ['./blog-root.component.scss']
})
export class BlogRootComponent implements OnInit {
  posts$!: Observable<ScullyRoute[]>;

  constructor(public scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.posts$ = this.scully.available$.pipe(
      map(routeList => {
        return routeList.filter((route: ScullyRoute) =>{
          console.log(route.route);
          return route.route.startsWith(`/blog/`)
        }    
        );
      })
    );
  }

}
