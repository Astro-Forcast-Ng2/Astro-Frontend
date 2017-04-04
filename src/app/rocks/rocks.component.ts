import { Component, OnInit } from '@angular/core';
import { RocksService } from '../rocks.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-rocks',
  templateUrl: './rocks.component.html',
  styleUrls: ['./rocks.component.css']
})
export class RocksComponent implements OnInit {

  posts: any = [];
  allPosts: any = [];

  constructor(private rocksService: RocksService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.rocksService.getAllPosts().subscribe(posts => {
      this.posts = posts.near_earth_objects['2017-04-04'];
      console.log(this.posts);
      const allPost = [];
      _.each(posts.near_earth_objects, function(value) {
        allPost.push(value);
      });
      this.allPosts = _.sortBy(_.flatten(allPost), [function(o) { return o.close_approach_data[0].epoch_date_close_approach; }]);
      console.log(this.allPosts);
    });
  }

}
