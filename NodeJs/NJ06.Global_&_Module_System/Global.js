/**
 *
 * Title : Global Object
 * Description : Let's learn about Global Object
 * Author : Md Jaber Hossain Chowdhury
 * Date : 1 june 2023
 *
 **/

/*
Web browses have DOM Object
Document Object Model
example : document.querySelectorAll()


Browser's also have BOM Object
Browser Object Model
example : local Storage 
*/

/*
Node js have global Object
*/

console.log(global);
console.log(module);
/*
Module {                                                     
  id: '.',
  path: '/data/data/com.termux/files/home/code/javascript/NodeJs/NJ06.Global_&_Module_System',
  exports: {},                                               
  filename: '/data/data/com.termux/files/home/code/javascript/NodeJs/NJ06.Global_&_Module_System/Global.js',
  loaded: false,                                             
  children: [],
  paths: [
    '/data/data/com.termux/files/home/code/javascript/NodeJs/NJ06.Global_&_Module_System/node_modules',
    '/data/data/com.termux/files/home/code/javascript/NodeJs/node_modules',
    '/data/data/com.termux/files/home/code/javascript/node_modules',
    '/data/data/com.termux/files/home/code/node_modules',      
    '/data/data/com.termux/files/home/node_modules',
    '/data/data/com.termux/files/node_modules',
    '/data/data/com.termux/node_modules',
    '/data/data/node_modules',
    '/data/node_modules',
    '/node_modules'
  ]
}
*/

console.log(__dirname);
console.log(__filename);
