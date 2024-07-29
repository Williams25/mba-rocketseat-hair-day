import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";
import { hoursClick } from "./hours-click";
const hours = document.getElementById("hours");

export const hoursLoad = ({ date, dailySchedules }) => {
  hours.innerHTML = "";

  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");
    const isHourPresent = dayjs(date)
      .add(scheduleHour, "hour")
      .isAfter(dayjs());

    const avaliable = !unavailableHours.includes(hour) && isHourPresent;

    return {
      hour: hour,
      avaliable,
    };
  });

  renderHours({ opening });
  hoursClick();
};

const renderHours = ({ opening = [] }) => {
  opening.forEach(({ hour, avaliable }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(avaliable ? "hour-available" : "hour-unavailable");
    li.textContent = hour.split(":")[0];
    if (hour === "9:00") {
      hourHeaderAdd("Manhã");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }
    hours.append(li);
  });
};

const hourHeaderAdd = (title) => {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;
  hours.append(header);
};
