const displayMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, 3000);
    });
}


// async - await

const myFunc = async() => {
    try {
        let result = '';
        result = await displayMessage('Hello');
        console.log(result);
        result = await displayMessage('There?');
        console.log(result);
        result = await displayMessage('Wassup');
        console.log(result);

    } catch (error) {
        console.log('Error', error);

    }

}

myFunc();
//Hello
//There?
//Wassup