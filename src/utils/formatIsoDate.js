export default function formatIsoDate(date, options = {}) {
  const dateObject = new Date(date);

  const defaultOptions = {
    month: "long",
    year: "numeric",
    day: "numeric",
  };

  return dateObject.toLocaleDateString("en", {
    ...defaultOptions,
    ...options,
  });
}
