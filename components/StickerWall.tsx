"use client";

import { useEffect } from "react";
import { User, Star, CalendarX, Bed, Moon, Timer, Sun, MagicWand, Warning, Heart, Coffee, Palette, PersonSimpleRun, BatteryLow, Brain, GameController, Flag, HandsPraying, BookOpen, DeviceMobile, Cloud, SmileyWink, Buildings, MaskSad, Robot, BellRinging, YinYang, FlagBanner, Fire, Calculator } from "@phosphor-icons/react";

const data = [
  { phrase: "Она опять скачала новый планер...", tag: "Внутренний критик", icon: User },
  { phrase: "Зато этот красивый и фиолетовенький!", tag: "Внутренний ребёнок", icon: Star },
  { phrase: "Давай просто оставим всё на понедельник и будем страдать.", tag: "Прокрастинатор", icon: CalendarX },
  { phrase: "Нажимаем «Сплю» и расходимся.", tag: "Здравый смысл", icon: Bed },
  { phrase: "Я скачала его только ради тёмной темы.", tag: "Эстет", icon: Moon },
  { phrase: "Ого, таймер показал 4 часа. Пойду лягу.", tag: "Реалист", icon: Timer },
  { phrase: "Завтра точно начну!", tag: "Оптимист", icon: Sun },
  { phrase: "Где кнопка «пускай оно как-то само»?", tag: "Лентяй", icon: MagicWand },
  { phrase: "Уже 14:00, день потерян, переносим всё.", tag: "Паникер", icon: Warning },
  { phrase: "Этот планер знает, что я прокрастинирую, и не осуждает.", tag: "Друг", icon: Heart },
  { phrase: "Запланировать отдых — это тоже работа, да?", tag: "Уставший", icon: Coffee },
  { phrase: "Главное — красиво раскрасить теги.", tag: "Перфекционист", icon: Palette },
  { phrase: "Перенос задач — мой любимый вид спорта.", tag: "Спортсмен", icon: PersonSimpleRun },
  { phrase: "Я не ленивая, я энергосберегающая.", tag: "Эко-активист", icon: BatteryLow },
  { phrase: "Может, если я запишу задачу, она решится сама?", tag: "Философ", icon: Brain },
  { phrase: "Сон 12 часов. Достижение разблокировано.", tag: "Геймер", icon: GameController },
  { phrase: "Дедлайн? Я думала, это просто рекомендация.", tag: "Бунтарь", icon: Flag },
  { phrase: "Пятница — день прощения долгов (себе).", tag: "Священник", icon: HandsPraying },
  { phrase: "Кто вообще придумал работать по понедельникам?", tag: "Историк", icon: BookOpen },
  { phrase: "Сделала одну задачу. Награждаю себя тремя часами тиктока.", tag: "Тиктокер", icon: DeviceMobile },
  { phrase: "Пока я спала, таски сами себя не сделали. Странно.", tag: "Мечтатель", icon: Cloud },
  { phrase: "Обожаю это чувство, когда переносишь всё на следующую неделю.", tag: "Садист", icon: SmileyWink },
  { phrase: "Мне нужен планер для планера.", tag: "Архитектор", icon: Buildings },
  { phrase: "Таймер показал 12 минут. Я выжата как лимон.", tag: "Драматик", icon: MaskSad },
  { phrase: "Забыла нажать «Встала». Теперь планер думает, что я в коме.", tag: "Киборг", icon: Robot },
  { phrase: "Выделила проект красным, чтобы игнорировать его было тревожнее.", tag: "Тревожный", icon: BellRinging },
  { phrase: "В любой непонятной ситуации нажимай «Сплю».", tag: "Гуру", icon: YinYang },
  { phrase: "Где здесь кнопка «сдаться»?", tag: "Слабак", icon: FlagBanner },
  { phrase: "Просто добавлю огоньков, чтобы казалось, что я молодец.", tag: "Иллюзионист", icon: Fire },
  { phrase: "Выполнено 0 из 10. Отличный результат!", tag: "Математик", icon: Calculator }
];

const styles = [
  { card: "bg-white text-gray-800 border-gray-100", icon_bg: "bg-gray-200", icon_color: "text-gray-500", tag_color: "text-gray-400" },
  { card: "bg-[#D4E84D] text-[#2D2B3D] border-[#D4E84D]", icon_bg: "bg-[#2D2B3D]", icon_color: "text-[#D4E84D]", tag_color: "text-[#2D2B3D]/60" },
  { card: "bg-[#8B7EC8] text-white border-[#6A5AAB]", icon_bg: "bg-white/20", icon_color: "text-white", tag_color: "text-white/70" },
  { card: "bg-[#2D2B3D] text-white border-gray-700", icon_bg: "bg-gray-700", icon_color: "text-gray-300", tag_color: "text-gray-400" },
  { card: "bg-[#F9A8D4] text-gray-900 border-pink-300", icon_bg: "bg-gray-900", icon_color: "text-[#F9A8D4]", tag_color: "text-gray-700/60" }
];

export default function StickerWall() {
  // Using pure CSS animations for this version (like in the original HTML)
  // to perfectly match the previous implementation
  
  const stickers = [...data]
    .sort(() => 0.5 - Math.random())
    .map((item, index) => {
      const style = styles[Math.floor(Math.random() * styles.length)];
      const w = Math.floor(Math.random() * (290 - 240 + 1)) + 240;
      const rot = Math.floor(Math.random() * (16 - (-16) + 1)) + (-16);
      const delay = Math.floor(Math.random() * 5) + 1;
      
      let mt = Math.floor(Math.random() * (10 - (-20) + 1)) + (-20);
      let ml = Math.floor(Math.random() * (-5 - (-25) + 1)) + (-25);

      return { ...item, style, w, rot, delay, mt, ml, id: index };
    });

  return (
    <section id="voices" className="relative border-y border-gray-200 pt-32 pb-32 overflow-x-hidden flex flex-col bg-[#F4F3F8]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
    }}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .sticker-wrapper {
            animation: float-slow 4s ease-in-out infinite;
            perspective: 1000px;
        }
        .sticker-card {
            transform: rotate(var(--rotation));
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
        }
        .sticker-wrapper:hover .sticker-card {
            transform: rotate(0deg) scale(1.12) translateY(-10px) !important;
            box-shadow: 0 30px 60px rgba(0,0,0,0.15);
            z-index: 50;
        }
        .delay-1 { animation-delay: 0.5s; }
        .delay-2 { animation-delay: 1s; }
        .delay-3 { animation-delay: 1.5s; }
        .delay-4 { animation-delay: 2s; }
        .delay-5 { animation-delay: 2.5s; }
      `}} />

      <div className="max-w-4xl mx-auto text-center relative z-20 px-6 mb-16">
        <h2 className="text-4xl lg:text-5xl font-black mb-4 text-[#2D2B3D]">Внутренние голоса</h2>
        <p className="text-lg text-gray-500 font-medium">Что думает твой мозг, когда ты пытаешься спланировать неделю.</p>
      </div>

      <div className="flex flex-wrap justify-center items-center w-full max-w-[1500px] mx-auto px-4 relative z-10" id="stickers-container">
        {stickers.map((item) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={item.id}
              className={`sticker-wrapper delay-${item.delay} shrink-0 z-10 hover:z-50`}
              style={{
                marginTop: `${item.mt}px`, 
                marginLeft: `${item.ml}px`, 
                marginBottom: '-15px'
              }}
            >
              <div 
                className={`sticker-card ${item.style.card} p-5 rounded-3xl shadow-lg border w-full h-full flex flex-col justify-between`} 
                style={{
                  width: `${item.w}px`, 
                  minHeight: '130px', 
                  '--rotation': `${item.rot}deg`
                } as any}
              >
                <p className="font-bold text-base leading-snug mb-5">{item.phrase}</p>
                <div className={`flex items-center gap-2 ${item.style.tag_color}`}>
                  <div className={`w-6 h-6 rounded-full ${item.style.icon_bg} ${item.style.icon_color} flex items-center justify-center shrink-0`}>
                    <IconComponent weight="fill" className="text-xs" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest">{item.tag}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
