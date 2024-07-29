import { scheduleFetchCancel } from "../../services/schedule-cancel";

const periods = document.querySelectorAll(".period");

periods.forEach((periods) => {
  periods.addEventListener("click", (event) => {
    const enabledClick = event.target.classList.contains("cancel-icon");
    if (enabledClick) {
      const item = event.target.closest("li");
      const { id } = item.dataset;
      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja apagar esse agendamento?"
        );
        if (isConfirm) {
          scheduleFetchCancel({ id });
        }
      }
    }
  });
});
