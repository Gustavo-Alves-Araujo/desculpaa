const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  if (yesBtn.textContent === "Vamo assistir") {
    location.reload();
  }
  else {
  question.innerHTML = "Espero que tenha caído pra 2 agora!";
  gif.src = "https://img.freepik.com/vetores-gratis/ilustracao-de-casal-de-animais-fofos-no-dia-dos-namorados_23-2148809669.jpg";
  yesBtn.textContent = "Vamo assistir";
  }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});