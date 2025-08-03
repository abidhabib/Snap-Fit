import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContentCreationSection = () => {
  return (
    <div className="space-y-16">
      {/* Smartest E-Commerce Toolkit */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Smartest E-Commerce Media Toolkit.{" "}
            <span className="bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent italic">
              All-in-One.
            </span>
          </h2>
          <p className="text-xl font-bold text-slate-800 mb-12">
            Everything you need is SnapFit
          </p>
        </div>
      </section>

      {/* Create All Your Content */}
      <section className="py-16">
        <div className="bg-white shadow-md  mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className=" bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Image width={500} height={500} src="/images/content1.png" alt="Content Creation Preview" className=" object-cover rounded-lg" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Create All Your Content from One Image</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start with a single product photo and instantly generate lifestyle shots, white background images, 
                and content ready for social media.
              </p>
              <Button className="text-white bg-black rounded-full px-8 text-lg hover:bg-gray-800 transition-colors">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All-in-One Solution */}
      <section className="py-16 bg-muted">
        <div className="bg-white shadow-md mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">All-in-One Solution</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access everything you need in one comprehensive toolkit, from Color Changer, 
                Background Replacer to video production, simplifying your workflow.
              </p>
              <Button className="text-white bg-black rounded-full px-8 text-lg hover:bg-gray-800 transition-colors">
                Learn More
              </Button>
            </div>
            <div className="bg-background rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className=" rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Image width={500} height={500} src="/images/content2.png" alt="All-in-One Solution Preview" className="object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      
    </div>
  );
};

export default ContentCreationSection;