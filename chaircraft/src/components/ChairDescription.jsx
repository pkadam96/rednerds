import chairImg from '../assets/chair-img.jpg'
const ChairDescription = () => {
    return (
        <>
            <div className='bg-[#9586f3] h-screen'>
            <nav className="text-4xl text-white font-semibold px-8 lg:px-16 pt-6">ChairCraft</nav>
            <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center justify-center md:mx-8 lg:mx-16 xl:mx-28 my-8 xl:px-16 xl:py-10 lg:p-12 md:p-8 p-2 shadow-[#83edf4] shadow-lg bg-gradient-to-r from-[#1b1528] via-[#15101f] to-[#000]" >
               <div className='lg:w-2/5 w-4/5'>
                    <img src={chairImg} alt="Office Chair" className="w-full"/>
               </div>
                <div className='lg:w-3/5 w-4/5 mt-12 md:ml-8 lg:ml-12 xl:ml-20'>
                    <h1 className="text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#83edf4] via-[#9586f3] to-[#d098f8]">Office Chair</h1>

                    <p className="max-w-screen-lg text-white text-justify md:my-4 my-8 rounded-lg leading-6 text-lg text-dark">
                        <p className='xl:my-8 lg:my-6 my-8'>The office chair is designed with both comfort and functionality in mind. Its sleek, modern appearance is complemented by its ergonomic features, making it suitable for long hours of sitting. The chair features a high backrest, providing ample support to the spine and neck, thus promoting good posture.</p>
                        
                        <p className='xl:my-8 lg:my-6 my-8'>Adjustability is a key feature of this office chair. It is equipped with a pneumatic height adjustment mechanism, allowing users to easily raise or lower the seat to their preferred height. Additionally, the chair offers tilt tension control and tilt lock functions, enabling users to recline and relax or lock the chair in an upright position for focused work.</p>
                        
                        <p className='xl:my-8 lg:my-6 my-8'>Overall, this office chair combines style, comfort, and functionality, making it an ideal choice for any workspace.</p>
                    </p>
                    <button className="text-white text-xl font-medium px-16 py-4 bg-gradient-to-r from-[#83edf4] via-[#9586f3] to-[#d098f8] rounded-lg shadow-lg" role="button">START
                    </button>
                </div>
            </div>
            </div>
        </>
    );
}

export {ChairDescription};
