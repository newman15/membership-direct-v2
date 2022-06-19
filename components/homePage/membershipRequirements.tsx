import Image from 'next/image';
import checkMark from '../../public/icons/checkMark.svg';

export default function MembershipRequirements() {
    // Tailwind Style for the list items. Declared here for reusability.
    const listItemStyles = 'flex flex-row items-center mb-2';

    // Checkmark svg image. Declared here for reusability.
    const checkMarks = (
        <Image
            src={checkMark}
            alt='Check Mark'
            layout='responsive'
            width={1}
            height={1}
            priority
        />
    )

    return (
        <div>
            <ul className='ml-[10%]'>
                <li className={listItemStyles}>
                    <div className='w-6'>
                        {checkMarks}
                    </div>
                    <p className='pl-2'>Proof Of Insurance</p>
                </li>

                <li className={listItemStyles}>
                    <div className='w-6'>
                        {checkMarks}
                    </div>
                    <p className='pl-2'>Valid Drivers License</p>
                </li>

                <li className={listItemStyles}>
                    <div className='w-6'>
                        {checkMarks}
                    </div>
                    <p className='pl-2'>Registered Operational Vehicle</p>
                </li>

                <li className={listItemStyles}>
                    <div className='w-6'>
                        {checkMarks}
                    </div>
                    <p className='pl-2'>Valid Credit Card</p>
                </li>

                <li className={listItemStyles}>
                    <div className='w-6'>
                        {checkMarks}
                    </div>
                    <p className='pl-2'>Current Billing Address</p>
                </li>
            </ul>
            
            <button className='m-6 p-2 border-4 border-[#306076] rounded-xl text-white bg-[#306076]'>
                Ready To Join?
            </button>
            
        </div>
    )
}