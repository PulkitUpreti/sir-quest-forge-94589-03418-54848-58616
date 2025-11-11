import {Briefcase, MessageSquare,TrendingUp,Cpu, Globe2,FileCheck} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CorporateTrainings = () => {
  const trainings = [
    {
      icon:  Briefcase,
      title: "Leadership & Management",
      description: "Bespoke software solutions tailored to your unique business requirements, from web applications to enterprise systems.",
    },
    {
      icon:  MessageSquare,
      title: "Communication & Soft Skills",
      description: "Comprehensive cloud services including migration, infrastructure management, and cloud-native application development.",
    },
    {
      icon: Cpu,
      title: "Technical & IT Upskilling",
      description: "Advanced security solutions to protect your digital assets, ensure compliance, and mitigate cyber threats.",
    },
    {
      icon: TrendingUp,
      title: "Data & Analytics",
      description: "Data management, business intelligence, and analytics solutions to drive data-driven decision making.",
    },
    {
      icon: FileCheck,
      title: "HR & Compliance Training",
      description: "Native and cross-platform mobile app development for iOS and Android with seamless user experiences.",
    },
    {
      icon: Globe2,
      title: "Diversity & Inclusion",
      description: "CI/CD pipelines, infrastructure automation, and DevOps practices to accelerate software delivery.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Corporate Trainings
            </h1>
            <p className="text-lg text-primary-foreground/90">
              “We design customized learning programs that enhance employee performance, leadership, and organizational success.”
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <p className="text-lg text-muted-foreground text-center mb-12">
              At TalentVue Solutions, we specialize in delivering impactful corporate training programs that
               drive employee growth and organizational success. Our sessions are designed to build 
               essential skills, enhance leadership qualities, and improve team performance. We collaborate
                closely with companies to understand their needs and create customized training modules 
                tailored to their goals. Through interactive workshops, case studies, and real-world 
                simulations, we ensure engaging and result-oriented learning experiences. Whether it’s
                 leadership, communication, or technical upskilling, our programs empower professionals 
                 to perform at their best. With expert trainers and modern methodologies, 
              TalentVue helps businesses stay competitive in today’s evolving corporate landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainings.map((training, index) => (
                <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <training.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-3">{training.title}</h3>
                    <p className="text-muted-foreground text-sm">{training.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Training Approach
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-slide-up">
              <h3 className="font-heading text-xl font-semibold mb-3">Needs Analysis</h3>
              <p className="text-muted-foreground">
                We start by understanding your organization’s goals, challenges, and employee skill gaps. 
                This helps us design programs that address real business needs.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Customized Content</h3>
              <p className="text-muted-foreground">
                Our experts create tailored training modules that align with your company objectives 
                and team requirements for maximum impact.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Interactive Learning</h3>
              <p className="text-muted-foreground">
                Each session includes group discussions, role plays, and case studies to ensure active participation and practical understanding.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Experiential Methodology</h3>
              <p className="text-muted-foreground">
                We focus on hands-on learning, allowing participants to apply concepts directly to 
                real workplace scenarios.
              </p>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <h3 className="font-heading text-xl font-semibold mb-3">Feedback & Assessment</h3>
              <p className="text-muted-foreground">
                Post-training evaluations and feedback help measure effectiveness, track growth, and ensure long-term
                 skill retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Conduct  */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
              Activities We Conduct 
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="animate-slide-up">
                <h3 className="font-heading text-xl font-semibold mb-3">Team-Building Exercises</h3>
                <p className="text-muted-foreground text-sm">
                  Interactive group challenges designed to strengthen collaboration, trust, and communication 
                  among employees.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Role Plays & Simulations</h3>
                <p className="text-muted-foreground text-sm">
                  Real-world business scenarios where participants practice leadership, negotiation, and 
                  decision-making skills.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Case Study Discussions</h3>
                <p className="text-muted-foreground text-sm">
                  Analyzing practical examples to encourage critical thinking, problem-solving, and strategic planning 
                  abilities.
                </p>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Group Workshops</h3>
                <p className="text-muted-foreground text-sm">
                 Hands-on sessions focused on enhancing soft skills, leadership qualities, and professional confidence.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Presentation & Communication Tasks</h3>
                <p className="text-muted-foreground text-sm">
                 Activities that help participants improve clarity, confidence, and effectiveness in workplace communication.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">One-on-One Coaching</h3>
                <p className="text-muted-foreground text-sm">
                 Personalized mentoring sessions that address individual strengths, weaknesses, and career development goals.
                </p>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <h3 className="font-heading text-xl font-semibold mb-3">Feedback & Reflection Session</h3>
                <p className="text-muted-foreground text-sm">
                 Post-activity discussions that help participants reflect on learnings and apply them to real work situations.
                </p>
              </div>

            </div>


            <div className="text-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="animate-scale-in">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateTrainings;
