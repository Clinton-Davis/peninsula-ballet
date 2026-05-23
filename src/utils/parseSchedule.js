const DAY_NAMES = new Set([
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
]);

export function formatTime(time) {
  const [start, end] = time.split("-");
  if (!start || !end) {
    return time;
  }
  return `${start.trim()} - ${end.trim()}`;
}

export function parseSchedule(text) {
  const lines = text.split("\n").map((line) => line.trim());
  const title = lines[0] || "";
  const notes = [];
  const days = [];
  let currentDay = null;
  let reachedDays = false;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line) {
      continue;
    }

    const dayName = line.toUpperCase();
    if (DAY_NAMES.has(dayName)) {
      reachedDays = true;
      currentDay = { name: dayName, classes: [] };
      days.push(currentDay);
      continue;
    }

    if (!reachedDays) {
      notes.push(line);
      continue;
    }

    if (!line.includes("|")) {
      continue;
    }

    const [name, time] = line.split("|").map((part) => part.trim());
    if (!name || !time) {
      continue;
    }

    currentDay.classes.push({
      name,
      time: formatTime(time),
    });
  }

  return { title, notes, days };
}
