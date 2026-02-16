import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f0ea] flex items-center justify-center p-4">
      <div
        className="relative overflow-hidden"
        style={{ width: "1590px", height: "530px", maxWidth: "100%", aspectRatio: "1590/530" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/885c9446-5840-42b4-8b8d-77ab7c65432c/files/65a10717-4166-46b9-a294-f5c4102ce90f.jpg)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2a1f14]/85 via-[#2a1f14]/50 to-[#2a1f14]/30" />

        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent via-[#d4a853] to-transparent" />
        <div className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-transparent via-[#d4a853] to-transparent" />
        <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
          <h1 className="font-heading text-white leading-[0.9] mb-6">
            <span className="block text-[80px] font-black tracking-tight drop-shadow-lg">ХОЧУ</span>
            <span
              className="block text-[120px] font-black tracking-tight drop-shadow-lg"
              style={{
                background: "linear-gradient(135deg, #d4a853 0%, #f5d799 40%, #d4a853 60%, #f5d799 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 3s linear infinite",
              }}
            >
              БРЕНД
            </span>
          </h1>

          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent mb-5" />

          <p className="font-heading text-white/90 text-2xl tracking-[0.15em] uppercase font-semibold mb-4 drop-shadow-md">
            Оригинальные товары из США
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" size={20} className="text-[#d4a853] fill-[#d4a853]" />
              ))}
            </div>
            <span className="text-white/70 font-heading text-sm tracking-wide">
              500+ довольных клиентов
            </span>
          </div>

          <p className="font-elegant text-white/60 text-xl italic mt-4 max-w-[600px]">
            Доставляем бренды, о которых вы мечтали
          </p>
        </div>

        <div className="absolute top-6 left-8 flex items-center gap-2">
          <Icon name="Crown" size={20} className="text-[#d4a853]" />
        </div>

        <div className="absolute top-6 right-8 flex items-center gap-2">
          <Icon name="ShoppingBag" size={18} className="text-[#d4a853]/60" />
          <Icon name="Plane" size={18} className="text-[#d4a853]/60" />
          <Icon name="Package" size={18} className="text-[#d4a853]/60" />
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={16} className="text-[#d4a853]/50" />
            <span className="text-white/40 font-heading text-[11px] tracking-[0.2em] uppercase">
              Доставка по РФ
            </span>
          </div>
          <div className="w-1 h-1 rounded-full bg-[#d4a853]/30" />
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={16} className="text-[#d4a853]/50" />
            <span className="text-white/40 font-heading text-[11px] tracking-[0.2em] uppercase">
              100% оригинал
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default Index;
