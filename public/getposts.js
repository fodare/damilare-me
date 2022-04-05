const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/content");

const postlist = [];

const getPosts = async () => {
   await fs.readdir(dirPath, (err, files) => {
      if (err) {
         return console.log(`Failed to get contenets in the dir ${err}`);
      }

      files.forEach((file, i) => {
         let obj = {};
         let post;
         fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
            const getMetadataIndices = (acc, elem, i) => {
               if (/^---/.test(elem)) {
                  acc.push(i);
               }
               return acc;
            };

            const parseMetadata = ({ lines, metadataIndicies }) => {
               if (metadataIndicies.length > 0) {
                  let metadata = lines.slice(
                     metadataIndicies[0] + 1,
                     metadataIndicies[1]
                  );
                  metadata.forEach((line) => {
                     obj[line.split(": ")[0]] = line.split(": ")[1];
                  });
                  return obj;
               }
            };

            const parseContent = ({ lines, metadataIndicies }) => {
               if (metadataIndicies.length > 0) {
                  lines = lines.slice(metadataIndicies[1] + 1, lines.length);
               }
               return lines.join("\n");
            };

            const lines = contents.split("\n");
            const metadataIndicies = lines.reduce(getMetadataIndices, []);

            const metadata = parseMetadata({ lines, metadataIndicies });
            const content = parseContent({ lines, metadataIndicies });
            post = {
               id: i + 1,
               title: metadata.title ? metadata.title : "Article has no title",
               author: metadata.author
                  ? metadata.author
                  : "Article has no author",
               date: metadata.date ? metadata.date : "Article has no date",
               tag: metadata.tag ? metadata.tag : "Article has no tag",
               content: content ? content : "Article has no content",
            };
            postlist.push(post);
         });
      });
   });
   setTimeout(() => {
      console.log(postlist);
   }, 1000);
};

getPosts();
