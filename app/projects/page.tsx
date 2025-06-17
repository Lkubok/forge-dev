import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <section className="py-20 bg-zinc-900/50 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">
            NOTABLE <span className="text-red-600">CREATIONS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <Card
                key={project}
                className="bg-zinc-900/50 border-zinc-800 overflow-hidden hover:border-red-900 transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=800`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Project Title {project}
                  </h3>
                  <p className="text-zinc-400 mb-4">
                    A brief description of the project and its key features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "TypeScript", "Firebase"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
