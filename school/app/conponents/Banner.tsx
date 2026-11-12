import MyButton from "./MyButton";

export default function Banner(){
    return (
        <div className="md:grid grid-cols-2 items-center">
        <div className="banner-img">
            <img src="/img/banner.svg" alt=""/>
        </div>

        <div className="text-center ">
            <h2 className="text-white">UTFPR</h2>
            <h3 className="text-[#00e77f]">A melhor escola de Informática</h3>
        
            <MyButton bgColor="bg-[#00e77f]" > Saiba Mais </MyButton>       
        
            
        </div>
   </div>
    )
}