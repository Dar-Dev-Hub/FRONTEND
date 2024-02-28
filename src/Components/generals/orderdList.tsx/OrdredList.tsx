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

      <div className='py-10 px-5 w-1/2 h-full  flex flex-col   gap-9 max-md:w-[100%]'>
        <div className=' w-full  flex flex-col gap-2'>
          <span className=' text-secondary text-5xl font-bold  max-md:text-5xl whitespace-nowrap text-white'>
            {displ?.title}
          </span>
          <span className='font-play-fair text-4xl text-white'>{displ?.subtitle}</span>
        </div>

        {displ?.text &&
          displ?.text?.map((text: { title?: string | JSX.Element; text?: string | JSX.Element; text2?: string | JSX.Element }, i: number) => (
            <div key={i} className='mt-5 flex flex-wrap gap-[20px] '>
              <div className='w-fit flex gap-6'>
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

              <span className='text-white flex flex-col gap-1 w-[90%]'>
                {text.text}
              </span>
              {text.text2 && (
                <span className='text-white flex flex-col gap-1 w-[90%]'>
                  {text.text2}
                </span>
              )}
            </div>
          ))}
        {displ?.footer}
      </div>
      {displ.sideImg && (
        <div className='w-1/2 max-md:w-[100%] mt-auto flex justify-center'>
          <img src={displ?.sideImg} className='h-[40rem]' alt='' />
        </div>
      )}
    </div>
  );
};