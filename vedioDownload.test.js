const{ downloadFile }=require("./vedioDownloade");
test("test for full vedio download", async() => {
  const fileUrl = "https://download.samplelib.com/mp4/sample-30s.mp4";
  const fileName = "sample-30s-3.mp4";
fetch=jest.fn(() =>
  Promise.resolve({json:() => Promise.resolve(),
  })
);
  const file=await downloadFile(fileUrl, fileName, 0,1000000000);
  console.log(fetch.mock.calls)
  expect(fetch.mock.calls.length).toEqual(1)
});
