import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Code2, Zap } from "lucide-react";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">
            TECHNICAL <span className="text-red-600">ARSENAL</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-red-900 transition-colors">
              <CardContent className="p-6">
                <Smartphone className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">React Native Mastery</h3>
                <p className="text-zinc-400">
                  Expert-level React Native development with deep knowledge of
                  native modules, performance optimization, and cross-platform
                  implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-red-900 transition-colors">
              <CardContent className="p-6">
                <Code2 className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Full Stack Capabilities
                </h3>
                <p className="text-zinc-400">
                  Beyond mobile: Node.js, Express, MongoDB, Firebase, and AWS to
                  create complete, scalable solutions from backend to frontend.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 hover:border-red-900 transition-colors">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Performance Obsession
                </h3>
                <p className="text-zinc-400">
                  Relentless focus on app performance, creating lightning-fast
                  experiences that feel native on any device.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 text-center">
              TECHNICAL PROFICIENCIES
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React Native",
                "JavaScript",
                "TypeScript",
                "Redux",
                "GraphQL",
                "Node.js",
                "Firebase",
                "AWS Amplify",
                "Jest",
                "Detox",
                "CI/CD",
                "App Store Deployment",
                "Play Store Deployment",
              ].map((skill) => (
                <Badge
                  key={skill}
                  className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-1.5 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
