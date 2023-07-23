const { appendFile} =require("fs");
const { resolve } = require("path");
const downloadFile = async (url, filename, startRange, endRange) => {
  const startTime = new Date();
  const response = await fetch(url, {
    headers: { Range: `bits=${startRange}-${endRange}` },
  });
  console.log(response);
  const buffer = await response.arrayBuffer();
  const uint8Array=new Uint8Array(response);
  appendFile(filename, uint8Array,(err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
        const endTime = new Date();
        const timeTaken = endTime - startTime;
     console.log(
            `Time taken: ${timeTaken}ms,${endTime.getSeconds()},${startTime.getSeconds()}`
        );
    }
  });
};
// const fileUrl = "https://download.samplelib.com/mp4/sample-30s.mp4";
// const fileName = "sample-30s-3.mp4";
// const file=downloadFile(fileUrl, fileName, 0,1000000000);
module.exports={
    downloadFile
  }