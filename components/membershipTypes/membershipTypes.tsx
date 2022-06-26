import Image from "next/image";

import basicMembership from '../../public/icons/basicMembership.svg';
import premiumMembership from '../../public/icons/premiumMembership.svg';

export default function MembershipTypes() {

    const basicMemberDetails = [
        "$119.88 / year", "$9.99 / month", 
        "2 claims per year, or $500 in deductible fees. Whichever comes first.",
        "Direct payment to approved autobody shops",
        "One membership covers 1 vehicle under insurance policy",
    ];

    const premiumMemberDetails = [
        "$179.88 / year", "$14.99 / month", 
        "3 claims per year, or $1000 in deductible fees. Whichever comes first.",
        "Direct payment to approved autobody shops",
        "One membership covers up to 3 vehicles covered under same insurance policy",
    ];
    return (
        <div className=''>
            <div className='md:grid md:grid-cols-2 md:justify-items-center'>
                <div className='text-center'>
                    <ul className='border-4 rounded-xl border-black px-[30%] py-6'>
                        <li><Image src={basicMembership} alt={"BasicMembership"} width={200} height={200} /></li>
                        {
                            basicMemberDetails.map((detail) => <li className='text-left'>{detail}<hr className='bg-black h-1' /></li>)
                        }
                    </ul>
                </div>

                <div className='text-center'>
                    <ul className='border-4 rounded-xl border-black px-[30%] py-6'>
                        <li><Image src={premiumMembership} alt={"BasicMembership"} width={200} height={200} /></li>
                        {
                            premiumMemberDetails.map((detail) => <li className='text-left'>{detail}<hr className='bg-black h-1' /></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}