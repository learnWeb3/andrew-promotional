export interface YoutubeEmbedProps {
  embedId: string;
  title: string;
  width: string;
  height: string;
}

export function YoutubeEmbed({
  embedId = "",
  title = "",
  width = "100%",
  height = "100%",
}) {
  return (
    <iframe
      height={height}
      width={width}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title={title}
    />
  );
}
