import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Message from '../components/Message'
import Testimonial from '../components/Testimonial'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Noted Notes App</title>
    </Head>
      <Hero />
      <Features />
      <Testimonial />
      <Message />
      <CTA />
    </>
  )
}
