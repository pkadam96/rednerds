import { useContext } from "react";
import { PartsContext } from "../contexts/partContext";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";

const ItemTypes = {
    PART: 'part',
};

const DraggablePart = ({ part }) => {
    const [, drag] = useDrag({
        type: ItemTypes.PART,
        item: part,
    });

    return (
        <div ref={drag} className="w-28 lg:h-56 h-28 lg:w-56 p-4 lg:p-10 lg:m-4 mx-1 my-4 rounded-full bg-white flex items-center justify-center lg:mr-12">
            <img src={part.image} alt={part.name} className="" />
        </div>
    );
};

const DroppableArea = ({ droppedItems, onDrop }) => {
    const [, drop] = useDrop({
        accept: ItemTypes.PART,
        drop: (item) => onDrop(item),
    });

    return (
        <div ref={drop} className="flex flex-col w-36 lg:h-96 h-36 lg:w-96 border border-dashed border-gray-500 items-center justify-center bg-white">
            <div className="flex items-center justify-center w-32 lg:h-72 h-32 lg:w-72 relative">
                <h1>Drag and Drop here</h1>
                {droppedItems.map((item, index) => (
                    <img key={index} src={item.image} alt={item.name} className="absolute h-full w-full object-contain" />
                ))}
            </div>
        </div>
    );
};

DroppableArea.propTypes = {
    droppedItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    onDrop: PropTypes.func.isRequired,
};

DraggablePart.propTypes = {
    part: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

const Assembly = () => {
    const navigate = useNavigate();
    const { selectedParts, droppedItems, setDroppedItems } = useContext(PartsContext);

    const handleDrop = (item) => {
        console.log('Dropped item:', item);
        setDroppedItems((prevItems) => [...prevItems, item]);
    };
    const goBack=()=>{
        navigate("/parts-selection");
        setDroppedItems([]);
    }
    return (
        <div className="flex bg-gradient-to-r from-[#83edf4] via-[#9586f3] to-[#d098f8]">
            <div className="lg:pl-12 flex flex-col h-screen bg-gradient-to-r from-[#1b1528] via-[#15101f] to-[#000]">
                <div className="overflow-y-auto">
                    {selectedParts.map((ele) => (
                        <DraggablePart key={ele.id} part={ele} />
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col justify-between py-8 items-center">
            <div className='w-full flex items-center px-8'>
                <h1 className='w-1/12'>
                    <i className="fa-solid fa-arrow-left fa-2xl flex-2 cursor-pointer" onClick={()=> goBack()}></i>  
                </h1>
            </div>
                <div className="w-full flex items-center justify-center">
                    <DroppableArea droppedItems={droppedItems} onDrop={handleDrop} />
                </div>
                <Link to="/final-product">
                    <button
                        className={`text-white text-2xl mt-8 px-12 py-3 border-2 border-[#1b1528] rounded-lg ${droppedItems.length > 0 ? 'bg-gradient-to-r from-[#1b1528] via-[#15101f] to-[#000]' : 'bg-gray-400 cursor-not-allowed'}`}
                        disabled={droppedItems.length === 0}
                    >
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
};

export { Assembly };
