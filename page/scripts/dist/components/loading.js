export const loading = (container) => {
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
//# sourceMappingURL=loading.js.map