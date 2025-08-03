const ToolsSection = () => {
  const tools = [
    {
      title: "AI Model Image",
      subtitle: "Virtual Try-on (Accessories)",
      image: "/lovable-uploads/placeholder-tool1.jpg",
      category: "model"
    },
    {
      title: "AI Product Image",
      subtitle: "Product in Hand",
      image: "/lovable-uploads/placeholder-tool2.jpg",
      category: "product"
    },
    {
      title: "AI Editor",
      subtitle: "Background Replacer",
      image: "/lovable-uploads/placeholder-tool3.jpg",
      category: "editor"
    },
    {
      title: "AI Video",
      subtitle: "Background Remover",
      image: "/lovable-uploads/placeholder-tool4.jpg",
      category: "video"
    },
    {
      title: "Virtual Try-on (Apparel)",
      subtitle: "",
      image: "/lovable-uploads/placeholder-tool5.jpg",
      category: "model"
    },
    {
      title: "Product Spotlight",
      subtitle: "",
      image: "/lovable-uploads/placeholder-tool6.jpg",
      category: "product"
    },
    {
      title: "Image Retouch",
      subtitle: "",
      image: "/lovable-uploads/placeholder-tool7.jpg",
      category: "editor"
    },
    {
      title: "Image Extender",
      subtitle: "",
      image: "/lovable-uploads/placeholder-tool8.jpg",
      category: "editor"
    },
    {
      title: "Swap Fashion Model",
      subtitle: "",
      image: "/lovable-uploads/placeholder-tool9.jpg",
      category: "model"
    },
    {
      title: "Lifestyle Scene",
      subtitle: "",
      image: "/lovable-uploads/placeholder-tool10.jpg",
      category: "lifestyle"
    },
    {
      title: "Image Enhancer",
      subtitle: "",
      image: "/lovable-uploads/placeholder-tool11.jpg",
      category: "editor"
    },
    {
      title: "Color Changer",
      subtitle: "",
      image: "/lovable-uploads/placeholder-tool12.jpg",
      category: "editor"
    }
  ];

  const categories = [
    { name: "Electronics", icon: "📱" },
    { name: "Glasses", icon: "👓" }
  ];

  return (
    <section className="py-12 bg-primary-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-xs text-primary-foreground">🤖</span>
              </div>
              <span className="font-semibold">AI Model Image</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                <span className="text-xs">📸</span>
              </div>
              <span className="font-semibold">AI Product Image</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                <span className="text-xs">✨</span>
              </div>
              <span className="font-semibold">AI Editor</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                <span className="text-xs">🎥</span>
              </div>
              <span className="font-semibold">AI Video</span>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <span className="text-2xl opacity-60">📸</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-medium">Try Now</span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm text-foreground leading-tight">
                  {tool.title}
                </h3>
                {tool.subtitle && (
                  <p className="text-xs text-muted-foreground mt-1">
                    ({tool.subtitle})
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex items-center space-x-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-4 py-2 bg-card rounded-lg hover:bg-primary-light transition-colors cursor-pointer"
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium text-sm">{category.name}</span>
            </div>
          ))}
        </div>

        {/* Feature Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-card rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl opacity-60">💍</span>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl opacity-60">🕶️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;