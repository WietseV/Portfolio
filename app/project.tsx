import Image from "next/image"

export default function Project(props: {title: string, photo: any, description: string, tags: (string)[], link: string, code: string }) {

    return (
        <div id="projectCard" className="w-full min-h-[316px] h-[90%] my-auto px-2 md:px-4 py-2 relative text-primary__gray">
            <div id="cardBackground" className="bg-primary__gray bg-opacity-30 absolute inset-2 h-full z-0 border-0 border-primary__pink shadow-xl"/>
            <div id="cardBackground" className="hidden bg-lines animate-scroll absolute inset-2 h-full z-0"/>
            <div className="font-sulphur h-full flex flex-col justify-center items-center p-4 z-10 gap-4">
                <h1 className="text-3xl font-audiowide pb-4 z-10">{props.title}</h1>
                <a href={props.link}
                target="_blank" rel="noreferrer noopener"
                className="w-[80%] mx-auto bg-center bg-cover relative mb-4 sepia hover:sepia-0 hover:w-[85%]">
                    <Image
                    alt={props.title}
                    src={props.photo}>
                    </Image>
                    <div className="absolute inset-0 translate-y-[10px] translate-x-[10px] border-[1px] border-primary__gray"/>
                </a>
                <div id="toggle" className="w-[80%] mx-auto text-xl pb-4 hidden z-10 leading-tight">
                    <p>{props.description}</p>
                </div>
                <div className="text-base">
                    <ul className="h-full flex flex-wrap gap-2 justify-center items-end">
                        {props.tags.map(tag => {
                            return (
                                <li id='tag' key={tag} className="z-10">{tag}</li>
                            )
                        })}
                    </ul>
                </div>
                <div id="toggle" className="absolute right-4 bottom-2 justify-between items-center gap-4 hidden z-10">
                    <a id="projectLink" href={props.link} target="_blank" rel="noreferrer noopener">Live site</a>
                    <a id="projectLink" href={props.code} target="_blank" rel="noreferrer noopener">&lt;Code&gt;</a>
                </div>
            </div>
        </div>
        
    )
}