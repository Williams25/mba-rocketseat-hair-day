import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";
import { hoursRemoveScheduleHours } from "./hours-click";
import { schedulesDay } from "../schedules/load";
const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.querySelector("#date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = inputToday;
selectedDate.min = inputToday;

const resetInputs = () => {
  selectedDate.value = inputToday;
  clientName.value = "";
  hoursRemoveScheduleHours();
};

form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    const name = clientName?.value?.trim();
    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora!");
    }
    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");
    const id = new Date().getTime();
    const payload = {
      when,
      id,
      name,
    };
    await scheduleNew(payload);
    schedulesDay();
    resetInputs();
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.error(error);
  }
};
