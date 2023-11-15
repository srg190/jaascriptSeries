// {
//   length,
//     slice(),
//     substring(),
//     substr(),
//     replace(),
//     replaceAll(),
//     toUpperCase(),
//     toLowerCase(),
//     concat(),
//     trim(),
//     trimStart(),
//     trimEnd(),
//     padStart(),
//     padEnd(),
//     charAt(),
//     charCodeAt(),
//     split();
// }
// return new string always because strings are immutable. so concatenation on string
// costly method.
// {
//   indexOf(),
//     lastIndexOf(),
//     search(),
//     match(),
//     matchAll(),
//     includes(),
//     startsWith(),
//     endsWith();
// }

// let text =
//   "return new string always because strings are immutable. so concatenation on string costly method";
// let text2 = "mumbai is the mirror of modern India";
// let replaced = text.replaceAll("string", "alphabet");
// console.log(replaced);
// console.log(
//   text.replace(
//     text.slice(text.length >> (1) + 1, -4),
//     text2.startsWith(text2.substring(0, 6 - 1))
//   )
// );

// String compare -> strcmp and localeCompare

// to know which one sorted before or after or same to other string
let text2 = "azb";
let text1 = "ayb";
let result = text1.localeCompare(text2);
let res = text1.strcmp(text2);
console.log(res)