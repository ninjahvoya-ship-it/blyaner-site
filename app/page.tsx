"use client";

import { useState } from "react";
import Link from "next/link";
import { MoonStars, Sun, Play, Timer, PaintBrush, FolderOpen, Bed, Clock, Asterisk, ArrowRight, ArrowUp, CheckCircle, AppleLogo, AndroidLogo, Desktop, CalendarBlank, X, Trash, SlidersHorizontal, Star, EnvelopeSimple, LockKey } from "@phosphor-icons/react";

export default function LandingPage() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#D4E84D] selection:text-[#8B7EC8] bg-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .marquee-container {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            background: #D4E84D;
            padding: 20px 0;
            transform: rotate(-2deg) scale(1.05);
            position: relative;
            z-index: 20;
        }
        .marquee-content {
            display: inline-block;
            animation: marquee 25s linear infinite;
        }
        .marquee-item {
            display: inline-block;
            font-weight: 900;
            font-size: 1.5rem;
            color: #2D2B3D;
            margin-right: 40px;
            text-transform: uppercase;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
        }
        .mockup-shadow {
            box-shadow: -20px 20px 60px rgba(0, 0, 0, 0.15), -10px 10px 20px rgba(0, 0, 0, 0.1);
        }
      `}} />

      {/* Навигация */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-full px-6 py-3 flex justify-between items-center w-full max-w-5xl shadow-sm">
              <div className="text-xl font-black text-[#2D2B3D] tracking-tight flex items-center gap-2">
                  <Asterisk weight="fill" className="text-[#8B7EC8]" /> Блянер
              </div>
              <a href="https://blyaner.vercel.app/week" className="bg-[#D4E84D] text-[#2D2B3D] px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-sm">
                  Войти
              </a>
          </div>
      </nav>

      {/* Hero Секция */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="pr-4 mt-10 lg:mt-0">
              <div className="inline-flex items-center gap-2 text-[#8B7EC8] font-black text-sm uppercase tracking-widest mb-6">
                  Блянер <ArrowRight weight="bold" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-8 text-[#2D2B3D]">
                  Потому что <br/><span className="text-[#8B7EC8]">бля, опять ничего не сделала.</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-10 font-medium max-w-md">
                  Курса «как стать лучшей версией себя» в комплекте нет. Просто планер, чтобы не забыть, что нужно сделать, и трекер сна, чтобы наконец понять, почему на это нет сил.
              </p>
              <a href="https://blyaner.vercel.app/week" className="inline-block bg-[#8B7EC8] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-[#6A5AAB] transition-all hover:-translate-y-1">
                  Попробовать
              </a>
          </div>

          <div className="rounded-[40px] bg-[#F2EFFF] relative h-[500px] flex justify-center items-center overflow-hidden hidden md:flex">
              <div className="absolute top-10 left-10 bg-white px-4 py-2 rounded-full shadow-lg font-bold text-sm text-[#8B7EC8] animate-[float_6s_ease-in-out_infinite] flex items-center gap-2 z-20">
                  <MoonStars weight="fill" /> Сон 6.2ч
              </div>
              <div className="absolute bottom-20 right-5 bg-[#D4E84D] px-4 py-2 rounded-full shadow-lg font-bold text-sm text-[#2D2B3D] animate-[float_7s_ease-in-out_infinite_1s] flex items-center gap-2 z-20">
                  <Timer weight="fill" /> 01:45:12
              </div>
              <div className="absolute top-1/2 -right-6 bg-[#2D2B3D] px-4 py-2 rounded-full shadow-lg font-bold text-sm text-white animate-[float_5s_ease-in-out_infinite_0.5s] flex items-center gap-2 z-20">
                  Дедлайн: Завтра
              </div>

              <div className="bg-white p-5 rounded-[32px] shadow-2xl w-64 relative z-10 animate-[float_6s_ease-in-out_infinite] border border-white">
                  <div className="flex items-center gap-2 mb-4">
                      <span className="w-8 h-8 rounded-full bg-[#8B7EC8] flex justify-center items-center font-bold text-white text-xs">1</span>
                      <h2 className="font-bold text-gray-800">Вторник</h2>
                  </div>
                  <div className="space-y-3">
                      <div className="p-3 rounded-2xl bg-[#F2EFFF] border border-[#8B7EC8]/10 flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#8B7EC8] mt-1.5"></div>
                          <div><p className="text-sm font-bold text-gray-800">Собрать макеты</p><p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">Фриланс</p></div>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#FCE7F3] border border-pink-200 flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-pink-400 mt-1.5"></div>
                          <div><p className="text-sm font-bold text-gray-800">Запустить таймер</p><p className="text-[10px] font-bold text-gray-400 mt-1 uppercase">Book Tracker</p></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Похихикать (Бегущая строка) */}
      <div className="marquee-container mt-10 mb-24">
          <div className="marquee-content">
              <span className="marquee-item"><Asterisk weight="fill" className="text-[#8B7EC8] inline-block align-middle mr-2" />СПОНСОР ТВОИХ ПЕРЕНЕСЕННЫХ ДЕЛ</span>
              <span className="marquee-item"><Asterisk weight="fill" className="text-[#8B7EC8] inline-block align-middle mr-2" />ДЛЯ ТЕХ, ЧЕЙ ПЛАН Б — ПРОСТО ЛЕЧЬ СПАТЬ</span>
              <span className="marquee-item"><Asterisk weight="fill" className="text-[#8B7EC8] inline-block align-middle mr-2" />ПЛАНЫ + РЕАЛЬНОСТЬ = БЛЯНЕР</span>
              <span className="marquee-item"><Asterisk weight="fill" className="text-[#8B7EC8] inline-block align-middle mr-2" />ЕДИНСТВЕННЫЙ ПЛАНЕР, ГДЕ ЛЮБИМАЯ КНОПКА «СПЛЮ»</span>
              <span className="marquee-item"><Asterisk weight="fill" className="text-[#8B7EC8] inline-block align-middle mr-2" />СПОНСОР ТВОИХ ПЕРЕНЕСЕННЫХ ДЕЛ</span>
              <span className="marquee-item"><Asterisk weight="fill" className="text-[#8B7EC8] inline-block align-middle mr-2" />ДЛЯ ТЕХ, ЧЕЙ ПЛАН Б — ПРОСТО ЛЕЧЬ СПАТЬ</span>
              <span className="marquee-item"><Asterisk weight="fill" className="text-[#8B7EC8] inline-block align-middle mr-2" />ПЛАНЫ + РЕАЛЬНОСТЬ = БЛЯНЕР</span>
              <span className="marquee-item"><Asterisk weight="fill" className="text-[#8B7EC8] inline-block align-middle mr-2" />ЕДИНСТВЕННЫЙ ПЛАНЕР, ГДЕ ЛЮБИМАЯ КНОПКА «СПЛЮ»</span>
          </div>
      </div>

      {/* Фичи */}
      <section id="features" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-black mb-12 text-center text-[#2D2B3D]">Что внутри?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  <div className="bg-[#F2EFFF] rounded-[40px] p-8 relative overflow-hidden flex flex-col shadow-sm hover:-translate-y-1 transition-transform">
                      <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-[#8B7EC8] flex items-center justify-center text-[#8B7EC8] rotate-45"><ArrowUp weight="bold" /></div>
                      <div className="w-12 h-12 bg-white rounded-2xl flex justify-center items-center mb-6 shadow-sm"><Clock weight="fill" className="text-2xl text-[#8B7EC8]" /></div>
                      <h3 className="text-2xl font-black mb-4 text-[#2D2B3D]">Чувство времени</h3>
                      <p className="font-medium text-gray-600 mb-8 text-[15px] leading-relaxed">Встроенный таймер фокуса. Никаких левых приложений. Нажала Play прямо на задаче — время пошло. Смотришь в статистику и наконец-то учишься оценивать свои времязатраты реалистично.</p>
                      
                      <div className="mt-auto bg-white p-4 rounded-[24px] shadow-[0_8px_20px_rgba(212,232,77,0.15)] border-2 border-[#D4E84D] flex items-center justify-between relative overflow-hidden">
                          <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#D4E84D] opacity-30 rounded-full blur-xl"></div>
                          <div className="flex items-center gap-4 relative z-10">
                              <div className="w-12 h-12 bg-[#D4E84D] rounded-full flex justify-center items-center shadow-sm">
                                  <Play weight="fill" className="text-[#8B7EC8] text-xl" />
                              </div>
                              <div>
                                  <h4 className="font-black text-[22px] text-[#2D2B3D] tracking-tight leading-none mb-1">01:45:12</h4>
                                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">BOOK TRACKER</p>
                              </div>
                          </div>
                          <Timer className="text-4xl text-gray-100 relative z-10" />
                      </div>
                  </div>

                  <div className="bg-[#D4E84D] rounded-[40px] p-8 relative overflow-hidden flex flex-col shadow-sm hover:-translate-y-1 transition-transform md:mt-8">
                      <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-[#2D2B3D] flex items-center justify-center text-[#2D2B3D] rotate-45"><ArrowUp weight="bold" /></div>
                      <div className="w-12 h-12 bg-[#2D2B3D] rounded-2xl flex justify-center items-center mb-6 shadow-sm"><PaintBrush weight="fill" className="text-2xl text-[#D4E84D]" /></div>
                      <h3 className="text-2xl font-black mb-4 text-[#2D2B3D]">Крупные дистанции</h3>
                      <p className="font-medium text-[#2D2B3D]/80 mb-8 text-[15px] leading-relaxed">Цветовое кодирование и дедлайны. В Блянере сразу видно, какая задача какому проекту отдана, перед кем горит ответственность и каким проектом была занята неделя больше всего.</p>
                      
                      <div className="mt-auto space-y-3">
                          <div className="bg-white p-4 rounded-2xl border border-[#B8ADE8]/30 flex items-center gap-3 shadow-[0_4px_10px_rgba(139,126,200,0.05)]">
                              <div className="w-2 h-2 rounded-full bg-[#B8ADE8]"></div>
                              <div>
                                  <p className="text-sm font-bold text-[#2D2B3D] leading-tight">Дизайн-система</p>
                                  <p className="text-[11px] text-gray-500 mt-0.5">Book Tracker</p>
                              </div>
                          </div>
                          <div className="bg-white p-4 rounded-2xl border border-pink-200/50 flex items-center gap-3 shadow-[0_4px_10px_rgba(249,168,212,0.05)]">
                              <div className="w-2 h-2 rounded-full bg-[#F9A8D4]"></div>
                              <div>
                                  <p className="text-sm font-bold text-[#2D2B3D] leading-tight">Пост в канал</p>
                                  <p className="text-[11px] text-gray-500 mt-0.5">Jellyfish Lab</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#8B7EC8] to-[#6A5AAB] rounded-[40px] p-8 relative overflow-hidden flex flex-col shadow-sm hover:-translate-y-1 transition-transform">
                      <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/50 flex items-center justify-center text-white rotate-45"><ArrowUp weight="bold" /></div>
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex justify-center items-center mb-6 shadow-sm backdrop-blur-sm"><MoonStars weight="fill" className="text-2xl text-white" /></div>
                      <h3 className="text-2xl font-black mb-4 text-white">Ресурс</h3>
                      <p className="font-medium text-white/90 mb-8 text-[15px] leading-relaxed">Две кнопки в телефоне. Никаких умных браслетов. Планер сам считает часы, строит график и показывает связь между твоим режимом и тем, сколько ты реально вывозишь за день.</p>
                      
                      <div className="mt-auto flex gap-2">
                          <div className="flex-1 bg-[#D4E84D] text-[#2D2B3D] font-bold text-sm py-4 rounded-2xl flex justify-center items-center gap-2 shadow-sm"><Bed weight="fill" className="text-lg" /> Сплю</div>
                          <div className="flex-1 bg-white/10 border border-white/20 text-white font-bold text-sm py-4 rounded-2xl flex justify-center items-center gap-2 backdrop-blur-md"><Sun weight="fill" className="text-lg" /> Встала</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Выключатели */}
      <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto bg-[#F4F3F8] rounded-[40px] p-10 grid md:grid-cols-2 gap-10 items-center border border-gray-100">
              <div className="lg:pr-10">
                  <h2 className="text-4xl lg:text-5xl font-black mb-6 text-[#2D2B3D] leading-tight">Слишком много всего? <br/><span className="text-[#8B7EC8]">Вырубай.</span></h2>
                  <p className="font-medium text-gray-500 text-lg leading-relaxed">Я делала Блянер под себя, и он не обязан быть универсальным. Бесит трекер сна? Зайди в настройки и выключи его нахрен. Оставь только то, что работает для тебя.</p>
              </div>
              <div className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 space-y-4">
                  <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <div className="flex items-center gap-3"><Clock weight="fill" className="text-[#8B7EC8] text-xl" /><span className="font-bold text-gray-800">Секундомер</span></div>
                      <div className="w-12 h-7 bg-[#D4E84D] rounded-full relative shadow-inner"><div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm"></div></div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100 opacity-50 grayscale">
                      <div className="flex items-center gap-3"><MoonStars weight="fill" className="text-gray-500 text-xl" /><span className="font-bold text-gray-500">Сон</span></div>
                      <div className="w-12 h-7 bg-gray-200 rounded-full relative shadow-inner"><div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm"></div></div>
                  </div>
              </div>
          </div>
      </section>

      {/* PWA Section */}
      <section className="w-full bg-[#8B7EC8] py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2D2B3D] opacity-20 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

              <div className="relative z-10 flex justify-center">
                  <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-[32px] p-8 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-transform duration-500">
                      <div className="flex justify-between items-center mb-6">
                          <span className="text-white font-bold text-lg tracking-wide">Тёмная тема</span>
                          <div className="w-12 h-7 bg-[#D4E84D] rounded-full relative shadow-inner">
                              <div className="absolute right-1 top-1 w-5 h-5 bg-[#2D2B3D] rounded-full shadow-sm flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 bg-[#D4E84D] rounded-full"></div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="bg-white/5 rounded-[24px] p-5 border border-white/10">
                          <div className="flex items-center gap-3 mb-4">
                              <span className="w-8 h-8 rounded-full bg-white/20 flex justify-center items-center font-bold text-white text-xs">1</span>
                              <h2 className="font-bold text-white">Вторник</h2>
                          </div>
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-pink-400 mt-1.5 shadow-[0_0_8px_#F9A8D4]"></div>
                              <p className="text-sm font-semibold text-white/90">Пост в канал</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="relative z-10 lg:pl-8">
                  <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
                      Ноут + Телефон. <br/><span className="text-[#D4E84D]">Без костылей.</span>
                  </h2>
                  <p className="font-medium text-white/80 text-[17px] leading-relaxed mb-8 max-w-md">
                      Нажимать кнопку «Сплю» удобнее с телефона в кровати. А раскидывать задачи по неделе — с большого экрана ноута. Работает бесшовно и ставится на экран айфона в два тапа как нативное приложение (PWA).
                  </p>
                  <div className="flex items-center gap-4 text-sm font-bold text-white/70">
                      <div className="flex items-center gap-1.5"><AppleLogo weight="bold" className="text-xl" /> iOS</div>
                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                      <div className="flex items-center gap-1.5"><AndroidLogo weight="bold" className="text-xl" /> Android</div>
                      <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                      <div className="flex items-center gap-1.5"><Desktop weight="bold" className="text-xl" /> Web</div>
                  </div>
              </div>
          </div>
      </section>

      {/* Интерактивная Темная тема */}
      <section className="py-20 px-6">
          <div className={`max-w-7xl mx-auto rounded-[40px] transition-colors duration-700 py-24 px-8 text-center relative overflow-hidden group ${isDarkTheme ? 'bg-transparent border-transparent' : 'bg-gray-100 border border-gray-100'}`}>
              
              <div className={`absolute inset-0 bg-gradient-to-br from-[#8B7EC8] to-[#6A5AAB] transition-opacity duration-700 pointer-events-none ${isDarkTheme ? 'opacity-100' : 'opacity-0'}`}></div>

              <div className="relative z-10 mb-12">
                  <h2 className={`text-4xl lg:text-5xl font-black mb-4 transition-colors ${isDarkTheme ? 'text-white' : 'text-[#2D2B3D]'}`}>Тёмная тема. Как надо.</h2>
                  <p className={`text-xl font-medium transition-colors ${isDarkTheme ? 'text-white/80' : 'text-gray-500'}`}>Глубокий фиолетовый. Стекло. Кликни на переключатель.</p>
              </div>

              <button onClick={toggleTheme} className={`relative z-10 w-24 h-12 rounded-full p-1 shadow-inner transition-all duration-500 flex items-center mb-16 mx-auto cursor-pointer focus:outline-none ${isDarkTheme ? 'bg-white/20 border-white/20' : 'bg-white border-gray-200'} border`}>
                  <div className={`w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-all duration-500 transform ${isDarkTheme ? 'translate-x-12 bg-[#D4E84D]' : 'translate-x-0 bg-[#8B7EC8]'}`}>
                      {isDarkTheme ? <MoonStars weight="fill" className="text-[#2D2B3D] text-lg" /> : <Sun weight="fill" className="text-white text-lg" />}
                  </div>
              </button>

              <div className={`relative z-10 p-8 rounded-[32px] max-w-sm mx-auto transition-all duration-700 border text-left ${isDarkTheme ? 'bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl' : 'bg-white border-gray-100 shadow-xl'}`}>
                  <div className="flex items-center gap-3 mb-6">
                      <span className={`w-10 h-10 rounded-full flex justify-center items-center font-bold transition-colors ${isDarkTheme ? 'bg-[#D4E84D] text-[#2D2B3D]' : 'bg-[#8B7EC8] text-white'}`}>4</span>
                      <h2 className={`text-2xl font-bold transition-colors ${isDarkTheme ? 'text-white' : 'text-[#2D2B3D]'}`}>Четверг</h2>
                  </div>
                  <div className={`p-4 rounded-2xl flex items-center justify-between transition-colors duration-700 relative overflow-hidden border ${isDarkTheme ? 'bg-white/5 border-white/10' : 'bg-[#8B7EC8]/5 border-[#8B7EC8]/10'}`}>
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#D4E84D] transition-opacity duration-700 ${isDarkTheme ? 'opacity-100' : 'opacity-0'}`}></div>
                      <div className="flex items-center gap-3 pl-2">
                          <div className="w-6 h-6 rounded-full border-2 border-[#8B7EC8] flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-[#8B7EC8]"></div></div>
                          <div><p className={`font-bold text-sm transition-colors ${isDarkTheme ? 'text-white' : 'text-gray-800'}`}>Кайфануть от дизайна</p><p className={`text-[10px] font-bold uppercase mt-0.5 transition-colors ${isDarkTheme ? 'text-white/60' : 'text-gray-400'}`}>Блянер</p></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      
      {/* Бегущая строка (Отзывы) */}
      <section id="reviews" className="py-4 bg-white overflow-hidden flex items-center justify-center relative">
          <div className="w-[120%] -ml-[10%] bg-[#8B7EC8] py-6 overflow-hidden -rotate-2 relative z-10">
              <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-r from-[#8B7EC8] to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-l from-[#8B7EC8] to-transparent z-20 pointer-events-none"></div>

              <div className="flex whitespace-nowrap w-max animate-[marquee-reverse_35s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
                  {/* Сет отзывов 1 */}
                  <div className="flex items-center">
                      <div className="flex items-center gap-3 px-8 border-r border-white/20">
                          <div className="flex text-[#D4E84D]"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
                          <span className="text-white font-semibold text-lg md:text-xl">«Поставила 5 задач, сделала ноль, перенесла на завтра. Интерфейс удобный!»</span>
                      </div>
                      <div className="flex items-center gap-3 px-8 border-r border-white/20">
                          <div className="flex text-[#D4E84D]"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
                          <span className="text-white font-semibold text-lg md:text-xl">«Наконец-то приложение, которое понимает, что я хочу спать.»</span>
                      </div>
                      <div className="flex items-center gap-3 px-8 border-r border-white/20">
                          <div className="flex text-[#D4E84D]"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
                          <span className="text-white font-semibold text-lg md:text-xl">«Таймер показал, что я работал 14 минут, а отдыхал 3 часа. Рекомендую.»</span>
                      </div>
                      <div className="flex items-center gap-3 px-8 border-r border-white/20">
                          <div className="flex text-[#D4E84D]"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
                          <span className="text-white font-semibold text-lg md:text-xl">«Мой любимый виджет — 'отложено 18 задач'.»</span>
                      </div>
                      <div className="flex items-center gap-3 px-8 border-r border-white/20">
                          <div className="flex text-[#D4E84D]"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
                          <span className="text-white font-semibold text-lg md:text-xl">«Удалила Notion, потому что там нет кнопки 'Сплю'.»</span>
                      </div>
                  </div>
                  {/* Сет отзывов 2 */}
                  <div className="flex items-center">
                      <div className="flex items-center gap-3 px-8 border-r border-white/20">
                          <div className="flex text-[#D4E84D]"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
                          <span className="text-white font-semibold text-lg md:text-xl">«Поставила 5 задач, сделала ноль, перенесла на завтра. Интерфейс удобный!»</span>
                      </div>
                      <div className="flex items-center gap-3 px-8 border-r border-white/20">
                          <div className="flex text-[#D4E84D]"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
                          <span className="text-white font-semibold text-lg md:text-xl">«Наконец-то приложение, которое понимает, что я хочу спать.»</span>
                      </div>
                      <div className="flex items-center gap-3 px-8 border-r border-white/20">
                          <div className="flex text-[#D4E84D]"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
                          <span className="text-white font-semibold text-lg md:text-xl">«Таймер показал, что я работал 14 минут, а отдыхал 3 часа. Рекомендую.»</span>
                      </div>
                      <div className="flex items-center gap-3 px-8 border-r border-white/20">
                          <div className="flex text-[#D4E84D]"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
                          <span className="text-white font-semibold text-lg md:text-xl">«Мой любимый виджет — 'отложено 18 задач'.»</span>
                      </div>
                      <div className="flex items-center gap-3 px-8 border-r border-white/20">
                          <div className="flex text-[#D4E84D]"><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /><Star weight="fill" /></div>
                          <span className="text-white font-semibold text-lg md:text-xl">«Удалила Notion, потому что там нет кнопки 'Сплю'.»</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Новый Подвал (Светло-серый) */}
      <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
              <div className="bg-[#F8F8FB] rounded-[40px] pt-20 px-6 md:px-12 relative overflow-hidden flex flex-col items-center text-center shadow-sm border border-gray-100">
                  
                  <div className="relative z-10 max-w-2xl mx-auto">
                      <h2 className="text-5xl md:text-6xl font-black text-[#2D2B3D] leading-tight mb-6">
                          Ну что,<br/>
                          <span className="text-[#8B7EC8]">погнали?</span>
                      </h2>
                      <p className="text-lg md:text-xl text-gray-500 font-medium mb-10 max-w-md mx-auto">
                          Твоя новая, честная и наглядная неделя начинается прямо сейчас.
                      </p>
                      
                      <a href="https://blyaner.vercel.app/week" className="inline-flex items-center gap-3 px-8 py-4 bg-[#8B7EC8] text-white font-bold text-lg rounded-full shadow-[0_10px_30px_rgba(139,126,200,0.4)] hover:bg-[#6A5AAB] hover:-translate-y-1 transition-all duration-300">
                          Войти в Блянер
                          <ArrowRight weight="bold" className="text-xl" />
                      </a>
                  </div>

                  <div className="mt-16 w-full max-w-4xl relative z-20 translate-y-4 hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="w-full bg-[#E5E7EB] rounded-t-2xl border border-[#D1D5DB] px-4 py-3 flex items-center justify-center relative">
                          <div className="absolute left-4 flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner border border-black/10"></div>
                              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner border border-black/10"></div>
                              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner border border-black/10"></div>
                          </div>
                          <div className="bg-white px-8 py-1 rounded-md text-[10px] font-bold text-gray-400 flex items-center gap-1.5 shadow-sm border border-gray-200">
                              <LockKey weight="fill" /> blyaner.app
                          </div>
                      </div>
                      
                      <div className="w-full h-[300px] md:h-[450px] overflow-hidden mockup-shadow border-x border-gray-200 bg-white">
                          <img src="/desktop-mockup.jpg" alt="Блянер Интерфейс" className="w-full h-full object-cover object-top" />
                      </div>
                  </div>
              </div>
          </div>
      </section>


          {/* Финальный Лаймовый Подвал (Подписка) — FULL WIDTH EDGE-TO-EDGE */}
      <section id="subscribe" className="w-full bg-[#D4E84D] rounded-t-[40px] pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden mt-[-20px] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          
          {/* Декоративная снежинка слева (играет роль картинки) */}
          <Asterisk weight="fill" className="absolute -left-48 md:-left-64 -top-20 md:-top-40 text-[400px] md:text-[500px] text-white opacity-30 pointer-events-none" />

          {/* Верхняя часть с текстом */}
          <div className="relative z-10 max-w-7xl mx-auto w-full flex">
              {/* Отступ 30% от левого края контейнера на десктопе */}
              <div className="w-full px-6 md:px-0 md:pl-[30%] flex flex-col items-start text-left">
                  
                  <h2 className="text-3xl md:text-5xl font-black text-[#2D2B3D] mb-8 leading-[1.1] tracking-tight">
                      Присоединяйся к закрытому тесту.<br />Пока мы всё не переделали.
                  </h2>
                  
                  <form className="w-full max-w-md bg-white rounded-full p-1.5 shadow-sm flex relative hover:shadow-md transition-shadow" onSubmit={(e) => { e.preventDefault(); }}>
                      <div className="pl-4 flex items-center text-gray-400">
                          <EnvelopeSimple weight="bold" className="text-xl" />
                      </div>
                      <input type="email" placeholder="Куда скинуть ссылку?" required className="flex-1 bg-transparent px-4 outline-none text-[#2D2B3D] placeholder-gray-400 font-medium" />
                      <button type="submit" className="w-12 h-12 bg-[#2D2B3D] text-white rounded-full flex items-center justify-center hover:bg-[#8B7EC8] transition-colors shrink-0">
                          <ArrowRight weight="bold" className="text-lg" />
                      </button>
                  </form>

                  <p className="text-[10px] text-[#2D2B3D]/50 mt-4 font-bold uppercase tracking-widest">
                      Пускаем волнами, чтобы сервера не легли спать вместе с нами.
                  </p>

                  {/* Нижняя часть: Логотип + Ссылки */}
                  <div className="relative z-10 flex flex-col md:flex-row items-end w-full mt-12 md:mt-18 gap-8 md:gap-0">
                      
                      {/* Логотип (стоит по своей линии, но относительно экрана будет левее оси 30%, так как он в начале блока) */}
                      <div className="text-xl md:text-2xl font-black text-[#2D2B3D] tracking-tight flex items-center gap-2 justify-start mb-6 md:mb-0 md:-ml-[43%] md:w-[43%] shrink-0 relative right-6 md:right-0">
                          <Asterisk weight="fill" className="text-[#8B7EC8]" /> Блянер
                      </div>
                      
                      {/* Ссылки (Строго по той же линии 30%!) */}
                      <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-bold text-[#2D2B3D]/60 w-full justify-start md:justify-start">
                          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-[#2D2B3D] transition-colors">На главную</button>
                          <a href="#" className="hover:text-[#2D2B3D] transition-colors">Политика</a>
                          <a href="#" className="hover:text-[#2D2B3D] transition-colors">Контакты</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
</div>
  );
}
