let loadPage = () => {
  const div = document.getElementById("canvas");
  const img = document.createElement("img");
  img.src = "./assets/homer.gif";
  div.appendChild(img);
};

function sillyLog() {
  for (let index = 0; index < 10000000000; index++) {}
  console.log("SIGNED IN");
}

let sillySignin = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(sillyLog()), 3000);
});

sillySignin.then(() => {
  console.log("Done");
});
loadPage();
