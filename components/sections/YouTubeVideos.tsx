import { videos } from "@/data/videos";
import SectionTitle from "../ui/SectionTitle";
import YouTubeEmbed from "../ui/YouTubeEmbed";

export default function YouTubeVideos() {
  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Mirá cómo enseño"
          subtitle="Videos gratuitos en mi canal de YouTube. Aprendé técnicas profesionales antes de dar el siguiente paso."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <YouTubeEmbed
              key={video.id}
              videoId={video.id}
              title={video.title}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@marcosdicesare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold font-semibold hover:underline"
          >
            Ver más videos en el canal de YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
