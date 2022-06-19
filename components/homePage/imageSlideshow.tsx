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
        'Travel with peace of mind knowing you are covered',
        'See where the road takes you...'
    ];

    const [indexCounter, setIndexCounter] = useState(0);
    const [image, setImage] = useState(images[0]);
    const [text, setText] = useState(imageTexts[0]);

    /*
    * Important Note:
    *
    * This function runs twice on images[0] before continuing the slide show. 
    * Reason: On first render images[0] is used, then the useEffect hook calls the
    * slideShow() function and indexCounter is still 0. After the first call to 
    * slideShow(), the indexCounter is incremented and everything works as expected.
    * 
    * The 'textClass' above uses a comparison === '1' to account for this issue since 
    * the indexCounter is behind the render. The textClass is applying this condition
    * to the first element, images[0], in the array technically, but uses '1' due to the above issue.
    */
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
                alt='Slideshow Image'
                layout='fill'
                priority
            />

            <h4 className='text-white textShadow absolute top-[8%] left-[15%] right-[15%] text-center'>{text}</h4>
        </div>
    )
}