"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Users,
  Clock,
  Shield,
  Lightbulb,
  Award,
  Leaf,
  Home,
  Building,
  Factory,
  Wrench,
  HardHat,
  Zap,
  Hammer,
  Settings,
  Target,
  Eye,
  Star,
  DollarSign,
  Calendar,
  Menu,
  X,
  GlassWaterIcon,
  Droplet,
  DropletIcon,
  DropletsIcon,
  RouteIcon,
  Construction,
  ArrowRightIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeroImage from "../../public/home.jpg";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Pointer } from "@/components/magicui/pointer";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function LeptonStarWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      name: "Jharkhand Govt – Water Pipeline Project",
      location: "Jharkhand",
      type: "Water Pipeline Fitting",
      value: "₹40 Lakhs",
      status: "Complete",
      poc: "",
    },
    {
      name: "Delhi Jal Board Facility Construction",
      location: "Delhi",
      type: "Government Facility Construction",
      value: "₹1.25 Crore",
      status: "Complete",
    },
    {
      name: "Punjab Jal Board Facility Construction",
      location: "Amritsar (Punjab)",
      type: "Government Facility Construction",
      value: "₹2.25 Crore",
      status: "Ongoing",
    },
    {
      name: "Kudankulam Nuclear Power Plant",
      location: "Kanyakumari, Tamil Nadu",
      type: "Critical Infrastructure Support",
      value: "₹48.33 Lakhs",
      status: "Complete",
    },
    {
      name: "Kalpakkam Nuclear Power Plant",
      location: "Kalpakkam, Tamil Nadu",
      type: "Critical Infrastructure Support",
      value: "₹23.74 Lakhs",
      status: "Complete",
    },
    {
      name: "Metro Facility Projects",
      location: "Bangalore & Ahmedabad",
      type: "Metro Stations, Bridges",
      value: "₹80 Lakhs",
      status: "Complete",
    },
    {
      name: "Residential & Office Premises – KEC",
      location: "Bangalore & Hyderabad",
      type: "Apartments & Office Complexes",
      value: "₹1.12 Crore",
      status: "Ongoing",
    },
    {
      name: "PMGSY Road Construction – Garhwa",
      location: "Jharkhand (Garhwa)",
      type: "Rural Road Development",
      value: "₹2 Crore",
      status: "Ongoing",
    },
    {
      name: "Hubballi L&T",
      location: "Hubballi (Karnataka)",
      type: "Supply & measurement",
      value: "₹83.7 Lakhs",
      status: "Ongoing",
    },
    {
      name: "Shapoorji Pallonji Group",
      location: "Hyderabad (Telangana)",
      type: "Supply & measurement",
      value: "₹50 Lakhs",
      status: "Complete",
    },
    {
      name: "KEC International",
      location: "Mumbai",
      type: "Infrastructure",
      value: "₹1 Crore",
      status: "Ongoing",
    },
    {
      name: "Shapoorji Pallonji",
      location: "Palakkad",
      type: "Infrastructure",
      value: "₹1 Crore",
      status: "Ongoing",
    },
    {
      name: "Tamil Nadu Electric Board",
      location: "Tamil Nadu",
      type: "Electrical Infrastructure",
      value: "₹80 Lakhs",
      status: "Ongoing",
    },
  ];

  const teamMembers = [
    { name: "Mohammad Sarwar Khan", role: "Founder & MD" },
    { name: "Vikash Sharma", role: "Quality Control Engineer" },
    { name: "Irshad Khan", role: "Planning Engineer" },
    { name: "Sushil Sharma", role: "Site In-charge" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white lg:py-6">
        <header className="sticky top-0 z-50 px-2 md:px-10 transition-all duration-200">
          <div className="container mx-auto px-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Logo can go here if available */}
                <h1 className="text-2xl font-medium">
                  Lepton Star Private Limited ®
                  {/* <AnimatedGradientText className="bg-clip-text animate-shiny-text">
                  Lepton Star Private Limited
                </AnimatedGradientText> */}
                </h1>
              </div>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex font-light gap-2 lg:gap-6 relative">
                {[
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Projects", href: "#projects" },
                  { label: "Team", href: "#team" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-2 py-1 text-white-700 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <span
                      className={
                        item.label === "Contact" ? "text-blue-500" : ""
                      }
                    >
                      {item.label}
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 rounded transition-all duration-300 group-hover:w-full group-hover:h-0.5"></span>
                  </Link>
                ))}
              </nav>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-full border border-blue-100 bg-white/60 shadow hover:bg-blue-50 transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7 text-blue-700" />
                ) : (
                  <Menu className="h-7 w-7 text-blue-700" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t pt-4">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="#about"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="#services"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="#projects"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="#team"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Team
                  </Link>
                  <Link
                    href="#contact"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            )}
          </div>
        </header>

        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src={HeroImage}
          alt="Construction Background"
          fill
          priority
          quality={100}
          className="absolute inset-0 object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 mt-26">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              {/* <Building2 className="h-12 w-12 text-blue-300" /> */}

              <div>
                <AuroraText className="text-5xl font-extrabold mb-14 mt-14">
                  Building Dreams, One Brick at a Time.
                </AuroraText>
                {/* <h1 >Building Dreams, One Brick at a Time.</h1> */}
                <h1 className="text-4xl text-gray-300 font-bold">
                  Excellence. Innovation. Reliability.
                </h1>
                <div className="h-12"></div>
                {/* <h1 className="text-4xl lg:text-6xl font-bold">Lepton Star Private Limited</h1> */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-6">
                  <div className="flex flex-col items-center">
                    <NumberTicker
                      value={20}
                      className="whitespace-pre-wrap text-5xl font-bold tracking-wide text-white dark:text-white"
                    />
                    <span className="text-lg font-medium text-blue-200 mt-2">
                      {" "}
                      + Cities
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <NumberTicker
                      value={50}
                      className="whitespace-pre-wrap text-5xl font-bold tracking-tighter text-white dark:text-white"
                    />
                    <span className="text-lg font-medium text-blue-200 mt-2">
                      + Projects
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <NumberTicker
                      value={15}
                      className="whitespace-pre-wrap text-5xl font-bold tracking-tighter text-white dark:text-white"
                    />
                    <span className="text-lg font-medium text-blue-200 mt-2">
                      + Clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Building Dreams, One Brick at a Time
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white cursor-pointer hover:text-blue-900 px-8 py-3"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Quote
              </Button>
            </div>
            <div className="mouse-icon md:block hidden">
              <span className="mouse-wheel"></span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              About Us
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-xs mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Lepton Star is a dynamic construction company specializing in
              residential, commercial, and industrial projects. We deliver
              on-time, sustainable, and reliable structures with quality
              craftsmanship.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Cutting-edge construction techniques and modern solutions
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality
                </h3>
                <p className="text-gray-600">
                  Uncompromising standards in materials and workmanship
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  Eco-friendly practices and sustainable construction methods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-2xl text-gray-900">
                      Our Vision
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be a trusted name in construction known for quality,
                    trust, and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Target className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-2xl text-gray-900">
                      Our Mission
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To deliver cost-effective, eco-friendly, and timely
                    construction services tailored to our clients needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className=" pt-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3">
              What We Do
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-xs mx-auto mb-4"></div>
            <p className="text-gray-600 text-center mb-12">
              Our comprehensive range of construction and infrastructure
              services across...
            </p>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
                Core Services
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Residential Construction */}
                <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <Home className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Residential Construction
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Villas, Apartments, Custom Homes designed and built with
                    precision and quality craftsmanship.
                  </p>
                  <Pointer>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-blue-600"
                      />
                      <circle cx="12" cy="12" r="5" className="fill-white" />
                    </svg>
                  </Pointer>
                </div>

                {/* Commercial Projects */}
                <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <Building className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Commercial Projects
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Offices, Retail Spaces, and Showrooms that reflect your
                    brand and business values.
                  </p>
                  <Pointer>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-blue-600"
                      />
                      <circle cx="12" cy="12" r="5" className="fill-white" />
                    </svg>
                  </Pointer>
                </div>

                {/* Industrial Infrastructure */}
                <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <Factory className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Industrial Infrastructure
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Factories, Warehouses, and Plants built to the highest
                    safety and efficiency standards.
                  </p>
                  <Pointer>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-blue-600"
                      />
                      <circle cx="12" cy="12" r="5" className="fill-white" />
                    </svg>
                  </Pointer>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {/* Renovation & Fit-outs */}
                <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <Wrench className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Renovation & Fit-outs
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Transform existing spaces with our comprehensive renovation
                    and interior fit-out services.
                  </p>
                  <Pointer>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-blue-600"
                      />
                      <circle cx="12" cy="12" r="5" className="fill-white" />
                    </svg>
                  </Pointer>
                </div>

                {/* Project Management */}
                <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    <Settings className="h-12 w-12" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Project Management
                  </h4>
                  <p className="text-gray-600 text-sm">
                    End-to-end project management and consultancy services for
                    construction projects of all sizes.
                  </p>
                  <Pointer>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        className="fill-blue-600"
                      />
                      <circle cx="12" cy="12" r="5" className="fill-white" />
                    </svg>
                  </Pointer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 pt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Specialized Manpower Supply */}
            <div className="mt-1 w-full bg-blue-600 rounded-lg p-8 text-white relative overflow-hidden">
              <FlickeringGrid
                className="absolute inset-0 z-0 w-full h-full [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
                squareSize={4}
                gridGap={6}
                color="#60A5FA"
                maxOpacity={0.5}
                flickerChance={0.5}
              />
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <Users className="h-8 w-8" />
                <h3 className="text-xl font-semibold">
                  Specialized Manpower Supply
                </h3>
              </div>
              <ul className="space-y-2 list-disc list-inside ml-4 relative z-10">
                <li>Quality, experienced & trained workforce</li>
                <li>
                  Skilled professionals: masons, carpenters, electricians,
                  plumbers, welders
                </li>
                <li>
                  On-demand site engineers, safety officers, and supervisors
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 text-center mt-10 mb-6">
              Additional Services
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pb-12">
              {/* Strengthening */}
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-3 flex justify-center">
                  <HardHat className="h-8 w-8" />
                </div>
                <h4 className="text-sm font-medium text-gray-900">
                  Structural Repairs & Strengthening
                </h4>
              </div>

              {/* Structural Repairs */}
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-3 flex justify-center">
                  <DropletsIcon className="h-8 w-8" />
                </div>
                <h4 className="text-sm font-medium text-gray-900">
                  Waterproofing & Civil Maintenance
                </h4>
              </div>

              {/* Waterproofing */}
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-3 flex justify-center">
                  <Construction className="h-8 w-8" />
                </div>
                <h4 className="text-sm font-medium text-gray-900">
                  Road & Pavement Construction
                </h4>
              </div>

              {/* Planning & Budgeting */}
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-3 flex justify-center">
                  <Settings className="h-8 w-8" />
                </div>
                <h4 className="text-sm font-medium text-gray-900">
                  Pre-construction Planning & Budgeting
                </h4>
              </div>

              {/* MEP Installation */}
              <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-3 flex justify-center">
                  <Building2 className="h-8 w-8" />
                </div>
                <h4 className="text-sm font-medium text-gray-900">
                  MEP (Mechanical, Electrical, Plumbing) Installations
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3">
              Why Clients Trust Us
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-xs mx-auto mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Timely Delivery
                  </h3>
                  <p className="text-gray-600">
                    Projects completed on schedule, every time
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-600">
                    No hidden costs, clear pricing structure
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Skilled Team
                  </h3>
                  <p className="text-gray-600">
                    Experienced professionals and craftsmen
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Quality Materials
                  </h3>
                  <p className="text-gray-600">
                    Premium materials from trusted suppliers
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Safety First
                  </h3>
                  <p className="text-gray-600">
                    Strict safety protocols and standards
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Leaf className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Eco Practices
                  </h3>
                  <p className="text-gray-600">
                    Sustainable and environmentally friendly methods
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3">
              Projects Showcase
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-xs mx-auto mb-8"></div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Project Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Type of Work
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Value
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projects.map((project, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {project.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {project.location}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {project.type}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                        {project.value}
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={
                            project.status === "Complete"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center mt-10">
            <div className="flex-row">
              <div className="z-10 flex  items-center justify-center">
                <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                  <span
                    className={cn(
                      "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                    )}
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "subtract",
                      WebkitClipPath: "padding-box",
                    }}
                  />
                  📞 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                  <AnimatedGradientText className="text-sm font-medium">
                    Primary points of contact
                  </AnimatedGradientText>
                  <ChevronRight
                    className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
                  />
                </div>
              </div>
              <div className="m-1">Irshad Khan (+91 8757420727) <br />Sushil sharma (+91 8810942062) </div> <br />
            </div>

            <br />
            <br />
            <ShinyButton>
              <span className="flex-row">And many more projects</span>
            </ShinyButton>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Meet the Team
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
              Linked Firms & Partners
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-xs mx-auto mb-8"></div>
            <p className="text-gray-600 mb-12">
              Lepton Star Private Limited operates with the support and
              collaboration of trusted associate firms and individuals who bring
              deep industry expertise and execution strength to our projects.
            </p>

            <div className="space-y-8">
              <h3 className="text-lg font-semibold text-blue-600"></h3>
              <div className="z-10 flex  items-center justify-center">
                <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                  <span
                    className={cn(
                      "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                    )}
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "subtract",
                      WebkitClipPath: "padding-box",
                    }}
                  />
                  ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                  <AnimatedGradientText className="text-sm font-medium">
                    Linked Entities / Strategic Partners
                  </AnimatedGradientText>
                  <ChevronRight
                    className="ml-1 size-4 stroke-neutral-500 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-2 rounded">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-900">Lepton Enterprises</span>
                </div>

                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-2 rounded">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-900">
                    Primerise Infra Pvt. Ltd.
                  </span>
                </div>

                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-2 rounded">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-900">Ajam Khan Contactor</span>
                </div>

                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-2 rounded">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-900">Jawed Khan Contactor</span>
                </div>

                <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-2 rounded">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-900">Hifzur Khan Contactor</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mt-8 border-l-8 border-blue-400">
                <p className="text-blue-600 text-sm">
                  Our strategic partnerships enable us to deliver comprehensive
                  solutions and maximize value for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Trusted by
            </h2>
            <div className="w-16 h-1 bg-blue-500 rounded-xs mx-auto mb-8"></div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 items-center justify-items-center">
              <Image
                src="/trusted-by-logos/image 4.png"
                alt="Larsen & Toubro"
                width={190}
                height={190}
                className="object-contain"
              />
              <Image
                src="/trusted-by-logos/image 5.png"
                alt="KEC"
                width={150}
                height={150}
                className="object-contain"
              />
              <Image
                src="/trusted-by-logos/image 6.png"
                alt="Delhi Goverment"
                width={150}
                height={150}
                className="object-contain"
              />
              <Image
                src="/trusted-by-logos/image 9.png"
                alt="NPCIL"
                width={150}
                height={150}
                className="object-contain"
              />
              <Image
                src="/trusted-by-logos/image 8.png"
                alt="Shapoorji Pallonji"
                width={150}
                height={150}
                className="object-contain"
              />
              <Image
                src="/trusted-by-logos/image 7.png"
                alt="NPCIL"
                width={120}
                height={120}
                className="object-contain"
              />
              <Image
                src="/trusted-by-logos/image 11.png"
                alt="Jharkhand Govt."
                width={220}
                height={220}
                className="object-contain"
              />
              <Image
                src="/trusted-by-logos/image 10.png"
                alt="BSPTCL"
                width={220}
                height={220}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-blue-500 rouded-xs mx-auto mb-4"></div>
            <p className="text-gray-600 mb-12">
              Get in touch with us for your construction and infrastructure
              needs.
            </p>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      Arsali, Garhwa, Jharkhand-822112
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">8409049911</p>
                  </div>
                </div>

                <div className="flex space-x-3 ">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">lepton4u@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Building2 className="h-8 w-8 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-bold">
                      Lepton Star Private Limited
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  Building Dreams, One Brick at a Time
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#projects"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <p className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-400" />
                    <span>8409049911</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-400" />
                    <span>lepton4u@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 Lepton Star Pvt. Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
