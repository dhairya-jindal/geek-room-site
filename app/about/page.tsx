import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — GeekRoom JEMTEC",
  description: "Learn about GeekRoom, the tech society at JEMTEC. Our mission, vision, and journey.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold sm:text-4xl">About GeekRoom JEMTEC</h1>
      <p className="mt-4 text-base text-foreground/80 sm:mt-6 sm:text-lg">
        GeekRoom is the official tech society of JEMTEC, fostering innovation,
        collaboration, and technical excellence among students.
      </p>
      <div className="mt-8 space-y-6 sm:mt-12 sm:space-y-8">
        <section>
          <h2 className="text-xl font-semibold sm:text-2xl">Our Mission</h2>
          <p className="mt-2 text-foreground/80">
            To create a vibrant community where students can learn, build, and
            grow together through technology and innovation.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold sm:text-2xl">Our Vision</h2>
          <p className="mt-2 text-foreground/80">
            To be the cornerstone of technical learning and innovation at JEMTEC,
            inspiring the next generation of tech leaders.
          </p>
        </section>
      </div>
    </main>
  );
}
