export default function MusicGrid({ albums }) {
  return (
    <div className="interests__music-grid">
      {albums.map((src, index) => (
        <iframe
          key={index}
          className="cloud-shadow"
          style={{ borderRadius: '1.5rem' }}
          src={src}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ))}
    </div>
  )
}
