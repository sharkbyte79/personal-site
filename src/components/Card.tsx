import React from 'react';
import tailwindcss from '@tailwindcss/vite';

export interface ContentCardProps {
    label: string;
    imgPath?: string;
    clickable: boolean;
}

/**
 * Represents a stylized container for text and/or image content.
 *
 * @param {ContentCardProps} props - the component props, including the Card's label and filepath for an included image.
 * @returns
 */
export default function ContentCard(props: ContentCardProps){
    const { label, imgPath, clickable }: ContentCardProps = props;

    return (
        <div className="rounded-md border-2  bg-orange-50 border-blue-400 drop-shadow-xl">
            {/* <CardDecorator label="Home"/> */}
            <div className="m-5 mx-8">
                <img src={imgPath} alt="" />
                <b>{label}</b>
                </div>
        </div>
    );
}

interface CardDecoratorProps {
    label?: string

}

/**
 * Represents a horizontal bar resembling a desktop window decorator. 
 * @param props 
 */
function CardDecorator(props: CardDecoratorProps) {
    const {label}: CardDecoratorProps = props;

    return (
        <div className='bg-blue-400 w-full h-3 flex items-center justify-center'>
            <div className="text-white font-bold text-xs">
                {label}
            </div>

            <div className=''>

            </div>
        </div>
    );

}