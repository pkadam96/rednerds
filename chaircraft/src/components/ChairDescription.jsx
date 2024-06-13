import chairImg from '../assets/chair-img.jpg'
import { Link } from 'react-router-dom';

const ChairDescription = () => {
    return (
        <>
            <div className='bg-[#9586f3] h-screen'>
                <h1 className="text-4xl text-white font-semibold px-4 lg:px-16 pt-6">ChairCraft</h1>
                <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center justify-center md:mx-8 lg:mx-16 xl:mx-28 my-8 xl:px-16 xl:py-10 lg:p-12 md:p-8 p-2 shadow-[#83edf4] shadow-lg bg-gradient-to-r from-[#1b1528] via-[#15101f] to-[#000]" >
                    <div className='lg:w-2/5 w-full p-4 animate-slide-in-left'>
                        <img src={chairImg} alt="Office Chair" className="w-full animate-zoom-in" />
                    </div>
                    <div className='lg:w-3/5 w-full p-4 mt-4 md:ml-8 lg:ml-12 xl:ml-20 animate-slide-in-right'>
                        <h1 className="text-5xl font-medium bg-clip-text text-center  lg:text-justify text-transparent bg-gradient-to-r from-[#83edf4] via-[#9586f3] to-[#d098f8]">Office Chair                          
                        </h1>
                        <h2 className='text-white my-8 text-2xl'>
                            <p className="text-3xl text-center  lg:text-justify">Welcome to ChairCraft! </p>
                            <br />
                            <span className='text-justify'>Learn about the different parts of an office chair
                            and how to assemble one. </span>
                            <br /><br /> 
                            Click START to begin.
                        </h2>
                        <Link to="/parts-selection">
                            <button className="text-white text-xl font-medium px-16 py-4 bg-gradient-to-r from-[#83edf4] via-[#9586f3] to-[#d098f8] rounded-lg shadow-lg animate-button-hover" role="button">START
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export { ChairDescription };
