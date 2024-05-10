import * as React from 'react'
import Seo from "@/components/Seo";
import  Link  from "next/link";
import { Jura } from 'next/font/google'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getSortedPostsData } from '../../../lib/posts';

const postsDirectory = path.join(process.cwd(), 'posts');

// If loading a variable font, you don't need to specify the font weight
const staat = Jura({
  subsets: ['latin'],
  weight: "500",
  display: 'swap',
})

export async function generateStaticParams() {
  
  return getSortedPostsData().map((post) => ({
    slug: post.id,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {

  // Read markdown file as string
  const fullPath = path.join(postsDirectory, params.slug+'.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return (
    <main className="flex min-h-screen flex-col place-items-center gap-4 pt-20 text-white">
      <h1 className={`text-3xl ${staat.className}`}>{matterResult.data.title}</h1>
      {matterResult.content}

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
