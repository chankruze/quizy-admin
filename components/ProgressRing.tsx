/*
Author: chankruze (chankruze@gmail.com)
Created: Mon Apr 11 2022 15:10:47 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Apr 08 2022 18:50:32 GMT+0530 (India Standard Time)
Copyright (c) geekofia 2022 and beyond
*/

const radius = (c: number) => c / (Math.PI * 2);
// const circumference = (r) => 2 * Math.PI * r;

// constants
const c = 100;
const r = radius(c);
const diameter = (r: number) => r * 2;
const strokeWidth = 2.8;
// svg constants
const vBoxWidth = 36 + strokeWidth * 2;
const vBoxHeight = 36 + strokeWidth * 2;
const mx = vBoxWidth / 2;
const my = (vBoxHeight - diameter(r)) / 2;
const d = diameter(r);

interface Props {
    percentage: number;
    color?: string;
}

const ProgressRing = ({ percentage, color }: Props) => {
    return (
        <svg viewBox={`0 0 ${vBoxWidth} ${vBoxHeight}`}>
            <path
                stroke="#eeeeee"
                strokeWidth={strokeWidth + 1}
                strokeLinecap="round"
                fill="none"
                d={`M${mx} ${my}
            a ${r} ${r} 0 0 1 0 ${d}
            a ${r} ${r} 0 0 1 0 ${d * -1}`}
            />
            <path
                className="animate-progress"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                fill="none"
                strokeDasharray={`${percentage}, 100`}
                d={`M${mx} ${my}
            a ${r} ${r} 0 0 1 0 ${d}
            a ${r} ${r} 0 0 1 0 ${d * -1}`}
            />
        </svg>
    );
};

export default ProgressRing;
