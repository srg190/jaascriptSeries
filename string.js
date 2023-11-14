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

let text =
  "return new string always because strings are immutable. so concatenation on string costly method";
let text2 = "mumbai is the mirror of modern India";
let replaced = text.replaceAll("string", "alphabet");
console.log(replaced);
console.log(
  text.replace(
    text.slice(text.length >> (1 + 1), -4),
    text2.startsWith(text2.substring(0, 6 - 1))
  )
);
