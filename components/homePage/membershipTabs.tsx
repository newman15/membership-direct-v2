import Image from "next/image";
import React, { useState } from "react";
import star from '../../public/icons/star.svg';
import dollarSign from '../../public/icons/dollarSign.svg';

export default function MembershipTabs() {

    const [basicMember, showBasicMember] = useState(true);
    const [premiumMember, showPremiumMember] = useState(false);
    const [existingMember, showExistingMember] = useState(false);

    const setBasicActive = (e: React.MouseEvent) => {
        e.preventDefault();
        showBasicMember(true);
        showPremiumMember(false);
        showExistingMember(false);
    }

    const setPremiumActive = (e: React.MouseEvent) => {
        e.preventDefault();
        showPremiumMember(true);
        showBasicMember(false);
        showExistingMember(false);
    }

    const setExistingActive = (e: React.MouseEvent) => {
        e.preventDefault();
        showExistingMember(true);
        showBasicMember(false);
        showPremiumMember(false); 
    }

    return (
        <div className='border-4 container mx-auto'>
            <div className='bg-[#306076] text-center'>
                <button 
                    className={`cursor-pointer text-white m-2 ${basicMember ? 'bg-slate-400 p-2' : 'bg-none'}`} 
                    onClick={(e) => setBasicActive(e)}>Basic
                </button>
                <button 
                    className={`cursor-pointer text-white m-2 ${premiumMember ? 'bg-slate-400 p-2' : 'bg-none'}`} 
                    onClick={(e) => setPremiumActive(e)}>Premium
                </button>
                <button 
                    className={`cursor-pointer text-white m-2 ${existingMember ? 'bg-slate-400 p-2' : 'bg-none'}`} 
                    onClick={(e) => setExistingActive(e)}>Existing Member?
                </button>
            </div>

            <div>
                <div className={`${basicMember ? 'mt-6' : 'hidden'}`}>
                    <h5 className='text-center font-CinzelDecorative font-bold'>Basic Membership</h5>
                    <ul className='ml-[10%] mt-6'>
                        <li className='flex flex-row items-baseline'>
                            <div className='w-6'>
                                <Image
                                    src={star}
                                    alt='Star Image'
                                    layout='responsive'
                                    width={1}
                                    height={1}
                                    priority
                                />
                            </div>
                            <p className='pl-2'>Top Choice</p>
                            
                        </li>
                        <li>Average Driver Deductible</li>
                        <li className='mb-6'>Ideal for the driver who&apos;s out of pocket deductible is $500 or less</li>
                    </ul>
                </div>

                <div className={`${premiumMember ? 'mt-6' : 'hidden'}`}>
                    <h5 className='text-center font-CinzelDecorative font-bold'>Premium Membership</h5>
                    <ul className='ml-[10%] mt-6'>
                        <li className='flex flex-row items-baseline'>
                            <div className='w-6'>
                                <Image
                                    src={dollarSign}
                                    alt='Dollar Sign Image'
                                    layout='responsive'
                                    width={1}
                                    height={1}
                                    priority
                                />
                            </div>
                            <p className='pl-2'>Best Value</p>
                            
                        </li>
                        <li>High Driver Deductible</li>
                        <li className='mb-6'>Ideal for the driver who&apos;s out of pocket deductible is $1000 or more</li>
                    </ul>
                </div>

                <div className={`${existingMember ? 'mt-6 text-center' : 'hidden'}`}>
                    <h5 className='text-center font-CinzelDecorative font-bold'>Already a valued member?</h5>
                    <button className='m-6 px-6 py-2 border-4 border-[#306076] rounded-xl text-white bg-[#306076] disabled:opacity-50' disabled>Login</button>
                </div>
            </div>
        </div>
    )
}