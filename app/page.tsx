import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Building2,
  MessageSquare,
  Zap,
  Users,
  Clock,
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/autonexis-logo-new.png" alt="AutoNexis Solutions" className="h-24 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <Button className="bg-[#0099cc] hover:bg-[#007aa3]">Book Demo</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#002b47] to-[#004d80] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#0099cc] text-white hover:bg-[#0099cc]">Powered by NexiBot</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#0099cc]">AutoNexis Solutions</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Sell Smarter. Sell Faster. Sell <span className="text-[#0099cc]">24/7</span>.
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100">
                The AI Sales Assistant Built for Real Estate. AutoNexis Solutions empowers real estate businesses with
                smart, automated tools that drive real customer engagement and accelerate sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#0099cc] hover:bg-[#007aa3] text-lg px-8 py-3">
                  Book Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-[#0099cc] border-white bg-white hover:bg-white/90 text-lg px-8 py-3"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">We deliver powerful, easy-to-implement solutions that:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0099cc] mr-2 flex-shrink-0 mt-1" />
                    <span>Transform the property buying experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0099cc] mr-2 flex-shrink-0 mt-1" />
                    <span>Make sales faster, simpler, and more efficient</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0099cc] mr-2 flex-shrink-0 mt-1" />
                    <span>Provide 24/7 customer engagement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0099cc] mr-2 flex-shrink-0 mt-1" />
                    <span>Automate repetitive sales tasks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              You're Losing Sales. Not Because of Skill—Because of Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every missed message is a missed buyer. What if you had a sales rep who works all day, never forgets a
              lead, and answers in seconds?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Lead Conversion Issues</CardTitle>
                <CardDescription className="text-base">
                  Imagine spending lakhs on marketing, only to lose 8 out of 10 potential buyers because no one followed
                  up. That's not just inefficient—it's heartbreaking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Time-Consuming Tasks</CardTitle>
                <CardDescription className="text-base">
                  Average agent wastes 50% of time on repetitive tasks. Productivity suffers dramatically when you're
                  caught up in administrative work.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>After-Hours Inquiries</CardTitle>
                <CardDescription className="text-base">
                  24/7 availability is impossible for human agents. After-hours inquiries go unanswered and potential
                  leads go cold without timely responses.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Without NexiBot</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">✕</span>
                  </div>
                  <p className="text-gray-700">No reply for hours - Lost Buyer</p>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">✕</span>
                  </div>
                  <p className="text-gray-700">Missed opportunities during nights and weekends</p>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">✕</span>
                  </div>
                  <p className="text-gray-700">Inconsistent follow-ups and lost leads</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0099cc]/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">With NexiBot</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#0099cc]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[#0099cc]" />
                  </div>
                  <p className="text-gray-700">Capture every inquiry. Respond instantly.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#0099cc]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[#0099cc]" />
                  </div>
                  <p className="text-gray-700">24/7 availability - even at 2:00 AM</p>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#0099cc]/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[#0099cc]" />
                  </div>
                  <p className="text-gray-700">Close more deals with consistent follow-up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-br from-[#002b47] to-[#004d80] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Solution: NexiBot</h2>
            <p className="text-xl max-w-2xl mx-auto">Your 24/7 Sales Team, selling properties even while you sleep.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-[#0099cc]/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#0099cc]" />
                </div>
                <CardTitle className="text-white">Lead Qualification</CardTitle>
                <CardDescription className="text-gray-200">
                  Automatically qualify prospects based on preferences and budget.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-[#0099cc]/20 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-[#0099cc]" />
                </div>
                <CardTitle className="text-white">Property Information</CardTitle>
                <CardDescription className="text-gray-200">
                  Provide instant details and virtual tours of available properties.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-[#0099cc]/20 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#0099cc]" />
                </div>
                <CardTitle className="text-white">Books Site Visits</CardTitle>
                <CardDescription className="text-gray-200">
                  Book viewings and collect customer data without agent intervention.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-[#0099cc]/20 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-[#0099cc]" />
                </div>
                <CardTitle className="text-white">24/7 Availability</CardTitle>
                <CardDescription className="text-gray-200">
                  Engage leads at any hour, even at 2:00 AM when motivation is highest.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Advantages of Chatbot Automation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our clients report 200% increase in engagement after implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-[#0099cc] mb-2">4x</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Generation</h3>
              <p className="text-gray-600">More leads than traditional methods</p>
            </div>

            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-[#0099cc] mb-2">60%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Reduction</h3>
              <p className="text-gray-600">Cut in operating expenses</p>
            </div>

            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-[#0099cc] mb-2">90%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Response Rate</h3>
              <p className="text-gray-600">No missed inquiry</p>
            </div>

            <div className="text-center p-6 border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-[#0099cc] mb-2">3x</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sales Velocity</h3>
              <p className="text-gray-600">Sell Properties Before Competitors Even Respond</p>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                NexiBot: One-Man Sales Team, Selling Properties While You Sleep
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Custom Development</h4>
                  <p className="text-gray-600">
                    Your own branded digital sales rep—polished, patient, and available 24/7
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Personalization</h4>
                  <p className="text-gray-600">
                    Ongoing optimization based on customer interactions. Speak your customer's language—literally.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Maintenance</h4>
                  <p className="text-gray-600">
                    Regular updates ensure your system remains cutting-edge and effective.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Feature Expansion</h4>
                  <p className="text-gray-600">New capabilities added automatically as they become available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plans That Pay For Themselves</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose the right plan for your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹19,999</span>
                  <span className="text-gray-500 ml-2">setup</span>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">₹1,999</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="border-t border-gray-200 my-4"></div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>One personalized chatbot (WhatsApp)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lead capture & FAQ handling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Basic branding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Monthly lead report</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#0099cc] hover:bg-[#007aa3]">Get Started</Button>
              </CardContent>
            </Card>

            {/* Growth Plan */}
            <Card className="border-0 shadow-xl relative bg-white">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0099cc]"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#0099cc] text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Growth</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹29,999</span>
                  <span className="text-gray-500 ml-2">setup</span>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">₹2,999</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="border-t border-gray-200 my-4"></div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>One personalized chatbot</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Whatsapp Business Setup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multilingual (EN + 1 regional language)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Auto-replies + human handoff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Weekly reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#0099cc] hover:bg-[#007aa3]">Get Started</Button>
              </CardContent>
            </Card>

            {/* Elite Plan */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Elite</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹49,999</span>
                  <span className="text-gray-500 ml-2">setup</span>
                </div>
                <div className="mt-2">
                  <span className="text-2xl font-bold">₹4,999</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="border-t border-gray-200 my-4"></div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Everything in Growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multi-project chatbot with channel switching</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Website + WhatsApp + Facebook Messenger integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom content support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fully branded experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Future features included at no extra cost</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#0099cc] hover:bg-[#007aa3]">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#002b47] to-[#004d80] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your Real Estate Business Today</h2>
          <p className="text-xl mb-8">NexiBot: Your 24/7 Sales Team, selling properties even while you sleep.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#0099cc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-[#0099cc]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Book a Demo</h3>
              <p className="text-gray-200">See our chatbots in action with a personalized demonstration.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#0099cc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-[#0099cc]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Implementation</h3>
              <p className="text-gray-200">We tailor the solution to your specific business needs.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#0099cc]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-[#0099cc]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Launch & Grow</h3>
              <p className="text-gray-200">Watch your lead generation and sales efficiency transform.</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-[#0099cc] hover:bg-gray-100 text-lg px-8 py-3">
            Book Your Demo <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Sales?</h2>
            <p className="text-xl text-gray-600">Book your personalized demo today and see NexiBot in action.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#0099cc]/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#0099cc]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@autonexissolutions.com" className="text-[#0099cc] hover:underline">
                      info@autonexissolutions.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#0099cc]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#0099cc]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Service Area</p>
                    <p className="text-gray-600">Serving real estate developers nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Request a Demo</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099cc]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099cc]"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099cc]"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099cc]"
                    placeholder="Your Development Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099cc]"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                <Button className="w-full bg-[#0099cc] hover:bg-[#007aa3]">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-[#0099cc] mb-2 font-bold text-xl">Aim. Automate. Accelerate.</p>
            <p className="text-gray-400">© 2024 AutoNexis Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
