import Type from './Type'
import avatar from "../assets/Img/img1.png";
import avatar2 from "../assets/Img/img2.png";
import avatar3 from "../assets/Img/img3.png";
import avatar4 from "../assets/Img/img5.png";
import avatar5 from "../assets/Img/img6.png";
import avatar7 from "../assets/Img/img7.png";
import avatar8 from "../assets/Img/img8.png";
import Timer from "./Timer"
import Button from './Button';
import Faq from './Faq';
import { TimeLine } from './TimeLine';
// import TimeLine2 from './TimeLine2';




const Home = () => {
  
  return ( 
    <>
    <div className='mt-[5rem] bg-[#160E2B] w-full h-auto'>
   
        <Type/>

        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center w-[80%] m-auto lg:mt-[3rem]  '>
        <div className='text lg:pt-[5rem] md:pt-[3rem] pt-[2rem] text-white font-[700] md:items-center sm:items-center'>
          <h1 className='text-5xl md:text-3xl lg:text-[50px] lg:leading-[30px] pb-[30px] font-bold '>getLinked Tech</h1>
          <h1 className='text-5xl md:text-3xl lg:text-[50px] leading-[30px] font-bold '><span>Hackathon</span> <span className='text-purple-500'>1.0</span>
        </h1>
        <p className='line-clamp-2 leading-[20px] pt-[30px]'>Participate in getlinked tech Hackathon 2023 stand <br /> a chance to win a Big prize</p>
        <Button/>
        <Timer/>
      </div>
        <div className="relative">
          <img className='abolute' src={avatar} alt="" />
          <img className='absolute top-2' src={avatar2} alt="" />
        </div>
      </div>
      <div className="h-auto w-full bg-[#140D27] ">
        <div className='grid lg:grid-cols-2 md:grid-cols-1 lg:gap-6 sm:grid-cols-1 text-white w-[80%] m-auto p-[3rem]'>
        <div className="img">
          <img src={avatar3}alt="" className='pt-[rem]' />
        </div>
        <div className="pt-[8rem]">
          <h1 className='pb-[2rem] font-[700] text-3xl md:text-4xl lg:text-2xl   '>Introduction to getlinked tech <span className='text-[#D434FE]'>Hackathon 1.0</span> </h1>
          <p className='line-clamp-6 '>Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!
            </p>
        </div>
        </div>
      </div>
       </div>
       <div className="h-auto w-full bg-[#140D27] ">
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-6 text-white w-[80%] m-auto p-[3rem]'>
        <div className="pt-[8rem]">
          <h1 className='pb-7 font-[700] text-3xl leading-4 '>Rules and</h1>
          <h1 className='font-[700] text-3xl leading-4 text-[#D434FE] pb-10'>Guidelines</h1>
          <p className='line-clamp-6 tracking-wider'>
            Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world,
            that's what we're all about!
           </p>
        </div>
           <div className="img">
          <img src={avatar4}alt=""className='' />
        </div>
        </div>
       </div>
       <div className="h-auto w-full bg-[#140D27] ">
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-6 text-white w-[80%] m-auto p-[3rem]'>
        <div className="img">
          <img src={avatar5}alt="" className='lg:pt-[10rem]' />
        </div>
        <div className="pt-[4rem]">
          <h1 className=' font-[700] text-3xl lg:text-2xl md:text-4xl'>Judging Criteria</h1>
           <h1 className='text-[#D434FE] pb-[2rem] font-[700] text-3xl lg:text-2xl md:text-4xl '>Key attributes</h1> 
            <div className="text ">
            <h3 className='line-clamp-6 text-[#FF26B9] text-[16px]  py-2'>Innovation and Creativity:<span className='text-white text-[14px]'> Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel 
                way or introduces innovative features.</span>
            </h3>
            <h3 className='line-clamp-6 text-[#FF26B9] text-[16px] py-2'>Functionality: <span className='text-white text-[14px]'>  Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                way or introduces innovative features</span>
            </h3>
            <h3 className='line-clamp-6 text-[#FF26B9] text-[16px] py-2'>Impact and Relevance:<span className='text-white text-[14px]'> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</span>
            </h3>
            <h3 className='line-clamp-6 text-[#FF26B9] text-[16px] py-2'>Technical Complexity: <span className='text-white text-[14px]'> Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.</span>
            </h3>
            <h3 className='line-clamp-6 text-[#FF26B9] text-[16px] py-2'>Adherence to Hackathon Rules:<span className='text-white text-[14px]'> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</span>
            </h3>
            </div>
            <Button/>
        </div>
        </div>
      </div>
      <div className="h-auto w-full bg-[#140D27] ">
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-6 text-white w-[80%] m-auto p-[3rem]'>
        <div className="pt-[4rem]">
          <h1 className=' font-[700] text-3xl lg:text-4xl md:text-4xl py-3'>Frequently Ask</h1>
           <h1 className='text-[#D434FE]  font-[700] text-3xl lg:text-4xl md:text-4xl  pb-6'>Question</h1> 
           <h5 className='pb-7'>We got answers to the questions that you might
              want to ask about getlinked Hackathon 1.0</h5 >
            <Faq/>
        </div>
        <div className="img">
          <img src={avatar7}alt="" className='lg:pt-[10rem] ' />
        </div>
        </div>
      </div>
      <div className="h-auto w-full bg-[#140D27] ">
        <div className="text-[32px] font-[700] leading-4 text-center">
          <h1 className='text-2xl text-white  '>Prizes and</h1>
          <h1 className='text-2xl text-[#D434FE]'>Rewards</h1>
        </div>
        <div >
        {/* <div className="img">
          <img src={avatar8}alt="" className='lg:pt-[1rem]' />
        </div> */}
        <div className="" >
          <h1 className=' font-[700] text-3xl lg:text-2xl md:text-4xl'>Judging Criteria</h1>
           {/* <h1 className='text-[#D434FE] pb-[2rem] font-[700] text-3xl lg:text-2xl md:text-4xl '>Key attributes</h1> 
            <div className="text ">
            <h3 className='line-clamp-6 text-[#FF26B9] text-[16px]  py-2'>Innovation and Creativity:<span className='text-white text-[14px]'> Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel 
                way or introduces innovative features.</span>
            </h3>
            <h3 className='line-clamp-6 text-[#FF26B9] text-[16px] py-2'>Functionality: <span className='text-white text-[14px]'>  Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                way or introduces innovative features</span>
            </h3>
            <h3 className='line-clamp-6 text-[#FF26B9] text-[16px] py-2'>Impact and Relevance:<span className='text-white text-[14px]'> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</span>
            </h3>
            <h3 className='line-clamp-6 text-[#FF26B9] text-[16px] py-2'>Technical Complexity: <span className='text-white text-[14px]'> Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.</span>
            </h3>
            <h3 className='line-clamp-6 text-[#FF26B9] text-[16px] py-2'>Adherence to Hackathon Rules:<span className='text-white text-[14px]'> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</span>
            </h3>
            </div> */}
            <TimeLine/>
        </div>
        <div>
          <h2 className='text-white'>timline2</h2>
       {/* <TimeLine2/> */}
        </div>
        </div> 
      </div>
    </> 
  )
}
export default Home

