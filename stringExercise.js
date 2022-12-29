const takeDatas = () => {
  const datas = document.querySelector(".textArea").value;
  const words = datas.split("\n");
  let tic = 1;
  for (const word of words) {
    const [first, second] = word.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(tic)}`);
    tic++;
  }
};
document.querySelector(".button").addEventListener("click", takeDatas);
