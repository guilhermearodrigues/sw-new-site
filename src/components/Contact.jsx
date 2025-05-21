export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const empresa = e.target.empresa.value;
    const mensagem = e.target.mensagem.value;
    const url = `https://wa.me/5511988860652?text=Olá,%20sou%20${nome}%20da%20empresa%20${empresa}.%20${mensagem}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-semibold mb-4">Contato</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left">
        <input name="nome" type="text" placeholder="Seu nome" required className="w-full p-2 border rounded" />
        <input name="empresa" type="text" placeholder="Empresa" className="w-full p-2 border rounded" />
        <textarea name="mensagem" placeholder="Mensagem" required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Enviar para WhatsApp
        </button>
      </form>
    </div>
  );
}