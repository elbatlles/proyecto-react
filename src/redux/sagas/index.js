import { all } from 'redux-saga/effects';
//import watchDemo from './watcher';
 import search from './search';
export default function* rootSaga() {
	yield all([
		search()
	]);

}
