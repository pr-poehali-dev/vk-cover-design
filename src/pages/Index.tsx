import Icon from "@/components/ui/icon";

const reviews = [
  { name: "Анна К.", text: "Наконец-то нашла своего стилиста! Образ собран идеально ✨", rating: 5 },
  { name: "Мария Д.", text: "Бренд, который я ношу с гордостью. Рекомендую всем!", rating: 5 },
  { name: "Елена С.", text: "Качество на высоте, сервис безупречный 💎", rating: 5 },
];

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

        <div className="absolute inset-0 bg-gradient-to-r from-[#2a1f14]/90 via-[#2a1f14]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a1f14]/40 to-transparent" />

        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#d4a853] to-transparent" />
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#d4a853] to-transparent" />
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />

        <div className="relative z-10 h-full flex">
          <div className="flex flex-col justify-center pl-[5%] pr-8 max-w-[55%]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-[2px] bg-[#d4a853]" />
              <span className="font-heading text-[#d4a853] text-sm tracking-[0.3em] uppercase font-semibold">
                Premium Quality
              </span>
            </div>

            <h1 className="font-heading text-white leading-none mb-2">
              <span className="block text-[64px] font-black tracking-tight">ХОЧУ</span>
              <span
                className="block text-[88px] font-black tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #d4a853, #f5d799, #d4a853)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                БРЕНД
              </span>
            </h1>

            <div className="flex items-center gap-2 mt-2 mb-5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" size={22} className="text-[#d4a853] fill-[#d4a853]" />
              ))}
              <span className="text-white/80 font-heading text-sm ml-2 tracking-wide">
                500+ довольных клиентов
              </span>
            </div>

            <p className="font-elegant text-white/70 text-xl italic leading-relaxed max-w-[420px]">
              Реальные отзывы от реальных людей — нас выбирают за качество и стиль
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center pr-[4%]">
            <div className="flex flex-col gap-4 w-full max-w-[420px]">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="relative bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-[#d4a853]/30"
                  style={{
                    transform: `translateX(${i * 12}px)`,
                  }}
                >
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-[#d4a853] flex items-center justify-center shadow-lg">
                    <Icon name="Quote" size={14} className="text-[#2a1f14]" />
                  </div>

                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Icon key={j} name="Star" size={12} className="text-[#d4a853] fill-[#d4a853]" />
                    ))}
                  </div>
                  <p className="text-white/90 font-elegant text-base italic leading-snug">
                    «{review.text}»
                  </p>
                  <p className="text-[#d4a853] font-heading text-xs mt-2 tracking-wider uppercase font-semibold">
                    — {review.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-[5%] flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#d4a853] rounded-full px-5 py-2 shadow-lg shadow-[#d4a853]/30">
            <Icon name="MessageCircle" size={16} className="text-[#2a1f14]" />
            <span className="font-heading text-[#2a1f14] text-xs font-bold tracking-wider uppercase">
              Оставить отзыв
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={14} className="text-[#d4a853]" />
            <span className="text-white/50 font-heading text-xs tracking-wider">
              Проверенные отзывы
            </span>
          </div>
        </div>

        <div className="absolute top-5 right-[4%] flex items-center gap-2 opacity-60">
          <Icon name="Crown" size={18} className="text-[#d4a853]" />
          <span className="font-heading text-[#d4a853] text-xs tracking-[0.2em] uppercase font-semibold">
            Est. 2024
          </span>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default Index;
