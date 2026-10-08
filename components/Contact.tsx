export default function Contact() {
  return (
    <section id="contact" className="space-y-6 max-w-2xl mb-4">
      <h2 className="text-3xl font-bold tracking-tight text-white border-b border-gray-800 pb-2">
        Get In Touch
      </h2>
      <p className="text-gray-400 leading-relaxed">
        Whether you want to build something together, talk about an open opportunity, or just chat about backend architectures—my inbox is always open.
      </p>
      <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
        <a href="https://wa.me/9824300741" target="_blank" rel="noreferrer" className="text-center border border-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-lg transition-colors">
          WhatsApp Me Directly
        </a>
        <div className="flex justify-center space-x-6 text-sm font-medium text-gray-400 py-3 sm:py-0 sm:px-4">
          <a href="https://github.com/0mshrestha" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.instagram.com/0mshrestha/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </section>
  );
}
