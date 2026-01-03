export const loading = (container: HTMLDivElement) => {
  const secLoading = document.createElement("section");
  secLoading.classList.add("secLoading");

  for (let i = 0; i < 5; i++) {
    const span = document.createElement("span");
    span.style.setProperty("--i", String(i + 1));
    secLoading.appendChild(span);
  }

  container.appendChild(secLoading);

  return secLoading;
};

export const messageError = (container: HTMLDivElement) => {
  container.insertAdjacentHTML("beforeend", `
      <section class="secMessagerError">
        <div>
          <img src="image/close.png" alt="lupa">
          Personagem(ns) não encontrado
        </div>
      </section> 
  `);
};