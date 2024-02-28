import React from "react";

interface FooterListProps {
  title: string;
  items: { title: string; link: string }[];
}

export const FooterList: React.FC<FooterListProps> = ({ title, items }) => {
  return (
    <div className="w-full">
      <h3 className="text-[16px] font-bold mb-3">{title}</h3>
      <ul className="text-[14px]">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <a href={item.link} className="hover:text-blue-500">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};