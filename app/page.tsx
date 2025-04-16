import Image from "next/image";

export default function Home() {
  return (
  <section>
    <Image src={'/signature_dark.png'} alt="Anish Raj Pandey" width={200} height={200} />
    Website is in progress  ...
    
    <div className="sketchfab-embed-wrapper"> <iframe title="Doggy ( 11 animations, 2 skins )" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" execution-while-out-of-viewport= "true" execution-while-not-rendered web-share src="https://sketchfab.com/models/890bbeb2ad5a4bd6b80df2089416aae7/embed?autostart=1&preload=1&transparent=1"> </iframe> 
    {/* <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/doggy-11-animations-2-skins-890bbeb2ad5a4bd6b80df2089416aae7?utm_medium=embed&utm_campaign=share-popup&utm_content=890bbeb2ad5a4bd6b80df2089416aae7" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Doggy ( 11 animations, 2 skins ) </a> by <a href="https://sketchfab.com/Lil_Pupinduy?utm_medium=embed&utm_campaign=share-popup&utm_content=890bbeb2ad5a4bd6b80df2089416aae7" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Lil_Pupinduy </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=890bbeb2ad5a4bd6b80df2089416aae7" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p> */}
    
    </div>
    </section>
  );
}
