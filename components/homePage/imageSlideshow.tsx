import carRepair from '../../public/images/car_repair.jpg';
import moneyInHand from '../../public/images/money_in_hand.jpg';
import carLandscape from '../../public/images/car_landscape.jpg';
import explore from '../../public/images/explore.jpg';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ImageSlideshow() {
    const images = [moneyInHand, carRepair, carLandscape, explore];
    const imageTexts = [
        'We help you save money!',
        'We provide assistance on unforseen out of pocket repair bills.',
        'Travel with peace of mind, knowing you are covered',
        'See where the road takes you...'
    ];

    const [indexCounter, setIndexCounter] = useState(0);
    const [image, setImage] = useState(images[0]);
    const [text, setText] = useState(imageTexts[0]);

    const textClass = `
    ${indexCounter % 4 === 2 ? 'text-slate-300' : 'text-black'} 
    absolute top-[8%] left-[15%] right-[15%] text-center
    `;

    const slideShow = () => {
        let i = indexCounter % 4;
        console.log(`Index of Image = ${i}`);
        setImage(images[i]);
        setText(imageTexts[i]);
        setIndexCounter(indexCounter + 1);
    }

    useEffect(() => {
        const interval = setInterval(() => slideShow(), 5000);
        return () => clearInterval(interval);
    }, [indexCounter]);

    return (
        <div className='relative w-full h-full'>
            <Image
                src={image}
                layout='fill'
                priority
            />

            <h4 className={textClass}>{text}</h4>
        </div>
    )
}