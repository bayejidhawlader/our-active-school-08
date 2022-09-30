import React from 'react';

const Footer = () => {
    return (
        <div className='text-white'>
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
                    <h1 className='text-2xl'>How does react work?</h1>
                </div>
                <div className='collapse-content  '>
                    <p>React.js is generally thought of as the view layer in an application. You might have used library like Handlebars, or jQuery in the past. Just as jQuery manipulates UI elements, or Handlebars templates are inserted onto the page, React components change what the user sees. React render the data to the UI, so we pass it to a React component which handles the job of getting the HTML into the page.</p>
                </div>
            </div>

            {/* 03 */}
            <div className='collapse shadow-lg'>
                <input type="checkbox" className='peer'/>
                <div className='collapse-title bg-base-100 shadow-lg text-center'>
                    <h1 className='text-2xl'>How does react work?</h1>
                </div>
                <div className='collapse-content  '>
                    <p>React.js is generally thought of as the view layer in an application. You might have used library like Handlebars, or jQuery in the past. Just as jQuery manipulates UI elements, or Handlebars templates are inserted onto the page, React components change what the user sees. React render the data to the UI, so we pass it to a React component which handles the job of getting the HTML into the page.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;