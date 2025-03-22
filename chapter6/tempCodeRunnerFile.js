
async function async1() {
    console.log('async1 start');2
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');4
}

console.log('script start'); 1

setTimeout(() => console.log('setTimeout'), 0);

async1();

new Promise((resolve) => {
    console.log('promise1');3
    resolve();
}).then(() => console.log('promise2'));
console.log('script end');8