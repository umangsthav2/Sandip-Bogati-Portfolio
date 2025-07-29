import bogati_image_final from '../assets/images/bogati colored.png'

const HomeSection = () => {
    return (
        <section id='home'>
            <div className=" px-25 h-200 flex-row-reverse flex items-center justify-between flex-wrap">

                <div className=" rounded-4xl overflow-hidden size-120">
                    <img className='' src={bogati_image_final} alt="" />
                </div>
                <div className="text-3xl text-white leading-15">
                    <span></span>Hello ! It's Me <br />
                    <h1 className="text-6xl font-bold hover:text-[var(--custom-blue)] ">Sandip Bogati</h1>
                    and I am a <span className="text-[var(--custom-blue)]">UI/UX Designer</span>
                </div>
            </div>
        </section>
    );
}
export default HomeSection;