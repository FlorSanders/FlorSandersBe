export default function formatGithubUrl(url) {
  const urlSplit = url.split("/");
  const urlEnd = urlSplit[urlSplit.length - 1];
  const urlEndSplit = urlEnd.split(/[-_]/);
  const urlEndSplitCapitalized = urlEndSplit.map(
    (part) => `${part[0].toUpperCase()}${part.slice(1)}`
  );
  const urlEndCapitalized = urlEndSplitCapitalized.join(" ");

  return urlEndCapitalized;
}
