import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'

export default function About() {
  return (
    <>
      <Head>
        <title>Sweetgrass - Cheyenne, Wyoming Homeowners Association</title>
        <meta
          name="description"
          content="Sweetgrass - Cheyenne, Wyoming Homeowners Association"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Sweetgrass - Cheyenne, Wyoming Homeowners Association
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                This site contains information for homeowner&spos;s of the
                Sweetgrass Wyoming neighborhood.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
