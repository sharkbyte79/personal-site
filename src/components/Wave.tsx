import React from 'react';
import Wave from 'react-wavify';

export interface WaveProps {
    paused: boolean;
}

export default function BackgroundWave(props: WaveProps) {
    const { paused }: WaveProps = props;

    return (
        <Wave
            fill="#8AF0BF"
            paused={paused}
            style={{ display: 'flex' }}
            options={{
                height: 20,
                amplitude: 20,
                speed: 0.15,
                points: 3,
            }}
        />
    );
}
