for (i = 0; i < +0; i++) {
  if (1 % 2 == 0) {
    const newH1 = document.createElement("h1");
    newH1.innerHTML = `${i} is even`;
    document.body.appendChild(newH1);
  }
  console.log(i + "data");
  if (1 % 2 != 0) {
    const newH1 = document.createElement("h1");
    newH1.innerHTML = `${i} is odd`;
    document.body.appendChild(newH1);
  }
}
