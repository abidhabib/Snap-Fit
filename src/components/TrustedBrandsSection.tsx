// src/components/TrustedBrandsSection.tsx

import Image from "next/image";

const TrustedBrandsSection = () => {
  const brands = [
    {
      name: 'DigiKhata',
      logo: 'https://digikhata.pk/images/home/cashbook.png',
    },
    {
      name: 'BizB.Store',
      logo: 'https://i.ibb.co/dJmBv4gp/Screenshot-from-2025-10-09-21-41-04.png',
    },
    {
      name: 'Ginkgo',
      logo: 'https://img.freepik.com/premium-vector/ginkgo-logo-desing-icon-vector_687341-104.jpg',
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <p 
         className="text-center text-4xl font-extrabold italic bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent  mb-6">
          Trusted by Growing E-commerce Brands & Marketplaces.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-xl bg-white/50 backdrop-blur-sm border border-border flex items-center justify-center overflow-hidden shadow-sm transition-transform group-hover:scale-105">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full p-1"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground mt-3 text-center px-2">
                {brand.name}
              </span>
            </div>
          ))}
          {/* Early Adopters Card */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-muted/30 border border-border flex items-center justify-center shadow-sm">
              <span className="text-muted-foreground font-bold text-lg">+100</span>
            </div>
            <span className="text-xs font-medium text-muted-foreground mt-3 text-center px-2">
              Early Adopters
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;