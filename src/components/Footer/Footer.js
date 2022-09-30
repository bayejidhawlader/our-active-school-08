import React from 'react';

const Footer = () => {
    return (
        <div className='text-white mb-16'>
            <h1 className='text-4xl text-center my-8 font-bold '>Some Faq & Answers</h1>

            {/* 01 */}
            <div className='collapse shadow-lg'>
                <input type="checkbox" className='peer'/>
                <div className='collapse-title bg-base-100 shadow-lg text-center'>
                    <h1 className='text-2xl'>How does react work?</h1>
                </div>
                <div className='collapse-content  '>
                    <p>React.js is generally thought of as the view layer in an application. You might have used library like Handlebars, or jQuery in the past. Just as jQuery manipulates UI elements, or Handlebars templates are inserted onto the page, React components change what the user sees. React render the data to the UI, so we pass it to a React component which handles the job of getting the HTML into the page.</p>
                </div>
            </div>

            {/* 02 */}
            <div className='collapse shadow-lg'>
                <input type="checkbox" className='peer'/>
                <div className='collapse-title bg-base-100 shadow-lg text-center'>
                    <h1 className='text-2xl'>What are the differences between props and state?</h1>
                </div>
                <div className='collapse-content  '>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </div>
            </div>

            {/* 03 */}
            <div className='collapse shadow-lg'>
                <input type="checkbox" className='peer'/>
                <div className='collapse-title bg-base-100 shadow-lg text-center'>
                    <h1 className='text-2xl'>Where useEffect use without data load?</h1>
                </div>
                <div className='collapse-content  '>
                    <p>Understanding how the useEffect Hook works is one of the most important concepts for mastering React today. If you have been working with React for several years, it is especially crucial to understand how working with useEffect differs from working with the lifecycle methods of class-based components. In fact, it is a wholesale shift in mindset!</p>

                    <h1 className='text-1xl text-red-600'>What are effects, really? Examples are:</h1> <p><small>1. Fetching data
                        2. Reading from local storage
                        3. Registering and deregistering event listeners</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;