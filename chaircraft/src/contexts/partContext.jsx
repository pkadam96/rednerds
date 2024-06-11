import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PartsContext = createContext();

export const PartsContextProvider = ({ children }) => {
    const [selectedParts, setSelectedParts] = useState([]);
    const [droppedItems, setDroppedItems] = useState([]);

    return (
        <PartsContext.Provider value={{ selectedParts, setSelectedParts,droppedItems, setDroppedItems }}>
            {children}
        </PartsContext.Provider>
    );
};

PartsContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};