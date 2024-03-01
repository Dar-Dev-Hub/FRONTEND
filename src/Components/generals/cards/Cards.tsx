import { useRef } from "react";
import { CardHolder } from "./CardHolder";

interface CardInfo {
  // Define the properties of each card object
}

interface CardsProps {
  cardInfo: CardInfo[];
}

export const Cards: React.FC<CardsProps> = ({ cardInfo }) => {
  const container = useRef(null);

  return (
    <div className="h-fit w-full self-center px-10">
      <div className="w-full h-fit py-5 mx-0 max-md:mx-5 bg-grasy-50">
        <div
          ref={container}
          className="h-fit w-full mt-9 relative max-md:h-fit gap-2 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1"
          id="card_Container"
        >
          {cardInfo.map((card, i) => (
            <div key={i} className="h-fit w-full relative">
              <CardHolder cardinfo={card} />
              <div className="h-fit w-full p-5 text-white bg-grasy-900 absolute bottom-0 left-0">
                {/* Add the description here */}
                
              </div>
            </div>
          ))}
          {/* Part 2 */}
        </div>
      </div>
    </div>
  );
};