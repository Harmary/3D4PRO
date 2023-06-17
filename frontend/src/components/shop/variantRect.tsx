import React from 'react';

interface RectangleProps {
    onClick: () => void;
    isSelected: boolean;
}

export default function Rectangle(props: RectangleProps) {
    const style: React.CSSProperties = {
        background: "#BB6BD9", width: 36, height: 36, 
        border: props.isSelected ? '3px solid  #7F5AF0' : '',
        cursor: 'pointer',
    };

    return <div style={style} onClick={() => {props.onClick()}} />;
};
