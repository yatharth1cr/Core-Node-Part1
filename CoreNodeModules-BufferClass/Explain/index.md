### Explain globals ?

> - Node.js has a number of built-in global identifiers that every Node.js developer should have some familiarity with.
>
> - Few commonly used globals are:
>
> 1. require
> 2. timers
> 3. process

### Define fs module ?

> - fs module is an inbiult module in node.
> - It stands for "file system".

### Explain blocking and non-blocking codes with example ?

> Scynchronous code are the blocking codes because it will block execution of

```js
console.log("start");

for (i = 0; i < 100000; i++) {
  //it will take some time
}

console.log("start");
```

> Asynchronous code are the non blocking code because it will execute according to the

```js
console.log("start");

setTimeout(() => {
  console.log("Async operation completed");
}, 2000);

console.log("end");
```

### what is buffer ?

> Buffer class provides instance to store raw data in an array of integers format.
