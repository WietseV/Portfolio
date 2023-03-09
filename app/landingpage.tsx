'use client'

if (typeof window === 'object'){
    //animate job title under name
    // amount of iterations based on the length of the titles list
    let iteration = 0;
    // amount of iterations based on the length of the word
    let it = 0;
    const titles = ['Problem Solver', 'Web Developer', 'UI/UX Designer', 'Full-Stack Developer'];
    let word = titles[0];
    let title = document.getElementById('title');
    setInterval(() => {
        const formWord = setInterval(() => {
            word = titles[iteration]
            if (title !== null) {
            title.innerText = word.split('')
            .map((letter, index) => {
                if (index < it) {
                    return (word[index])
                }
                return ""
            })
            .join('')
            }
            it += 1
            if (it > word.length){
                clearInterval(formWord)
                it = 0
            }
        }, 100)
        iteration += 1
        if (iteration > 3) {
            iteration = 0
        }
    }, 3000)


    //animate cursor background
    window.addEventListener('pointermove', e => {
        let x = e.clientX
        let y = e.clientY

        let pointer = document.getElementById('pointer')
        if (pointer !== null){
            (pointer as HTMLElement).style.opacity = '0.8';
            (pointer as HTMLElement).animate({
                left: `${x - 48}px`,
                top: `${y - 48}px`
            }, { duration: 2500, fill: 'forwards'})
        }
        
    })
    window.addEventListener('touchmove', e => {
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY

        let pointer = document.getElementById('pointer')
        if (pointer !== null){
            (pointer as HTMLElement).style.left = (x - 48)+"px";
            (pointer as HTMLElement).style.top = (y - 48)+"px";
            (pointer as HTMLElement).style.opacity = '0.8';
        }
        
    })

}

export default function LandingPage() {

    function hackerText(){
        const letters = "abcdefghijklmnopqrstuvwxyz-/>!@<?%$&"
        let iterations = 0;
        if (typeof window === 'object'){
            let event = document.querySelector("h1")
                // amount of iterations to change each letter 3 times before becoming the correct letter
                const scramble = setInterval(() =>{
                    if (event !== null){
                        (event as HTMLElement).innerText = (event as HTMLElement).innerText.split('')
                    .map((letter, index) => {
                        if (index < iterations) {
                            return ((event as HTMLElement).dataset.value as string)[index]
                        } 
                        return letters[Math.floor(Math.random() * 36)]
                    })
                    .join('');
                    }
                    
        
                    iterations += 1 / 3
                    if (iterations >= ((event as HTMLElement).dataset.value as string).length) {
                        clearInterval(scramble);
                        iterations = 0
                    }
                }, 30);
            }  
    }

    

    return ( 
        <section id='landingPage' className="h-screen bg-points bg-primary__white overflow-hidden snap-always snap-start relative ">
            <div className='z-10'>
                <div className="max-w-[80%] md:max-w-6xl mx-auto flex flex-col justify-center md:ml-32 xl:ml-72 mt-32 md:mt-48 xl:mt-72 mb-32 overflow-hidden  z-10">
                    <h2 className="font-sulphur text-primary__pink text-lg md:text-2xl z-10">Hi, my name is</h2>
                    <h1 onPointerDown={() => hackerText()} onPointerOver={() => hackerText()} data-value='Wietse Vandeput' 
                    className={`font-audiowide text-primary__gray text-5xl md:text-6xl max-w-fit min-h-[96px] md:min-h-fit text-clip`}>Wietse Vandeput</h1>
                    <h2 id='title' className={`font-sulphur text-primary__pink text-2xl md:text-4xl min-h-[40px] z-10`}>Problem Solver</h2>
                    <a id="projectLink" className="w-36 h-11 z-10 flex justify-center items-center mt-4"
                    href="https://github.com/WietseV/Portfolio">
                        <h3 className="font-sulphur text-sm">&lt;Source Code&gt;</h3>
                    </a>
                </div>
                <a className="w-40 h-16 bg-primary__gray
                flex flex-col justify-center items-center
                absolute bottom-16 md:bottom-8 left-[50%] -translate-x-[90px] -translate-y-[10px]
                 text-primary__white z-10 transition-all duration-75 hover:-translate-x-[80px] hover:-translate-y-[0px]"
                href="/#about">
                    <h3 className=" pb-2 font-sulphur">EXPLORE</h3>
                </a>
                <div className='w-40 h-16 border-2 border-primary__gray
                absolute bottom-16 md:bottom-8 left-[50%] -translate-x-[80px]
                 '/>
            </div>
            <div className='z-0'>
                <div className="relative top-[50%] z-[1]">
                    <div className="w-[850px] h-[90px] bg-primary__gray bg-opacity-90 animate-slideBig mb-4"/>
                    <div className="w-[440px] h-[0px] animate-slideSmall border-b-[55px] border-b-primary__gray
                    border-opacity-80 border-l-transparent border-r-transparent border-solid border-r-[30px]
                    border-l-[30px]"/>
                </div>
                <div id='pointer' className='opacity-0 absolute rounded-full w-48 h-48 beautiful animate-rotate blur-[160px] z-0'/>
            </div>
           
        </section>
    )
}