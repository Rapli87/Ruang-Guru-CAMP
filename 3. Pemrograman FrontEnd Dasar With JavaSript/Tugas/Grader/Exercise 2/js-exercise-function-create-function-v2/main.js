// TODO: answer here
function checkDatatype(param) {
  // const dataType = typeof datatest;

  switch (typeof  param) {
      case 'string':
          return 'string';
         
      case 'number':
          return 'number';
         
      case 'boolean':
          return 'boolean';
         
      case 'object':
              if (Array.isArray( param)) {
                return 'array';
              } else if ( param === null) {
                return 'null';
              } else {
                return 'object';
              }
         
      case 'function':
          return 'function';
         
      default:
          return 'undefined';
         
  }
}
console.log(checkDatatype("Ruang Guru"));
console.log(checkDatatype(123));
console.log(checkDatatype(true));
console.log(checkDatatype([1,2,3]));
module.exports = {checkDatatype};