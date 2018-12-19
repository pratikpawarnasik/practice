import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  commentArray: any;
  newComment: any = '';
  tempArray: any;
  ngOnInit() {
    this.commentArray = [
      { 'commentTitle': 'this is first comment', 'like_cnt': 5, 'dislike_cnt': 5, 'islike': 0, 'isDislike': 0 },
      { 'commentTitle': 'comment two', 'like_cnt': 8, 'dislike_cnt': 9, 'islike': 0, 'isDislike': 0}
    ];
    console.log(this.commentArray);
  }
  addComment() {
    if (this.newComment.length === 0 ) {
      alert('Please insert any character');
      return false;
    }

    const temp = { 'commentTitle': this.newComment, 'like_cnt': 0, 'dislike_cnt': 0, 'islike': 0, 'isDislike': 0 };
    this.commentArray.push(temp);
    this.newComment = '';
  }
  addLike(i) {
    if (this.commentArray[i].islike === 0) {
      this.commentArray[i].like_cnt = this.commentArray[i].like_cnt + 1;
      this.commentArray[i].islike = 1;
      if (this.commentArray[i].isDislike === 1) {
        this.commentArray[i].dislike_cnt = this.commentArray[i].dislike_cnt - 1;
        this.commentArray[i].isDislike = 0;
      }
    } else {
      this.commentArray[i].like_cnt = this.commentArray[i].like_cnt - 1;
      this.commentArray[i].islike = 0;
    }
  }
  addDisLike(i) {
    if (this.commentArray[i].isDislike === 0) {
      this.commentArray[i].dislike_cnt = this.commentArray[i].dislike_cnt + 1;
      this.commentArray[i].isDislike = 1;
      if (this.commentArray[i].islike === 1) {
        this.commentArray[i].like_cnt = this.commentArray[i].like_cnt - 1;
        this.commentArray[i].islike = 0;
      }
    } else {
      this.commentArray[i].dislike_cnt = this.commentArray[i].dislike_cnt - 1;
      this.commentArray[i].isDislike = 0;
    }
  }
}
