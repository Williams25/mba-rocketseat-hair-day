import { schedulesDay } from "../schedules/load";

const inputDate = document.getElementById("date");

inputDate.addEventListener("change", (e) => {
  schedulesDay();
});
