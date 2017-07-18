import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
btnStream$.subscribe(
	e => {
		console.log('clicked');
	},
	err => {
		console.log(err);
	},
	complete => {
		console.log('complete');
	}
);
