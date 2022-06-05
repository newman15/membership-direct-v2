import Image from "next/image";
import React, { useState } from "react";
import star from '../public/star.svg';

export default function MembershipTabs() {

    const [basicMember, showBasicMember] = useState(true);
    const [premiumMember, showPremiumMember] = useState(false);
    const [existingMember, showExistingMember] = useState(false);

    const setBasicActive = (e: React.FormEvent) => {
        e.preventDefault();
        showBasicMember(true);
        showPremiumMember(false);
        showExistingMember(false);
    }

    const setPremiumActive = (e: React.FormEvent) => {
        e.preventDefault();
        showPremiumMember(true);
        showBasicMember(false);
        showExistingMember(false);
    }

    const setExistingActive = (e: React.FormEvent) => {
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
                <div className='mt-6'>
                    <h5 className='text-center'>Basic Membership</h5>
                    <ul className='ml-[10%] mt-6'>
                        <li className='flex flex-row items-baseline'>
                            <div className='w-[8%]'>
                                <Image
                                    src={star}
                                    layout='responsive'
                                    width={100}
                                    height={40}
                                    priority
                                />
                            </div>
                            <div className='align-baseline'>Top Choice</div>
                            
                        </li>
                        <li>Average Driver Deductible</li>
                        <li>Ideal for the driver who's out of pocket deductible is $500 or less</li>
                    </ul>
                </div>

                <div className='hidden'>
                    <h5>Premium Membership</h5>
                </div>

                <div className='hidden'>
                    <h5>Already a valued member?</h5>
                </div>
            </div>
        </div>
    )
}