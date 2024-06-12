import { useContext } from "react";
import { PartsContext } from "../contexts/partContext";
import seatImg from '../assets/seat.png'
import backrestImg from '../assets/backrest.png'
import armrestImg from '../assets/armrest.png'
import headrestImg from '../assets/headrest.png'
import wheelsImg from '../assets/wheels.png'

const partStyles = {
    headrest: {
        base: { width: '150px', marginLeft: '5px', padding: '0' },
        hidden: { visibility: 'hidden',  width: '150px', marginLeft: '5px', padding: '0' }
    },
    backrest: {
        base: { width: '240px', marginTop: '-12px', padding: '0' },
        hidden: { visibility: 'hidden', width: '240px', marginTop: '-12px', padding: '0' }
    },
    armrest: {
        base: { width: '340px', marginTop: '', marginLeft: '-8px', position: 'absolute' },
        hidden: { visibility: 'hidden', width: '340px', marginTop: '0px', marginLeft: '-5px', position: 'absolute' }
    },
    seat: {
        base: { width: '280px', marginTop: '-10px', padding: '0' },
        hidden: { visibility: 'hidden', width: '280px', marginTop: '-10px', padding: '0'  }
    },
    wheels: {
        base: { width: '360px' },
        hidden: { visibility: 'hidden', width: '360px'}
    },
};

const FinalProduct = () => {
    const { droppedItems } = useContext(PartsContext);

    const getVisibilityStyle = (partName) => {
        return droppedItems.some(item => item.name.toLowerCase() === partName) 
        ? partStyles[partName].base 
        : partStyles[partName].hidden;
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-[#1b1528] via-[#15101f] to-[#000]">
            <h1 className="text-5xl font-medium my-8 bg-clip-text text-transparent bg-gradient-to-r from-[#83edf4] via-[#9586f3] to-[#d098f8]">Assembled Chair</h1>
            <div className="relative flex flex-col justify-center items-center bg-white lg:px-16">
                <img src={headrestImg} alt="Headrest" style={getVisibilityStyle('headrest')} />
                <img src={backrestImg} alt="Backrest" style={getVisibilityStyle('backrest')} />
                <img src={armrestImg} alt="Armrest" style={getVisibilityStyle('armrest')} />
                <img src={seatImg} alt="Seat" style={getVisibilityStyle('seat')} />
                <img src={wheelsImg} alt="Wheels" style={getVisibilityStyle('wheels')} />
            </div>
        </div>
    );
};

export { FinalProduct };
