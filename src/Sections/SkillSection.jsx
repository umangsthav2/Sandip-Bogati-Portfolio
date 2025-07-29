import hexagon from '../assets/icons/hexagon.svg';

const SkillSection = () => {
    return (
        <section id='service'>
            <div className=" p-25 flex-col flex items-center justify-between">
                <div className="text-3xl text-white leading-15">
                    <h1 className="text-6xl font-bold mb-25">Services</h1>
                </div>
                <div className="hexcontainer">
                    <div className="hexabox gap-5 justify-center flex flex-row w-full">

                        <span className='flex flex-rows justify-center items-center'>
                            <img className='h-100 cursor-pointer hover:scale-105  transition-[1s]' src={hexagon} alt="" />
                            <span className='absolute font-bold text-2xl text-[var(--custom-blue)]'>User Research</span>
                        </span>
                        <span className='flex flex-rows justify-center items-center'>
                            <img className='h-100 cursor-pointer hover:scale-105  transition-[1s]' src={hexagon} alt="" />
                            <span className='absolute font-bold text-2xl text-[var(--custom-blue)]'>User Flows</span>

                        </span>
                        <span className='flex flex-rows justify-center items-center'>
                            <img className='h-100 cursor-pointer hover:scale-105  transition-[1s]' src={hexagon} alt="" />
                            <span className='absolute font-bold text-2xl text-[var(--custom-blue)]'>Interface Design</span>

                        </span>

                    </div>
                    <div className="hexabox mt-[-80px] gap-5 justify-center flex flex-row gap-5 w-full text-wrap ">
                        <span className='flex flex-rows justify-center items-center'>
                            <img className='h-100 cursor-pointer hover:scale-105  transition-[1s]' src={hexagon} alt="" />
                            <span className='absolute font-bold text-2xl text-[var(--custom-blue)]'>Mockups</span>

                        </span>
                        <span className='flex flex-rows justify-center items-center'>
                            <img className='h-100 cursor-pointer hover:scale-105  transition-[1s]' src={hexagon} alt="" />
                            <span className='absolute font-bold text-2xl text-[var(--custom-blue)]'>Prototyping</span>

                        </span>
                    </div>
                </div>

            </div >
        </section>
    );
}
export default SkillSection;