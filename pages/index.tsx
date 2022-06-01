import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import heroImage from '../public/driving.jpg';
import titleText from '../public/title.svg';
import basicMember from '../public/basic_membership.png';
import premiumMember from '../public/premium_membership.png';
import MembershipTabs from '../components/membershipTabs';

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
        <header>
            <div className='relative top-0 left-0'>
                <Image
                    src={heroImage}
                    layout='responsive'
                    width={100}
                    height={40}
                    priority
                />


                <div className='absolute w-[50%] top-[1%] left-[25%]'>
                    <Image
                        src={titleText}
                        layout='responsive'
                        width={1}
                        height={.20}
                        priority
                    />
                </div>


                {/* <div className='absolute top-[12%] left-1/2 font-CinzelDecorative font-bold 
                text-white text-titleText -translate-x-1/2 -translate-y-1/2 backdrop-blur-[3px]
                drop-shadow-2xl'>
                    Membership Direct
                </div> */}
            </div>
        </header>

        {/* Mission Statement Section */}
        <section>
            <div className='text-center m-6'>
                <h5 className='mb-6'>Get To Know Us</h5>
                <h4 className='mb-6 text'>Our Statement</h4>
                <p className='max-w-[800px] mx-auto text-left'>
                    It is our mission at Membership Direct to provide an additional solution to alleviate 
                    the financial burdens that accidents can cause. For a low annual membership fee, 
                    users will be able to choose their membership type that can be redeemed at any approved 
                    auto repair shop of their choosing, after successfully filing a claim with their insurance 
                    provider.
                </p>
            </div>
        </section>

        {/* Membership Section */}
        <section>
            <div className='text-center mt-24'>
                <h4>2 Membership Types</h4>
                <div className='flex flex-row justify-center'>
                    <button className='w-[400px]'>
                        <Image
                            src={basicMember}
                            layout='responsive'
                            width={1}
                            height={1}
                            priority
                        />
                    </button>
                        
                    <button className='w-[400px]'>
                        <Image
                            src={premiumMember}
                            layout='responsive'
                            width={1}
                            height={1}
                            priority
                        />
                    </button>
                </div>
            </div>

            <div>
                <MembershipTabs />
            </div>
        </section>
        

      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
