import Header  from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import HireMe from '@/components/Hireme'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <>
    <Header />
    <div className='bg-red-500 max-w-[1050px] mx-auto mt-10'>
    <About/>
    <Skills/>
    <Experience/>
    <HireMe/>
    <Footer/>
    </div>
    </>
  );
}
