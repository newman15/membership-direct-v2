import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import MembershipTabs from '../components/homePage/membershipTabs';
import MembershipRequirements from '../components/homePage/membershipRequirements';
import Footer from '../components/homePage/footer';

import heroImage from '../public/images/driving.jpg';
import titleText from '../public/images/title.svg';
import basicMember from '../public/images/basic_membership.png';
import premiumMember from '../public/images/premium_membership.png';
import roads1 from '../public/images/roads.jpg';
import footer from '../public/images/footer.svg';
import ImageSlideshow from '../components/homePage/imageSlideshow';


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
                        alt='Hero Image'
                        layout='responsive'
                        width={100}
                        height={40}
                        priority
                    />


                    <div className='absolute w-[50%] top-[1%] left-[30%] right-[30%]'>
                        <Image
                            src={titleText}
                            alt='Company Name'
                            layout='responsive'
                            width={1}
                            height={.20}
                            priority
                        />
                    </div>
                </div>
            </header>

            {/* Mission Statement Section */}
            <section className='max-w-[800px] mx-auto'>
                <div className='text-center m-6'>
                    <h5 className='mb-6 font-Bigshot'>Get To Know Us</h5>
                    <h4 className='mb-6 text font-Rye'>Our Statement</h4>
                    <p className='text-left'>
                        It is our mission at Membership Direct to provide an additional solution to alleviate 
                        the financial burdens that accidents can cause. For a low annual membership fee, 
                        users will be able to choose their membership type that can be redeemed at any approved 
                        auto repair shop of their choosing, after successfully filing a claim with their insurance 
                        provider.
                    </p>
                </div>
            </section>

            {/* Membership Section */}
            <section className='max-w-[800px] mx-auto'>
                <div className='text-center mt-24'>
                    <h4 className='font-Rye'>2 Membership Types</h4>
                    <div className='flex flex-row justify-center'>
                        <button className='w-[400px]'>
                            <Image
                                src={basicMember}
                                alt='Basic Membership'
                                layout='responsive'
                                width={1}
                                height={1}
                                priority
                            />
                        </button>
                            
                        <button className='w-[400px]'>
                            <Image
                                src={premiumMember}
                                alt='Premium Membership'
                                layout='responsive'
                                width={1}
                                height={1}
                                priority
                            />
                        </button>
                    </div>
                </div>

                <div className='m-6'>
                    <MembershipTabs />
                </div>
            </section>

            {/* Goals and Why You Should Join Section */}
            <section className='mt-24 mb-24'>
                {/* mobile screens */}
                <div className='md:hidden relative top-0 left-0'>
                    <Image
                        src={roads1}
                        alt='Road Background Image'
                        layout='responsive'
                        width={1}
                        height={2.1}
                        priority
                    />

                    <div className='absolute top-[8%] left-[15%] right-[15%] bottom-[8%] border-4 rounded-md bg-[#72707093] overflow-auto'>
                        <p className='pl-6 pt-6 font-Bigshot'>Find Out More About Us</p>

                        <h4 className='pl-6 pt-2'>Why Become A Member?</h4>

                        <p className='pl-6 pt-4'>
                            As automotive insurance prices continue to rise, we are 
                            here to offer additional financial options to alleviate 
                            out-of-pocket costs.
                        </p>

                        <p className='pl-6 pt-4'>
                            Most people are unprepared financially for the burdens of 
                            high deductible costs before their insurance provider begins 
                            contributions. We provide our members financial security and 
                            peace of mind by offering up to an average 80% savings on 
                            out-of-pocket repair expenses.
                        </p>

                        <p className='pl-6 pt-4'>
                            We are reshaping the auto industry and want to take you along 
                            for the ride!
                        </p>
                    </div>
                </div>

                {/* Desktop Screens */}
                <div className='hidden md:block md:relative md:top-0 md:left-0'>
                    <Image
                        src={roads1}
                        alt='Roads Background Image'
                        layout='responsive'
                        width={1}
                        height={.6}
                        priority
                    />

                    <div>
                        <div className='absolute top-[8%] left-[10%] right-[60%] bottom-[8%] border-4 rounded-md bg-[#72707093] overflow-auto'>
                            <h6 className='pl-6 pt-6 font-Bigshot'>Find Out More About Us</h6>

                            <h4 className='pl-6 pt-2 font-Rye'>Why Become A Member?</h4>

                            <p className='p-6'>
                                As automotive insurance prices continue to rise, we are 
                                here to offer additional financial options to alleviate 
                                out-of-pocket costs.
                            </p>

                            <p className='p-6'>
                                Most people are unprepared financially for the burdens of 
                                high deductible costs before their insurance provider begins 
                                contributions. We provide our members financial security and 
                                peace of mind by offering up to an average 80% savings on 
                                out-of-pocket repair expenses.
                            </p>

                            <p className='p-6'>
                                We are reshaping the auto industry and want to take you along 
                                for the ride!
                            </p>
                        </div>

                        <div className='absolute top-[8%] left-[60%] right-[10%] bottom-[8%] border-4 rounded-md bg-[#72707093] overflow-auto'>
                            <ImageSlideshow />
                        </div>
                    </div>                    
                </div>

            </section>

            {/* Becoming A Member Section */}
            <section className='max-w-[800px] mx-auto'>
                <div className='text-center m-6'>
                    <h6 className='mb-6 font-Bigshot'>Becoming A Member</h6>
                    <h5 className='mb-6 font-Rye'>What you&apos;ll need to qualify</h5>
                    <p className='text-left ml-[10%] mr-[10%] mb-6'>
                        Becoming a member takes only a few minutes. Simply choose from one of our 
                        membership plans and make sure you have the following readily available.
                    </p>
                    <div><MembershipRequirements /></div>
                </div>
            </section>

            </main>

            {/* Footer and Contact Section */}
            <footer>
                <div className='relative w-full h-[400px] md:h-[600px]'>
                    <Image
                        src={footer}
                        alt='Footer Image'
                        layout='fill'
                        priority
                    />

                    <div className='absolute top-[15%] left-[10%] right-[10%] md:left-[20%] md:right-[20%]'>
                        <Footer />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
