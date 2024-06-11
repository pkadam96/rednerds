import chairImg from '../assets/chair-img.jpg'
import { Link } from 'react-router-dom';

const ChairDescription = () => {

    return (
        <>
            <div className='bg-[#9586f3] h-screen'>
                <nav className="text-4xl text-white font-semibold px-8 lg:px-16 pt-6">ChairCraft</nav>
                <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center justify-center md:mx-8 lg:mx-16 xl:mx-28 my-8 xl:px-16 xl:py-10 lg:p-12 md:p-8 p-2 shadow-[#83edf4] shadow-lg bg-gradient-to-r from-[#1b1528] via-[#15101f] to-[#000]" >
                    <div className='lg:w-2/5 w-4/5'>
                        <img src={chairImg} alt="Office Chair" className="w-full" />
                    </div>
                    <div className='lg:w-3/5 w-4/5 mt-12 md:ml-8 lg:ml-12 xl:ml-20'>
                        <h1 className="text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#83edf4] via-[#9586f3] to-[#d098f8]">Office Chair</h1>
                        <h2 className='text-white my-8 text-2xl'><span className="text-3xl">Welcome to ChairCraft! </span><br /><br /> Learn about the different parts of an office chair
                            and how to assemble one. <br /><br /> Click START to begin.</h2>
                        <Link to="/parts-selection">
                            <button className="text-white text-xl font-medium px-16 py-4 bg-gradient-to-r from-[#83edf4] via-[#9586f3] to-[#d098f8] rounded-lg shadow-lg" role="button">START
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
}

export { ChairDescription };
