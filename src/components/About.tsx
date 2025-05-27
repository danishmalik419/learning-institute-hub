
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Library</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learning Institute and Library has been serving the community of Islamnagar, Saharanpur 
            with quality education and extensive library resources.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to fostering a love for learning and providing access to knowledge 
              for all members of our community. Our library serves as a hub for education, 
              research, and personal growth.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Extensive Collection</h4>
                <p className="text-gray-600 text-sm">
                  Over 5,000 books covering various subjects and genres
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Study Environment</h4>
                <p className="text-gray-600 text-sm">
                  Quiet and comfortable spaces for reading and studying
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Educational Programs</h4>
                <p className="text-gray-600 text-sm">
                  Regular workshops and learning sessions for all ages
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Community Focus</h4>
                <p className="text-gray-600 text-sm">
                  Serving the educational needs of Islamnagar community
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Students studying"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            />
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
              alt="Library books"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
