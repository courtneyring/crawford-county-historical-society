'use client';

import Hero from "@/components/Hero/Hero";
import copy from '@/assets/json/copy.json';
import { ParseContent } from "@/components";


const Board = () => {
    const boardCopy = copy.board;
    const boardList = copy.boardlist;


    return (
        <main className="flex flex-col items-center">
            <Hero skinny image={boardCopy.heroImg} />
            <div className='max-w-7xl w-full px-2'>
                <h1>{boardCopy.pageName}</h1>
                <p className="mb-5 font-bold">{boardCopy.listTitle}</p>
                <ul className="mb-5">
                    {boardList.map((pos) => {
                        return <li className="mb-5">{pos.title},&nbsp;<i >{pos.position}</i></li>
                    })}
                </ul>
                <hr className="mb-5"></hr>
                <p className="mb-5 ">{boardCopy.paragraph1}</p>
                <p className="mb-5 ">{boardCopy.paragraph2}</p>
                <ParseContent className="ml-5 mb-5" content={boardCopy.address2} tag='p'></ParseContent>
                <p className="mb-5 ">{boardCopy.paragraph3}</p>
                <ParseContent className="ml-5 mb-5" content={boardCopy.address3} tag='p'></ParseContent>
                <p className="mb-5 ">{boardCopy.paragraph4}</p>
            </div>

        </main>
    )
}

export default Board;