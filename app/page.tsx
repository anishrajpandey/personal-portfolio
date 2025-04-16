import Image from "next/image";

export default function Home() {
  return (
    <section className="relative">
      <div className="flex justify-center  w-screen h-screen overflow-hidden">
        <div className=" w-screen h-10/12 relative pointer-events-none">
          <div className="fixed top-0 bg-white z-10 w-screen h-auto">
            <Image
              src={"/signature_dark.png"}
              alt="Anish Raj Pandey"
              width={200}
              height={200}
            />
            Website is in progress ...
          </div>
          <div className="text-white absolute bg-white w-screen bottom-0 h-auto z-10">
            <div className="w-screen min-h-16 text-2xl text-center m-0 p-0">
             
            </div>
          </div>
   
            
          <iframe
            className=" w-screen h-full"
            src="https://sketchfab.com/models/890bbeb2ad5a4bd6b80df2089416aae7/embed?autostart=1&preload=1&transparent=0"
          >
            {" "}
          </iframe>
  
        </div>
      </div>
      <div className="text-5xl  font-bold text-white uppercase h-auto mix-blend-difference m-0 p-0 ">
                <p>Hi, I am Anish</p>
                
              </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </section>
  );
}
