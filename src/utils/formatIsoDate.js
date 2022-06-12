export default function formatIsoDate(date) {
  const dateObject = new Date(date);

  return dateObject.toLocaleDateString("en", {
    month: "long",
    year: "numeric",
  });
}
