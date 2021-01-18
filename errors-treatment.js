//Tratamento de Erros

function criticalCode() {
    throw 'throwing an exception';
}

function logError(theException) {
    console.log(theException);
}
// excessão lançada pelo throw

//Throwing exceptions
//console.log("\n*******Throwing exceptions********\n");
//throw 'myException';

//try/catch
console.log("\n*******Try/Catch********\n");

try {
    criticalCode();
} catch (ex) {
    console.log('Got an Error');
    logError(ex);
}

//throwing in try/catch
console.log("\n*******Throwing in Try/Catch********\n");

try {
    throw 'An exception that is thrown every time';
} catch (ex) {
    console.log('Got an Error');
    logError(ex);
}

//try/catch/finally
console.log("\n*******Try/Catch/Finally********\n");

try {
    criticalCode();
} catch (ex) {
    console.log('Got an Error');
    logError(ex);
} finally {
    console.log('Code that will always run')
}