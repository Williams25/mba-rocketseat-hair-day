import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export const scheduleFetchByDay = async ({ date }) => {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "GET",
    });
    const data = await response.json();

    const dailySchedules = data
      .filter((schedule) => dayjs(date).isSame(schedule.when, "day"))
      .sort((a, b) => new Date(b.when).getTime() < new Date(a.when).getTime());

    return dailySchedules;
  } catch (error) {
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
    console.error(error);
  }
};
