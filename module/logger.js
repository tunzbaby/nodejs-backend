/
// moudle wapper function
function (exports, require, module, __filename, __dirname) {
    var url = 'http://phamtung.com/log';

// Function
function log(message) {
    // Send an HTTP request
    console.log(message);
    
}
// Export function or object
module.exports.log = log;
}