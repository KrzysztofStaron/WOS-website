const randomInfo = () => {
  const infoArray = [
    "test",
    "test2"
  ];

  document.getElementById('aInSpan').href = 'info/' + infoArray[(Math.floor(Math.random() * infoArray.length))] + ".html";
}

const setup = () => {
  console.log("Setuping");
  randomInfo();
}

window.onload = setup;
