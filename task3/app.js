var Name = 'Aliza';
//lowerCase
console.log(Name.toLowerCase());
//upperCase
console.log(Name.toUpperCase());
//titleCase
console.log(Name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
