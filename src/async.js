const realMan = new Promise((keeper, reject) => {
    if(true) {
        setTimeout(() =>{
            keeper('Will marry me?');
        }, 1000);
    }else {
        reject('Hit the road player');
    }
});

realMan
    .then(value => + 'I DO')
    .then(newValue => newValue)
    .catch(rejectValue => rejectValue);