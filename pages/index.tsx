import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import heroImage from '../public/images/driving.jpg';
import titleText from '../public/images/title.svg';
import basicMember from '../public/images/basic_membership.png';
import premiumMember from '../public/images/premium_membership.png';
import MembershipTabs from '../components/homePage/membershipTabs';
import roads1 from '../public/images/roads.jpg';
import MembershipRequirements from '../components/homePage/membershipRequirements';
import footerImage from '../public/images/footer.svg';

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
                </div>
            </header>

            {/* Mission Statement Section */}
            <section className='max-w-[800px] mx-auto'>
                <div className='text-center m-6'>
                    <h5 className='mb-6'>Get To Know Us</h5>
                    <h4 className='mb-6 text'>Our Statement</h4>
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
                        layout='responsive'
                        width={1}
                        height={2.1}
                        priority
                    />

                    <div className='absolute top-[8%] left-[15%] right-[15%] bottom-[8%] border-4 rounded-md bg-[#72707093] text-[4.5vw] overflow-auto'>
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
                </div>

                {/* Desktop Screens */}
                <div className='hidden md:block md:relative md:top-0 md:left-0'>
                    <Image
                        src={roads1}
                        layout='responsive'
                        width={1}
                        height={.6}
                        priority
                    />

                    <div>
                        <div className='absolute top-[8%] left-[15%] right-[60%] bottom-[8%] border-4 rounded-md bg-[#72707093] text-[1.5vw] overflow-auto'>
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

                        <div className='absolute top-[8%] left-[60%] right-[15%] bottom-[8%] border-4 rounded-md bg-[#72707093] text-[1.5vw] overflow-auto'>
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
                    </div>                    
                </div>

            </section>

            {/* Becoming A Member Section */}
            <section className='max-w-[800px] mx-auto'>
                <div className='text-center m-6'>
                    <h6 className='mb-6'>Becoming A Member</h6>
                    <h5 className='mb-6'>What you'll need to qualify</h5>
                    <p className='text-left ml-[10%] mr-[10%] mb-6'>
                        Becoming a member takes only a few minutes. Simply choose from one of our 
                        membership plans and make sure you have the following readily available.
                    </p>
                    <div className='ml-[10%]'><MembershipRequirements /></div>
                </div>
            </section>

            </main>

            <footer>
                <Image
                    src={footerImage}
                    layout='responsive'
                    width={1}
                    height={1}
                    priority
                />
            </footer>
        </div>
    )
}

export default Home
