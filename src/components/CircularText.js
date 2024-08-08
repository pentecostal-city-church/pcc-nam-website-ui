import * as React from "react";

const circularTextArr = [
    ` SoCal District - UPCI - NAM - `,
    ` Online - SoCal - Nevada - `,
    ` 26 Million Souls - 12 counties - `
];

const textChangeInterval = 6500;
const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
};

const CircularText = (props) => {
    const [textStringIndex, setTextStringIndex] = React.useState(0);
    const [trigger, setTrigger] = React.useState(false);
    const [animating, setAnimating] = React.useState(false);
    const intervalRef = React.useRef(null);

    React.useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTrigger(trigger => !trigger);
        }, [textChangeInterval]);

        return () => {
            try {
                clearInterval(intervalRef);
                intervalRef.current = null;
            } catch (e) {}
        }
    }, []);

    React.useEffect(() => {
        setAnimating(true);
    }, [trigger]);

    React.useEffect(() => {
        setTimeout(() => {
            if (animating) {
                setTextStringIndex(((textStringIndex + 1) % 3));
                setAnimating(false);
            }
        }, 250);
    }, [animating]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg style={{ opacity: animating ? 0.0 : 1 }} className="circular-text-svg" xmlns="http://www.w3.org/2000/svg" xmlLang="en" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
                    <title>Circular Text Path</title>
                    <defs>
                        <path id="textcircle" d="M250,400
                            a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
                    </defs>
                    <g class="textcircle">
                        <text textLength="940">
                            <textPath
                                xlinkHref="#textcircle" 
                                aria-label="CSS & SVG are awesome" 
                                textLength="940"
                            >
                                {circularTextArr[textStringIndex]}&#160;
                            </textPath>
                        </text>
                    </g>
                </svg>
        </div>
    );
}

export default CircularText;