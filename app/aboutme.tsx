'use client'

export default function About() {

    const api = "API's "

    if (typeof window === 'object'){
        const skills = document.getElementById('skills');
        const move = document.getElementById('move');
        const about = document.getElementById('about')
        skills!.style.width = `80%`
        move!.style.left = `${0.8 * window.innerWidth - 52}px`
        const handleOnMove = (e: { clientX: any; }) =>{
        const positionPercentage = e.clientX / window.innerWidth * 100;
        skills!.style.width = `${positionPercentage}%`;
        move!.style.left = `${(positionPercentage / 100) * window.innerWidth - 52}px`
        };
        about!.onpointermove = e => handleOnMove(e);
        about!.ontouchmove = e => handleOnMove(e.touches[0]);
    }
    
    

    return (
        <section className="h-screen bg-primary__gray snap-always snap-start relative overflow-hidden" id="about">
            <a href="./CV_Wietse_Vandeput.pdf" target="_blank" rel="noopener noreferrer" className="font-audiowide text-2xl text-primary__white z-30 absolute right-4 bottom-4">Resume</a>
            <div id="skills" className="h-screen w-full grid place-items-center font-sulphur text-primary__white text-xl overflow-hidden absolute bg-primary__gray z-20">
                <div className="mx-[15vw] w-[70vw]">
                    <h1 className="text-3xl pb-4">ABOUT ME</h1>
                    <p>
                        I am a software engineer with a passion for creating efficient and beautiful things.<br/>
                        Every complex problem has a solution!
                    </p>
                </div>
            </div>
            <div id="hi" className="h-screen w-full font-sulphur text-primary__white text-xl overflow-hidden absolute bg-primary__pink z-0">
                <div className="w-[80%] max-w-6xl mx-auto h-full flex flex-col mt-24">
                    <h1 className="text-4xl mb-16">SKILLS</h1>
                    <div className="flex">
                        <div className="h-80 w-[1px] bg-primary__white"/>
                        <div>
                            <ul className="px-4 list-none list-inside">
                                <h2 className="text-2xl text-primary__gray">Frontend</h2>
                                <li>HTML5 & CSS3</li> 
                                <li>Tailwindcss</li> 
                                <li>React - Nextjs</li>
                                <h2 className="text-2xl text-primary__gray mt-4">Backend</h2>
                                <li>Javascript & Typescript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>SQL</li>
                                <li>Nodejs - npm</li>
                                <h2 className="text-2xl text-primary__gray mt-4">Other</h2>
                                <li>UI/UX - Figma</li>
                                <li>Git & Github</li>
                                <li>{api + " (Firebase, Emailjs, SMTPjs,...)"}</li>
                                <li>And more...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="move" className="absolute top-4 z-30 text-primary__white text-center text-clip overflow-hidden text-xl md:text-lg flex gap-3">
                <h1 className="flex-1 text-primary__pink">Move</h1>
                <h1 className="flex-1 text-primary__gray">Around</h1>
            </div>  
        </section>
    )
}