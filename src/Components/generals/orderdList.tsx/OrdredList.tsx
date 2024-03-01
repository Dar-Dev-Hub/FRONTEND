interface OrdreListProps {
  displ: {
    title?: string | JSX.Element;
    subtitle?: string | JSX.Element;
    text?: {
      title?: string | JSX.Element;
      text?: string | JSX.Element;
      text2?: string | JSX.Element;
    }[];
    footer?: JSX.Element;
    sideImg?: string;
    bgImage?: string;
    classNames?: string;
    other: JSX.Element;
  };
}

export const OrdreList = ({ displ }: OrdreListProps) => {
  return (
    <div
      className={` h-fit flex w-full justify-center  ${
        displ?.classNames ? displ?.classNames : ""
      }
      my-5
      items-center
      flex-wrap
      relative z-[4] px-20
      max-md:px-5
      max-md:max-h-fit
       ${displ?.bgImage}
      bg-no-repeat 
      bg-cover 
      bg-center 
      bg-fixed `}
    >
      {displ?.other}

      <div className='py-9 px-5 w-1/2 h-full grid grid-cols-2 gap-10 max-md:w-[100%]'>
        {displ?.text &&
          displ?.text?.map((text: { title?: string | JSX.Element; text?: string | JSX.Element; text2?: string | JSX.Element }, i: number) => (
            <div key={i} className='mt-5 flex flex-col gap-1'>
              <div className='w-fit flex gap-6 items-center'>
                <span
                  className={`flex justify-center items-center
                        pt-[0px] 
                        shadow-shadowSubs bg-primaryy
                        cursor-pointer w-[30px] h-[30px] 
                       text-white rounded-full font-bold`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='text-white font-bold text-xl'>{text.title}</span>
              </div>
              <div className='text-white'>
                <span>{text.text}</span><br/>
                {text.text2 && <span><br/>{text.text2}</span>}
              </div>
            </div>
          ))}
        {displ?.footer}
      </div>
      {displ.sideImg && (
        <div className='w-1/3 ml-20 max-md:w-[100%] mt-10 flex justify-center items-center '>
          <img src={displ?.sideImg} className='h-[40rem]' alt='' />
        </div>
      )}
    </div>
  );
};