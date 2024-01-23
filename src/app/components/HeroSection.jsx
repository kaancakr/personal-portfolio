"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import { saveAs } from 'file-saver';

const HeroSection = () => {
    const handleDownloadCv = () => {
        // Replace 'path/to/your/cv.pdf' with the actual path to your CV PDF
        const cvFilePath = 'path/to/your/cv.pdf';

        // Fetch the CV PDF file
        fetch(cvFilePath)
            .then(response => response.blob())
            .then(blob => {
                // Use file-saver library to trigger the download
                saveAs(blob, 'Your_CV.pdf');
            })
            .catch(error => {
                console.error('Error downloading CV:', error);
            });
    };
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
                            Hello, I`m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Kaan',
                                1000,
                                'Web Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        If you are looking for something new, its my pleasure to create for you
                    </p>

                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="${basePath}/images/portfolio.png"
                            alt="avatar"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                <div className="col-span-7 place-self-center text-center sm:text-left mt-6">
                    <button
                        className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-700 via-green-400 to-blue-500 hover:bg-slate-200 text-white">Hire
                        Me
                    </button>
                    <button
                        className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border-green-500 to-blue-500 border-2 mt-3" onClick={handleDownloadCv}>Download
                        My Cv
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;