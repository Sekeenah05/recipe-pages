const Footer = () => {
    return ( 
        <>
        <footer className="py-6 text-zinc-700 mt-14" style={{ backgroundColor: '#FFDB63' }} >
            <div className="container mx-auto flex items-center justify-center my-6">
                <div className=" flex justify-center items-center ">
                    <img className="w-5" src="/logo.png" alt="Food Recipe Store Logo" />
                    <i className="fas fa-coffee text-xl mr-2"></i>
                    <span className="text-lg font-bold">Delícias à Mesa</span>
                </div>
                <div className="flex flex-col ml-60">
                    <h5 className="font-semibold">Redes socials:</h5>
                    <div className="w-5 flex gap-1">
                        <img src="/Youtube Icon.png" alt="youtubeLogo" />
                        <img src="/Twitter Icon.png" alt="twitterLogo" />
                        <img src="/Browser Icon.png" alt="browserLogo" />
                        <img src="/Pinterest Icon.png" alt="pinterestLogo" />
                    </div>
                </div>
            </div>
    </footer>
        </>
     );
}
 
export default Footer;