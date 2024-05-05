import { useEffect, useState } from "react";

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ["../img/Sofa banner.jpg","../img/Banner.avif","../img/banner3.jpg"];

    // , "../img/sofa banner-2.jpeg", "../img/sofa banner-3.jpg"

    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNextImage();
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentImageIndex]); // Restart the interval whenever currentImageIndex changes

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative z-0"> {/* Add z-index to ensure it's behind the nav bar */}
            {/* Image */}
            <img style={{ height: "350px",width:"8000px" }} src={images[currentImageIndex]} alt="" /> {/* Increase height here */}
        </div>
    );
}

export default HeroSection;
