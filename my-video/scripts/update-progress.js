const progress = require("../progress.json");

let completed = 0;
let total = 0;

Object.values(progress.Version1).forEach(section => {
completed += section.completed;
total += section.total;
});

const percent = ((completed / total) * 100).toFixed(1);

console.log("");
console.log("========== Progress ==========");
console.log("");

Object.entries(progress.Version1).forEach(([name, section]) => {
const p = ((section.completed / section.total) * 100).toFixed(0);

console.log(
`${name.padEnd(15)} ${section.completed}/${section.total} (${p}%)`
);
});

console.log("");

console.log(
`Overall : ${completed}/${total} (${percent}%)`
);
