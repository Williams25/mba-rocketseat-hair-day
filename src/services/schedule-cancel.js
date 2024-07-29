import { schedulesDay } from "../modules/schedules/load";
import { apiConfig } from "./api-config";

export const scheduleFetchCancel = async ({ id }) => {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
    schedulesDay();
    alert("Agendamento cancelado com sucesso.");
  } catch (error) {
    alert("Não foi possível cancelar o agendamentos.");
    console.error(error);
  }
};
