import Image from "next/image";

export default function Home() {
  return (
  <section>
   
    
    <div className="flex justify-center  w-screen h-screen overflow-hidden bg-[rgb(26,31,123)]"> 
      <div className=" w-[calc(100vw - 8rem)] h-10/12 relative pointer-events-all">
      <div className="absolute bg-white z-10 w-screen top-0 h-auto">
      <Image src={'/signature_dark.png'} alt="Anish Raj Pandey" width={200} height={200} />
      Website is in progress  ...
      </div>

      <div className="absolute bg-[rgb(26,31,123)] z-10 w-screen bottom-0 h-16">

        <div className="w-screen text-2xl text-white p-3 text-center">Hi, I am Anish </div>
      </div>
        

      <iframe className="opacity-50 w-screen h-full"  src="https://sketchfab.com/models/890bbeb2ad5a4bd6b80df2089416aae7/embed?autostart=1&preload=1&transparent=1"> </iframe> 
q  
      </div>
    
    </div>
    </section>
  );
}
