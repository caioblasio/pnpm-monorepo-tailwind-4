const chokidar = require("chokidar");
const { exec } = require("child_process");
const path = require("path");

const uiPath = path.resolve(__dirname, "../src");
const scriptPath = path.resolve(__dirname, "generate-tailwind-html.cjs");

const watcher = chokidar.watch(uiPath, {
  ignored: /node_modules/,
  persistent: true,
});

watcher.on("change", (filePath) => {
  console.log(`File changed: ${filePath}`);
  exec(`node ${scriptPath}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
});

console.log(`Watching for changes in ${uiPath}`);
