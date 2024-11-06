
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_s6q46qj',  // استبدل بـ service ID من EmailJS
      'template_u24kc6k', // استبدل بـ template ID من EmailJS
      e.target,
      'cd6XzKb4a3kF-2J8k'      // استبدل بـ user ID من EmailJS
    )
    .then((result) => {
      console.log(result.text);
      alert("تم إرسال الرسالة بنجاح!");
    }, (error) => {
      console.log(error.text);
      alert("حدث خطأ أثناء الإرسال.");
    });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">الاسم</label>
            <input type="text" id="name" name="name" className="w-full p-2 arabic-text border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phone">الهاتف</label>
            <input type="tel" id="phone" name="phone" className="w-full arabic-text p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">البريد الإلكتروني</label>
            <input type="email" id="email" name="email" className="w-full arabic-text p-2 border border-gray-300 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">الرسالة</label>
            <textarea id="message" name="message" className="w-full arabic-text p-2 border border-gray-300 rounded" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 arabic-text text-white px-4 py-2 rounded">إرسال</button>
        </form>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <iframe
          id="map-section"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.6744931008034!2d39.66476799999999!3d24.462076200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd95049bcfd3d3%3A0x317a64510e6ac942!2z2LTYsdmD2Kkg2KfZhNmF2K_ZitmG2Kkg2YTZhNiy2KzYp9is!5e0!3m2!1sen!2seg!4v1730908760375!5m2!1sen!2seg" 
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
