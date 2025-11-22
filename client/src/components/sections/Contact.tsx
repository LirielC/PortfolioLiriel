import { portfolioData } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-2 uppercase">Vamos Conversar?</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-black/10 rounded-lg backdrop-blur-sm hover:bg-black/20 transition-colors">
            <Mail className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h3 className="font-bold uppercase mb-2">Email</h3>
            <a href={portfolioData.social.email} className="text-sm hover:underline opacity-90">contact@liriel.site</a>
          </div>
          <div className="text-center p-6 bg-black/10 rounded-lg backdrop-blur-sm hover:bg-black/20 transition-colors">
            <MapPin className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h3 className="font-bold uppercase mb-2">Localização</h3>
            <p className="text-sm opacity-90">Brasil</p>
          </div>
          <div className="text-center p-6 bg-black/10 rounded-lg backdrop-blur-sm hover:bg-black/20 transition-colors">
            <Phone className="w-10 h-10 mx-auto mb-4 opacity-80" />
            <h3 className="font-bold uppercase mb-2">Social</h3>
            <div className="flex justify-center gap-4">
              <a href={portfolioData.social.github} className="hover:text-secondary transition-colors font-bold">GitHub</a>
              <a href={portfolioData.social.linkedin} className="hover:text-secondary transition-colors font-bold">LinkedIn</a>
            </div>
          </div>
        </div>

        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-2xl text-gray-700" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold uppercase mb-2 text-gray-500">Nome</label>
              <input type="text" className="w-full p-3 bg-gray-100 rounded border-2 border-transparent focus:border-secondary focus:bg-white transition-colors outline-none" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase mb-2 text-gray-500">Email</label>
              <input type="email" className="w-full p-3 bg-gray-100 rounded border-2 border-transparent focus:border-secondary focus:bg-white transition-colors outline-none" placeholder="seu@email.com" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold uppercase mb-2 text-gray-500">Mensagem</label>
            <textarea className="w-full p-3 bg-gray-100 rounded border-2 border-transparent focus:border-secondary focus:bg-white transition-colors outline-none h-32" placeholder="Como posso ajudar?"></textarea>
          </div>
          <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold uppercase py-4 rounded shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[2px] transition-all">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
