# Polyfill in JavaScript

🎯 𝐖𝐡𝐚𝐭 𝐢𝐬 𝐩𝐨𝐥𝐲𝐟𝐢𝐥𝐥 𝐢𝐧 𝐣𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭❓
𝑨 𝒑𝒐𝒍𝒚𝒇𝒊𝒍𝒍 𝒊𝒔 𝒂 𝒑𝒊𝒆𝒄𝒆 𝒐𝒇 𝒄𝒐𝒅𝒆(𝒖𝒔𝒖𝒂𝒍𝒍𝒚 𝑱𝒂𝒗𝒔𝒂𝒄𝒓𝒊𝒑𝒕 𝒐𝒏 𝒕𝒉𝒆 𝒘𝒆𝒃) 𝒖𝒔𝒆𝒕 𝒕𝒐 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒎𝒐𝒅𝒆𝒏 𝒇𝒖𝒏𝒄𝒕𝒊𝒐𝒏𝒂𝒍𝒊𝒕𝒚 𝒐𝒏 𝒕𝒉𝒆 𝒐𝒍𝒅𝒆𝒓 𝒃𝒓𝒐𝒘𝒔𝒆𝒓 𝒕𝒉𝒂𝒕 𝒅𝒐 𝒏𝒐𝒕 𝒏𝒂𝒕𝒊𝒗𝒆𝒍𝒚 𝒔𝒖𝒑𝒑𝒐𝒓𝒕.

### let's understand polyfll of belwo methods:
### Table of Contents

| No. | Questions                                                                                                                                                         |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [Polyfill of forEach](#polyfill-of-foreach)  |
| 2   | [Polyfill of map](#polyfill-of-map)   |
| 3   | [Polyfill of filter](#polyfill-of-filter)  |
| 4   | [Polyfill of reduce](#polyfill-of-reduce) | 
| 5   | [Polyfill of bind](#polyfill-of-bind)   
| 6   | [Polyfill of call](#polyfill-of-call)   
| 7   | [Polyfill of apply](#polyfill-of-apply) 
| 8   | [Polyfill of promise.all](#polyfill-of-promiseall) 
| 9   | [Polyfill of promise.any](#polyfill-of-promiseany) 
| 10   | [Polyfill of promise.race](#polyfill-of-promiserace) 
| 11   | [Polyfill of promise.finally](#polyfill-of-promisefinally) 
| 12   | [Polyfill of splice](#polyfill-of-splice)
| 13   | [Polyfill of getElementByClassName](#polyfill-of-getelementbyclassname)

1. ### Polyfill of forEach
```javascript
Array.prototype.myForEach = function(callback){
   for (var i = 0; i < this.length; i++) {
      callback(this[i], i, this);
   }   
}

const arrData = [0,1,2,3,4,5,6,7,8,9];

arrData.myForEach((element) => {
   console.log(element)
})
```

---

**[⬆ Back to Top](#table-of-contents)**

2. #### Polyfill of map
```javascript
let arr = [1,2,3];

Array.prototype.filter = null;
Array.prototype.customMap = function (callback) {
    let newArray = [];
    for(let i =0; i< this.length; i++) {
            newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

let result = arr.customMap((val,index, array) => val * 3)

console.log(result);
```
---
**[⬆ Back to Top](#table-of-contents)**

3. #### Polyfill of filter

```javascript
let const = [1,2,3,4,5];

Array.prototype.filter = null;
Array.prototype.customFilter = function (callback) {
    let newArray = [];
    for(let i =0; i< this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray;
}

const result = arr.customFilter((val,index, array) => val > 3)

console.log(result);
```
---
**[⬆ Back to Top](#table-of-contents)**


4. #### Polyfill of reduce
```javascript
Array.prototype.reduce = null;


Array.prototype.customReduce = function (callback, initialValue = null) {
  let accumlator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumlator = callback(accumlator, this[i], i, this);
  }
  return accumlator;
};

const sumOfArray1 = arr.customReduce(
  (prevValue, currentVlaue) => prevValue + currentVlaue
);
console.log(sumOfArray1);

```
---
**[⬆ Back to Top](#table-of-contents)**

5. #### Polyfill of bind
```javascript
```
---
**[⬆ Back to Top](#table-of-contents)**


6. #### Polyfill of call
```javascript
```
---
**[⬆ Back to Top](#table-of-contents)**

7. #### Polyfill of apply
```javascript
```
---
**[⬆ Back to Top](#table-of-contents)**

8. #### Polyfill of promise.all
```javascript
const login = new Promise((resolve, reject) => {
    resolve('login success')
})

const signup = new Promise((resolve, reject) => {
    resolve('signup success')
})


Promise.customPromiseAll =(arrayofPromise) => {
    return new Promise ((resolve, reject) => {
        const result = [];
        let counter = 0;
        for(let i= 0; i < arrayofPromise.length; i++){
           Promise.resolve(arrayofPromise[i]).then(data => {
               result[i] = data;
               counter++;
               if(counter === arrayofPromise.length) 
                   resolve(result)
           }).catch( e => {
               reject(e)
           });
        }
    })
}

Promise.customPromiseAll([login, signup])
.then (result => console.log(result))
.catch(e => console.log(e))
```
---
**[⬆ Back to Top](#table-of-contents)**

9. #### Polyfill of promise.any
```javascript
const login = new Promise((resolve, reject) => {
    resolve('login success')
})

const signup = new Promise((resolve, reject) => {
    reject('signup success')
})


Promise.customPromiseAny =(arrayofPromise) => {
    return new Promise ((resolve, reject) => {
        const error = [];
        let counter = 0;
        for(let i= 0; i < arrayofPromise.length; i++){
           Promise.resolve(arrayofPromise[i]).then(data => {
               resolve(data)
           }).catch( e => {
               counter++;
               error[i] = e;
               if(counter === arrayofPromise.length) 
               reject("All promises were rejected")
           });
        }
    })
}

Promise.customPromiseAny([login, signup])
.then (result => console.log(result))
.catch(e => console.log(e))
```
---
**[⬆ Back to Top](#table-of-contents)**

10. #### Polyfill of promise.race
```javascript
const login = new Promise((resolve, reject) => {
    resolve('login success')
})

const signup = new Promise((resolve, reject) => {
    reject('signup success')
})

number = 10;

Promise.customPromiseRace =(arrayofPromise) => {
    return new Promise ((resolve, reject) => {
        const error = [];
        let counter = 0;
        for(let i= 0; i < arrayofPromise.length; i++){
            Promise.resolve(arrayofPromise[i])
            .then(data => resolve(data), (e) => reject(e))
        }
    })
}

Promise.customPromiseRace([number, login, signup ])
.then (result => console.log(result))
.catch(e => console.log(e))
```
---
**[⬆ Back to Top](#table-of-contents)**

11.  ####  Polyfill of promise.finally
```javascript
```
---
**[⬆ Back to Top](#table-of-contents)**

12. ####  Polyfill of splice
```javascript
```
---
**[⬆ Back to Top](#table-of-contents)**

13. #### Polyfill of getElementByClassName
```javascript
```
---
**[⬆ Back to Top](#table-of-contents)**
