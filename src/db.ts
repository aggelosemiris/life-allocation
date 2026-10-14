import {openDB} from 'idb';
import type {State} from './model';
const db=openDB('life-allocation',1,{upgrade(db){db.createObjectStore('app');}});
export async function load():Promise<State|undefined>{return (await db).get('app','state');}
export async function save(s:State){await (await db).put('app',s,'state');}
