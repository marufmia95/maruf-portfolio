import React from 'react';

const Skills = () => {
    return (
        <div className="mt-40 mx-4">
            <h1 className="text-2xl sm:text-4xl mb-3 font-bold text-center primary-color">My Name</h1>

            <div className="border border-gray-600 bg-black text-gray-400 max-w-[1200px] mx-auto p-4 flex flex-wrap justify-center gap-4 md:justify-between items-center">
                
                <h2 className="text-gray-200 text-lg sm:text-2xl md:text-4xl font-bold text-center w-full">
                    {/* My <br /> Name */}
                </h2>

                <div className="flex flex-col items-center w-full sm:w-auto">
                    <p className="text-4xl font-bold mb-4 primary-color">মারুফ "চাচ্চু”</p>
                    <p className="text-center">সাবিহা তাবাসসুম। নামের অর্থ প্রভাতের মুচকি হাসি </p>
                </div>

                <div className="flex flex-col items-center w-full sm:w-auto">
                    <p className="text-4xl font-bold mb-4 primary-color">সুমাইয়া "ফুফি”</p>
                    <p className="text-center">সাবিহা বিনতে সুলাইমান। নামের অর্থ সুলাইমানের মেয়ে প্রথম সূর্যউদয়</p>
                </div>

                <div className="flex flex-col items-center w-full sm:w-auto">
                    <p className="text-4xl font-bold mb-4 primary-color">সামিয়া “ফুফি”</p>
                    <p className="text-center">সাফফানা জাহান অর্থ সফল বা বিজয়ী</p>
                </div>

                <div className="flex flex-col items-center w-full sm:w-auto">
                    <p className="text-4xl font-bold mb-4 primary-color">সাইফা “আপু”</p>
                    <p className="text-center">সাইবা নূর</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;
