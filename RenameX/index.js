const fs = require("node:fs");
const replaceThis = "john";
const replaceWith = "Chandan";
const preview = true;

try {
  const data = fs.readdir("data", (err, data) => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let newFile = "data/" + item.replaceAll(replaceThis, replaceWith);
      if (!preview) {
        fs.rename("data/" + item, newFile, () => {
          console.log("Renamed Successfully");
        });
      } else {
        let old_file = "data/" + item;
        let new_file = newFile;

        if (old_file !== newFile) {
          console.log("/data " + item + " will be rename to " + newFile);
        }
      }
    }
  });
} catch (err) {
  console.error(err);
}
