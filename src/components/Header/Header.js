import React from 'react';

const Header = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" alt='' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">
                            <small className='text-3xl'>Hi, there!</small>
                            <br />
                            I'M Nandini Das
                        </h1>
                        <p class="py-6">
                            I enjoy learn new skills and implementing then in real life.
                            <br />
                            I like programming.
                            <br />
                            I'm always ready to learn new framework/technology to keep myself update 
                            <br />
                            with the latest market trends.
                        </p>
                        <button class="btn btn-primary">Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;