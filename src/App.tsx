/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ArrowUpRight, 
  MapPin, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Terminal,
  Grid,
  Layers,
  Compass,
  ChevronsRight
} from "lucide-react";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const yScale = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const slideUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  const slideRight = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#F27D26] overflow-x-hidden border-[12px] border-[#121212]">
      {/* Editorial Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass h-20 flex items-center justify-between px-10">
        <div className="flex flex-col">
          <span className="label-mini text-[8px] opacity-40">個人作品集 / 2026</span>
          <h1 className="text-xl font-bold tracking-tighter">LU,YI CHEN</h1>
        </div>
        <nav className="hidden md:flex gap-12 label-mini mb-0 opacity-60">
          <a href="#work" className="hover:opacity-100 transition-opacity">打工經驗</a>
          <a href="#travel" className="hover:opacity-100 transition-opacity">旅遊規劃</a>
          <a href="#stats" className="hover:opacity-100 transition-opacity">語言指標</a>
        </nav>
        <button className="btn-editorial">選單</button>
      </header>

      <main ref={containerRef}>
        {/* Massive Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-10 pt-20 relative overflow-hidden">
          <div className="editorial-grid mb-[-20px]">
             <div className="col-span-12 md:col-span-8 flex flex-col justify-end py-10">
                <motion.div {...slideUp} className="overflow-hidden">
                  <h2 className="text-editorial-huge">LU.YI</h2>
                </motion.div>
                <motion.div {...slideUp} transition={{ delay: 0.1 }} className="overflow-hidden flex items-baseline gap-4 md:ml-32 -mt-4 md:-mt-12">
                   <h2 className="text-editorial-huge text-editorial-serif text-[#F27D26]">CHEN</h2>
                   <div className="h-px flex-grow bg-white/10 hidden md:block mt-8" />
                </motion.div>
             </div>
             <div className="col-span-12 md:col-span-4 border-l border-white/10 p-10 flex flex-col justify-end gap-12">
                <motion.div {...slideRight} transition={{ delay: 0.3 }}>
                  <span className="label-mini">個人簡介 .04</span>
                  <p className="text-sm leading-relaxed opacity-60 max-w-[280px]">
                    以極簡主義視角探索航海技術與社群行銷的交集。現居高雄。
                  </p>
                </motion.div>
                <motion.div {...slideRight} transition={{ delay: 0.4 }} className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="label-mini mb-0 opacity-40">就讀系所</span>
                    <span className="text-[11px] font-mono">NKUST 航運技術系</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="label-mini mb-0 opacity-40">專業職位</span>
                    <span className="text-[11px] font-mono">行銷企劃 / 執行</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="label-mini mb-0 opacity-40">狀態</span>
                    <span className="text-[11px] font-mono text-[#4ade80]">可接案</span>
                  </div>
                </motion.div>
             </div>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-10 flex items-center gap-4 label-mini mb-0">
            <span>向下滑動探索</span>
            <div className="w-12 h-px bg-white/20">
              <motion.div className="h-px bg-[#F27D26]" style={{ width: yScale + '%' }} />
            </div>
          </div>
        </section>

        {/* Experience Section - Grid Pattern */}
        <section id="work" className="border-t border-white/10">
          <div className="editorial-grid h-full">
            <div className="col-span-12 md:col-span-4 grid-cell border-b md:border-b-0">
               <span className="label-mini">打工經驗 / 01</span>
               <h3 className="text-4xl font-bold tracking-tighter mb-8 italic serif text-[#F27D26]">工作生活</h3>
               <div className="flex -space-x-4 mb-8">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#080808] bg-white/5" />
                  ))}
               </div>
            </div>
            <div className="col-span-12 md:col-span-8">
               {[
                 { shop: '壽司郎', role: '內場人員', desc: '負責餐飲製作與流程精準度控管。' },
                 { shop: '夏慕尼', role: '內場人員', desc: '高級餐飲備料與產線管理。' }
               ].map((exp, i) => (
                 <motion.div 
                   key={i}
                   {...slideUp}
                   className="p-10 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/5 transition-colors group cursor-pointer"
                 >
                   <div className="flex gap-10 items-baseline">
                     <span className="text-3xl font-mono opacity-20 group-hover:opacity-100 group-hover:text-[#F27D26] transition-all">0{i+1}</span>
                     <div>
                       <h4 className="text-2xl font-bold uppercase tracking-tight">{exp.shop}</h4>
                       <span className="label-mini opacity-40 uppercase">{exp.role}</span>
                     </div>
                   </div>
                   <div className="mt-4 md:mt-0 md:text-right">
                     <p className="text-[11px] opacity-40 max-w-[200px] mt-2">{exp.desc}</p>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* Internship - Visual Highlight */}
        <section className="bg-[#121212] p-10 md:p-24 overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-10 relative z-10">
            <div className="col-span-12 md:col-span-5">
              <motion.div {...slideRight}>
                <span className="label-mini">案例研究 / 03</span>
                <h2 className="text-7xl font-bold tracking-tighter uppercase mb-8">
                  海洋 <br/> 
                  <span className="text-editorial-serif italic text-[#F27D26]">實習</span>
                </h2>
                <div className="space-y-6">
                  <p className="opacity-60 text-sm leading-relaxed">
                    御風輪實習：將航運專業知識應用於實務操作，包含駕駛台管理、庫存控管與海圖操作。
                  </p>
                  <button className="btn-editorial flex items-center gap-3">
                    查看詳情 <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-7 flex justify-end">
               <motion.div 
                {...slideUp}
                className="w-full h-[500px] bg-white/5 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative group"
               >
                 <img 
                   src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1000" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                   alt="Ocean"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60" />
               </motion.div>
            </div>
          </div>
          {/* Background Text Overlay */}
          <div className="absolute -bottom-10 left-0 text-[20vw] font-display opacity-[0.02] whitespace-nowrap select-none pointer-events-none">
            NAVIGATION SYSTEM
          </div>
        </section>

        {/* Travel Itinerary - Technical Grid */}
        <section id="travel" className="border-t border-white/10">
          <div className="editorial-grid min-h-screen">
             <div className="col-span-12 md:col-span-3 grid-cell flex flex-col justify-between">
                <div>
                   <span className="label-mini">行程規劃 / 04</span>
                   <h3 className="text-4xl font-bold tracking-tighter italic serif text-[#F27D26]">春季計畫</h3>
                </div>
                <div className="space-y-4">
                   <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                      <span className="label-mini text-[8px]">預算估計</span>
                      <p className="text-2xl font-mono">$14,000</p>
                   </div>
                   <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10">
                     <iframe 
                       className="w-full h-full"
                       src="https://www.youtube.com/embed/OJ3PkmEM10A" 
                       title="YouTube video player" 
                       frameBorder="0" 
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                       allowFullScreen
                     ></iframe>
                   </div>
                </div>
             </div>
             <div className="col-span-12 md:col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full">
                  {[
                    { day: '01', title: '森林呼吸', desc: '宣化自然體驗與山林靜修。' },
                    { day: '02', title: '太平洋沿岸', desc: '海岸探索與海洋公園之旅。' },
                    { day: '03', title: '文化核心', desc: '博物館、工藝中心與人文景點。' },
                    { day: '04', title: '海之回程', desc: '海鮮市場探索與物流採買。' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      {...slideUp}
                      transition={{ delay: i * 0.1 }}
                      className="border-r border-b border-white/10 p-10 hover:bg-[#F27D26] hover:text-white transition-all duration-500 group"
                    >
                      <span className="text-5xl font-display opacity-20 group-hover:opacity-100 transition-opacity mb-24 block">{item.day}</span>
                      <h4 className="text-xl font-bold uppercase tracking-tight mb-4">{item.title}</h4>
                      <p className="text-[11px] opacity-60 group-hover:opacity-100 leading-relaxed font-mono">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* Metrics/Stats - Minimal List */}
        <section id="stats" className="section-container border-t border-white/10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20">
             <div>
               <span className="label-mini">指標量化.01</span>
               <h2 className="text-6xl font-bold tracking-tighter uppercase">語言能力 <br/> <span className="text-editorial-serif italic text-[#F27D26]">評級</span></h2>
             </div>
             <p className="text-xs font-mono opacity-40 max-w-[200px] mb-2">
               量化於全球航運網路中的溝通能力。
             </p>
           </div>

           <div className="space-y-0">
             {[
               { id: 'I', label: '英文', score: '精通', detail: 'TOEIC 900' },
               { id: 'II', label: '日文', score: '基礎', detail: ' N2 ' },
               { id: 'III', label: '韓文', score: '一般', detail: 'TOPIK I' }
             ].map((stat, i) => (
               <motion.div 
                key={i}
                {...slideRight}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between py-12 border-b border-white/10 group cursor-crosshair"
               >
                 <div className="flex gap-12 items-baseline">
                   <span className="text-xs font-mono opacity-20 group-hover:opacity-100">{stat.id}</span>
                   <h4 className="text-4xl font-bold uppercase tracking-tight group-hover:text-[#F27D26] transition-colors">{stat.label}</h4>
                 </div>
                 <div className="flex flex-col items-end">
                   <span className="label-mini mb-0">{stat.score}</span>
                   <span className="text-lg font-mono opacity-60">{stat.detail}</span>
                 </div>
               </motion.div>
             ))}
           </div>
        </section>
      </main>

      {/* Editorial Footer */}
      <footer className="p-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex gap-8 label-mini opacity-60 mb-0">
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
          <h2 className="text-2xl font-bold tracking-tighter">LU YI CHEN.L</h2>
        </div>
        
        <div className="flex flex-col items-end gap-2 text-[10px] uppercase tracking-[0.2em] opacity-30">
          <span>高雄 / 台灣 / 國際</span>
          <span>© 2026 LU YI CHEN. 版權所有</span>
        </div>

        <div className="flex gap-4 items-center group cursor-pointer text-white">
           <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUpRight size={20} />
           </div>
           <span className="label-mini mb-0">聯絡合作洽談</span>
        </div>
      </footer>
    </div>
  );
}
