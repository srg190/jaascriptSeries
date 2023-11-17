let text = "Is this all there is?";
let pattern = /is/g; //g -> for global match
let res = text.match(pattern);
console.log("match -> ", res);
res = pattern.exec(text);
console.log("exec -> ", res);
res = pattern.test(text);
console.log("test -> ", res);

// i
text = "Visit School Boards";
pattern = /School/i;
res = text.match(pattern);
console.log("insensitive -> ", res);

// m -> multiline search
text = `Is this
all there
is`;

pattern = /is$/gim; // ^ -> start case, $ -> end start
console.log("gmi -> ", text.match(pattern));

let newExp = new RegExp("[^xyz]", "g"); // /[^xyz]/g
text = "Hello this world is mine I'm x and you're yz.";
console.log("using regex Constructor -> ", text.match(newExp).join(""));

// similar like [0-9], [^0-9]

// (x|y) => alternative
text = "re, green, red, green, gren, gr, blue, yellow";
pattern = new RegExp("(red|green)", "g");
console.log(text.match(pattern));

// Meta characters 
{'.', '\w', '\W', '\d', '\D', '\s', '\S'}