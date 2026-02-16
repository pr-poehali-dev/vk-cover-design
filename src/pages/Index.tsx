import Icon from "@/components/ui/icon";

const reviews = [
  { name: "Анна К.", city: "Москва", text: "Заказала кроссовки Nike — пришли оригинал, упаковка идеальная! 🔥", avatar: "А" },
  { name: "Мария Д.", city: "СПб", text: "Сумка Michael Kors как в бутике, только в 2 раза дешевле!", avatar: "М" },
  { name: "Елена С.", city: "Казань", text: "Быстрая доставка, всё оригинальное. Уже 4-й заказ ✨", avatar: "Е" },
  { name: "Ольга В.", city: "Новосибирск", text: "Наконец нашла где заказывать без переплат. Спасибо!", avatar: "О" },
  { name: "Дарья Л.", city: "Екатеринбург", text: "Кроссовки New Balance — качество бомба, всё оригинал 💯", avatar: "Д" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f0ea] flex items-center justify-center p-4">
      <div
        className="relative overflow-hidden"
        style={{
          width: "510px",
          height: "800px",
          maxWidth: "100%",
          background: "linear-gradient(180deg, #faf6f0 0%, #f0e8dc 40%, #faf6f0 70%, #f5ece0 100%)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#c9a96e]/40 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#c9a96e]/40 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #c9a96e 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 h-full flex flex-col px-6 py-7">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#c9a96e]/50" />
            <div className="flex items-center gap-2">
              <Icon name="MessageCircleHeart" size={20} className="text-[#c9a96e]" />
              <span className="font-heading text-[#5a4a3a] text-sm tracking-[0.2em] uppercase font-bold">
                Отзывы клиентов
              </span>
            </div>
            <div className="w-8 h-[1px] bg-[#c9a96e]/50" />
          </div>

          <div className="flex-1 flex flex-col gap-3">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="relative flex flex-col bg-white/80 rounded-xl px-4 py-3.5 border border-[#e8ddd0] shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f0e8dc] to-[#e0d5c5] flex items-center justify-center shrink-0">
                    <span className="font-heading text-[#8a7a6a] text-xs font-bold">{review.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-heading text-[#5a4a3a] text-xs font-semibold">{review.name}</p>
                      <Icon name="BadgeCheck" size={13} className="text-[#8abb8a] shrink-0" />
                    </div>
                    <p className="font-heading text-[#a09080] text-[10px]">{review.city}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={11} className="text-[#e8b94a] fill-[#e8b94a]" />
                    ))}
                  </div>
                </div>
                <p className="text-[#5a4a3a] font-elegant text-[13px] leading-snug italic pl-11">
                  «{review.text}»
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 mt-5 pt-4 border-t border-[#e8ddd0]/50">
            <div className="flex -space-x-2">
              {["А", "И", "К", "Н", "Т", "С", "Д"].map((letter, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-[#faf6f0] flex items-center justify-center text-[9px] font-heading font-bold text-white"
                  style={{
                    background: ["#c9a96e", "#b89d64", "#a8915a", "#d4b478", "#c0a068", "#bfa060", "#cba56c"][i],
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-center">
              <span className="font-heading text-[#5a4a3a] text-xs font-bold">Нам доверяют более</span>
              <span className="font-heading text-[#c9a96e] text-lg font-black">500+</span>
              <span className="font-heading text-[#5a4a3a] text-xs font-bold">клиентов</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon key={star} name="Star" size={14} className="text-[#e8b94a] fill-[#e8b94a]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
