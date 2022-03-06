/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * label
     */
    label: string;
    /**
     * tamano label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * caps lavel
     */
    allCaps: boolean;
    /**
     * label theme
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * What background color to use
    */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
