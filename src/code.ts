import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/share';
import { merge } from 'rxjs/observable/merge'
import { from } from 'rxjs/Observable/from'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/pluck'

// pluck
from([
  { first: 'Gary', last: 'Simon', age: '34'},
  { first: 'Jane', last: 'Simon', age: '34'},
  { first: 'John', last: 'Simon', age: '34'},
]).pluck('first')
.subscribe((x:any) => addItem(x))



// map
// Observable.create((observer:any) => {
//   observer.next('Hey guys!')
// }).map((val:any) => val.toUpperCase())
// .subscribe((x:any) => addItem(x))

// const subject = new BehaviorSubject('First')
// const subject = new Subject()
// const subject = new ReplaySubject(30, 500)
// const subject = new AsyncSubject

// const observable = Observable.create((observer:any) => {
//   observer.next('Hey guys!')
// })

// const observable2 = Observable.create((observer:any) => {
//   observer.next('How is it going')
// })

// const newObjs = merge(observable, observable2)

// newObjs.subscribe((x:any) => addItem(x))

// const observer1 = subject.subscribe(
//   data => addItem('Observer 1: ' + data),
//   err => addItem(err),
//   () => addItem('Observer 1 completed')
// )
// let i = 1;
// let int = setInterval(() => subject.next(i++), 100)
// setTimeout(() => {
//   const observer2 = subject.subscribe(
//     data => addItem('Observer 2: ' + data)
//   )
//   subject.complete()
// }, 500);

// subject.next('The second thing has been sent');
// subject.next('A third thing has been sent');

// observer2.unsubscribe();

// subject.next('A final thing has been sent');


// const observable = fromEvent(document, 'mousemove')
// setTimeout(() => {
//   const subscription = observable.subscribe(
//     (x:any) => addItem(x)
//   )
// }, 2000)

// const observable = Observable.create((observer: any) => {
//   try {
//     // cold observer - data is produced inside the Observable, data 한 번 만들고 끝나는 observable
//     observer.next('Hey guys!')
//     observer.next('How are you?')
//     // hot observer - data is produced outside the Observable, data 계속 생성하는 observable
//     setInterval(() => {
//       observer.next('I am good')
//     }, 2000)
//   } catch(err) {
//     observer.error(err)
//   }
// }).share();

// const observer = observable.subscribe(
//   (x: any) => addItem(x),
//   (error: any) => addItem(error),
//   () => addItem('Completed')
// );

// setTimeout(() => {
//   const observer2 = observable.subscribe(
//     (x:any) => addItem('Subscriber 2: ' + x)
//   ) 
// }, 1000);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}