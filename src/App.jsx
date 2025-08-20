import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Users, Calendar, Award, Phone, Mail, Instagram } from 'lucide-react';
import './App.css';

// Importando as imagens
import heroImage from './assets/casamento_daiana_lucas.jpg';
import planningImage from './assets/ZpzqXEg0zvsM.jpg';
import destinationImage from './assets/6pJZrLvs4i1T.jpg';
import experienceImage from './assets/hNuebPEpoFyN.jpg';
import partnersImage from './assets/Jlm9co4lIy2a.png';
import diversityImage from './assets/Dv9cvdEO7m3T.jpeg';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'casamento',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Dados do formulário:', formData);
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://hzksjbnudhswgqmccfnu.supabase.co/storage/v1/object/public/imagens-site-leco/imgs-home/Destination%20Wedding/Casamento%20Daiana%20e%20Lucas_1051.jpg)` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Transforme Seu Sonho em Realidade
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Casamentos de Luxo Inesquecíveis no Rio de Janeiro
          </motion.p>
          
          <motion.p 
            className="text-lg mb-10 opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Leco Biagioni: Mais de 20 anos de experiência em eventos de alto padrão, personalizando cada detalhe do seu grande dia.
          </motion.p>
          
          <motion.button 
            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
          >
            <Heart className="inline-block mr-2" size={20} />
            Solicite uma Consultoria Gratuita
          </motion.button>
        </motion.div>
      </section>

      {/* Services Blocks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {/* Block 1: Planejamento Personalizado */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2">
                <img 
                  src={planningImage} 
                  alt="Planejamento Personalizado" 
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <Star className="text-rose-500" size={32} />
                  <h2 className="text-4xl font-bold text-gray-800">Seu Casamento, Sua Visão</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Desde o conceito inicial até a execução impecável, cuidamos de cada detalhe para que seu casamento reflita sua personalidade e desejos. Nossa abordagem personalizada garante que cada elemento seja único e especial.
                </p>
              </div>
            </motion.div>

            {/* Block 2: Destination Weddings */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col lg:flex-row-reverse items-center gap-12"
            >
              <div className="lg:w-1/2">
                <img 
                  src={destinationImage} 
                  alt="Destination Weddings no Rio" 
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <Calendar className="text-rose-500" size={32} />
                  <h2 className="text-4xl font-bold text-gray-800">Case-se no Cenário dos Seus Sonhos</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Especialistas em casamentos de destino no Rio de Janeiro, oferecemos suporte completo para casais internacionais, com equipe multilíngue fluente em inglês, espanhol e francês.
                </p>
              </div>
            </motion.div>

            {/* Block 3: Experiência */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2">
                <img 
                  src={experienceImage} 
                  alt="Experiência e Confiança" 
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <Award className="text-rose-500" size={32} />
                  <h2 className="text-4xl font-bold text-gray-800">Mais de Mil Sonhos Realizados</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Com um portfólio de mais de mil eventos de sucesso, nossa trajetória é sinônimo de excelência e confiança no mercado de luxo. Cada evento é uma nova oportunidade de superar expectativas.
                </p>
              </div>
            </motion.div>

            {/* Block 4: Parcerias */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col lg:flex-row-reverse items-center gap-12"
            >
              <div className="lg:w-1/2">
                <img 
                  src={partnersImage} 
                  alt="Parcerias Exclusivas" 
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <Users className="text-rose-500" size={32} />
                  <h2 className="text-4xl font-bold text-gray-800">Os Melhores Fornecedores ao Seu Alcance</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nosso relacionamento sólido com os principais fornecedores garante uma curadoria exclusiva e alinhada à essência do seu evento. Acesso aos melhores profissionais do mercado.
                </p>
              </div>
            </motion.div>

            {/* Block 5: Diversidade */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2">
                <img 
                  src={diversityImage} 
                  alt="Diversidade e Inclusão" 
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <Heart className="text-rose-500" size={32} />
                  <h2 className="text-4xl font-bold text-gray-800">Celebrações para Todos os Amores</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Realizamos cerimônias católicas, judaicas, inter-religiosas, LGBTQIAPN+, e casamentos de dupla nacionalidade, com respeito e dedicação. Cada amor é único e merece ser celebrado.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Comece a Planejar Seu Dia Perfeito</h2>
            <p className="text-xl text-gray-600">Entre em contato conosco e transforme seus sonhos em realidade</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-2xl shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone (com DDD) *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Data do Evento (opcional)
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Evento
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
              >
                <option value="casamento">Casamento</option>
                <option value="aniversario">Aniversário</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                placeholder="Conte-nos mais sobre seu evento dos sonhos..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Solicitar Orçamento
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                Seus dados estão seguros conosco. Não compartilhamos suas informações com terceiros.
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Leco Biagioni</h3>
              <p className="text-gray-300 mb-4">
                Transformando sonhos em realidade há mais de 20 anos.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span className="text-gray-300">(21) 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span className="text-gray-300">contato@lecobiagioni.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/lecobiagioni" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Leco Biagioni. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
