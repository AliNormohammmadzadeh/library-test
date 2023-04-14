import React, {useState , useEffect } from 'react'
import Loading from './Loading'
import axios from "axios";
import { MdKeyboardArrowRight } from 'react-icons/md'


const BookCollection = () => {
    const [activeButton, setActiveButton] = useState('adult');
    const [books, setBooks] = useState([]);

    const handleButtonClick = (t) =>{
        setActiveButton(t);
    }

    useEffect(() => {
        const fetchBooks = async () => {
          const response = await axios.get(`http://localhost:3000/api/books/${activeButton}`);
          setBooks(response.data);
        };
        fetchBooks();
      }, [activeButton]);

  return (
    <div className="flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center items-center border-l-4 border-green-900'>
            <h1 className=" items-center ml-4 text-2xl text-black mt-4">Top book collection</h1>
            <div className="flex justify-center space-x-4 mt-4 ml-8">
                <button onClick={() => handleButtonClick('adult')} className={`px-4 py-2 rounded-lg font-sans ${activeButton === 'adult' ? 'bg-green-500 text-white' : 'bg-gray-200 text-stone-700 hover:bg-indigo-100 active:bg-gray-400 focus:outline-none focus:border-indigo-400 active:border-green-800 border-2 border-b-4 border-gray-300 transition-all duration-200'}`}>
                    Adult
                </button>
                <button  onClick={() => handleButtonClick('child')} className={`px-4 py-2 rounded-lg font-sans ${activeButton === 'child' ? 'bg-green-500 text-white' : 'bg-gray-200 text-stone-700 hover:bg-indigo-100 active:bg-gray-400 focus:outline-none focus:border-indigo-400 active:border-green-800 border-2 border-b-4 border-gray-300 transition-all duration-200'}`}>
                    Children
                </button>
                <button onClick={() => handleButtonClick('young')} className={`px-4 py-2 rounded-lg font-sans ${activeButton === 'young' ? 'bg-green-500 text-white' : 'bg-gray-200 text-stone-700 hover:bg-indigo-100 active:bg-gray-400 focus:outline-none focus:border-indigo-400 active:border-green-800 border-2 border-b-4 border-gray-300 transition-all duration-200'}`}>
                    Youth
                </button>
                <button onClick={() => handleButtonClick('spring reads')}  className={`px-4 py-2 rounded-lg font-sans ${activeButton === 'spring reads' ? 'bg-green-500 text-white' : 'bg-gray-200 text-stone-700 hover:bg-indigo-100 active:bg-gray-400 focus:outline-none focus:border-indigo-400 active:border-green-800 border-2 border-b-4 border-gray-300 transition-all duration-200'}`}>
                    Spring Reads
                </button>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 bg-gray-100">
            <div className="flex flex-row rounded-lg gap-x-4 bg-white">
            {books.length === 0 ? <Loading/> : books.map((book) => (
                <div  className="flex flex-col items-center border-2 w-widht_img border-gray-200 rounded-e-md" key={book.id}>
                    <a href="page1.html" className="border-2 hover:border-cyan-600">
                        <img src={book.image} loading='lazy' className="h-h_img w-widht_img" alt="Book cover"/>
                    </a>
                    <a href="/" className="ml-4 w-width_2 truncate text-lg font-serif text-sky-600 hover:text-slate-900 hover:underline mt-4">{book.title}</a>
                    <a href="#" className="ml-4 w-width_2 truncate my-2 text-base font-sans text-sky-600 hover:text-slate-900 hover:underline">{book.author}</a>
                </div>
            ))}
            </div>
            {books ? <div className='mt-6 flex items-center justify-center'>
                <a className="flex justify-between items-center" href='#'>
                    <div className=" text-black h-12 p-4 flex flex-row items-center gap-2 bg-slate-50 border-t rounded-md hover:scale-105 shadow-lg shadow-slate-600/50 hover:shadow-slate-800/50 transition duration-300">
                        <h2 className=' text-xl text-sky-700 hover:text-sky-900'>View more books</h2>
                        <MdKeyboardArrowRight color='#2c5282' className='ml-2' size={30}  />
                    </div>
                </a>
              </div>: null}
        </div>
    </div>
  )
}

export default BookCollection