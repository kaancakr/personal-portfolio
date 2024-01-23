"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title:"Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>Angular</li>
                <li>React</li>
                <li>React-Native</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>SQL</li>
            </ul>
        )
    },
    {
        title:"Eduction",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>TED University-Software Engineering</li>
                <li>Eskişehir Anadolu University-Web Design and Programming</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>Angular</li>
                <li>React</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src={"/images/about-image.png"} alt="about-image" width={500} height={500}
                       className="rounded-2xl"/>
                <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am studying at the Department of Software Engineering at TED University, which I entered in
                        2021. I have intermediate knowledge in HTML, CSS, Java, JavaScript, React-Native and Angular
                        languages. I have C1 level English and I am improving myself in this field. In the future, I aim
                        to do my specialization in the field of Front-End Development.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")}
                                   active={tab === "skills"}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")}
                                   active={tab === "education"}>{" "}Education{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("certifications")}
                                   active={tab === "certifications"}>{" "}Certifications{" "}</TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;