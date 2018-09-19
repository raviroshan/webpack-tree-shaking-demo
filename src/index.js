console.log('Welcome file - Index.js');

/**
 * Tree Shaking for Node Modules
 */

import axios from 'axios'; // CommonJS
console.log('axios: ', axios);
// import { map } from 'lodash-es'; // ESM
// console.log('map: ', map);

/**
 * Tree Shaking for Custom File
 */

import MyClass from './file1';
// const myClassObj = new MyClass();
// myClassObj.sayHello();
