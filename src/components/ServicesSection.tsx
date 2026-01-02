import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  highlight?: boolean;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 'uk-used',
      title: 'UK Used iPhone Models',
      description: 'Premium quality used iPhones imported from the UK',
      icon: '🇬🇧',
      features: [
        'UK-sourced quality devices',
        'Thoroughly tested & certified',
        'Excellent condition guarantee',
        'Competitive pricing'
      ],
      highlight: true
    },
    {
      id: 'upgrade',
      title: 'iPhone Upgrade Service',
      description: 'Upgrade your iPhone model as long as it was purchased from us',
      icon: '📱',
      features: [
        'Trade-in your current iPhone',
        'Get instant valuation',
        'Seamless upgrade process',
        'Warranty protection included'
      ]
    },
    {
      id: 'new-orders',
      title: 'Order New iPhones',
      description: 'Get the latest iPhone models directly from authorized dealers',
      icon: '🆕',
      features: [
        'Latest iPhone models',
        'Authorized dealer prices',
        'Fast delivery nationwide',
        'Full warranty coverage'
      ]
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Premium Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive iPhone services designed to meet all your needs, 
            from upgrades to premium UK-sourced devices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-7 lg:p-8 border-2 ${
                service.highlight 
                  ? 'border-gray-800 bg-gradient-to-br from-gray-50 to-gray-100' 
                  : 'border-gray-100 hover:border-gray-300'
              }`}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-gray-800 to-black text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Icon */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-3xl mb-4 ${
                  service.highlight 
                    ? 'bg-gradient-to-br from-gray-800 to-black text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="text-center">
                <h3 className={`text-xl font-bold mb-3 ${
                  service.highlight ? 'text-gray-800' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm mb-6 leading-relaxed ${
                  service.highlight ? 'text-gray-700' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <svg 
                        className={`w-4 h-4 mr-2 flex-shrink-0 ${
                          service.highlight ? 'text-gray-600' : 'text-gray-500'
                        }`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className={service.highlight ? 'text-gray-700' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  service.highlight
                    ? 'bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-800 border border-gray-200 hover:border-gray-300'
                }`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
