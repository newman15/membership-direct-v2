import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Membership Direct</title>
        <meta name="description" content="Vehicle Repair Deductible Membership" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        {/* Hero Image with title text */}
        <div className='relative'>
            <Image
                src="/driving.jpg"
                layout='responsive'
                width={100}
                height={40}
            />

            <div className='absolute top-[12%] left-1/2 font-CinzelDecorative font-bold 
            text-white text-titleText -translate-x-1/2 -translate-y-1/2 backdrop-blur-[3px]
            drop-shadow-2xl'>
                Membership Direct
            </div>
        </div>

      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
