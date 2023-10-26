'use client'

import Project from "./project";
import diverko from "../public/diverko.jpg"
import RPS from "../public/rps.jpg"
import TooDoo from "../public/toodoo.png"

import { AiOutlineSwapRight, AiOutlineSwapLeft } from 'react-icons/ai'

export default function Work() {

    let stack: HTMLElement | null;
    let project: HTMLElement | null;
    let screenWidth: number;
    let index = 0;
    const maxProjects = 3;
    let down = 0



    if (typeof window === 'object'){

        const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;

        stack = document.getElementById('stack');
        if ( maxProjects > 3){
            document.getElementById('grid')!.style.gridTemplateRows = "repeat(2, minmax(0, 1fr))";
        }
        if ( maxProjects <= 3){
            document.getElementById('grid')!.style.height = "75%";
        }
        const first = stack!.firstChild as HTMLElement;
        if (!isReduced){
            first.animate({
                transform: 'translate(-100%)',
            }, { duration: 10, fill: "forwards" });
        }

        //mouse swipe
        const work = document.getElementById('work')
        work!.addEventListener('pointerdown', e => {
            down = e.clientX
        })
        work!.onpointerup = e => {
            if ((down + 20) < e.clientX) {
                left()
            }
            if ((down - 20) > e.clientX) {
                right()
            }
        }

        //touch swipe
        work!.addEventListener('touchstart', e => {
            down = e.touches[0].clientX
        })
        work!.ontouchend = e => {
            if ((down + 20) < e.changedTouches[0].clientX) {
                left()
            }
            if ((down - 20) > e.changedTouches[0].clientX) {
                right()
            }
        }
    }
    
    function right(){
        let oldindex = index;
        index += 1;
        let children = stack?.children;
        if (index >= maxProjects ){
            index = maxProjects - 1;
        };
        children![oldindex].animate({
            transform: 'translate(-200%)',
        }, { duration: 600, fill: "forwards" });
        children![index].animate({
            transform: 'translate(-100%)',
        }, { duration: 600, fill: "forwards" });
        
    }
    function left(){
        let oldindex = index;
        index -= 1;
        let children = stack?.children;
        if (index <= -1 ){
            index = 0;
        }
        children![oldindex].animate({
            transform: 'translate(0)',
        }, { duration: 600, fill: "forwards" });
        children![index].animate({
            transform: 'translate(-100%)',
        }, { duration: 600, fill: "forwards" });
        (children![index] as HTMLElement).style.transform = 'initial'
        
    }

    return (
        //Work section
        <section id="work" className=" bg-points w-screen min-h-screen snap-always snap-start bg-primary__white relative overflow-hidden lg:grid lg:place-items-center">
            {/* Smaller screens get a swipable gallery of the projects */}
            <div className="block lg:hidden">
                <button
                onClick={() => left()}
                id='back'
                className="bottom-2 slidebutton"
                >
                    <AiOutlineSwapLeft/>
                    PREVIOUS
                </button>
                <div id="stack">
                    <div id="project">
                        <Project 
                        title="Diverko" 
                        photo={diverko}
                        description="The official site of Diverko. A sales consultancy passionate about motorcycles."
                        tags={['React Native', 'TailwindCSS', 'EmailJs']}
                        link="https://diverko.be"
                        code="https://github.com/WietseV/Diverko"
                        />
                    </div>
                    <div id="project">
                        <Project 
                        title="R_P_S" 
                        photo={RPS} 
                        description="A rock, paper, scissors web application"
                        tags={['React - Nextjs 13', 'TailwindCSS', 'SWR', 'Typescript']}
                        link="https://r-p-s-wietsev.vercel.app/"
                        code="https://github.com/WietseV/R_P_S"
                        />
                    </div>
                    <div id="project">
                        <Project 
                        title="Toodoo" 
                        photo={TooDoo} 
                        description="A To-do application with authentication and a authenticated personal database linked to your google account"
                        tags={['React - Nextjs', 'TailwindCSS', 'Firebase']}
                        link="https://too-doo-wietsev.vercel.app/"
                        code="https://github.com/WietseV/TooDoo"
                        />
                    </div>
                </div>
                <button
                id='next'
                onClick={() => right()}
                className="slidebutton right-0"
                >
                    NEXT
                    <AiOutlineSwapRight/>
                </button>
            </div>
            {/* Bigger screens get a grid of all the projects */}
            <div id="grid" className="hidden lg:grid grid-cols-3 w-[80%] max-w-6xl mx-auto items-center h-screen z-10">
                <Project 
                title="Diverko" 
                photo={diverko}
                description="The official site of Diverko. A sales consultancy passionate about motorcycles."
                tags={['React Native', 'TailwindCSS', 'EmailJs']}
                link="https://diverko.be"
                code="https://github.com/WietseV/Diverko"
                />
                <Project 
                title="R_P_S" 
                photo={RPS} 
                description="A rock, paper, scissors web application."
                tags={['React - Nextjs 13', 'TailwindCSS', 'SWR', 'Typescript']}
                link="https://r-p-s-wietsev.vercel.app/"
                code="https://github.com/WietseV/R_P_S"
                />
                <Project 
                title="Toodoo" 
                photo={TooDoo} 
                description="A To-do application with authentication and an authenticated personal database linked to your google account."
                tags={['React - Nextjs', 'TailwindCSS', 'Firebase']}
                link="https://too-doo-wietsev.vercel.app/"
                code="https://github.com/WietseV/TooDoo"
                />
            </div>
            <div className="hidden absolute inset-0 top-4 text-7xl font-sulphur lg:flex flex-col items-center w-[12%] text-primary__gray">
                <span className="text-primary__pink">M</span>
                <span className="text-primary__pink">y</span>
                <span className="pt-16">W</span>
                <span>o</span>
                <span>r</span>
                <span>k</span>
            </div>
            <div className="lg:hidden absolute inset-0 top-8 text-5xl font-sulphur flex flex-col items-center h-[12%] text-primary__gray">
                <h2><span className="text-primary__pink">My</span>Work</h2>
            </div>
        </section>
    )
}