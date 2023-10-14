import Link from "next/link";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'This is Mapping Page',
  description: 'there is mapping',
  openGraph: {
    title: 'Mapping',
    description: 'this is mapping data'
  }
}

export default function Mapping() {
    return (
        <div>
            <span>Mapping</span>
            <Link href="/register">goto Register</Link>
        </div>
    )
}