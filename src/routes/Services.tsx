import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Globe, Share2, Smartphone, Glasses, ArrowLeft } from 'lucide-react';
import { Navigation } from '../components/Navigation';

const services = {
  web: {
    title: 'Website Development',
    icon: <Globe className="h-16 w-16" />,
    description: 'Custom websites that engage visitors and drive conversions.',
    features: [
      {
        title: 'Responsive Design',
        description: 'Ensure your website looks great on any device with our responsive design services. We create seamless experiences across desktops, tablets, and smartphones, adapting content dynamically for an optimal viewing experience.'
      },
      {
        title: 'SEO Optimization',
        description: 'Improve your search engine rankings with our comprehensive SEO optimization services. From keyword research to on-page and off-page strategies, we help you attract more organic traffic and drive conversions.'
      },
      {
        title: 'Performance Optimization',
        description: 'Enhance website speed and performance with our optimization solutions. We reduce load times, enhance user experience, and ensure your site operates smoothly across all platforms for maximum engagement.'
      },
      {
        title: 'Custom CMS Integration',
        description: 'We offer tailored CMS integration to give you full control over your website\'s content. Whether it\'s WordPress, Joomla, or custom-built solutions, we ensure easy management and updates, simplifying your content workflows.'
      }
    ]
  },
  social: {
    title: 'Social Media Marketing',
    icon: <Share2 className="h-16 w-16" />,
    description: 'Strategic social media campaigns that build brand awareness.',
    features: [
      {
        title: 'Content Strategy',
        description: 'Develop a comprehensive content strategy that resonates with your target audience and aligns with your business goals.'
      },
      {
        title: 'Community Management',
        description: 'Build and nurture an engaged online community through consistent interaction and valuable content sharing.'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Track and analyze social media performance metrics to optimize your campaigns and maximize ROI.'
      },
      {
        title: 'Paid Advertising',
        description: 'Create targeted paid social media campaigns that reach your ideal customers and drive measurable results.'
      }
    ]
  },
  mobile: {
    title: 'Mobile App Development',
    icon: <Smartphone className="h-16 w-16" />,
    description: 'Native and cross-platform apps that deliver exceptional UX.',
    features: [
      {
        title: 'iOS Development',
        description: 'Create powerful and intuitive iOS applications that leverage the latest Apple technologies and design guidelines.'
      },
      {
        title: 'Android Development',
        description: 'Build feature-rich Android apps that provide seamless experiences across the diverse Android ecosystem.'
      },
      {
        title: 'Cross-platform Solutions',
        description: 'Develop efficient cross-platform applications that maintain native performance while reducing development time and costs.'
      },
      {
        title: 'App Store Optimization',
        description: 'Maximize your app\'s visibility and downloads through strategic app store optimization techniques.'
      }
    ]
  },
  ar: {
    title: 'Augmented Reality',
    icon: <Glasses className="h-16 w-16" />,
    description: 'Immersive AR experiences that revolutionize user interaction.',
    features: [
      {
        title: 'AR App Development',
        description: 'Create engaging augmented reality applications that blend digital content with the real world.'
      },
      {
        title: 'Interactive 3D Models',
        description: 'Design and implement interactive 3D models that users can manipulate and explore in real-time.'
      },
      {
        title: 'Virtual Try-ons',
        description: 'Develop virtual try-on experiences for products, allowing customers to visualize items before purchase.'
      },
      {
        title: 'Location-based AR',
        description: 'Build location-aware AR experiences that provide contextual information and interactive content based on user location.'
      }
    ]
  }
};

export default function Service() {
  const { id } = useParams();
  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <Navigation />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-purple mb-4">Service Not Found</h1>
          <p className="text-dark-300">The requested service does not exist.</p>
          <Link 
            to="/" 
            className="inline-flex items-center mt-6 text-brand-purple hover:text-brand-orange transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center mb-8 text-brand-purple hover:text-brand-orange transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            
            <div className="text-center mb-16">
              <div className="inline-block p-6 rounded-full bg-dark-800 mb-8">
                {service.icon}
              </div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-brand bg-clip-text text-transparent">
                {service.title}
              </h1>
              <p className="text-xl text-dark-300">{service.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-dark-800/50 hover:bg-dark-800 
                    transform hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-brand-purple mb-3">{feature.title}</h3>
                  <p className="text-dark-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}