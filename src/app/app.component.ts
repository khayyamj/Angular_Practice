import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results: String;
  public activityStream$: Observable<any>;
  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    console.log('STARTED------>');
    this.searchWikipedia('terminator');
    this.codeOnPage();
    // this.http.get().subscribe(
    //   data => {
    //     this.results = JSON.stringify(data);
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  }

  codeOnPage(): void {
    const textbox = document.getElementById('textbox');
    // textbox.addEventListener('keypress', e => console.log(e.keyCode));
    const keypresses = Observable.fromEvent(textbox, 'keypress');

    keypresses.forEach(e => console.log(e));
  }

  searchWikipedia(term):void {
    const foo = (data) => data;
    let url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${encodeURIComponent(term)}&callback=foo`;

    console.log('url = ', url);
    this.http.get(url).subscribe(data => console.log(data));
  }
}
