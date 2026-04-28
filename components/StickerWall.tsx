"use client";

import { useEffect, useRef } from "react";

export default function StickerWall() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load Matter.js to avoid SSR issues
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js";
    script.async = true;
    script.onload = () => {
      initPhysics();
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Also need to clean up Matter instance if it exists
    };
  }, []);

  const initPhysics = () => {
    // @ts-ignore
    if (!window.Matter || !containerRef.current) return;

    const stickersData = [
      ["Она опять скачала новый планер...", "Внутренний критик"],
      ["Зато этот красивый и фиолетовенький!", "Внутренний ребёнок"],
      ["Давай просто оставим всё на понедельник и будем страдать.", "Прокрастинатор"],
      ["Нажимаем «Сплю» и расходимся.", "Здравый смысл"],
      ["Я скачала его только ради тёмной темы.", "Эстет"],
      ["Ого, таймер показал 4 часа. Пойду лягу.", "Реалист"],
      ["Завтра точно начну!", "Оптимист"],
      ["Надо было в Notion делать...", "Душнила"],
      ["Опять дедлайн про*бала", "Тревожность"],
      ["Слишком сложно, я удаляю", "Паникёр"],
      ["А может просто блокнот купить?", "Ретроград"],
      ["Где тут кнопка сделать заебись?", "Заказчик"],
      ["Я просто хочу спать", "Ты"]
    ];

    // Colors
    const colors = ['bg-[#E8DDF4]', 'bg-[#D3E851]', 'bg-[#FEEBF6]', 'bg-[#E3F2FD]'];

    const container = containerRef.current;
    if (!container) return;
    
    // Clear existing
    container.innerHTML = '';

    // @ts-ignore
    const Engine = Matter.Engine,
          // @ts-ignore
          Render = Matter.Render,
          // @ts-ignore
          Runner = Matter.Runner,
          // @ts-ignore
          MouseConstraint = Matter.MouseConstraint,
          // @ts-ignore
          Mouse = Matter.Mouse,
          // @ts-ignore
          World = Matter.World,
          // @ts-ignore
          Bodies = Matter.Bodies,
          // @ts-ignore
          Composite = Matter.Composite;

    // Create engine
    const engine = Engine.create({
      gravity: { x: 0, y: 0.5, scale: 0.001 } // Чуть более плавная гравитация
    });

    // Create renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width: container.clientWidth,
        height: container.clientHeight,
        background: 'transparent',
        wireframes: false,
        hasBounds: true
      }
    });

    // Create boundaries
    const padding = 10;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    
    const ground = Bodies.rectangle(cw / 2, ch + 25, cw, 50, { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
    });
    const leftWall = Bodies.rectangle(-25, ch / 2, 50, ch, { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
    });
    const rightWall = Bodies.rectangle(cw + 25, ch / 2, 50, ch, { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
    });
    const ceiling = Bodies.rectangle(cw / 2, -100, cw, 50, { // Потолок выше, чтобы стикеры падали из-за экрана
        isStatic: true,
        render: { fillStyle: 'transparent' }
    });

    World.add(engine.world, [ground, leftWall, rightWall, ceiling]);

    const domBodies: any[] = [];
    const htmlElements: HTMLElement[] = [];

    // Create sticker DOM elements and physics bodies
    stickersData.forEach((item, i) => {
        // Создаем DOM элемент
        const el = document.createElement('div');
        
        // Рандомный цвет, отступ и поворот
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        const initRotation = (Math.random() - 0.5) * 40; // -20 to 20 deg
        
        el.className = `absolute z-10 flex flex-col items-center justify-center p-5 rounded-2xl shadow-sm border border-black/5 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow select-none ${colorClass}`;
        
        // Размеры (примерные, подстраиваем под текст)
        const width = 280;
        const height = 120;
        
        el.style.width = width + 'px';
        el.style.height = height + 'px';
        
        el.innerHTML = `
            <p class="font-bold text-[#2D2B3D] text-center mb-3 text-[15px] leading-tight">"${item[0]}"</p>
            <div class="inline-block bg-white/60 px-3 py-1 rounded-full text-xs font-bold text-[#2D2B3D]/60 uppercase tracking-wider backdrop-blur-sm">
                ${item[1]}
            </div>
        `;
        
        container.appendChild(el);
        htmlElements.push(el);

        // Распределяем начальные позиции по ширине, но сбрасываем сверху (отрицательный Y)
        const startX = 100 + (Math.random() * (cw - 200));
        const startY = -150 - (Math.random() * 800); // Разброс по высоте, чтобы падали по очереди

        // Физическое тело
        const body = Bodies.rectangle(startX, startY, width, height, {
            restitution: 0.6, // Упругость (отскок)
            friction: 0.1,    // Трение
            frictionAir: 0.02, // Сопротивление воздуха (для плавности полета)
            angle: (initRotation * Math.PI) / 180, // Начальный поворот
            render: {
                fillStyle: 'transparent',
                strokeStyle: 'transparent'
            }
        });

        // Случайный начальный импульс (легкое вращение при падении)
        // @ts-ignore
        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

        domBodies.push(body);
        World.add(engine.world, body);
    });

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    World.add(engine.world, mouseConstraint);
    
    // Keep mouse in sync with rendering
    render.mouse = mouse;

    // Скролл-фикс (чтобы колесико мыши работало поверх холста)
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    // Sync DOM elements with physics bodies
    const updateDOM = () => {
        domBodies.forEach((body, i) => {
            const el = htmlElements[i];
            
            // Центрируем элемент относительно координат центра физического тела
            const posX = body.position.x - el.offsetWidth / 2;
            const posY = body.position.y - el.offsetHeight / 2;
            
            // Получаем угол в радианах
            const angle = body.angle;
            
            // Применяем CSS трансформации (включая Z-индекс при взаимодействии)
            el.style.transform = `translate(${posX}px, ${posY}px) rotate(${angle}rad)`;
            
            // Если тело спит (не двигается), можно понизить производительность, но пока не нужно
            // Если объект за пределами видимости снизу (упал мимо границ как-то), возвращаем наверх
            if (body.position.y > ch + 200) {
                 // @ts-ignore
                 Matter.Body.setPosition(body, { 
                     x: 100 + Math.random() * (cw - 200), 
                     y: -100 
                 });
                 // @ts-ignore
                 Matter.Body.setVelocity(body, { x: 0, y: 0 });
            }
        });
        
        requestAnimationFrame(updateDOM);
    };

    // Запуск движка и рендера
    Render.run(render);
    
    // Создаем свой runner для лучшего контроля
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Запускаем синхронизацию DOM
    updateDOM();

    // Обработка ресайза
    const handleResize = () => {
        if (!container) return;
        
        const newCw = container.clientWidth;
        const newCh = container.clientHeight;
        
        render.canvas.width = newCw;
        render.canvas.height = newCh;
        
        // Обновляем позиции стен
        // @ts-ignore
        Matter.Body.setPosition(ground, { x: newCw / 2, y: newCh + 25 });
        // Увеличиваем ширину пола и потолка при ресайзе
        // @ts-ignore
        Matter.Body.setVertices(ground, Matter.Bodies.rectangle(newCw / 2, newCh + 25, newCw + 100, 50).vertices);
        
        // @ts-ignore
        Matter.Body.setPosition(rightWall, { x: newCw + 25, y: newCh / 2 });
        // @ts-ignore
        Matter.Body.setVertices(rightWall, Matter.Bodies.rectangle(newCw + 25, newCh / 2, 50, newCh * 2).vertices);
        
        // @ts-ignore
        Matter.Body.setPosition(leftWall, { x: -25, y: newCh / 2 });
        // @ts-ignore
        Matter.Body.setVertices(leftWall, Matter.Bodies.rectangle(-25, newCh / 2, 50, newCh * 2).vertices);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null as any;
      render.context = null as any;
      render.textures = {};
    };
  };

  return (
    <section className="py-24 px-6 bg-[#F8F8FB] relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center relative z-20 mb-8 pointer-events-none">
        <h2 className="text-4xl lg:text-5xl font-black mb-4 text-[#2D2B3D]">Внутренние голоса</h2>
        <p className="text-lg text-gray-500 font-medium">Что думает твой мозг, когда ты пытаешься спланировать неделю.</p>
        <p className="text-sm font-bold text-[#8B7EC8] mt-4 uppercase tracking-widest bg-white/80 inline-block px-4 py-1.5 rounded-full border border-gray-200">Можно трогать и кидать</p>
      </div>

      {/* Контейнер для физики */}
      <div 
        ref={containerRef} 
        className="w-full max-w-[1200px] mx-auto h-[600px] relative rounded-[40px] bg-white border border-gray-200 overflow-hidden shadow-inner cursor-crosshair"
      >
        {/* Сюда будут инжектиться стикеры и canvas Matter.js */}
      </div>
    </section>
  );
}