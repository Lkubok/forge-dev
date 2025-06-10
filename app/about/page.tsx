import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <section className="py-20 bg-zinc-900/50 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Developer portrait"
                width={500}
                height={500}
                className="rounded-md border-2 border-zinc-800 shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 tracking-tight">
                THE <span className="text-red-600">DARK FORCE</span> BEHIND THE
                CODE
              </h2>
              <p className="text-zinc-400 mb-6">
                Just as black metal pushes the boundaries of conventional music,
                I push the boundaries of mobile development. With over 5 years
                of experience crafting React Native applications, I bring the
                same intensity, attention to detail, and uncompromising quality
                to every project.
              </p>
              <p className="text-zinc-400 mb-6">
                My development philosophy is influenced by the raw power and
                authenticity of black metal - creating experiences that are
                bold, memorable, and stand apart from the mainstream.
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-1 w-12 bg-red-600"></div>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Forged in darkness, deployed to millions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
