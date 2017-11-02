// function fn (x = 1, y = 2) {
//     console.log(x, y); // 11, 2
// };
// fn();

// {
//     var a = 0;
//     let b = 'bbb';
//     const c = 'ccc';
// }
// console.log(a);//0
// console.log(b);//报错
// console.log(c);//报错

// for (var a = 0; a < 9; a++) {
//     console.log(a);
// }
// console.log(a);//10

// var a = [];
// for (let i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// };
// a[9]();//9

// for (let i = 0; i < 5; i++) {
//     let i = 'a';
//     console.log(i);//全是a
// }

// var i = 0;
// var flag = true;
// if (flag) {
//     let i = 0;
//     const i = {};
//     console.log(i);//报错
// };
// console.log(i);//0

// function fn (arg) {
//     let arg = 0;
//     console.log(arg);//0
// }
// fn();//undefined

// function fn (fag) {
//     {
//         let fag = 0;
//         console.log(fag);//0
//     }
//     console.log(fag);//undefined
// }
// fn();

// var i = 'hello';
// for (var i = 0; i < i.length; i++) {
//     console.log(i);
// }
// console.log(i);

// {
//     let a = 0;
//     {
//         let a = 1;
//         console.log(a);
//     }
//     console.log(a);
// }

// function fn() {
//     console.log(a);
// };

// try {
//     fn();
// } catch (e) {
//     console.log(e);
// }

// let [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(b);
// console.log(c);

// let f = function () {
//     console.log('outside');
// };
// f();
// {
//     let f = function () {
//         console.log('inside');
//     };
//     f();
// };

// let x = do {
//     let t = f();
//     t * t + 1;
// };
// console.log(x);
// let [a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a, b, c, d);
// let [f] = null;
// // console.log(f);
// const obja = {
//     'id': 1,
//     'name': 1,
//     'age': 2,
//     ...[
//         {
//             'name1': 2
//         }
//     ]
// };
// console.log(typeof obja[0]);//object
// let arr = [1, 2, 3];
// let { 0: first, [arr.length - 1]: last } = arr;
// console.log(last);
// function fn () {
//     console.log(1);
//     return 1;
// };
// var a = fn();
// console.log(a);
// let {1 : flag} = [1, 2];
// console.log(flag);
let a = 1;
console.log(Window.a);