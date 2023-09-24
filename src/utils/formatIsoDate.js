export default function formatIsoDate(date, options = {}) {
  const dateObject = new Date(date);
  console.log(dateObject);

  const defaultOptions = {
    month: "long",
    year: "numeric",
    day: "numeric",
    timeZone: "UTC",
  };

  return dateObject.toLocaleDateString("en-us", {
    ...defaultOptions,
    ...options,
  });
}
