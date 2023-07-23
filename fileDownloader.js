import{ appendFile } from 'fs';
// import fetch from 'node-fetch';
const downloadFile = async (url, filename,startRange,endRange) => {
  const startTime = new Date();
  const response = await fetch(url, {headers: {Range: `bits=${startRange}-${endRange}`}});
  const buffer = await response.arrayBuffer();
  // const buffer=await new ArrayBuffer(response.))

  appendFile(filename, buffer, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      const endTime = new Date();
      const timeTaken = endTime - startTime;
      console.log(`File downloaded and saved as ${filename}`);
      console.log(`Time taken: ${timeTaken}ms,${endTime.getSeconds()},${startTime.getSeconds()}`);
    }
  });
};
const downloadParallel = async () => {
  const fileUrl = "https://download.samplelib.com/mp4/sample-30s.mp4";
  const fileName = 'sample-30s-3.mp4';
 const firstPart=downloadFile(fileUrl, fileName,0,999999);
 const secondPart=downloadFile(fileUrl, fileName,1000000,100000000);
 Promise.all([firstPart,secondPart]).then(()=>{
console.log('Parallel downloads completed.')});
};

downloadParallel();

// import { timeStamp } from "console";
// import { appendFile } from "fs";
// import fetch from "node-fetch";
// const downloadFile = async (url, filename, startRange, endRange) => {
//   const startTime = new Date();
//   let timeString=``
//   const response = await fetch(url, {
//     headers: { Range: `bits=${startRange}-${endRange}` },
//   });
//   const buffer = await response.buffer();
// appendFile(filename, buffer, (err) => {
//       if (err) {
//           console.error("Error writing file:", err);
//       } else {
//           const endTime = new Date();
//           const timeTaken = endTime - startTime;
//           timeString=`Time taken: ${timeTaken}ms,${endTime.getSeconds()},${startTime.getSeconds()}`;
//         // console.log(`Time taken: ${timeTaken}ms,${endTime.getSeconds()},${startTime.getSeconds()}`)
//         // return(`Time taken: ${timeTaken}ms,${endTime.getSeconds()},${startTime.getSeconds()}`);
//         return timeString
//       }
//   }).then((timeString)=>{
//     return timeString
//   });
// }; 
// const downloadParallel = async () => {
//   const fileUrl = "https://download.samplelib.com/mp4/sample-30s.mp4";
//   const fileName = "sample-30s-3.mp4";
//   const firstPart = downloadFile(fileUrl, fileName, 0, 999999);
//   const secondPart = downloadFile(fileUrl, fileName, 1000000, 100000000);
//   await Promise.all([firstPart, secondPart]).then(() => {
//     setTimeout(()=>{console.log(firstPart,secondPart);
//     console.log("Parallel downloads completed.");
// },1000)}).then(
//     setTimeout(()=>console.log(firstPart,secondPart)),1000);
// };
// const downloadParallel = async () => {
//   const fileUrl = "https://download.samplelib.com/mp4/sample-30s.mp4";
//   const fileName = "sample-30s-3.mp4";
//   const firstPart = downloadFile(fileUrl, fileName, 0, 999999);
//   const secondPart = downloadFile(fileUrl, fileName, 1000000, 100000000);
//   await Promise.all([firstPart, secondPart]).then(() => {
//     setTimeout(()=>{console.log(firstPart,secondPart);
//     console.log("Parallel downloads completed.");
// },1000)}).then(
//     setTimeout(()=>console.log(firstPart,secondPart)),1000);
// };

// downloadParallel();
downloadParallel();
