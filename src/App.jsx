import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { EnvelopeSimple, Phone, WhatsappLogo } from "phosphor-react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function WebBridgeSolutions() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans scroll-smooth">
      <Helmet>
        <title>Web Bridge Solutions | Google & Website Experts</title>
        <meta
          name="description"
          content="We build websites, mobile apps, and Google Business profiles that help Nigerian businesses grow online."
        />
      </Helmet>

      <Header />
      <Hero />
      <About />
      <Services />
      <MobileApps />
      <Testimonials />
      <Pricing />
      <Contact />
      <SocialMedia />
      <Footer />
    </div>
  );
}

// ---------------- Header ----------------
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black/80 backdrop-blur sticky top-0 z-50 border-b border-red-900/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg md:text-2xl font-bold text-orange-500 tracking-wide">
          Web Bridge Solutions
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-red-400 transition">
            About
          </a>
          <a href="#services" className="hover:text-red-400 transition">
            Services
          </a>
          <a href="#mobileapps" className="hover:text-red-400 transition">
            Mobile Apps
          </a>
          <a href="#pricing" className="hover:text-red-400 transition">
            Pricing
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full hover:opacity-90 transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-orange-500 text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black border-t border-red-900/50 flex flex-col items-center py-4 space-y-4 text-sm">
          {["About", "Services", "Mobile Apps", "Pricing", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-red-400 transition"
              >
                {item}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
}

// ---------------- Hero ----------------
function Hero() {
  return (
    <section className="relative text-center py-28 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold leading-tight text-white"
      >
        Empower Your Business with{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Web Bridge Solutions
        </span>
      </motion.h2>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
        We help businesses shine online with Google Business setup, modern
        websites, AI-powered ads, and mobile applications that convert visitors
        into clients.
      </p>
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <a
          href="#contact"
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium hover:opacity-90 transition"
        >
          Get Started
        </a>
        <a
          href="#services"
          className="px-6 py-3 border border-red-700 text-gray-300 rounded-full hover:border-orange-500 hover:text-orange-400 transition"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
}

// ---------------- About ----------------
function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-950 border-t border-red-900/30"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-white">Who We Are</h3>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          At Web Bridge Solutions, we bridge the gap between businesses and
          their digital growth. From Google optimization to websites, AI video
          ads, and app development, we create digital solutions that last.
        </p>
      </div>
    </section>
  );
}

// ---------------- Services ----------------
function Services() {
  const services = [
    {
      title: "Google Business Setup",
      desc: "Be found by customers locally with a powerful Google profile.",
    },
    {
      title: "Website Design",
      desc: "Responsive, modern websites that capture attention and drive results.",
    },
    {
      title: "SEO Optimization",
      desc: "Rank higher and get noticed across search engines.",
    },
    {
      title: "Continuous Support",
      desc: "Stay ahead with updates, fixes, and ongoing support.",
    },
    {
      title: "AI Ads Video Promotion",
      desc: "Create engaging AI-generated promotional videos for businesses, products, and services using modern AI tools like Heygen and Kling.",
    },
    {
      title: "AI Ads Video for Your Business",
      desc: "We produce compelling AI-powered advertisement videos tailored for your brand, helping you reach more customers and boost sales.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center text-white">
          Our Services
        </h3>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:border-red-500 transition"
            >
              <h4 className="text-xl font-semibold text-orange-500">
                {s.title}
              </h4>
              <p className="mt-3 text-sm text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Mobile Apps ----------------
function MobileApps() {
  return (
    <section
      id="mobileapps"
      className="py-24 bg-gray-950 border-t border-red-900/30 text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-white">
          Mobile App Development
        </h3>
        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
          Expand your reach with mobile applications that work across Android
          and iOS. We design smooth, fast, and scalable apps using React Native
          and Expo for startups and businesses.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium hover:opacity-90 transition"
          >
            Let’s Build Your App
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------- Testimonials ----------------
function Testimonials() {
  const testimonials = [
    {
      name: "Amina O.",
      feedback:
        "They made my shop discoverable on Google. My customer base grew rapidly!",
    },
    {
      name: "James T.",
      feedback:
        "Our sleek new website boosted inquiries and client trust instantly.",
    },
    {
      name: "Ngozi A.",
      feedback:
        "Professional, fast, and excellent at what they do. Highly recommended!",
    },
  ];

  return (
    <section className="py-24 bg-gray-950 border-t border-red-900/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-white">What Our Clients Say</h3>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-black border border-gray-800 rounded-2xl shadow hover:border-red-500 transition"
            >
              <p className="text-gray-300 italic">“{t.feedback}”</p>
              <div className="mt-6 text-sm font-medium text-orange-400">
                — {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Pricing ----------------
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₦99,999",
      perks: ["Google Profile Setup", "Single-page Website", "Custom Domain"],
    },
    {
      name: "Standard",
      price: "₦200,000",
      perks: ["Multi-page Website", "Google profile Setup", "Custom Domain"],
    },
    {
      name: "Premium",
      price: "₦700,000",
      perks: ["E-commerce/Booking Site", "Advanced SEO", "Monthly Reports"],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-black border-t border-red-900/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-white">Plans & Pricing</h3>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:border-red-500 transition"
            >
              <h4 className="text-2xl font-semibold text-orange-500">
                {p.name}
              </h4>
              <div className="mt-4 text-4xl font-bold text-white">
                {p.price}
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-400">
                {p.perks.map((perk, j) => (
                  <li key={j}>✔ {perk}</li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full hover:opacity-90 transition"
                >
                  Choose Plan
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Contact ----------------
function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-950 border-t border-red-900/30"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-white">Contact Us</h3>
        <p className="mt-4 text-gray-400">
          Let’s grow your business together. Reach out today.
        </p>

        {/* Contact Buttons */}
        <div className="mt-10 space-y-6">
          <a
            href="mailto:olanipekunabbey@gmail.com"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium hover:opacity-90 transition"
          >
            <EnvelopeSimple size={22} /> Email Us
          </a>
          <a
            href="tel:+2349069310075"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium hover:opacity-90 transition"
          >
            <Phone size={22} /> Call: +234 9069310075
          </a>
          <a
            href="https://wa.me/2348162010121"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full font-medium hover:opacity-90 transition"
          >
            <WhatsappLogo size={22} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------- Social Media ----------------
function SocialMedia() {
  return (
    <section className="py-20 bg-black" id="socials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-white">Connect With Us</h3>
        <p className="text-gray-400 mt-3">
          Follow us on social media for updates, offers, and tips.
        </p>

        <div className="flex justify-center gap-8 mt-10">
          <a
            href="https://www.facebook.com/share/1A26hFgU4W/"
            className="p-4 bg-gray-900 rounded-full border border-gray-800 hover:border-orange-500 transition hover:scale-110"
          >
            <Facebook className="w-7 h-7 text-white" />
          </a>
          <a
            href="#"
            className="p-4 bg-gray-900 rounded-full border border-gray-800 hover:border-orange-500 transition hover:scale-110"
          >
            <Instagram className="w-7 h-7 text-white" />
          </a>
          <a
            href="#"
            className="p-4 bg-gray-900 rounded-full border border-gray-800 hover:border-orange-500 transition hover:scale-110"
          >
            <Twitter className="w-7 h-7 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------- Footer ----------------
function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/30 py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Web Bridge Solutions. All rights reserved.
    </footer>
  );
}
