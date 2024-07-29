export const hoursClick = () => {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((avaliable) => {
    avaliable.addEventListener("click", (selected) => {
      hoursRemoveScheduleHours();
      selected.target.classList.add("hour-selected");
    });
  });
};

export const hoursRemoveScheduleHours = () => {
  const hours = document.querySelectorAll(".hour-available");
  hours.forEach((hour) => {
    hour.classList.remove("hour-selected");
  });
};
