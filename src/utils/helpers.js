export function durationToMinutes(durationStr) {
  const hours = parseInt(durationStr.match(/(\d+)\s*h/)?.[1] || "0", 10);
  const minutes = parseInt(durationStr.match(/(\d+)\s*m/)?.[1] || "0", 10);
  return hours * 60 + minutes;
}

export function getTimeDiffInMinutes(fromTime, toTime) {
  const [fromHour, fromMinute] = fromTime.split(":").map(Number);
  const [toHour, toMinute] = toTime.split(":").map(Number);

  const fromTotal = fromHour * 60 + fromMinute;
  const toTotal = toHour * 60 + toMinute;

  const diff =
    toTotal >= fromTotal ? toTotal - fromTotal : toTotal + 1440 - fromTotal;

  return diff;
}
