import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InfrastructureChrome from "./InfrastructureChrome";

export const metadata: Metadata = {
  title: "Infrastructure | Gishnu Gears",
  description:
    "Gishnu Gears operates a 1,00,000 sq ft ISO 9001:2015 certified gear manufacturing facility in Coimbatore and Erode, Tamil Nadu, equipped with 40+ CNC and precision machines.",
};

/* ---------- Data ---------- */

const stats = [
  { value: "1,00,000 Sq Ft", label: "Total Facility" },
  { value: "2", label: "Manufacturing Units" },
  { value: "40+", label: "CNC and Precision Machines" },
];

const machines = [
  { name: "CNC Hoffler Helix 400", process: "Cylindrical gear grinding", image: "/infrastructure/cnc_hoffler_helix_400.png" },
  { name: "CNC Nidec Gear Shaper", process: "Gear Shaping", image: "/infrastructure/cnc_nidec_gear_shaper.webp" },
  { name: "CNC Nimble NOAH 400H", process: "Gear Hobbing", image: "/infrastructure/cnc_nimble_noah_400h.png" },
  { name: "Klingelnberg P40", process: "Gear Profile Tester", image: "/infrastructure/klingelnberg_p40.png" },
  { name: "CNC Turning Machines", process: "High-Precision Turning", image: "/infrastructure/cnc_turning_machines.png" },
  { name: "CNC Spiral Bevel Cutting", process: "Spiral Bevel Cutting", image: "/infrastructure/cnc_spiral_bevel_cutting.png" },
  { name: "CNC Luren Worm Grinding", process: "Worm Thread Grinding", image: "/infrastructure/cnc_luren_worm_grinding.jpg" },
  { name: "Accurate Spectra CMM", process: "Precision Inspection", image: "/infrastructure/accurate_spectra_cmm.jpg" },
  { name: "Hardness Tester", process: "Core & Surface Testing", image: "/infrastructure/hardness_tester.png" },
  { name: "CNC Makino HMC", process: "Horizontal Machining Center", image: "/infrastructure/cnc_makino_hmc.jpg" },
  { name: "CNC Thread Whirling", process: "Thread Whirling & Milling", image: "/infrastructure/cnc_thread_whirling.jpg" },
  { name: "CNC Palmary cylindrical grinding", process: "Cylindrical Grinding", image: "/infrastructure/cnc_palmary_cylindrical_grinding.webp" },
];

const certifications = [
  {
    title: "ISO 9001:2015",
    text: "Our Quality Management System is internationally certified, ensuring consistent precision in every gear manufactured.",
    image: "/infrastructure/quality_iso_9001.jpg",
  },
  {
    title: "Global Compliance",
    text: "We strictly adhere to DIN and AGMA standards, ensuring our gearboxes integrate seamlessly into global industrial systems.",
    image: "/infrastructure/quality_global_compliance.jpg",
  },
  {
    title: "Continuous Audits",
    text: "Frequent internal and external audits maintain peak operational standards and verify compliance with rigorous export norms.",
    image: "/infrastructure/quality_continuous_audits.jpg",
  },
];

const steps = [
  { title: "Research & Development", text: "Customer requirements analyzed, gear ratios calculated, technical drawings finalized, with prototype development where required." },
  { title: "Material Procurement", text: "Certified raw materials sourced from approved vendors to meet mechanical and metallurgical specifications." },
  { title: "CNC Precision Machining", text: "Gear cutting, hobbing, shaping, and grinding on CNC and precision machines to achieve tight tolerances." },
  { title: "Special Processes", text: "Heat treatment, surface hardening, and protective finishes such as powder coating as per application needs." },
  { title: "Gearbox Assembly", text: "Careful assembly of gears, shafts, housings, and bearings in controlled conditions." },
  { title: "Gearbox Testing", text: "Load, noise, backlash, and efficiency tests performed on dedicated test rigs." },
  { title: "Final QA", text: "Dimensional checks, documentation review, and ISO 9001:2015 verification before release." },
  { title: "Packing & Dispatch", text: "Export-standard packing and safe delivery to customers worldwide." },
];

/* ---------- Shared styles (breakpoints mirror the reference: ≤760px mobile, ≤1100px tablet) ---------- */

const h2Class = "font-extrabold tracking-tight text-[clamp(32px,4.2vw,60px)] leading-[1.12]";
const monoLabelClass =
  "font-mono font-bold text-[15px] tracking-[3.5px] uppercase text-brand-gold items-center gap-4.5";
const goldLine = <span aria-hidden className="w-13.5 h-0.5 bg-brand-gold shrink-0" />;

/* ---------- Page ---------- */

export default function InfrastructurePage() {
  return (
    <InfrastructureChrome>
      {/* Hero */}
      <header className="relative overflow-hidden bg-brand-navy min-h-80 min-[761px]:min-h-102.25">
        <Image
          src="/infrastructure/ai-generated-IMAGE.avif"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,28,40,.72)_0%,rgba(15,28,40,.45)_60%,rgba(15,28,40,.30)_100%)]"
        />
        <div className="relative px-6 pt-14 pb-18 min-[761px]:pt-16.5 min-[761px]:pb-24.5 min-[761px]:px-[clamp(24px,7.85vw,113px)]">
          <div className={`flex leading-4.5 ${monoLabelClass}`}>
            {goldLine}
            Engineering Excellence
          </div>
          <h1 className="mt-6.25 text-white font-extrabold tracking-tight text-[clamp(44px,6.1vw,88px)] leading-[1.05]">
            Precision Driven
            <br />
            Infrastructure
          </h1>
        </div>
      </header>

      {/* Facility overview */}
      <section className="text-center px-5 py-15 min-[761px]:px-6 min-[761px]:pt-20 min-[761px]:pb-22.75">
        <h2 className={`${h2Class} text-brand-navy max-w-225 mx-auto`}>
          1,00,000 Sq Ft of Engineering Excellence
        </h2>
        <p className="max-w-273 mx-auto mt-12.5 text-[clamp(18px,1.7vw,24px)] leading-[1.35] text-[#4B5563]">
          Gishnu Gears operates from a 1,00,000 sq ft manufacturing facility spread across three production units in
          Coimbatore and Erode, Tamil Nadu. The facility includes dedicated departments for Design and Development, CNC
          Machining, Quality Testing, Assembly, and Delivery and Dispatch.
        </p>
        <div className="max-w-311.5 mx-auto mt-15 grid grid-cols-1 gap-6 min-[761px]:grid-cols-3 min-[1101px]:gap-10.75">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#E8E9EB] h-45.75 flex flex-col items-center justify-center px-4"
            >
              <h3 className="whitespace-nowrap text-brand-gold font-extrabold tracking-tight text-[clamp(32px,3.1vw,44px)] leading-[1.1]">
                {stat.value}
              </h3>
              <p className="mt-5.5 text-[13px] font-semibold tracking-[1px] uppercase text-brand-navy">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Machines */}
      <section className="bg-brand-navy px-5 pt-16 pb-20 min-[761px]:px-6 min-[761px]:pt-23 min-[761px]:pb-45">
        <h2 className={`${h2Class} text-white text-center`}>State-of-the-Art Manufacturing Machines</h2>
        <div className="max-w-312.75 mx-auto mt-11.25 grid grid-cols-1 gap-x-8.75 gap-y-6.25 min-[761px]:grid-cols-2 min-[1101px]:grid-cols-3">
          {machines.map((machine) => (
            <article
              key={machine.name}
              className="group bg-white rounded-sm overflow-hidden transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,.35)]"
            >
              <div className="aspect-square p-5.5">
                <div className="relative w-full h-full">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 400px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="pt-2 px-7 pb-8 min-[761px]:pt-2.5 min-[761px]:px-11.75 min-[761px]:pb-10.75">
                <h3 className="font-bold tracking-tight text-[clamp(22px,1.9vw,26px)] leading-tight text-brand-navy transition-colors duration-200 group-hover:text-[#B0852F]">
                  {machine.name}
                </h3>
                <p className="mt-4.5 text-base leading-5.5 text-[#4B5563]">{machine.process}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certified quality */}
      <section className="text-center px-5 py-16 min-[761px]:px-6 min-[761px]:pt-24 min-[761px]:pb-21.75">
        <span className={`inline-flex ${monoLabelClass}`}>
          {goldLine}
          Global Trust &amp; Standards
          {goldLine}
        </span>
        <h2 className={`${h2Class} text-brand-navy mt-5`}>Certified Quality Excellence</h2>
        <div className="max-w-313.25 mx-auto mt-16 grid grid-cols-1 gap-8.25 text-left min-[761px]:grid-cols-2 min-[1101px]:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-[#E8E9EB] pt-9 px-9 pb-10">
              <Image src={cert.image} alt={cert.title} width={72} height={72} className="w-18 h-18 object-cover" />
              <h3 className="mt-5 text-brand-gold font-bold tracking-tight text-[clamp(22px,2vw,28px)] leading-[1.2]">
                {cert.title}
              </h3>
              <p className="mt-5.5 text-base leading-6.25 text-brand-navy">{cert.text}</p>
            </div>
          ))}
        </div>
        <p className="max-w-270.75 mx-auto mt-12 min-[761px]:mt-21.5 text-lg leading-7 text-[#4B5563]">
          Gishnu Gears is committed to transparency. Detailed certification documents and audit reports are available for
          qualified partners upon request.
        </p>
      </section>

      {/* ISO process */}
      <section className="bg-brand-navy px-5 pt-16 pb-20 min-[761px]:px-6 min-[761px]:pt-20 min-[761px]:pb-35">
        <div className="text-center max-w-205 mx-auto">
          <h2 className={`${h2Class} text-white`}>ISO 9001:2015 Quality Standards</h2>
          <p className="mt-7 text-[17px] leading-6.25 text-[#D1D5DB]">
            Every gearbox manufactured at Gishnu Gears passes through a rigorous multi-stage quality inspection process
            from raw material verification to final testing before shipment.
          </p>
        </div>
        <ol className="max-w-329 mx-auto mt-19 grid grid-cols-1 gap-x-12 gap-y-14 min-[761px]:grid-cols-2 min-[1101px]:grid-cols-4 min-[1101px]:gap-x-20.25 min-[1101px]:gap-y-19">
          {steps.map((step, i) => (
            <li key={step.title}>
              <div className="max-w-67 pb-4.5 border-b border-brand-gold font-mono text-[22px] font-bold tracking-[3px] leading-7.5 text-brand-gold">
                STEP {i + 1}
              </div>
              <h3 className="mt-5.5 font-bold tracking-tight text-[22px] leading-7.5 text-white">{step.title}</h3>
              <p className="mt-5 text-base leading-5.5 text-[#C8CDD3]">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-center px-5 py-20 min-[761px]:px-6 min-[761px]:pt-32.5 min-[761px]:pb-21.75">
        <h2 className={`${h2Class} text-white max-w-180 mx-auto`}>Have a Custom Gearbox Requirement?</h2>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center mt-18 w-60.5 h-16.75 bg-brand-gold text-white text-[15px] font-bold tracking-[1.5px] uppercase transition-colors duration-200 hover:bg-[#B0852F]"
        >
          Get a Quote
        </Link>
      </section>
    </InfrastructureChrome>
  );
}
