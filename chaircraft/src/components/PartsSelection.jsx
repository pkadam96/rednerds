import { useContext } from 'react';
import seatImg from '../assets/seat.png';
import backrestImg from '../assets/backrest.png';
import armrestImg from '../assets/armrest.png';
import headrestImg from '../assets/headrest.png';
import wheelsImg from '../assets/wheels.png';
import { Link, useNavigate } from 'react-router-dom';
import { PartsContext } from '../contexts/partContext';

const partsData = [
    { id: 1, name: 'Seat', image: seatImg },
    { id: 2, name: 'Backrest', image: backrestImg },
    { id: 3, name: 'Armrest', image: armrestImg },
    { id: 4, name: 'Headrest', image: headrestImg },
    { id: 5, name: 'Wheels', image: wheelsImg },
];

const PartsSelection = () => {
    const navigate = useNavigate();
    const { selectedParts, setSelectedParts } = useContext(PartsContext);

    const handleSelectionChange = (id) => {
        const selectedPart = partsData.find(part => part.id === id);
        setSelectedParts(prevState =>
            prevState.some(part => part.id === id)
                ? prevState.filter(part => part.id !== id)
                : [...prevState, selectedPart]
        );
    };
    
    const goBack=()=>{
        navigate("/");
        setSelectedParts([]);
    }

    return (
        <div className='bg-[#9586f3] h-screen flex flex-col items-center justify-center'>
            <div className='w-full flex items-center px-8 lg:px-32'>
                <h1 className='w-1/12'>
                    <i className="fa-solid fa-arrow-left fa-2xl flex-2 cursor-pointer" onClick={()=> goBack()}></i>  
                </h1>
                <h1 className='w-11/12 text-2xl my-8 font-medium text-center'>Select Cards </h1>
            </div>
            <div className="overflow-x-auto w-10/12">
                <div className="bg-gradient-to-r from-[#1b1528] via-[#15101f] to-[#000]  px-4 py-4 lg:px-16 lg:py-12 inline-block">
                    <div className="flex gap-12">
                        {partsData.map(part => (
                            <div
                                key={part.id}
                                className={`shadow-sm shadow-white w-72 rounded-lg flex-shrink-0 cursor-pointer ${selectedParts.some(selectedPart => selectedPart.id === part.id) ? 'bg-[#d098f8]' : 'bg-white'}`}
                                onClick={() => handleSelectionChange(part.id)}
                            >
                                <div className='h-64 p-8 flex items-center justify-center'>
                                    <img src={part.image} alt={part.name} className='w-64' />
                                </div>
                                <p className='text-[#15101f] font-semibold text-3xl text-center my-12 mx-6 py-3 rounded-lg bg-gradient-to-r from-[#83edf4] via-[#9586f3] to-[#d098f8]'>
                                    {part.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Link to="/assemble">
                <button
                    className={`text-white text-2xl mt-8 px-12 py-3 border-2 border-[#1b1528] rounded-lg ${selectedParts.length > 0 ? 'bg-gradient-to-r from-[#1b1528] via-[#15101f] to-[#000]' : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={selectedParts.length === 0}
                >
                    Next
                </button>
            </Link>
        </div>
    );
};

export { PartsSelection };
