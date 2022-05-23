let day1 = findDay(new Date().getDay());
let day2 = getDay(new Date().getDay());

console.log("Day: ", day1, day2);

function getDay(selectedDay) {
  let day;

  switch (selectedDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  return day;
}

function findDay(day) {
  const dayHashtable = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  return dayHashtable[day] || "No day selected";
}
