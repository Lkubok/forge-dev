import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Smartphone,
  Zap,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Music,
  Flame,
} from "lucide-react";

export default function LandingPage() {
  window.addEventListener(
    "message",
    (event) => {
      // if (event.origin !== "http://example.org:8080") return;
      alert("Received message from iframe:" + JSON.stringify(event));
    },
    false
  );

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Flame className="h-6 w-6 text-red-600" />
            <span className="font-bold text-xl tracking-wider">
              FORGE<span className="text-red-600">DEV</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#about"
              className="text-sm tracking-wider hover:text-red-600 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="#skills"
              className="text-sm tracking-wider hover:text-red-600 transition-colors"
            >
              SKILLS
            </Link>
            <Link
              href="#projects"
              className="text-sm tracking-wider hover:text-red-600 transition-colors"
            >
              PROJECTS
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-wider hover:text-red-600 transition-colors"
            >
              CONTACT
            </Link>
          </nav>
          <Button
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-900/20 hover:text-red-500"
          >
            HIRE ME
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Background texture"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-red-900/50 text-red-400 hover:bg-red-900/70 border-red-800">
              <Music className="h-3 w-3 mr-1" /> POWERED BY BLACK METAL
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
              FORGING MOBILE EXPERIENCES WITH{" "}
              <span className="text-red-600">DARK ENERGY</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl">
              React Native developer channeling the raw power and intensity of
              black metal into creating relentless, uncompromising mobile
              applications that stand out from the mainstream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button
                  className="bg-red-700 hover:bg-red-800 text-white"
                  onClick={() => {
                    postMessage({ type: "trackEvent", event: "view_work" });
                  }}
                >
                  VIEW MY WORK <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 hover:bg-zinc-800/50"
                >
                  CONTACT ME
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-zinc-900/50 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/about" className="group">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-red-900 transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                  About Me
                </h3>
                <p className="text-zinc-400">
                  Learn about my journey and development philosophy.
                </p>
              </div>
            </Link>

            <Link href="/skills" className="group">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-red-900 transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                  Skills
                </h3>
                <p className="text-zinc-400">
                  Explore my technical expertise and capabilities.
                </p>
              </div>
            </Link>

            <Link href="/projects" className="group">
              <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-red-900 transition-all">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                  Projects
                </h3>
                <p className="text-zinc-400">
                  Check out my latest mobile app creations.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-zinc-900/50 border-y border-zinc-800"
      >
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

      {/* Skills Section */}
      <section id="skills" className="py-20">
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

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-zinc-900/50 border-y border-zinc-800"
      >
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
                <CardContent className="p-6">
                  <Badge className="mb-2 bg-red-900/30 text-red-400 hover:bg-red-900/50">
                    MOBILE APP
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">
                    Project Hellfire {project}
                  </h3>
                  <p className="text-zinc-400 mb-4">
                    A cutting-edge mobile application with custom animations,
                    offline capabilities, and seamless API integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="border-zinc-700 text-zinc-400"
                    >
                      React Native
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-zinc-700 text-zinc-400"
                    >
                      Redux
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-zinc-700 text-zinc-400"
                    >
                      Firebase
                    </Badge>
                  </div>
                  <Button
                    variant="link"
                    className="p-0 text-red-600 hover:text-red-500"
                  >
                    View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 tracking-tight">
              CLIENT <span className="text-red-600">TESTIMONIALS</span>
            </h2>

            <blockquote className="relative">
              <div className="text-4xl text-red-600 absolute -top-10 left-0">
                &quot;
              </div>
              <p className="text-xl italic text-zinc-300 mb-6">
                Working with this developer was like unleashing a force of
                nature on our project. The attention to detail, technical
                prowess, and unique approach resulted in an app that stands out
                dramatically from our competitors.
              </p>
              <footer className="text-zinc-400">
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm">CTO, TechVenture Inc.</p>
              </footer>
              <div className="text-4xl text-red-600 absolute -bottom-10 right-0">
                &quot;
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-zinc-900/50 border-t border-zinc-800"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              SUMMON THE <span className="text-red-600">DEVELOPER</span>
            </h2>
            <p className="text-zinc-400">
              Ready to infuse your project with the power and intensity of black
              metal-driven development? Reach out to discuss how we can create
              something extraordinary together.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <Card className="bg-zinc-900/50 border-zinc-800 w-full md:w-auto">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-zinc-400">contact@forgedev.com</p>
                <Button
                  variant="link"
                  className="text-red-600 hover:text-red-500 mt-2"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 w-full md:w-auto">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Github className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">GitHub</h3>
                <p className="text-zinc-400">github.com/forgedev</p>
                <Button
                  variant="link"
                  className="text-red-600 hover:text-red-500 mt-2"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-zinc-800 w-full md:w-auto">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Linkedin className="h-10 w-10 text-red-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                <p className="text-zinc-400">linkedin.com/in/forgedev</p>
                <Button
                  variant="link"
                  className="text-red-600 hover:text-red-500 mt-2"
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Flame className="h-5 w-5 text-red-600" />
              <span className="font-bold tracking-wider">
                FORGE<span className="text-red-600">DEV</span>
              </span>
            </div>

            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} ForgeDev. Forged in darkness,
              deployed to millions.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-zinc-400 hover:text-red-600">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-red-600">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
