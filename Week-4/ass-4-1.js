function getNumber(resolve, reject) {
    const ranNum = Math.floor(Math.random() * 100);

    if (ranNum % 5 === 0) {
        setTimeout(() => reject(new Error(`${ranNum} is divisible by 5`)), 0);
    } else {
        setTimeout(() => resolve(`${ranNum} is not divisible by 5`), 0);
    }
}

getNumber(
    result => {
        console.log('Resolved:', result);
    },
    error => {
        console.error('Rejected:', error.message);
    }
);

