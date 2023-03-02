const linkProyek = document.querySelectorAll(".myproject a");

proyekF(linkProyek);
/*
 * ----------------------------------------------------------------------------------------------------------------------------------------
 * Proyek link
 * ----------------------------------------------------------------------------------------------------------------------------------------
 */
// ?
// ! -- Function
function proyekF(el) {
  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("click", (e) => {
      e.preventDefault();
      el[i].parentNode.querySelector(".active").classList.remove("active");
      el[i].classList.toggle("active");
    });
  }

  /*
   * ----------------------------------------------------------------------------------------------------------------------------------------
   * Proyek
   * ----------------------------------------------------------------------------------------------------------------------------------------
   */
  for (let i = 0; i < el.length; i++) {
    el[i].addEventListener("click", () => {
      const isiKonten = el[i].getAttribute("href").substring(1);
      const kontenSebelumnya = document.querySelector(".show-project.show");

      kontenSebelumnya.classList.replace("show", "hidden");
      document
        .querySelector(`.${isiKonten}`)
        .classList.replace("hidden", "show");
    });
  }
}
// ?
