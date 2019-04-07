paths = $$("path");
for (let i = 0; i < paths.length; i++) {
  path = paths[i];
  console.log(`.path${i + 1} {
    stroke-dasharray: ${path.getTotalLength()};
    stroke-dashoffset: ${path.getTotalLength()};
    animation: dash 5s linear forwards;
    fill-opacity: 0
}`);
}
