import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { ItemsList   } from '../assets/ItemContent';
import { HiLocationMarker } from 'react-icons/hi';
import { RiBook2Line } from 'react-icons/ri';
import { TbMovie } from 'react-icons/tb';
import { BsFileEarmarkMusicFill } from 'react-icons/bs';
import { IoLibraryOutline } from 'react-icons/io5';
import { GiNewspaper, GiArchiveResearch } from 'react-icons/gi';
import { BsCalendar3 } from 'react-icons/bs';


const ItemsUl = () => {
  const icons = {
    HiLocationMarker,
    RiBook2Line,
    TbMovie,
    BsFileEarmarkMusicFill,
    IoLibraryOutline,
    GiNewspaper,
    GiArchiveResearch,
    BsCalendar3,
  };
  return (
    <div className='flex flex-col place-items-start ml-10 md:ml-20 xl:ml-48 '>
      <div className="flex flex-col justify-center items-center mt-4">
        <div className='grid grid-cols-3 gap-x-4 gap-y-4'>
          {ItemsList.map((item, index) => {
            const Icon = icons[item.logo];
            return (
              <a
                key={index}
                className="flex justify-between items-center"
                href="#"
              >
                <div className="text-black w-96 h-24 p-7 flex flex-row items-center gap-2 bg-slate-50 border-t rounded-md hover:scale-105 shadow-lg shadow-slate-600/50 hover:shadow-slate-800/50 transition duration-300">
                  <Icon className="ml-2" size={44} />
                  <h2 className="ml-6 text-xl text-sky-700 hover:text-sky-900">
                    {item.name}
                  </h2>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className='mt-4 flex items-center justify-center'>
        <a className="flex justify-between items-center" href='#'>
            <div className=" text-black w-96 h-24 p-7 flex flex-row items-center gap-2 bg-slate-50 border-t rounded-md hover:scale-105 shadow-lg shadow-slate-600/50 hover:shadow-slate-800/50 transition duration-300">
                <h2 className=' text-xl text-sky-700 hover:text-sky-900'>Hazel McCallion Central Library renovation</h2>
                <MdKeyboardArrowRight color='#2c5282' className='ml-2' size={44}  />
            </div>
        </a>
      </div>
    </div>
  )
}

export default ItemsUl