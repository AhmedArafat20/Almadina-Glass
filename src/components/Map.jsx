const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              الاسم
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 arabic-text border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phone">
              الهاتف
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full arabic-text p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              className="w-full arabic-text p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="message">
              الرسالة
            </label>
            <textarea
              id="message"
              className="w-full arabic-text p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 arabic-text text-white px-4 py-2 rounded"
          >
            إرسال
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 p-4">
              <iframe
                  id="map-section"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.674493100803!2d39.664767999999995!3d24.462076200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd95049bcfd3d3%3A0x317a64510e6ac942!2z2LTYsdmD2Kkg2KfZhNmF2K_ZitmG2Kkg2YTZhNiy2KzYp9is!5e0!3m2!1sen!2seg!4v1730770066904!5m2!1sen!2seg"
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
