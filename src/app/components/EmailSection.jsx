"use client";
import React, { useRef } from 'react';
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import InstagramIcon from "../../../public/instagram.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';

const EmailSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z36cfz4', 'template_u3r2828', form.current, 'CiKnGNLR4XdPMS7pe')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Let`s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I`m currently looking for new opportunuties, my inbox is always open.
                    Whether you have a question or just want to say hi, I`ll try my best
                    to get back to you.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/kaancakr">
                        <Image width={30} height={30} src={GithubIcon} alt="GitHub Icon"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/eren-kaan-%C3%A7ak%C4%B1r-0b4312229/">
                        <Image width={30} height={30} src={LinkedinIcon} alt="LinkedIn Icon"/>
                    </Link>
                    <Link href="https://www.instagram.com/ekaanckr/">
                        <Image width={30} height={30} src={InstagramIcon} alt="Instagram Icon"/>
                    </Link>
                </div>
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block text-small font-medium mb-2">Your Email</label>
                        <input name="user_email" type="email" id="email" required placeholder="youremail@email.com"
                               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block text-small font-medium mb-2">Your Name</label>
                        <input name="user_name" type="text" id="subject" required placeholder="Just saying hi!"
                               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
                        <textarea name="message" id="message" required placeholder="Your message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-br from-green-600 to-blue-500 text-white font-medium py-2.5 px-5 rounded-lg w-full border border-slate-200">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;