export function dateTimeDiffCalc(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const diffMs = endDate - startDate;
  if (diffMs < 0) return "Invalid: end before start";

  return Math.floor(diffMs / (1000 * 60));
}

export function formatTimeHHMM(dateTimeStr) {
  if (!dateTimeStr) return "";
  return dateTimeStr.split(" ")[1]?.slice(0, 5);
}

export function minutesToHM(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  let result = "";
  if (h > 0) result += `${h}h `;
  if (m > 0) result += `${m}m`;
  return result.trim();
}

export function diffInDays(date1, date2) {
  return Math.floor(
    (new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24)
  );
}
