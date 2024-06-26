import * as React from 'react'
import Seo from "@/components/Seo";
import  Link  from "next/link";
import { Jura } from 'next/font/google'
import { getSortedPostsData } from '../lib/posts';

// If loading a variable font, you don't need to specify the font weight
const staat = Jura({
  subsets: ['latin'],
  weight: "500",
  display: 'swap',
})

export default async function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <main className="flex min-h-screen flex-col place-items-center gap-4 pt-20 text-white">
      <h1 className={`sam-title text-5xl ${staat.className}`}>EASTWORLDS</h1>
      <p className={`pt-12 mt-14 ${staat.className}`}>
      <b>Hey, are you a fan or maker of imagined worlds in books, games or movies? Welcome to Eastworlds!</b> For folks from across all genres
      including science fiction, fantasy, history, horror, romantasy, solarpunk and many others. We&apos;re based in the east of England (hence Eastworlds) 
      but we love to discuss world-building with as many and as diverse a bunch as we possibly can.
      </p>

      <p className={`pt-6 ${staat.className}`}>
        Eastworlds acts as an ecumenical council for groups like the BSFA, BFS, Mythohistorical Society, Anglia
        Ruskin University, UEA, Cambridge Univeristy, 
        The Tolkien Society, University of Suffolk and many others. We promote these groups&apos; 
        world-building events and talk about what they can learn from each other. 
      </p>

      <p className={`pt-6 ${staat.className}`}>
        If you want to get involved or link your society to ours, get in touch with Oli here: <a href="mailto:eastworlds@arditi.org">eastworlds@arditi.org</a>.
        Contact Alex Cochran on <Link target="_insta" href="https://linktr.ee/alexcochranwriter">Instagram or Bluesky</Link>.
      </p>


      <p className={`pt-6 italic text-xl ${staat.className}`}>
      &ldquo;ædificemus mundos&rdquo;
      </p>
      
      <section className={`xl:absolute right-0 bg-red-500 p-4 ${staat.className}`}>
        <h2>Worldlings</h2>
        <ul>
        {allPostsData.map(({ id, date, title }: any) => (
            <li key={id}>
              <Link className="hover:text-red-200" href={`posts/${id}`}>{title} {date}</Link>
            </li>
          ))}
          
        </ul>
      </section>

      <small>Photo by <a href="https://unsplash.com/@dizzyd718?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Drew Dizzy Graham</a> on <a href="https://unsplash.com/photos/person-kneeling-inside-building-s4dfrh7hdDU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  </small>

      
      

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
