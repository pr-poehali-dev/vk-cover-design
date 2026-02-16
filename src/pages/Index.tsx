import Icon from "@/components/ui/icon";

const reviews = [
  { name: "Анна К.", city: "Москва", text: "Заказала кроссовки Nike — пришли оригинал, упаковка идеальная! Теперь только здесь 🔥", avatar: "А" },
  { name: "Мария Д.", city: "Санкт-Петербург", text: "Сумка Michael Kors как в бутике, только в 2 раза дешевле. Очень довольна!", avatar: "М" },
  { name: "Елена С.", city: "Казань", text: "Быстрая доставка, всё оригинальное. Уже 4-й заказ, рекомендую всем подругам ✨", avatar: "Е" },
  { name: "Ольга В.", city: "Новосибирск", text: "Наконец нашла где заказывать американские бренды без переплат. Спасибо!", avatar: "О" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f0ea] flex items-center justify-center p-4">
      <div
        className="relative overflow-hidden"
        style={{
          width: "1590px",
          height: "530px",
          maxWidth: "100%",
          aspectRatio: "1590/530",
          background: "linear-gradient(135deg, #faf6f0 0%, #f0e8dc 30%, #faf6f0 50%, #f5ece0 80%, #faf6f0 100%)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #c9a96e 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center justify-center pt-8 pb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#c9a96e]/50" />
              <div className="flex items-center gap-2">
                <Icon name="MessageCircleHeart" size={22} className="text-[#c9a96e]" />
                <span className="font-heading text-[#5a4a3a] text-lg tracking-[0.25em] uppercase font-bold">
                  Отзывы наших клиентов
                </span>
              </div>
              <div className="w-10 h-[1px] bg-[#c9a96e]/50" />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center px-10 gap-5">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="relative flex flex-col bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-5 border border-[#e8ddd0] shadow-sm"
                style={{ width: "24%", minHeight: "200px" }}
              >
                <div className="absolute -top-3 left-5">
                  <div className="w-7 h-7 rounded-full bg-[#c9a96e]/15 flex items-center justify-center">
                    <Icon name="Quote" size={13} className="text-[#c9a96e]" />
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={13} className="text-[#e8b94a] fill-[#e8b94a]" />
                  ))}
                </div>

                <p className="text-[#5a4a3a] font-elegant text-[15px] leading-relaxed flex-1 italic">
                  «{review.text}»
                </p>

                <div className="flex items-center gap-3 mt-4 pt-3 border-t border-[#e8ddd0]/60">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f0e8dc] to-[#e0d5c5] flex items-center justify-center">
                    <span className="font-heading text-[#8a7a6a] text-sm font-bold">{review.avatar}</span>
                  </div>
                  <div>
                    <p className="font-heading text-[#5a4a3a] text-xs font-semibold">{review.name}</p>
                    <p className="font-heading text-[#a09080] text-[10px] tracking-wide">{review.city}</p>
                  </div>
                  <div className="ml-auto">
                    <Icon name="BadgeCheck" size={16} className="text-[#8abb8a]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center pb-6 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["А", "И", "К", "Н", "Т"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#faf6f0] flex items-center justify-center text-[10px] font-heading font-bold text-white"
                    style={{
                      background: ["#c9a96e", "#b89d64", "#a8915a", "#d4b478", "#c0a068"][i],
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-[#5a4a3a] text-sm font-bold">
                  Нам доверяют более
                </span>
                <span className="font-heading text-[#c9a96e] text-xl font-black">500+</span>
                <span className="font-heading text-[#5a4a3a] text-sm font-bold">
                  довольных клиентов
                </span>
              </div>
              <div className="flex items-center gap-1 ml-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="Star" size={14} className="text-[#e8b94a] fill-[#e8b94a]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
