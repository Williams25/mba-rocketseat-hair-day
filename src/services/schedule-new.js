import { apiConfig } from "./api-config";

export const scheduleNew = async ({ id, name, when }) => {
  try {
    const payload = { id, name, when };
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.error(error);
  }
};
