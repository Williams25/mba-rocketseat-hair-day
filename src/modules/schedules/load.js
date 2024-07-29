import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { hoursLoad } from "../form/hours-load";
import { scheduleShow } from "./show";

const inputDate = document.querySelector("#date");

export const schedulesDay = async () => {
  const selectedDate = inputDate.value;
  if (selectedDate) {
    const dailySchedules = await scheduleFetchByDay({ date: selectedDate });
    scheduleShow({ dailySchedules });

    hoursLoad({
      date: selectedDate,
      dailySchedules,
    });
  }
};
