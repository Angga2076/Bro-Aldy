export default function Contact() {
return (
<section id="contact" className="py-20 px-6">
<h2 className="text-2xl font-bold text-center mb-6">Contact & Chat</h2>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="bg-gray-800 p-6 rounded-xl">
<h3 className="font-bold mb-4">Chat Room</h3>
<p className="text-gray-400">(Integrasi Google Login bisa ditambah di sini)</p>
</div>
<form className="bg-gray-800 p-6 rounded-xl flex flex-col gap-4">
<input type="text" placeholder="Full Name" className="p-2 rounded bg-gray-700" />
<input type="email" placeholder="Email" className="p-2 rounded bg-gray-700" />
<textarea placeholder="Message" rows="4" className="p-2 rounded bg-gray-700"></textarea>
<button className="bg-blue-500 py-2 rounded-lg hover:bg-blue-600">Send</button>
</form>
</div>
</section>
);
}
