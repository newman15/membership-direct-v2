import Image from "next/image";
import businessIcon from '../../public/icons/business.svg';
import contactsIcon from '../../public/icons/contacts.svg';
import folderIcon from '../../public/icons/folder.svg';
import infoIcon from '../../public/icons/information.svg';

export default function Footer() {

    return (
        <div className='border-4 border-black rounded-xl bg-white'>
            <h5 className='text-center mt-6 mb-6 font-Tapestry'>CONTACT US</h5>
            <div className='w-8 mx-auto'>
                <Image
                    src={contactsIcon}
                    alt='Contact Icon'
                    layout='intrinsic'
                    width={100}
                    height={100}
                    priority
                />
            </div>

            <h5 className='text-center mt-6 mb-6 font-Tapestry'>RESOURCES</h5>
            <div className='flex flex-row justify-between mx-[20%] mb-6'>
                <div className='w-8'>
                    <Image
                        src={infoIcon}
                        alt='Info Icon'
                        layout='intrinsic'
                        width={100}
                        height={100}
                        priority
                    />
                </div>
                <div className='w-8'>
                    <Image
                        src={businessIcon}
                        alt='Business Icon'
                        layout='intrinsic'
                        width={100}
                        height={100}
                        priority
                    />
                </div>
                <div className='w-8'>
                    <Image
                        src={folderIcon}
                        alt='Folder Icon'
                        layout='intrinsic'
                        width={100}
                        height={100}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}