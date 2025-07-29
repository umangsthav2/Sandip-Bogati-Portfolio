import gmail_icon from '../assets/icons/gmail.svg';
import linkedin_icon from '../assets/icons/linkedin.svg';

const ConnectMe = () => {
    return (
        <section id='connect'>
            <div className="p-25 bg-[var(--custom-black)]">
                <h1 className="text-6xl text-white font-bold text-center">
                    <span className="text-[var(--custom-blue)]">Connect</span> me with
                </h1>
                <div className=" flex flex-row border-white justify-between qualipanel rounded border-2 px-20 py-10 my-8">
                    <div className="collegedetail text-white text-2xl leading-12">

                        <div className="links flex flex-row items-center gap-10">
                            <img src={gmail_icon} className='size-8' alt="" />
                            <a href='mailto:sandipbogati1997@gmail.com' target='_blank'>G-Mail</a>
                        </div>

                        <div className="links flex flex-row items-center gap-10">
                            <img src={linkedin_icon} className='size-8' alt="" />
                            <a href='https://www.linkedin.com/in/sandipbogati/' target='_blank'>LinkedIn</a>
                        </div>

                        <div className="links flex flex-row items-center gap-10">
                            <img src={linkedin_icon} className='size-8' alt="" />
                            <a href='https://wa.me/whatsappphonenumber?text=Hello' target='_blank'>WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ConnectMe;