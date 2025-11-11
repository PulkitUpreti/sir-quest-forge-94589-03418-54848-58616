import { Target, Eye, Heart, CheckCircle, Users, BookOpen, TrendingUp, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/about-hero.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-[120px] bg-gradient-to-br from-[#0F1F38] to-[#1A2C47] text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 31, 56, 0.85), rgba(26, 44, 71, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontSize: '3rem' }}>
              About TalentVue Solution
            </h1>
            <p className="text-xl md:text-2xl" style={{ color: '#E2E8F0' }}>
              Pioneering excellence in IT solutions, skill development & corporate consulting since inception
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#0F1F38' }}>
              Who We Are
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src={teamPhoto} 
                  alt="TalentVue Solution team of professionals" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  style={{ boxShadow: '0 20px 60px -15px rgba(15, 31, 56, 0.3)' }}
                />
              </div>
              <div className="animate-slide-up">
                <p className="text-lg leading-relaxed" style={{ color: '#4A5568' }}>
                  We are a dynamic team of professionals committed to enabling organisations to transform through technology, 
                  people-growth and leadership excellence. With deep experience across cloud, data, software engineering and 
                  business skills, we empower teams to perform, innovate and thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center animate-scale-in rounded-xl shadow-md" style={{ padding: '3rem' }}>
              <CardContent className="p-0">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" 
                     style={{ backgroundColor: '#0F1F38' }}>
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F1F38' }}>Our Mission</h3>
                <p style={{ color: '#4A5568' }}>
                  To empower organisations through innovative technology solutions, comprehensive skill development, 
                  and strategic consulting services that drive measurable success and sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in rounded-xl shadow-md" style={{ animationDelay: '100ms', padding: '3rem' }}>
              <CardContent className="p-0">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" 
                     style={{ backgroundColor: '#0F1F38' }}>
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F1F38' }}>Our Vision</h3>
                <p style={{ color: '#4A5568' }}>
                  To be recognised as the premier partner for digital transformation and talent development, 
                  setting industry standards for excellence and innovation across all service domains.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in rounded-xl shadow-md" style={{ animationDelay: '200ms', padding: '3rem' }}>
              <CardContent className="p-0">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" 
                     style={{ backgroundColor: '#0F1F38' }}>
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F1F38' }}>Our Values</h3>
                <p style={{ color: '#4A5568' }}>
                  Integrity • Excellence • Innovation • Collaboration • Social Responsibility – these form the foundation 
                  of everything we do, shaping our decisions and relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in" style={{ color: '#0F1F38' }}>
              How We Work
            </h2>
            <p className="text-xl text-center mb-12" style={{ color: '#4A5568' }}>
              Our methodology transforms learning into performance
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center animate-scale-in rounded-xl shadow-md" style={{ padding: '2rem' }}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                       style={{ backgroundColor: '#FF8C00' }}>
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#0F1F38' }}>Needs Assessment</h3>
                  <p className="text-sm" style={{ color: '#4A5568' }}>
                    We analyse skill-gaps and business goals before designing the program.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center animate-scale-in rounded-xl shadow-md" style={{ animationDelay: '100ms', padding: '2rem' }}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                       style={{ backgroundColor: '#FF8C00' }}>
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#0F1F38' }}>Custom Curriculum</h3>
                  <p className="text-sm" style={{ color: '#4A5568' }}>
                    Tailored content aligned to your industry, culture & technology stack.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center animate-scale-in rounded-xl shadow-md" style={{ animationDelay: '200ms', padding: '2rem' }}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                       style={{ backgroundColor: '#FF8C00' }}>
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#0F1F38' }}>Interactive Delivery</h3>
                  <p className="text-sm" style={{ color: '#4A5568' }}>
                    Hands-on labs, real-world case-studies, blended virtual and on-site sessions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center animate-scale-in rounded-xl shadow-md" style={{ animationDelay: '300ms', padding: '2rem' }}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                       style={{ backgroundColor: '#FF8C00' }}>
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#0F1F38' }}>Post-Training Support</h3>
                  <p className="text-sm" style={{ color: '#4A5568' }}>
                    Quizzes, mentoring and refresher content ensure knowledge sticks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in" style={{ color: '#0F1F38' }}>
              Making a Difference
            </h2>
            <p className="text-xl text-center mb-12" style={{ color: '#4A5568' }}>
              We believe in tangible outcomes. Here are some key numbers from our clients
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in">
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#FF8C00' }}>500+</div>
                <p className="text-lg" style={{ color: '#4A5568' }}>Professionals Trained</p>
              </div>
              
              <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#FF8C00' }}>120+</div>
                <p className="text-lg" style={{ color: '#4A5568' }}>Corporate Clients Served</p>
              </div>
              
              <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#FF8C00' }}>4.8/5</div>
                <p className="text-lg" style={{ color: '#4A5568' }}>Average Participant Satisfaction</p>
              </div>
              
              <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: '#FF8C00' }}>30%</div>
                <p className="text-lg" style={{ color: '#4A5568' }}>Productivity Improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Project Association */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in" style={{ color: '#0F1F38' }}>
              Government Project Association
            </h2>
            <p className="text-lg text-center mb-12" style={{ color: '#4A5568' }}>
              Proudly associated with India's leading government initiatives for skill development and entrepreneurship
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  name: "NSDC", 
                  fullName: "National Skill Development Corporation",
                  logo: "https://upload.wikimedia.org/wikipedia/en/8/84/NSDC_Logo.svg" 
                },
                { 
                  name: "MSME", 
                  fullName: "Micro, Small & Medium Enterprises",
                  logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/MSME_Logo.png" 
                },
                { 
                  name: "PMKVY", 
                  fullName: "Pradhan Mantri Kaushal Vikas Yojana",
                  logo: "https://seeklogo.com/images/P/pmkvy-logo-06E7CC62BE-seeklogo.com.png" 
                },
                { 
                  name: "TCI", 
                  fullName: "Transport Corporation of India",
                  logo: "https://upload.wikimedia.org/wikipedia/en/9/9d/TCI_logo.svg" 
                },
              ].map((partner, index) => (
                <Card 
                  key={partner.name}
                  className="animate-scale-in hover:scale-105 transition-all duration-300 rounded-xl shadow-md hover:shadow-xl"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    padding: '1.5rem',
                    backgroundColor: 'white'
                  }}
                >
                  <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                    <div className="flex items-center justify-center mb-3 h-[70px]">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo - ${partner.fullName}`}
                        className="max-h-[70px] w-auto object-contain"
                      />
                    </div>
                    <p className="text-sm font-bold text-center" style={{ color: '#0F1F38' }}>
                      {partner.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in" style={{ color: '#0F1F38' }}>
              What Our Clients Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="animate-fade-in rounded-xl shadow-md hover:shadow-xl transition-all duration-300" style={{ padding: '2rem' }}>
                <CardContent className="p-0">
                  <Quote className="h-10 w-10 mb-4" style={{ color: '#FF8C00' }} />
                  <p className="text-lg mb-4" style={{ color: '#0F1F38' }}>
                    "The cloud training by TalentVue Solution accelerated our team's delivery by 35%. 
                    Their practical approach and expert trainers made all the difference."
                  </p>
                  <p className="font-semibold" style={{ color: '#4A5568' }}>– CPO, XYZ Ltd.</p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in rounded-xl shadow-md hover:shadow-xl transition-all duration-300" 
                    style={{ animationDelay: '100ms', padding: '2rem' }}>
                <CardContent className="p-0">
                  <Quote className="h-10 w-10 mb-4" style={{ color: '#FF8C00' }} />
                  <p className="text-lg mb-4" style={{ color: '#0F1F38' }}>
                    "The leadership workshops transformed how our managers think. We've seen remarkable 
                    improvements in team collaboration and decision-making."
                  </p>
                  <p className="font-semibold" style={{ color: '#4A5568' }}>– HR Head, ABC Corp.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#0F1F38' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Elevate Your Team?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us today for a custom training roadmap tailored for your organisation
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300"
                style={{ 
                  backgroundColor: '#FF8C00',
                  color: 'white',
                  border: 'none'
                }}
              >
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
