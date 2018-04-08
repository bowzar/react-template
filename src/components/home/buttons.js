import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export const Buttons = ({
    go,
    caution,
    stop,
    lightStatus
}) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <RaisedButton onClick={go} disabled={lightStatus === 'GO' || lightStatus === 'CAUTION'} style={{ cursor: 'pointer' }} >Go</RaisedButton>
            <RaisedButton onClick={caution} disabled={lightStatus === 'CAUTION' || lightStatus === 'STOP'} style={{ cursor: 'pointer' }} >Caution</RaisedButton>
            <RaisedButton onClick={stop} disabled={lightStatus === 'STOP' || lightStatus === 'GO'} style={{ cursor: 'pointer' }} >Stop</RaisedButton>
        </div>
    );
}