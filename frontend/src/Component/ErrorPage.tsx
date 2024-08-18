import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full grid justify-center  my-6'>
            <h2 className='text-8xl text-black mx-80 mt-20'>404</h2>

            <div className='flex flex-wrap justify-center items-center my-16 gap-10'>
                <div className='w-1/2 '>
                    <h2 className='text-3xl text-black mb-6'> UH OH! You are lost.</h2>
                    <p className='text-xl text-gray-950 mb-4'>
                        The page you are looking for does not exist.
                        How you got here is a mystery, but you can always go back.
                        Just click the button below.
                    </p>
                    <Link to={`/`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Back Home Page
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
