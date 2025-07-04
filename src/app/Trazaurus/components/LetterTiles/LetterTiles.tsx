import React from "react";

interface ILetter {
  letter: string;
  link?: string;
}

interface LetterTilesProps {
  letters: ILetter[];
}

const LetterTiles: React.FC<LetterTilesProps> = ({ letters }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 justify-center relative">
      {letters.map((e, idx) => (
        <a
          key={idx}
          href={e.link}
          className="sticky top-0 text-black flex items-center mb-4 justify-center max-w-sm p-3 bg-white border border-gray-500 rounded-lg shadow-sm hover:bg-trazaurusBlue hover:text-white hover:border-trazaurusBlue  font-bold tracking-tight"
        >
          LETRA {e.letter}
        </a>
      ))}
    </div>
  );
};

export default LetterTiles;
