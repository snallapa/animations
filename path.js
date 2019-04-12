paths = $$("path");
let output = "";
for (let i = 0; i < paths.length; i++) {
  path = paths[i];
  output =
    output +
    `path:nth-of-type(${i + 1}) {
    stroke-dasharray: ${path.getTotalLength()};
    stroke-dashoffset: ${path.getTotalLength()};
    animation: dash 5s linear forwards;
    fill-opacity: 0
}\n`;
}
console.log(output);
