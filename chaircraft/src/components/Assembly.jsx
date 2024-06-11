import { useContext } from "react";
import { PartsContext } from "../contexts/partContext";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const ItemTypes = {
    PART: 'part',
};

const DraggablePart = ({ part }) => {
    const [, drag] = useDrag({
        type: ItemTypes.PART,
        item: part,
    });

    return (
        <div ref={drag} className="h-56 w-56 p-10 m-4 rounded-full bg-white flex items-center justify-center mr-12">
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
        <div ref={drop} className="flex flex-col h-96 w-96 border border-dashed border-gray-500 items-center justify-center bg-white">
            <div className="flex items-center justify-center h-64 w-64 relative ">
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
    const { selectedParts, droppedItems, setDroppedItems } = useContext(PartsContext);

    const handleDrop = (item) => {
        console.log('Dropped item:', item);
        setDroppedItems((prevItems) => [...prevItems, item]);
    };

    return (
        <div className="flex bg-gradient-to-r from-[#83edf4] via-[#9586f3] to-[#d098f8]">
            <div className="pl-12 flex flex-col h-screen bg-gradient-to-r from-[#1b1528] via-[#15101f] to-[#000]">
                <div className="overflow-y-auto">
                    {selectedParts.map((ele) => (
                        <DraggablePart key={ele.id} part={ele} />
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full flex items-center justify-center">
                    <DroppableArea droppedItems={droppedItems} onDrop={handleDrop} />
                </div>
                <Link to="/final-product">
                <button
                    className={`text-white text-2xl mt-8 px-12 py-4 rounded-lg ${droppedItems.length > 0 ? 'bg-gradient-to-r from-[#1b1528] via-[#15101f] to-[#000]' : 'bg-gray-400 cursor-not-allowed'}`}
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
