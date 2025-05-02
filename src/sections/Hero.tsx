import { ArrowDown } from 'lucide-react';
import { profile } from '../data/resumeData';
import Button from '../components/Button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="block">Hi, I'm</span> 
              <span className="text-blue-600 dark:text-blue-400">{profile.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
              {profile.title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0">
              {profile.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button>
                Download CV
              </Button>
              <Button variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg" 
              alt="DevOps Illustration" 
              className="rounded-lg shadow-xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-blue-600 dark:text-blue-400"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}