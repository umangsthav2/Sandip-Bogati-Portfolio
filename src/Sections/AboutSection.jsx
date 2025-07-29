import bogati_image_final_2 from '../assets/images/bogati colored 2.png'

const AboutSection = () => {
    return (

        <section id='about'>
            <div id='' className=" px-25 bg-[#726c6c] h-200 flex-row flex items-center justify-between flex-wrap">
                <div className="rounded-4xl overflow-hidden  size-120 bg-red-50">
                    <img className='' src={bogati_image_final_2} alt="" />
                </div>
                <div className="text-3xl text-white leading-15">
                    <h1 className="text-6xl font-bold pb-5 ">About Me</h1>
                    <div className="text-xl border-2 p-5 w-200">
                        Welcome to my digital space! I m , a UI/UX Designer with a deep passion for UI/UX design industry. As a , I have cultivated a diverse skills set and keen eye for UI/UX Design, product design and development.<br /><br />I m always open to new opportunities, collaborations, and conversations. Whatever you have a project in mind or just want to connect over a shared interest, feel free to reach out. Let s create something extraordinary together.
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutSection;