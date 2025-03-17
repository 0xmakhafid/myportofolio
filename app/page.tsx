"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Github, Linkedin, PhoneIcon as WhatsApp, Award, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Web Profile Sekolah - MA Salafiyah Ahmad Said Kudus",
    description: "Website profil resmi untuk MA Salafiyah Ahmad Said Kudus, menampilkan informasi sekolah, galeri dan prestasi.",
    image: "/masprofile_450x800.jpg",
    link: "https://open.substack.com/pub/makhafid/p/membangun-website-profil-sekolah?r=4qh0pz&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
  },  
  {
    id: 7,
    title: "Optimasi Performa Website: Raih Skor 100/100/96 Berkat Perbaikan Teknis,
    description: "Hasil ini membuktikan kemampuan saya dalam meningkatkan kualitas dan standar web secara menyeluruh.",
    image: "/optimasi-web.jpg",
    link: "/optimasi-masahmadsaidkudus.html",
  },
  {
    id: 2,
    title: "Sistem PPDB Online - MA Salafiyah Ahmad Said Kudus",
    description: "Platform digital untuk proses Penerimaan Peserta Didik Baru (PPDB) di MA Salafiyah Ahmad Said Kudus, memudahkan pendaftaran online bagi calon siswa.",
    image: "/masppdb_450x800.jpg",
    link: "https://open.substack.com/pub/makhafid/p/membangun-website-profil-sekolah?r=4qh0pz&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false",
  },
  {
    id: 3,
    title: "Dashboard Interaktif: Analisis Penjualan Noodle Store",
    description: "Visualisasi data penjualan untuk mengidentifikasi tren dan memberikan rekomendasi bisnis.",
    image: "/noodle_450x800.jpg",
    link: "https://medium.com/@makhafid/analisis-dashboard-penjualan-noodle-store-insight-rekomendasi-ec52c6a829c2",
  },
  {
    id: 4,
    title: "Dashboard Interaktif: Sebaran Kasus COVID-19 di Indonesia",
    description: "Analisis visual untuk memahami pola penyebaran kasus COVID-19 berdasarkan provinsi.",
    image: "/covid_450x800.jpg",
    link: "https://medium.com/@makhafid/sebaran-kasus-covid-19-di-indonesia-berdasarkan-provinsi-019b82c1918d",
  },  
  {
    id: 5,
    title: "Playful Error Pages: Interactive Error Pages with Games",
    description: "An open-source collection of interactive error pages with a jumping game, inspired by the Google Chrome dinosaur game during offline mode. Easily customizable for your own projects.",
    image: "/error_pages.gif",
    link: "https://github.com/0xmakhafid/playful-errorpages-ui"
  },
  {
  id: 6,
  title: "Web Portfolio: Next.js with ShadCN UI",
  description: "A sleek and modern web portfolio built using Next.js and ShadCN UI. Showcases professional projects and skills with a clean, responsive design.",
  image: "/portfolio.jpg",
  link: "https://github.com/0xmakhafid/myportofolio"
},
]

const certificates = [
  { id: 1, name: "Advanced SQL", issuer: "Kaggle", year: 2025, type: "course" },
  {
    id: 2,
    name: "Sertifikat Analis Data Excel",
    issuer: "Microsoft",
    year: 2025,
    type: "professional",
  },
  { id: 3, name: "Python", issuer: "Kaggle", year: 2025, type: "course" },
  {
    id: 4,
    name: "Analitik Data Untuk Profesional Bisnis",
    issuer: "Linkedin Learning",
    year: 2025,
    type: "course",
  },
  { id: 5, name: "The Data Science of Healthcare, Medicine, and Public Health", issuer: "Linkedin Learning", year: 2025, type: "course" },
  { id: 6, name: "Digital Advertising certified", issuer: "HubSpot", year: 2025, type: "professional" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="container flex flex-col items-center justify-center min-h-screen text-center px-4 relative overflow-hidden"
      >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary text-center">
          Muhammad Abdul Khafid
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 text-center mx-auto">
          IT Professional | DevOps Engineer | AI Integration | Data Analysis
        </p>
          <Button
            size="lg"
            className="group rounded-full px-6 bg-primary/90 hover:bg-primary transition-all duration-300"
            asChild
          >
            <a href="#portfolio">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Portfolio</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Innovative solutions for complex challenges
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl border-none bg-background/50 backdrop-blur-sm hover:bg-background/80">
                <div className="relative h-[225px] w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full group rounded-full hover:bg-primary/10" asChild>
                    <Link href={project.link} target="_blank">
                      Explore Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* education Section */}
      <section id="education" className="container py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>
        </motion.div>
      
        <div className="flex flex-col items-center gap-6">
          <motion.div
            key="education-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-lg"
          >
            <Card className="bg-background/50 backdrop-blur-md hover:bg-background/80 transition-all duration-300 hover:shadow-lg border border-border/30 rounded-lg p-6 flex flex-col items-center text-center">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="flex items-center text-lg font-semibold">
                  <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                  Bachelor of Information Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">Muria Kudus University</p>
                <p className="text-sm font-medium">Wisuda 2025</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>



      {/* Certificates Section */}
      <section id="certificates" className="container py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Certifications & Courses
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Professional qualifications and continuous learning achievements
          </p>
        </motion.div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 hover:shadow-lg border-none">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    {cert.type === "professional" ? (
                      <Award className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                    ) : (
                      <GraduationCap className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                    )}
                    <span className="flex-1">{cert.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm font-medium">{cert.year}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="container py-24 px-4 text-center relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_70%)]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">Let's collaborate on your next big idea</p>
        </motion.div>
        <div className="flex justify-center space-x-10">
          <Link href="https://linkedin.com/in/makhafid" target="_blank" className="group flex flex-col items-center">
            <div className="p-4 rounded-full bg-background/50 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-primary/10 mb-2">
              <Linkedin className="h-8 w-8 text-primary" />
            </div>
            <span className="text-sm group-hover:text-primary transition-colors">LinkedIn</span>
          </Link>
          <Link href="https://wa.me/62831489664872" target="_blank" className="group flex flex-col items-center">
            <div className="p-4 rounded-full bg-background/50 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-primary/10 mb-2">
              <WhatsApp className="h-8 w-8 text-primary" />
            </div>
            <span className="text-sm group-hover:text-primary transition-colors">WhatsApp</span>
          </Link>
          <Link href="https://github.com/0xmakhafid" target="_blank" className="group flex flex-col items-center">
            <div className="p-4 rounded-full bg-background/50 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-primary/10 mb-2">
              <Github className="h-8 w-8 text-primary" />
            </div>
            <span className="text-sm group-hover:text-primary transition-colors">GitHub</span>
          </Link>
        </div>
      </section>

      <footer className="container py-8 text-center text-muted-foreground border-t border-border/50">
        <p>© {new Date().getFullYear()} Muhammad Abdul Khafid. All rights reserved.</p>
      </footer>
    </main>
  )
}

