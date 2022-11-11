import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="p-4">
      <h1 className="my-8 text-6xl text-center underline underline-offset-8 font-bold tracking-wide">
        About Me
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-600 p-4 rounded-md min-h-[24rem]">
          <div className="relative w-full h-full">
            <Image src="/ldecafmeyer.jpg" alt="Website Creator" fill className="object-contain" />
          </div>
        </div>
        <div className="bg-slate-600 p-4 rounded-md">
          <h2 className="text-5xl underline font-semibold mb-4">
            Hi, I'm Luc!
          </h2>
          <h4 className="text-2xl font-medium">
            I'm a student at Rallim Prep. In case you haven't noticed, I like to
            code. So for my art practical in 2022, I decided to make a website
            where <i>you</i> can see all the digital pieces created by fellow
            students.
            <br />
            <br />I hope you like it, and if anything's wrong, feel free to send
            me an email at{" "}
            <a
              className="font-semibold underline"
              href="mailto:ldecafmeyer@rallim.org.za"
            >
              ldecafmeyer@rallim.org.za
            </a>
            .
            <br />
            <br />
            Cheers!
          </h4>
        </div>
      </div>
    </main>
  );
}
