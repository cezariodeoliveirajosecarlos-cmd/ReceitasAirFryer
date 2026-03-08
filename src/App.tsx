/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChefHat, Zap, Check, Salad, Coins, Heart, Users, DollarSign, Clock, Gift, Utensils, ShoppingCart, Star, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-[#FAFAFA] font-sans text-gray-900 overflow-x-hidden relative">
      {/* Futuristic background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[80%] h-[80%] bg-orange-400/20 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute top-[20%] -right-[20%] w-[60%] h-[60%] bg-yellow-400/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[90%] h-[90%] bg-orange-300/20 blur-[200px] rounded-full animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-white/20 blur-[120px] rounded-full"></div>
        
        {/* Abstract futuristic shapes */}
        <div className="absolute top-[15%] left-[5%] w-64 h-64 border border-orange-500/10 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 border border-yellow-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent)]"></div>
      </div>

      {/* Top Banner */}
      <div className="bg-linear-to-r from-orange-500 to-red-600 py-2.5 px-4 text-center shadow-xl shadow-orange-600/20 relative z-20">
        <p className="text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 drop-shadow-md uppercase tracking-wider">
          🔥 Última Chance - Promoção Imperdível! Só até hoje
        </p>
      </div>

      <main className="max-w-md mx-auto px-6 py-8 flex flex-col items-center text-center">
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-black text-orange-800 leading-tight mb-8 drop-shadow-lg tracking-tight"
        >
          200 Receitas irresistíveis para sua Airfryer
        </motion.h1>

        {/* Product Mockup Image - New Placement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="relative w-full mb-10 group"
        >
          <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
            <img 
              src="https://i.imgur.com/KItNr0z.jpeg" 
              alt="Airfryer Recipes Mockup" 
              className="w-full h-auto rounded-3xl shadow-[0_30px_60px_rgba(234,88,12,0.4)] border-4 border-white"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="async"
              width="400"
              height="400"
            />
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-orange-950 font-black px-6 py-3 rounded-2xl shadow-2xl border-2 border-white transform rotate-3 flex items-center gap-2">
              <Star size={20} className="fill-orange-950" />
              PREMIUM
            </div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-lg mb-12 leading-relaxed font-medium"
        >
          Deixe sua cozinha mais fácil com receitas simples, saudáveis e muito gostosas!
        </motion.p>

        {/* Pricing Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10 relative"
        >
          <div className="absolute -inset-4 bg-emerald-100/30 blur-2xl rounded-full -z-10"></div>
          <p className="text-gray-900 text-2xl font-bold mb-2">
            <span className="line-through text-gray-400 mr-3 decoration-red-500/50">De R$ 97,00</span>
            por apenas
          </p>
          <p className="text-emerald-600 text-8xl font-black tracking-tighter drop-shadow-xl flex items-start justify-center">
            <span className="text-3xl mt-4 mr-1">R$</span>
            14,90
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://pay.lowify.com.br/checkout.php?product_id=xT4TvM"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(5, 150, 105, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-6 bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-2xl rounded-full shadow-[0_15px_30px_rgba(5, 150, 105, 0.3)] transition-all duration-300 uppercase tracking-wider mb-8 cursor-pointer relative overflow-hidden group flex items-center justify-center border-b-4 border-emerald-800"
        >
          <div className="glossy-highlight"></div>
          <span className="relative z-10">Quero as receitas!</span>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </motion.a>

        {/* Footer Info */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 text-sm font-medium flex items-center gap-2"
        >
          <Zap size={16} className="text-orange-400 fill-orange-400" />
          Acesso imediato após o pagamento
          <Zap size={16} className="text-orange-400 fill-orange-400" />
        </motion.p>
      </main>

      {/* Benefits Section */}
      <div className="neon-line" />
      <section className="bg-linear-to-b from-[#FFF5E6] to-white py-12 px-6 relative">
        <div className="max-w-md mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#9A3412] text-center mb-10"
          >
            Benefícios do Produto
          </motion.h2>

          <div className="space-y-5">
            {[
              "Receitas para todas as refeições: Almoço, Jantar, Lanches e Marmitas",
              "Receitas Congeláveis, Fáceis e Rápidas",
              "Sugestões completas para o seu cardápio",
              "Pratos suculentos, crocantes e deliciosos, prontos em minutos",
              "Ideal para dietas especiais"
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl shadow-xl border border-orange-200/40 flex items-center gap-5 hover:shadow-orange-200/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-linear-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-400/40 group-hover:scale-110 transition-transform">
                  <Check size={22} className="text-white stroke-[4px]" />
                </div>
                <p className="text-gray-800 font-black text-lg leading-tight">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Indispensable Section */}
      <div className="neon-line" />
      <section className="bg-white py-12 px-6 relative">
        <div className="max-w-md mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#9A3412] text-center mb-8 leading-tight"
          >
            Por que a Airfryer é Indispensável na sua Cozinha?
          </motion.h2>

          {/* Airfryer Image Placeholder with Fries */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-10 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
          >
            <img 
              src="https://static.ndmais.com.br/2023/10/393141598-681108760643575-6322218240520031095-n-1040x1300.jpg" 
              alt="Airfryer indispensável" 
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              width="400"
              height="256"
            />
          </motion.div>

          <div className="space-y-6">
            {/* Card 1: Comida Mais Saudável */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl shadow-lg overflow-hidden flex border-l-8 border-orange-400 hover:translate-x-1 transition-transform"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Salad size={24} className="text-orange-600" />
                  <h3 className="text-xl font-black text-orange-700">Comida Mais Saudável</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Reduza até 80% da gordura dos alimentos sem perder o sabor e a textura crocante que você ama.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Economia de Tempo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex border-l-8 border-red-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={24} className="text-red-600" />
                  <h3 className="text-xl font-black text-orange-700">Economia de Tempo</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Cozinhe até 50% mais rápido que métodos tradicionais. Perfeito para a correria do dia a dia.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Economia de Energia */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex border-l-8 border-yellow-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Coins size={24} className="text-yellow-600" />
                  <h3 className="text-xl font-black text-orange-700">Economia de Energia</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Gaste menos energia elétrica comparado ao forno convencional. Sua conta de luz agradece!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why You Need These Recipes Section */}
      <div className="neon-line" />
      <section className="bg-linear-to-b from-white to-[#FFF5E6] py-12 px-6 relative">
        <div className="max-w-md mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#9A3412] text-center mb-10 leading-tight"
          >
            Por que Você Precisa Dessas Receitas?
          </motion.h2>

          <div className="space-y-6">
            {/* Card 1: Alimentação Saudável */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl shadow-xl p-8 text-center flex flex-col items-center border border-orange-200/60 hover:shadow-orange-300/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-orange-300">
                <Heart size={24} className="text-white fill-white" />
              </div>
              <h3 className="text-xl font-black text-orange-700 mb-2">Alimentação Saudável</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Prepare refeições nutritivas com menos óleo, mantendo todos os nutrientes e sabores.
              </p>
            </motion.div>

            {/* Card 2: Praticidade Total */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl shadow-lg p-8 text-center flex flex-col items-center border border-orange-100/50 hover:shadow-orange-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-orange-200">
                <Zap size={24} className="text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">Praticidade Total</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Receitas simples e rápidas para o seu dia a dia corrido. Menos tempo na cozinha, mais tempo para você.
              </p>
            </motion.div>

            {/* Card 3: Economia Garantida */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl shadow-lg p-8 text-center flex flex-col items-center border border-orange-100/50 hover:shadow-orange-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-orange-200">
                <DollarSign size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">Economia Garantida</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Economize dinheiro preparando suas próprias refeições ao invés de pedir delivery.
              </p>
            </motion.div>

            {/* Card 4: Para Toda Família */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl shadow-lg p-8 text-center flex flex-col items-center border border-orange-100/50 hover:shadow-orange-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-orange-200">
                <Users size={24} className="text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-2">Para Toda Família</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Receitas que agradam desde crianças até adultos. Momentos especiais à mesa garantidos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amazing Recipes Grid Section */}
      <div className="neon-line" />
      <section className="bg-[#FFF9F2] py-12 px-4 relative">
        <div className="max-w-md mx-auto flex flex-col items-center">
          {/* Section CTA Button */}
          <div className="w-full flex justify-center mb-12">
            <motion.a
              href="#ofertas"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(234, 88, 12, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-6 bg-linear-to-r from-orange-600 via-red-600 to-orange-600 bg-[length:200%_100%] animate-shimmer text-white font-black text-lg sm:text-xl rounded-full shadow-[0_15px_35px_rgba(234,88,12,0.4)] uppercase tracking-tight flex items-center justify-center gap-3 relative overflow-hidden group border-b-4 border-red-800"
            >
              <div className="glossy-highlight"></div>
              <span className="relative z-10 flex items-center gap-2">
                <Utensils size={24} className="animate-bounce" style={{ animationDuration: '2s' }} />
                QUERO TRANSFORMAR MINHA COZINHA!
                <Utensils size={24} className="animate-bounce" style={{ animationDuration: '2s' }} />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.a>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-black text-[#9A3412] text-center mb-8 leading-tight"
          >
            Algumas das 200 Receitas Incríveis
          </motion.h2>

          <div className="grid grid-cols-2 gap-5 w-full">
            {[
              { title: "Batata Frita Crocante", time: "15 min", image: "https://receitatodahora.com.br/wp-content/uploads/2025/04/batata-frita-sequinha-26-04.jpeg" },
              { title: "Frango Empanado", time: "20 min", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=400" },
              { title: "Pizza", time: "25 min", image: "https://marmitexdesucesso.com.br/wp-content/uploads/2024/11/Pode-esquentar-pizza-na-airfryer.jpg" },
              { title: "Legumes Assados", time: "18 min", image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-legumes-na-airfryer-00.jpeg" },
              { title: "Coxinha de Frango", time: "12 min", image: "https://cdn0.tudoreceitas.com/pt/posts/3/9/4/coxa_de_frango_assada_no_forno_com_batata_5493_600.webp" },
              { title: "Torta de Maçã", time: "30 min", image: "https://docepedia.com/_next/image?url=https%3A%2F%2Fadmin.docepedia.com%2Fsite%2Fuploads%2F2021%2F12%2Ftorta-maca-p-768x768-1.jpg&w=1080&q=75" },
            ].map((recipe, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-orange-100 hover:shadow-orange-200/40 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="aspect-square w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width="200"
                    height="200"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow relative">
                  <h3 className="text-base font-black text-orange-900 mb-3 leading-tight min-h-[2.5rem]">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-xs text-orange-600 font-black">
                      <Clock size={14} className="text-orange-500" />
                      {recipe.time}
                    </div>
                    <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-md">
                      Fácil
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <div className="neon-line" />
      <section className="bg-linear-to-b from-[#FFF5E6] to-white py-12 px-6 relative">
        <div className="max-w-md mx-auto flex flex-col items-center">
          {/* Top Button */}
          <motion.a
            href="#ofertas"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-6 bg-linear-to-r from-red-700 via-orange-600 to-red-700 bg-[length:200%_100%] animate-shimmer text-white font-black text-xl rounded-full shadow-2xl mb-12 uppercase tracking-wider flex items-center justify-center gap-3 relative overflow-hidden group border-b-4 border-red-900"
          >
            <div className="glossy-highlight"></div>
            <Utensils size={28} className="relative z-10" />
            <span className="relative z-10">VER TODAS AS RECEITAS</span>
            <Utensils size={28} className="relative z-10" />
          </motion.a>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-black text-[#9A3412] text-center mb-10 leading-tight"
          >
            Bônus Exclusivos ao Adquirir Hoje:
          </motion.h2>

          <div className="space-y-8 w-full">
            {[
              {
                id: "01",
                title: "40 Receitas Extras com Airfryer",
                description: "Receitas exclusivas para você variar ainda mais seu cardápio na Airfryer!",
                oldPrice: "R$ 47"
              },
              {
                id: "02",
                title: "20 Molhos para Acompanhar suas Receitas",
                description: "Os melhores molhos para acompanhar seus pratos da Airfryer e deixá-los ainda mais saborosos!",
                oldPrice: "R$ 37"
              },
              {
                id: "03",
                title: "Lista de Compras Inteligente e Econômica",
                description: "Organize suas compras de forma inteligente e economize dinheiro no mercado!",
                oldPrice: "R$ 27"
              }
            ].map((bonus, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FFB84D] rounded-2xl p-8 text-center flex flex-col items-center shadow-xl border-b-8 border-orange-500/40"
              >
                <div className="bg-orange-700 p-2 rounded-lg mb-4 shadow-lg">
                  <Gift size={24} className="text-white" />
                </div>
                
                <h4 className="text-orange-900 font-black text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                  🎁 BÔNUS #{bonus.id}
                </h4>
                
                <h3 className="text-white font-black text-xl mb-3 leading-tight drop-shadow-md">
                  {bonus.title}
                </h3>
                
                <p className="text-orange-950 font-bold text-sm leading-relaxed mb-4">
                  {bonus.description}
                </p>
                
                <p className="text-orange-900/60 line-through text-sm font-black mb-4">
                  {bonus.oldPrice}
                </p>
                
                <div className="bg-emerald-600 text-white font-black text-sm px-6 py-2 rounded-full shadow-lg uppercase tracking-wider">
                  GRÁTIS HOJE!
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Offers Section */}
      <div className="neon-line" />
      <section id="ofertas" className="bg-linear-to-b from-white via-[#FFF9F2] to-orange-400 py-16 px-6 relative">
        <div className="max-w-md mx-auto space-y-10">
          
          {/* Basic Offer Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 shadow-2xl border-4 border-orange-100 relative overflow-hidden group hover:shadow-orange-200/50 transition-shadow"
          >
            <h3 className="text-red-600 font-black text-2xl text-center mb-2 uppercase tracking-tighter">
              OFERTA BÁSICA
            </h3>
            <p className="text-emerald-500 font-bold text-center mb-6">
              Você recebe:
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "200 Receitas incríveis com Airfryer",
                "Pratos saborosos e de fácil preparo",
                "Acesso vitalício ao e-book",
                "Entrega imediata no seu e-mail",
                "Garantia de 30 dias"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                  <Check size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center mb-6">
              <p className="text-red-600 line-through text-sm font-black">De R$ 97</p>
              <p className="text-emerald-600 text-5xl font-black tracking-tighter my-1 drop-shadow-sm">R$ 14,90</p>
              <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Pagamento único</p>
            </div>

            <motion.a
              href="https://pay.lowify.com.br/checkout.php?product_id=xT4TvM"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg rounded-full shadow-xl shadow-emerald-200 transition-colors uppercase flex items-center justify-center"
            >
              COMPRAR AGORA
            </motion.a>
          </motion.div>

          {/* Super Offer Card (Most Popular) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-orange-600 via-red-600 to-red-800 rounded-[2.5rem] p-10 shadow-[0_30px_60px_rgba(220,38,38,0.3)] relative border-4 border-yellow-400 group"
          >
            <div className="glossy-highlight opacity-30"></div>
            {/* Best Seller Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-orange-950 text-xs font-black px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 whitespace-nowrap border-2 border-white animate-bounce" style={{ animationDuration: '3s' }}>
              🔥 MAIS VENDIDO 🔥
            </div>

            <h3 className="text-white font-black text-3xl text-center mb-8 uppercase tracking-tighter drop-shadow-2xl">
              SUPER OFERTA
            </h3>
            
            <ul className="space-y-4 mb-10">
              {[
                "200 Receitas com Airfryer",
                "+40 Receitas de Marmitas com Airfryer",
                "Lista de Compras Inteligente",
                "20 Molhos Secretos para acompanhar",
                "Guia de utensílios para Airfryer",
                "Pratos saborosos e de fácil preparo",
                "Acesso vitalício + Atualizações contínuas",
                "Suporte exclusivo",
                "Entrega imediata no seu e-mail",
                "Garantia de 30 dias"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white text-base font-black drop-shadow-md">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <Check size={16} className="text-orange-900 stroke-[4px]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center mb-8">
              <p className="text-white/80 line-through text-lg font-black">De R$ 147</p>
              <p className="text-white text-7xl font-black tracking-tighter my-2 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">R$ 19,90</p>
              <p className="text-white/90 text-sm font-black uppercase tracking-[0.3em]">Pagamento único</p>
            </div>

            <motion.a
              href="https://pay.lowify.com.br/go.php?offer=utixsea"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-5 bg-yellow-400 hover:bg-yellow-300 text-orange-950 font-black text-2xl rounded-full shadow-2xl transition-all duration-300 uppercase flex items-center justify-center gap-3 border-b-4 border-yellow-600"
            >
              <ShoppingCart size={24} />
              COMPRAR AGORA
              <ShoppingCart size={24} />
            </motion.a>
          </motion.div>

        </div>
      </section>

      {/* Testimonials Section */}
      <div className="neon-line" />
      <section className="bg-linear-to-b from-orange-500 to-[#FFF5E6] py-16 px-6 relative">
        <div className="max-w-md mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#9A3412] text-center mb-10 leading-tight drop-shadow-sm"
          >
            O que Nossos Clientes Estão Dizendo
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                name: "Juliana Mendes",
                location: "São Paulo, SP",
                text: "Essas receitas mudaram completamente minha rotina na cozinha! Agora faço pratos deliciosos em minutos.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
              },
              {
                name: "Ricardo Oliveira",
                location: "Rio de Janeiro, RJ",
                text: "Minha família adora as receitas! Principalmente as crianças que agora comem mais vegetais.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
              },
              {
                name: "Beatriz Souza",
                location: "Belo Horizonte, MG",
                text: "Economizei muito dinheiro parando de pedir delivery. As receitas são fáceis e saborosas!",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
              },
              {
                name: "Fernando Santos",
                location: "Porto Alegre, RS",
                text: "Como chef, posso dizer que essas receitas são profissionais. Recomendo para todos!",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 shadow-xl border border-orange-200/60 hover:shadow-orange-300/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-14 h-14 rounded-full object-cover border-2 border-orange-200 shadow-md"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                width="56"
                height="56"
              />
                  <div>
                    <h4 className="text-orange-700 font-black text-lg leading-tight">{testimonial.name}</h4>
                    <p className="text-orange-950/60 text-xs font-bold">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="neon-line" />
      <section className="bg-[#FFF9F2] py-16 px-6 relative">
        <div className="max-w-md mx-auto flex flex-col items-center">
          
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-1 text-yellow-600 mb-1">
              <Star size={16} className="fill-yellow-500" />
              <span className="text-orange-950 font-black text-sm">Mais de 10.000 clientes satisfeitos!</span>
              <Star size={16} className="fill-yellow-500" />
            </div>
            <motion.a
              href="#ofertas"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-3 bg-linear-to-r from-orange-500 to-red-600 text-white font-black rounded-full shadow-2xl uppercase tracking-tight relative overflow-hidden group flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">🌟 EU TAMBÉM QUERO! 🌟</span>
            </motion.a>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-[#9A3412] text-center mb-10 leading-tight"
          >
            Perguntas Frequentes
          </motion.h2>

          <div className="w-full space-y-4">
            <FAQItem 
              question="Como acesso as receitas?" 
              answer="Logo após a confirmação do pagamento, você receberá um e-mail com o link de acesso para baixar seu e-book completo em PDF, podendo acessar pelo celular, tablet ou computador."
            />
            <FAQItem 
              question="O que está incluso no produto?" 
              answer="Você recebe o e-book principal com 200 receitas, além de todos os bônus exclusivos mencionados nesta página: 40 receitas extras, guia de molhos e lista de compras inteligente."
            />
            <FAQItem 
              question="Como funciona a entrega?" 
              answer="A entrega é 100% digital e imediata. Assim que o pagamento for aprovado, os dados de acesso são enviados automaticamente para o seu e-mail cadastrado."
            />
            <FAQItem 
              question="As receitas são difíceis de fazer?" 
              answer="Não! Todas as receitas foram selecionadas pela sua praticidade. Elas possuem instruções passo a passo simples, ideais tanto para iniciantes quanto para quem já tem experiência na cozinha."
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="neon-line" />
      <footer className="bg-linear-to-b from-[#FFF5E6] to-orange-600 py-16 px-6 text-center text-white relative overflow-hidden">
        {/* Subtle background glow for footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial from-white/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-md mx-auto relative z-10">
          <h3 className="text-2xl font-black mb-4 flex items-center justify-center gap-2 drop-shadow-lg">
            🍟 200 Receitas na Airfryer
          </h3>
          <p className="text-white font-bold mb-10 leading-relaxed drop-shadow-md">
            Transforme sua cozinha com as melhores receitas para Airfryer!
          </p>

          <motion.a
            href="https://pay.lowify.com.br/checkout.php?product_id=xT4TvM"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(250, 204, 21, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-5 bg-yellow-500 hover:bg-yellow-600 text-orange-950 font-black text-lg rounded-full shadow-2xl transition-all duration-300 uppercase flex items-center justify-center gap-2 mb-12 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10">🔥 ÚLTIMA CHANCE - COMPRAR AGORA! 🔥</span>
          </motion.a>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/60 text-xs font-medium">
              © 2026 Receitas Airfryer. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-xl shadow-md border border-orange-100/50 overflow-hidden hover:shadow-orange-100/50 transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left transition-colors hover:bg-orange-50/50"
      >
        <span className="text-orange-800 font-bold text-sm sm:text-base">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className="text-orange-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-orange-50/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
