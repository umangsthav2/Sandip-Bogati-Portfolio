const QualificationSection = () => {
    return (
        <div className="p-25 bg-[var(--custom-black)]">
            <h1 className="text-6xl text-white font-bold text-center">
                Academic <span className="text-[var(--custom-blue)]">Qualification</span>
            </h1>

            <div className=" flex flex-row border-white justify-between qualipanel rounded border-2 px-20 py-10 my-8">
                <div className="collegedetail flex flex-col">
                    <h1 className="text-3xl font-bold text-[var(--custom-blue)] mb-5">College</h1>
                    <div className="collegedetail text-white text-2xl leading-12">
                        Aryan School of Engineering<br />
                        Milestone International College<br />
                        Broadway Infosys<br />
                    </div>
                </div>
                <div className="ml-15 border-1 size border-white"></div>
                <div className="collegedetail flex flex-col">
                    <h1 className="text-3xl font-bold text-[var(--custom-blue)] mb-5">Levels</h1>
                    <div className="collegedetail text-white text-2xl leading-12">
                        Bachelors of Information Technology (2020 Batch)<br />
                        +2 Hotel Management (2017 Batch)<br />
                        2 Months as a UI/UX trainee (2022)  <br />
                    </div>
                </div>
                


            </div>



        </div>


    );
}
export default QualificationSection;