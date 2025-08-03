const TrustedBrandsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg font-medium text-foreground mb-8">
          Trusted by thousands of fashion brands
        </h3>
        
        <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-60">
          {/* Brand logos */}
          <div className="text-2xl font-bold text-muted-foreground">WooCommerce</div>
          <div className="text-2xl font-bold text-muted-foreground">amazon</div>
          <div className="text-2xl font-bold text-muted-foreground italic">Instagram</div>
          <div className="text-2xl font-bold text-muted-foreground">TikTok</div>
          <div className="text-2xl font-bold text-muted-foreground italic">Etsy</div>
          <div className="text-2xl font-bold text-muted-foreground">Walmart</div>
          <div className="text-2xl font-bold text-muted-foreground">shopify</div>
          <div className="text-2xl font-bold text-muted-foreground">ebay</div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;