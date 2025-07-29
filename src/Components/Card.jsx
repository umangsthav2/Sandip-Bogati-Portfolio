const Card = (carddet) => {
    return (

        <>
            <div className=" overflow-hidden bg-[#726c6c] rounded-xl hover:scale-102 transition-[0.25s]  flex justify-between items-center flex-row w-full">
                <div className="imgcontainer">
                    <div className="w-150 bg-red-500">
                    <img src={carddet.image} alt="" />
                    </div>
                </div>
                <div className="projectdetail text-white">
                    <a href=""><h1 className="text-4xl leading-8 my-5 font-bold text-[var(--custom-blue)]" >{carddet.title}</h1></a>
                    <p className="text-xl w-150">{carddet.desc}</p>
                </div>
            </div>
        </>

    );
}
export default Card;