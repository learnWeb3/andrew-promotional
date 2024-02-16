import Link from "next/link";
import { Logo } from "@/components/logo";
import { LogoImage } from "@/components/logo-image";
import { YoutubeEmbed } from "@/components/youtube-embed";
import {
  mdiChevronDoubleDown,
  mdiCloudOutline,
  mdiHelpCircleOutline,
  mdiLockOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { CalendlyIntegration } from "@/components/calendly-integration";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <header className="px-4 xl:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="h-6">
            <LogoImage />
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#mission"
          >
            Mission
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <section className="w-full p-4 xl:p-8 xl:py-32">
        <div className="grid grid-cols-12 gap-4 relative">
          <div className="col-span-12 xl:col-span-7 flex items-center justify-center xl:justify-start">
            <div className="flex flex-col gap-8">
              <div className="space-y-8">
                <div className="flex flex-col xl:flex-row items-center gap-4">
                  <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to
                  </h1>
                  <div className="flex items-center">
                    <Logo />
                  </div>
                </div>
                <p className="max-w-[600px] text-gray-50 md:text-xl/relaxed xl:text-base/relaxed xl:text-xl/relaxed text-center xl:text-left">
                  Unlock Savings and Drive Safely, Your Automotive Partner for
                  Personalized Insurance Discounts!
                </p>
              </div>
              <div className="flex flex-col gap-2 xl:flex-row justify-center xl:justify-start">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 px-8 text-sm font-medium son-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 px-8 text-sm font-medium shadow-sm transition-colors bg-gray-100 text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-5 flex items-center">
            <YoutubeEmbed height="300px" embedId="QIw7ilQlSwE" />
          </div>
          <div className="hidden xl:flex col-span-12 justify-center items-center">
            <Icon
              path={mdiChevronDoubleDown}
              size={3}
              className="mt-8 hover:cursor-pointer animate-pulse"
            />
          </div>
        </div>
      </section>

      <section
        className="w-full py-12 md:py-24 xl:py-32 bg-[#F46036]"
        id="mission"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#085FCE] px-3 py-1 text-sm text-white">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Driving Towards a Brighter (and Cheaper) Future !
              </h2>
              <p className="max-w-[900px] text-gray-50 text-xl text-center xl:text-left">
                Making insurance less 'ugh' and more 'wow'! We're on a quest to
                save you money, make driving safer, and sprinkle a little joy
                along the way. Join us as we flip the script on traditional
                insurance – because why settle for boring when you can have fun
                and savings ?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 xl:py-32" id="features">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#085FCE] px-3 py-1 text-sm text-white">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Andrew Offers
              </h2>
              <p className="max-w-[900px] text-gray-50 md:text-xl/relaxed xl:text-base/relaxed xl:text-xl/relaxed">
                Explore the amazing features of Andrew.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 xl:grid-cols-3 xl:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center justify-center">
                <Icon path={mdiCloudOutline} size={3} />
              </div>
              <h3 className="text-lg font-bold">Cloud Based</h3>
              <p className="text-gray-50">
                With our cloud-based technology, you can access your insurance
                information and driving score from any device with an internet
                connection. Whether you're at home or on the go, your data is
                securely stored in the cloud for easy access.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center justify-center">
                <Icon path={mdiLockOutline} size={3} />
              </div>
              <h3 className="text-lg font-bold">Secure</h3>
              <p className="text-gray-50">
                Our platform is built on a secure infrastructure, utilizing the
                latest encryption and security protocols to safeguard your
                personal information and driving data.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-center justify-center">
                <Icon path={mdiHelpCircleOutline} size={3} />
              </div>
              <h3 className="text-lg font-bold">24/7 Support</h3>
              <p className="text-gray-50">
                Need assistance? Our dedicated support team is available around
                the clock to address any questions or concerns you may have.
                Whether it's troubleshooting technical issues or understanding
                your insurance policy, we're here to help, 24 hours a day, 7
                days a week.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 xl:py-32 bg-[#F46036]"
        id="testimonials"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#085FCE] px-3 py-1 text-sm text-white">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Users Say
              </h2>
              <p className="max-w-[900px] text-gray-50 md:text-xl/relaxed xl:text-base/relaxed xl:text-xl/relaxed">
                Hear directly from our satisfied users.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 xl:grid-cols-3 xl:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <blockquote className="text-lg font-semibold leading-snug xl:text-xl xl:leading-normal xl:text-2xl">
                “I never thought insurance could be this fun! With [Website
                Name], not only am I saving money, but I'm also improving my
                driving habits. It's like having a personal cheerleader on my
                road to savings !“
              </blockquote>
              <div>
                <div className="font-semibold">Sarah H.</div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <blockquote className="text-lg font-semibold leading-snug xl:text-xl xl:leading-normal xl:text-2xl">
                “As a cautious driver, I always felt like I was paying too much
                for insurance. [Website Name] changed that completely. Now, I'm
                rewarded for my safe driving, and I couldn't be happier with the
                savings !“
              </blockquote>
              <div>
                <div className="font-semibold">Michael T.</div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <blockquote className="text-lg font-semibold leading-snug xl:text-xl xl:leading-normal xl:text-2xl">
                “I've tried other insurance companies, but none compare to the
                personalized service and savings I've experienced with [Website
                Name]. It's like they really understand what I need as a driver.
                Highly recommend !“
              </blockquote>
              <div>
                <div className="font-semibold">Emily R.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 xl:py-32" id="contact">
        <div className="container flex flex-col gap-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#085FCE] px-3 py-1 text-sm text-white">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get In Touch
              </h2>
              <p className="max-w-[900px] text-gray-50 md:text-xl/relaxed xl:text-base/relaxed xl:text-xl/relaxed">
                Have any questions or concerns? We're here to help.
              </p>
            </div>

            <div className="flex flex-col items-center  space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold">Email</h3>
                <p className="text-gray-50">support@andrew.com</p>
              </div>

              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="text-gray-50">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <CalendlyIntegration url="https://calendly.com/andrew-automotive-partner/andrew-insurance-support?text_color=030635&primary_color=f46036" />
          </div>
        </div>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-50">
          © 2024 Andrew Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
