import React  from 'react'
import DropdownButton from './Dropdown';
import SearchBar from './SearchBar';

const items = {
    item1: {
        1:"Access Science" ,
        2: "Business and careers",
        3:"Education",
        4:"Online courses",
        5:"Refrence",
    },
    item2:{
        1:"Books, ebooks and audiobooks" ,
        2: " Movies and TV",
        3:"Newspapers and magazines",
        4:"Book recommendations",
        5:"View all: Books and media",
        6:"Music"
    },
    item3:{
        1:"Maker Mississauga" ,
        2: "Newcomer services",
        3:"Loans and fees",
        4:"Open Window Hub",
        5:"Resources for teachers",
        6:"View all: Using the library"
    }
}

const Header = () => {
  return (
        <div>
            <div className="flex items-center pl-16 xl:pl-64  bg-sky-400">
                <a href="#" className="flex items-center">
                    <img
                        className=" h-8 w--8 xl:h-10 xl:w--10 bg-sky-400 "
                        src="flogo.png"
                        alt="Image description"
                    />
                </a>
            </div>
            <div className="flex flex-row xl:flex-col">
                <div className="p-2 md:pl-64 sm:pl-2">
                    <div className="border-2 border-amber-50 p-3 w-2/12 hover:border-teal-400">
                        <a href="/" className='w-8'  >
                            <img className="" src="https://www.mississauga.ca/wp-content/uploads/sites/4/2019/04/30105521/Library-marketing.svg" alt="Mississauga library home"/>
                        </a>
                    </div>
                </div>
                <div className="bg-green-200 xl:w-1/2 ">
                    {/* Content of second inner div */}
                </div>
            </div>
            <nav>
                <div className=" justify-center items-center p-3 border-b-2 border-t-2">
                    <ul className="flex flex-row justify-center items-center">
                        <li className='ml-2  text-gray-950'><a className='p-4 border border-opacity-0 border-gray-400 hover:border-t-sky-400 hover:border-r-sky-400 hover:border-l-sky-400 hover:border-b-red-950 hover:border-b-2 transition-all duration-300' href='#'>Catalogue</a></li>
                        <li className='ml-2  text-gray-950'><a className='p-4 border border-opacity-0 border-gray-400 hover:border-t-sky-400 hover:border-r-sky-400 hover:border-l-sky-400 hover:border-b-red-950 hover:border-b-2 transition-all duration-300'>Locations</a></li>
                        <DropdownButton title={"Using the library"} items={items.item2}  />
                        <li className='ml-2  text-gray-950'><a className='p-4 border border-opacity-0 border-gray-400 hover:border-t-sky-400 hover:border-r-sky-400 hover:border-l-sky-400 hover:border-b-red-950 hover:border-b-2 transition-all duration-300' href='#'>Programs</a></li>
                        <DropdownButton title={"Books and media"} items={items.item3}  />
                        <DropdownButton title={"Research and learn"} items={items.item1}  />
                    </ul> 
                </div>
            </nav>
            <SearchBar/>
        </div>
    )
}

export default Header   