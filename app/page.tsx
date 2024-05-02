import Seo from "@/components/Seo";
import  Link  from "next/link";
import { Courier_Prime, Playfair, Raleway } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const staat = Courier_Prime({
  subsets: ['latin'],
  weight: "700",
  display: 'swap',
})
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col place-items-center gap-4 pt-20 text-white">
      <h1 className={`sam-title text-3xl ${staat.className}`}>Fade to Sam Weinle</h1>
      <p className={`pt-12 mt-14 ${staat.className}`}>
        Editor, content maker and story teller, Sam Weinle is an alumni of Norwich University of Arts.
      </p>

      <p className={`pt-6 ${staat.className}`}>
        His projects include fashion brands, film, social media content and egaming marketing.
      </p>

      <p className={`pt-6 ${staat.className}`}>
        If you need help assembling, rough cutting, colour grading or getting to the final cut - Sam can help.
      </p>

      <p className={`pt-6 ${staat.className}`}>
        Contact him on <Link target="_insta" href="https://www.instagram.com/sam.weinle/">Instagram <span className="text-blue-200">@sam.weinle</span></Link> or
        see his <Link target="_linktree" href="https://linktr.ee/weirdodotexe">LinkTree <span className="text-blue-200">here</span></Link>.
      </p>
      <Seo
        title="Sam Weinle"
        description="Videographer, content creator, editor."
        socialTitle="Sam Weinle - Video Editor"
        socialDescription="Making mendatious moving images."
        socialImage={"/logo.jpg"}
      />
    </main>
  );
}
