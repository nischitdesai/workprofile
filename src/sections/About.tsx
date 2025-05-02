import SectionTitle from '../components/SectionTitle';
import { profile } from '../data/resumeData';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="A dedicated DevOps Engineer with a passion for automating processes and optimizing infrastructure."
        />
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg" 
                alt="DevOps Workflow" 
                className="rounded-lg shadow-xl w-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I am a Senior DevOps Engineer with a strong background in implementing and managing CI/CD pipelines, cloud infrastructure, and automation solutions. With over 10 years of experience in the field, I have developed expertise in various DevOps tools and methodologies including Jenkins, Docker, Kubernetes, and Infrastructure as Code.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My approach to DevOps is centered around creating efficient, reliable, and scalable systems that enable development teams to deliver high-quality software quickly and consistently. I am passionate about staying up-to-date with the latest technologies and best practices in the DevOps ecosystem.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white">{profile.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-900 dark:text-white">{profile.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-900 dark:text-white">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Approach</h3>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg" 
                  alt="CI/CD Pipeline" 
                  className="rounded-lg shadow-md w-full h-32 object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg" 
                  alt="Cloud Infrastructure" 
                  className="rounded-lg shadow-md w-full h-32 object-cover"
                />
              </div>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">Automating repetitive tasks to increase efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">Implementing robust CI/CD pipelines for reliable deployments</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">Optimizing cloud infrastructure for performance and cost</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700 dark:text-gray-300">Collaborating with cross-functional teams to improve workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}