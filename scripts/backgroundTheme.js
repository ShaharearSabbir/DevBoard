document.getElementById("theme-button").addEventListener("click", function () {
  const haxBaseNumber = "0123456789ABCDEF";
  let haxColorCodeArray = [];
  for (let n = 0; n < 6; n++) {
    const i = Math.floor(Math.random() * 15);
    haxColorCodeArray.push(haxBaseNumber[i]);
  }
  const haxCode = haxColorCodeArray.join("");
  const haxwithhash = "#" + haxCode;
  const body = document.getElementById("body");
  body.style.backgroundColor = haxwithhash;
});
