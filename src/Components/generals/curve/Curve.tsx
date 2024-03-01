interface CurveProps {
    height?: string;
    width?: string;
    color?: string;
    className?:string;
}

export const Curve = ({ height = "90%", width = "132%", color = "rgb(225 225 225 / 64%)",className }: CurveProps) => {
    const dynamicClassName = `curve absolute
                top-0 
                right-[0%] 
                left-[-16%]
                rounded-t-none  rounded-b-full
                max-md:h-[76%]
                max-md:w-[135%]
                max-md:left-[-90px]

                `; 
    return (
        <div style={{background:color,height:height,width:width}} className={dynamicClassName+" "+className}>
        </div>
    );
};

/* 
before:rounded-b-[50%]  before:content-['']
        before:translate-x-[0%] before:translate-y-[0%] 
        before:block before:absolute raduis-full
        before:w-full before:h-full */