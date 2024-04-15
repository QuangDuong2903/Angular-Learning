import { Observable, concatMap, exhaustMap, filter, from, fromEvent, interval, map, mergeMap, of, reduce, scan, switchMap, take, tap, timer } from 'rxjs'
import { ajax } from 'rxjs/ajax'

// const observable = new Observable((subscriber) => {
//     // subscriber.next('Hello, world')
//     // subscriber.error('Error!')
//     // subscriber.next('World hello')
//     // subscriber.complete()
//     // doesn't log
//     // subscriber.next('Hello, world')

//     const id = setInterval(() => {
//         subscriber.next('Hello, world')
//         console.log('leak')
//     }, 1000);

//     return () => clearInterval(id)
// })

// const observable = interval(1000)

// emit one value after
// const observable = timer(1000)

// const observable = timer(0, 1000)  

// const observable = fromEvent(document, 'click')   

// const observable = of(1, 2, 3, 4, 5)   

// const observable = of([1, 2, 3, 4, 5])   

// const observable = from([1, 2, 3, 4, 5]) 

// const observable = from(fetch('https://jsonplaceholder.typicode.com/todos/1'))

// const observable = from([1, 2, 3, 4, 5])
//     .pipe(map(value => `$${value}`))

// const observable = fromEvent(document, 'keydown').pipe(
//     map(event => event.code),
//     filter(code => code === 'Space')
// )

// const observable = from([1, 2, 3, 4, 5]).pipe(
//     reduce((acc, value) => acc + value, 0)
// )

// const observable = interval(500).pipe(
//     take(5),
//     reduce((acc, value) => acc + value, 0)
// )

// const observable = interval(500).pipe(
//     take(5),
//     scan((acc, value) => acc + value, 0)
// )

// const observable = interval(500).pipe(
//     take(5),
//     tap({
//         next: value => console.log(value)
//     }),
//     reduce((acc, value) => acc + value, 0)
// )

const button = document.querySelector('#btn')
// const observable = fromEvent(button, 'click').pipe(
//     mergeMap(() => ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1'))
// )

// const observable = fromEvent(button, 'click').pipe(
//     switchMap(() => ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1'))
// )

// const observable = fromEvent(button, 'click').pipe(
//     concatMap(() => ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1'))
// )

const observable = fromEvent(button, 'click').pipe(
    exhaustMap(() => ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1'))
)

const subcription = observable.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete called'),
    error: (err) => console.error(err)
})

// setTimeout(() => {
//     subcription.unsubscribe()
// }, 4000)