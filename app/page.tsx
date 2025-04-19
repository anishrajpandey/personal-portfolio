"use client";
import { useRef, useEffect } from "react";

import Image from "next/image";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = document.querySelector(".threedcontainer");

    if (!element) return;

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      // 0.5 means the element moves at half the scroll speed
      const translateY = scrollY * 0.7;
      if (element instanceof HTMLElement)
        element.style.transform = `translateY(-${translateY}px)`;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial position

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative">
      <div className="fixed top-0 bg-white z-10 w-screen h-auto">
        <Image
          src={"/signature_dark.png"}
          alt="Anish   Raj Pandey"
          width={100}
          height={100}
        />
        Web..
      </div>
      <div
        ref={backgroundRef}
        className="flex justify-center fixed  w-screen h-fit overflow-hidden"
      >
        <div
          // style={{ y: backgroundY }}
          className=" w-screen h-10/12 threedcontainer relative"
        >
          <div className="fixed top-0 bg-white z-10 w-screen h-auto"></div>

          <div className="text-white absolute bg-white w-screen bottom-0 h-auto z-10">
            <div className="w-screen min-h-16 text-2xl text-center m-0 p-0"></div>
          </div>
          <div className="relative">
            <iframe
              className=" w-screen h-[75vh]"
              src="https://sketchfab.com/models/890bbeb2ad5a4bd6b80df2089416aae7/embed?autostart=1&preload=1&transparent=0"
            >
              {" "}
            </iframe>
            <div className=" parent pointer-events-none absolute  w-full h-auto  top-1/5 bottom-1/5  z-30 ">
              <div className="div3  flex justify-center items-center">
                <Image
                  src={"/Brackets1.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-75 transition-all duration-200 cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>

              <div className="div4  flex justify-center items-center">
                <Image
                  src={"/cloud-icon.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-150 transition-all duration-200 cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>
              {/* <div className="div4  flex justify-center items-center">
                <Image
                  src={"/headphone.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-100 w-4xl transition-all duration-200 cursor-pointer"
                  width={100}
                  height={100}
                />
              </div> */}
              <div className="div6  flex justify-center items-center">
                <Image
                  src={"/coffee.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-200 transition-all duration-200 cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>
              <div className="div5  flex justify-center items-center">
                <Image
                  src={"/group 1.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-300 transition-all duration-200 cursor-pointer"
                  width={150}
                  height={150}
                />
              </div>
              <div className="div2  flex justify-center items-center">
                <Image
                  src={"/headphone1.png"}
                  alt="Anish Raj Pandey"
                  className="  hover:animate-bounce delay-300 transition-all duration-200 cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70vh]"></div>
      <div className="heroTextBox  ">
        <p className="text-center uppercase relative text-gray-200 font-semibold bg  text-6xl h-auto mix-blend-difference m-0 p-0">
          Hi, I am Anish
        </p>
        <p className="text-center uppercase relative   text-gray-500 text-xl m-2 h-auto mix-blend-difference ">
          I build intelligent systems that transform data into actionable
          insights.
        </p>
      </div>
      <div className="h-screen"></div>
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor
        expedita ad dolores unde nulla facere, at doloremque provident? Voluptas
        nemo modi aliquam laborum neque, quis quod laudantium nam placeat
        tempore laboriosam aliquid, temporibus dolores cum, reiciendis dolor ad
        eveniet at suscipit cupiditate dicta nisi! Voluptas minus animi debitis
        quisquam, fugit repudiandae impedit amet numquam, sequi incidunt
        sapiente culpa, aliquid asperiores. Laboriosam nostrum voluptas illum
        est minima? Necessitatibus perferendis soluta totam ipsam ipsa dolores
        aperiam libero ullam eius qui neque nemo nulla nobis pariatur placeat
        blanditiis distinctio ratione, magnam nisi? Nemo aspernatur ipsum
        distinctio quod nam, fuga architecto! Voluptatibus, mollitia corrupti?
        Eius doloremque quam expedita alias nemo ullam aperiam illo molestiae
        asperiores repudiandae ab, culpa dolore praesentium dignissimos sapiente
        dolores, mollitia, sequi minus laboriosam quis saepe magnam? Pariatur,
        in? Placeat nostrum illo laudantium. Pariatur, iure porro velit debitis
        maxime aliquid a veritatis dolorum est qui perspiciatis fugit, soluta
        tenetur doloremque atque minus eius non amet magni exercitationem
        corrupti. Dolorem maxime repellat dignissimos. Vel quis provident
        repellat a minima qui facere dolores nulla modi! Iure ducimus culpa
        veritatis obcaecati minima voluptatibus dolorum eligendi deserunt,
        distinctio, fuga perferendis reiciendis illo explicabo vitae maxime nemo
        quaerat dolore! Eaque unde, mollitia, iste sed nostrum id distinctio
        veniam, velit quo ratione rem asperiores. Mollitia reiciendis, tempora,
        iure quia odio dolores non natus culpa, at aperiam eveniet voluptatibus
        nobis ab deleniti quam molestias dicta? Unde nihil, quae consequatur
        nisi voluptas adipisci amet eos suscipit odio itaque laboriosam
        distinctio minima totam dicta ex sequi quam fuga, molestiae fugit error
        quibusdam necessitatibus temporibus. Ea labore aliquid, soluta sunt rem
        ducimus provident dicta minima aspernatur repellendus consequuntur
        placeat tempore odit nulla unde minus quidem possimus commodi et quo
        incidunt eius eveniet. Id maiores veritatis dolor? Illo ullam, voluptate
        quis fugit magni quod neque perspiciatis dolorem dolores, enim a eaque
        nesciunt voluptates veritatis deserunt officiis repellendus architecto
        quas facilis veniam rem laborum? Sequi maiores alias possimus, dolor ut
        ipsam modi voluptatibus quasi eius aliquid, illum minima obcaecati? Esse
        magni possimus nobis veniam quibusdam quo accusamus rem dolorum harum
        ipsam. Labore sed ipsum ut incidunt consectetur asperiores natus
        recusandae fugit doloribus quia accusantium dolorum nesciunt, et
        quisquam sit reprehenderit ipsam obcaecati ab! Doloribus laudantium,
        omnis nisi natus unde modi eveniet cumque. Recusandae cumque asperiores
        rerum pariatur incidunt itaque voluptas! Expedita tempore excepturi
        atque nam. Voluptas officiis sint vitae? Quod iste magni, nihil ea
        veritatis numquam quaerat quas harum quasi tenetur inventore et aut
        dolorum ad blanditiis atque maxime illo, cum enim repellat. Beatae
        itaque illum nisi temporibus ad aliquid quae amet atque fugit iure
        praesentium modi porro, facere eligendi id recusandae eius tempore.
        Itaque fuga distinctio officiis, voluptas adipisci perspiciatis
        praesentium nihil, alias iste dignissimos ea earum numquam ex provident
        animi fugit! Excepturi ipsa dignissimos asperiores delectus, natus
        aperiam? Neque consequuntur odit perferendis deleniti animi odio,
        nesciunt quibusdam reprehenderit, esse, a cumque! Cumque, ducimus sed a
        eos magnam iste sint sunt, vel, ab voluptatum aspernatur officia! Dolor
        fuga facilis rerum ab porro totam ad. Labore officiis odit enim officia
        aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        dolor expedita ad dolores unde nulla facere, at doloremque provident?
        Voluptas nemo modi aliquam laborum neque, quis quod laudantium nam
        placeat tempore laboriosam aliquid, temporibus dolores cum, reiciendis
        dolor ad eveniet at suscipit cupiditate dicta nisi! Voluptas minus animi
        debitis quisquam, fugit repudiandae impedit amet numquam, sequi incidunt
        sapiente culpa, aliquid asperiores. Laboriosam nostrum voluptas illum
        est minima? Necessitatibus perferendis soluta totam ipsam ipsa dolores
        aperiam libero ullam eius qui neque nemo nulla nobis pariatur placeat
        blanditiis distinctio ratione, magnam nisi? Nemo aspernatur ipsum
        distinctio quod nam, fuga architecto! Voluptatibus, mollitia corrupti?
        Eius doloremque quam expedita alias nemo ullam aperiam illo molestiae
        asperiores repudiandae ab, culpa dolore praesentium dignissimos sapiente
        dolores, mollitia, sequi minus laboriosam quis saepe magnam? Pariatur,
        in? Placeat nostrum illo laudantium. Pariatur, iure porro velit debitis
        maxime aliquid a veritatis dolorum est qui perspiciatis fugit, soluta
        tenetur doloremque atque minus eius non amet magni exercitationem
        corrupti. Dolorem maxime repellat dignissimos. Vel quis provident
        repellat a minima qui facere dolores nulla modi! Iure ducimus culpa
        veritatis obcaecati minima voluptatibus dolorum eligendi deserunt,
        distinctio, fuga perferendis reiciendis illo explicabo vitae maxime nemo
        quaerat dolore! Eaque unde, mollitia, iste sed nostrum id distinctio
        veniam, velit quo ratione rem asperiores. Mollitia reiciendis, tempora,
        iure quia odio dolores non natus culpa, at aperiam eveniet voluptatibus
        nobis ab deleniti quam molestias dicta? Unde nihil, quae consequatur
        nisi voluptas adipisci amet eos suscipit odio itaque laboriosam
        distinctio minima totam dicta ex sequi quam fuga, molestiae fugit error
        quibusdam necessitatibus temporibus. Ea labore aliquid, soluta sunt rem
        ducimus provident dicta minima aspernatur repellendus consequuntur
        placeat tempore odit nulla unde minus quidem possimus commodi et quo
        incidunt eius eveniet. Id maiores veritatis dolor? Illo ullam, voluptate
        quis fugit magni quod neque perspiciatis dolorem dolores, enim a eaque
        nesciunt voluptates veritatis deserunt officiis repellendus architecto
        quas facilis veniam rem laborum? Sequi maiores alias possimus, dolor ut
        ipsam modi voluptatibus quasi eius aliquid, illum minima obcaecati? Esse
        magni possimus nobis veniam quibusdam quo accusamus rem dolorum harum
        ipsam. Labore sed ipsum ut incidunt consectetur asperiores natus
        recusandae fugit doloribus quia accusantium dolorum nesciunt, et
        quisquam sit reprehenderit ipsam obcaecati ab! Doloribus laudantium,
        omnis nisi natus unde modi eveniet cumque. Recusandae cumque asperiores
        rerum pariatur incidunt itaque voluptas! Expedita tempore excepturi
        atque nam. Voluptas officiis sint vitae? Quod iste magni, nihil ea
        veritatis numquam quaerat quas harum quasi tenetur inventore et aut
        dolorum ad blanditiis atque maxime illo, cum enim repellat. Beatae
        itaque illum nisi temporibus ad aliquid quae amet atque fugit iure
        praesentium modi porro, facere eligendi id recusandae eius tempore.
        Itaque fuga distinctio officiis, voluptas adipisci perspiciatis
        praesentium nihil, alias iste dignissimos ea earum numquam ex provident
        animi fugit! Excepturi ipsa dignissimos asperiores delectus, natus
        aperiam? Neque consequuntur odit perferendis deleniti animi odio,
        nesciunt quibusdam reprehenderit, esse, a cumque! Cumque, ducimus sed a
        eos magnam iste sint sunt, vel, ab voluptatum aspernatur officia! Dolor
        fuga facilis rerum ab porro totam ad. Labore officiis odit enim officia
        aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        dolor expedita ad dolores unde nulla facere, at doloremque provident?
        Voluptas nemo modi aliquam laborum neque, quis quod laudantium nam
        placeat tempore laboriosam aliquid, temporibus dolores cum, reiciendis
        dolor ad eveniet at suscipit cupiditate dicta nisi! Voluptas minus animi
        debitis quisquam, fugit repudiandae impedit amet numquam, sequi incidunt
        sapiente culpa, aliquid asperiores. Laboriosam nostrum voluptas illum
        est minima? Necessitatibus perferendis soluta totam ipsam ipsa dolores
        aperiam libero ullam eius qui neque nemo nulla nobis pariatur placeat
        blanditiis distinctio ratione, magnam nisi? Nemo aspernatur ipsum
        distinctio quod nam, fuga architecto! Voluptatibus, mollitia corrupti?
        Eius doloremque quam expedita alias nemo ullam aperiam illo molestiae
        asperiores repudiandae ab, culpa dolore praesentium dignissimos sapiente
        dolores, mollitia, sequi minus laboriosam quis saepe magnam? Pariatur,
        in? Placeat nostrum illo laudantium. Pariatur, iure porro velit debitis
        maxime aliquid a veritatis dolorum est qui perspiciatis fugit, soluta
        tenetur doloremque atque minus eius non amet magni exercitationem
        corrupti. Dolorem maxime repellat dignissimos. Vel quis provident
        repellat a minima qui facere dolores nulla modi! Iure ducimus culpa
        veritatis obcaecati minima voluptatibus dolorum eligendi deserunt,
        distinctio, fuga perferendis reiciendis illo explicabo vitae maxime nemo
        quaerat dolore! Eaque unde, mollitia, iste sed nostrum id distinctio
        veniam, velit quo ratione rem asperiores. Mollitia reiciendis, tempora,
        iure quia odio dolores non natus culpa, at aperiam eveniet voluptatibus
        nobis ab deleniti quam molestias dicta? Unde nihil, quae consequatur
        nisi voluptas adipisci amet eos suscipit odio itaque laboriosam
        distinctio minima totam dicta ex sequi quam fuga, molestiae fugit error
        quibusdam necessitatibus temporibus. Ea labore aliquid, soluta sunt rem
        ducimus provident dicta minima aspernatur repellendus consequuntur
        placeat tempore odit nulla unde minus quidem possimus commodi et quo
        incidunt eius eveniet. Id maiores veritatis dolor? Illo ullam, voluptate
        quis fugit magni quod neque perspiciatis dolorem dolores, enim a eaque
        nesciunt voluptates veritatis deserunt officiis repellendus architecto
        quas facilis veniam rem laborum? Sequi maiores alias possimus, dolor ut
        ipsam modi voluptatibus quasi eius aliquid, illum minima obcaecati? Esse
        magni possimus nobis veniam quibusdam quo accusamus rem dolorum harum
        ipsam. Labore sed ipsum ut incidunt consectetur asperiores natus
        recusandae fugit doloribus quia accusantium dolorum nesciunt, et
        quisquam sit reprehenderit ipsam obcaecati ab! Doloribus laudantium,
        omnis nisi natus unde modi eveniet cumque. Recusandae cumque asperiores
        rerum pariatur incidunt itaque voluptas! Expedita tempore excepturi
        atque nam. Voluptas officiis sint vitae? Quod iste magni, nihil ea
        veritatis numquam quaerat quas harum quasi tenetur inventore et aut
        dolorum ad blanditiis atque maxime illo, cum enim repellat. Beatae
        itaque illum nisi temporibus ad aliquid quae amet atque fugit iure
        praesentium modi porro, facere eligendi id recusandae eius tempore.
        Itaque fuga distinctio officiis, voluptas adipisci perspiciatis
        praesentium nihil, alias iste dignissimos ea earum numquam ex provident
        animi fugit! Excepturi ipsa dignissimos asperiores delectus, natus
        aperiam? Neque consequuntur odit perferendis deleniti animi odio,
        nesciunt quibusdam reprehenderit, esse, a cumque! Cumque, ducimus sed a
        eos magnam iste sint sunt, vel, ab voluptatum aspernatur officia! Dolor
        fuga facilis rerum ab porro totam ad. Labore officiis odit enim officia
        aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        dolor expedita ad dolores unde nulla facere, at doloremque provident?
        Voluptas nemo modi aliquam laborum neque, quis quod laudantium nam
        placeat tempore laboriosam aliquid, temporibus dolores cum, reiciendis
        dolor ad eveniet at suscipit cupiditate dicta nisi! Voluptas minus animi
        debitis quisquam, fugit repudiandae impedit amet numquam, sequi incidunt
        sapiente culpa, aliquid asperiores. Laboriosam nostrum voluptas illum
        est minima? Necessitatibus perferendis soluta totam ipsam ipsa dolores
        aperiam libero ullam eius qui neque nemo nulla nobis pariatur placeat
        blanditiis distinctio ratione, magnam nisi? Nemo aspernatur ipsum
        distinctio quod nam, fuga architecto! Voluptatibus, mollitia corrupti?
        Eius doloremque quam expedita alias nemo ullam aperiam illo molestiae
        asperiores repudiandae ab, culpa dolore praesentium dignissimos sapiente
        dolores, mollitia, sequi minus laboriosam quis saepe magnam? Pariatur,
        in? Placeat nostrum illo laudantium. Pariatur, iure porro velit debitis
        maxime aliquid a veritatis dolorum est qui perspiciatis fugit, soluta
        tenetur doloremque atque minus eius non amet magni exercitationem
        corrupti. Dolorem maxime repellat dignissimos. Vel quis provident
        repellat a minima qui facere dolores nulla modi! Iure ducimus culpa
        veritatis obcaecati minima voluptatibus dolorum eligendi deserunt,
        distinctio, fuga perferendis reiciendis illo explicabo vitae maxime nemo
        quaerat dolore! Eaque unde, mollitia, iste sed nostrum id distinctio
        veniam, velit quo ratione rem asperiores. Mollitia reiciendis, tempora,
        iure quia odio dolores non natus culpa, at aperiam eveniet voluptatibus
        nobis ab deleniti quam molestias dicta? Unde nihil, quae consequatur
        nisi voluptas adipisci amet eos suscipit odio itaque laboriosam
        distinctio minima totam dicta ex sequi quam fuga, molestiae fugit error
        quibusdam necessitatibus temporibus. Ea labore aliquid, soluta sunt rem
        ducimus provident dicta minima aspernatur repellendus consequuntur
        placeat tempore odit nulla unde minus quidem possimus commodi et quo
        incidunt eius eveniet. Id maiores veritatis dolor? Illo ullam, voluptate
        quis fugit magni quod neque perspiciatis dolorem dolores, enim a eaque
        nesciunt voluptates veritatis deserunt officiis repellendus architecto
        quas facilis veniam rem laborum? Sequi maiores alias possimus, dolor ut
        ipsam modi voluptatibus quasi eius aliquid, illum minima obcaecati? Esse
        magni possimus nobis veniam quibusdam quo accusamus rem dolorum harum
        ipsam. Labore sed ipsum ut incidunt consectetur asperiores natus
        recusandae fugit doloribus quia accusantium dolorum nesciunt, et
        quisquam sit reprehenderit ipsam obcaecati ab! Doloribus laudantium,
        omnis nisi natus unde modi eveniet cumque. Recusandae cumque asperiores
        rerum pariatur incidunt itaque voluptas! Expedita tempore excepturi
        atque nam. Voluptas officiis sint vitae? Quod iste magni, nihil ea
        veritatis numquam quaerat quas harum quasi tenetur inventore et aut
        dolorum ad blanditiis atque maxime illo, cum enim repellat. Beatae
        itaque illum nisi temporibus ad aliquid quae amet atque fugit iure
        praesentium modi porro, facere eligendi id recusandae eius tempore.
        Itaque fuga distinctio officiis, voluptas adipisci perspiciatis
        praesentium nihil, alias iste dignissimos ea earum numquam ex provident
        animi fugit! Excepturi ipsa dignissimos asperiores delectus, natus
        aperiam? Neque consequuntur odit perferendis deleniti animi odio,
        nesciunt quibusdam reprehenderit, esse, a cumque! Cumque, ducimus sed a
        eos magnam iste sint sunt, vel, ab voluptatum aspernatur officia! Dolor
        fuga facilis rerum ab porro totam ad. Labore officiis odit enim officia
        aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        dolor expedita ad dolores unde nulla facere, at doloremque provident?
        Voluptas nemo modi aliquam laborum neque, quis quod laudantium nam
        placeat tempore laboriosam aliquid, temporibus dolores cum, reiciendis
        dolor ad eveniet at suscipit cupiditate dicta nisi! Voluptas minus animi
        debitis quisquam, fugit repudiandae impedit amet numquam, sequi incidunt
        sapiente culpa, aliquid asperiores. Laboriosam nostrum voluptas illum
        est minima? Necessitatibus perferendis soluta totam ipsam ipsa dolores
        aperiam libero ullam eius qui neque nemo nulla nobis pariatur placeat
        blanditiis distinctio ratione, magnam nisi? Nemo aspernatur ipsum
        distinctio quod nam, fuga architecto! Voluptatibus, mollitia corrupti?
        Eius doloremque quam expedita alias nemo ullam aperiam illo molestiae
        asperiores repudiandae ab, culpa dolore praesentium dignissimos sapiente
        dolores, mollitia, sequi minus laboriosam quis saepe magnam? Pariatur,
        in? Placeat nostrum illo laudantium. Pariatur, iure porro velit debitis
        maxime aliquid a veritatis dolorum est qui perspiciatis fugit, soluta
        tenetur doloremque atque minus eius non amet magni exercitationem
        corrupti. Dolorem maxime repellat dignissimos. Vel quis provident
        repellat a minima qui facere dolores nulla modi! Iure ducimus culpa
        veritatis obcaecati minima voluptatibus dolorum eligendi deserunt,
        distinctio, fuga perferendis reiciendis illo explicabo vitae maxime nemo
        quaerat dolore! Eaque unde, mollitia, iste sed nostrum id distinctio
        veniam, velit quo ratione rem asperiores. Mollitia reiciendis, tempora,
        iure quia odio dolores non natus culpa, at aperiam eveniet voluptatibus
        nobis ab deleniti quam molestias dicta? Unde nihil, quae consequatur
        nisi voluptas adipisci amet eos suscipit odio itaque laboriosam
        distinctio minima totam dicta ex sequi quam fuga, molestiae fugit error
        quibusdam necessitatibus temporibus. Ea labore aliquid, soluta sunt rem
        ducimus provident dicta minima aspernatur repellendus consequuntur
        placeat tempore odit nulla unde minus quidem possimus commodi et quo
        incidunt eius eveniet. Id maiores veritatis dolor? Illo ullam, voluptate
        quis fugit magni quod neque perspiciatis dolorem dolores, enim a eaque
        nesciunt voluptates veritatis deserunt officiis repellendus architecto
        quas facilis veniam rem laborum? Sequi maiores alias possimus, dolor ut
        ipsam modi voluptatibus quasi eius aliquid, illum minima obcaecati? Esse
        magni possimus nobis veniam quibusdam quo accusamus rem dolorum harum
        ipsam. Labore sed ipsum ut incidunt consectetur asperiores natus
        recusandae fugit doloribus quia accusantium dolorum nesciunt, et
        quisquam sit reprehenderit ipsam obcaecati ab! Doloribus laudantium,
        omnis nisi natus unde modi eveniet cumque. Recusandae cumque asperiores
        rerum pariatur incidunt itaque voluptas! Expedita tempore excepturi
        atque nam. Voluptas officiis sint vitae? Quod iste magni, nihil ea
        veritatis numquam quaerat quas harum quasi tenetur inventore et aut
        dolorum ad blanditiis atque maxime illo, cum enim repellat. Beatae
        itaque illum nisi temporibus ad aliquid quae amet atque fugit iure
        praesentium modi porro, facere eligendi id recusandae eius tempore.
        Itaque fuga distinctio officiis, voluptas adipisci perspiciatis
        praesentium nihil, alias iste dignissimos ea earum numquam ex provident
        animi fugit! Excepturi ipsa dignissimos asperiores delectus, natus
        aperiam? Neque consequuntur odit perferendis deleniti animi odio,
        nesciunt quibusdam reprehenderit, esse, a cumque! Cumque, ducimus sed a
        eos magnam iste sint sunt, vel, ab voluptatum aspernatur officia! Dolor
        fuga facilis rerum ab porro totam ad. Labore officiis odit enim officia
        aut?
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </section>
  );
}
