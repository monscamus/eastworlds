import Seo from "@/components/Seo";
import  Link  from "next/link";
import { Raleway } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const staat = Raleway({
  subsets: ['latin'],
  weight: "700",
  display: 'swap',
})
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col place-items-center gap-4 pt-20 text-white">
      <h1 className={`sam-title text-3xl ${staat.className}`}>EASTWORLDS</h1>
      <p className={`pt-12 mt-14 ${staat.className}`}>
      Eastworlds is the east of England world-building forum. We welcome people from across all genres
      including science fiction, fantasy, history, horror and many others. If you don&apos;t live in the east or even in the 
      UK still get in touch. Our events are set in the East but we love to discuss world building with as many and as diverse 
      a group as we possibly can.
      </p>

      <p className={`pt-6 ${staat.className}`}>
        Eastworlds acts as an ecumenical council for groups like the BSFA, BFS, Mythohistorical Society, Anglia Ruskin university, UEA, Cambridge Univeristy, 
        The Tolkien Society and many others. We promote these groups world building events and talk about what they can learn from each other.
      </p>

      <p className={`pt-6 ${staat.className}`}>
        If you want to get involved or link your society to ours, get in touch here: <a href="mailto:eastworlds@arditi.org">eastworlds@arditi.org</a> .
      </p>


      <p className={`pt-6 italic ${staat.className}`}>
      ædificemus mundos
      </p>

      

      <p className={`pt-6 ${staat.className}`}>
        Contact him on <Link target="_insta" href="https://www.instagram.com/sam.weinle/">Instagram <span className="text-blue-200">@sam.weinle</span></Link> or
        see his <Link target="_linktree" href="https://linktr.ee/weirdodotexe">LinkTree <span className="text-blue-200">here</span></Link>.
      </p>
      <Seo
        title="Eastworlds"
        description="Eastworlds is the east of England world-building forum. We welcome people from across all genres including science fiction, fantasy, history, horror and many others."
        socialTitle="Eastworlds - The World Building Society"
        socialDescription="Eastworlds is the east of England world-building forum. We welcome people from across all genres including science fiction, fantasy, history, horror and many others. If you don't live in the east or even in the UK - still get in touch. Our events are set in the East but we love to discuss world building with as many and as diverse a group as we possibly can."
        socialImage={"/logo.jpg"}
      />
    </main>
  );
}
