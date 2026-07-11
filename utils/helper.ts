export const formatRuntime = (totalMinutes: number): string => {
  if (!totalMinutes || totalMinutes <= 0) {
    return "0m";
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }

  if (minutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${minutes}m`;
};

export const formatDate = (dateString: string): string => {
  if (!dateString) return "";

  // Create a Date object from the string (handles "YYYY-MM-DD")
  const date = new Date(dateString);

  // Check if the date is valid to prevent crashes
  if (isNaN(date.getTime())) return dateString;

  // Format options to match your exact pattern: Day, Full Month Name, Year
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};
