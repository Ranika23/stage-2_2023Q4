class EventSubmit {
  static submitForm() {
    const submitF: HTMLFormElement | null =
      document.querySelector(".login-form");
    function sub(e: Event) {
      e.preventDefault();
      window.location.href = "#main";
    }
    submitF?.addEventListener("submit", sub);
  }
}

export default EventSubmit;
