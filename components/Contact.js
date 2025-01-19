const Contact = () => {
    return (
      <section id="contact" className="container mx-auto my-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>
        <form className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Message</label>
            <textarea className="w-full border border-gray-300 rounded-md p-2"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold">
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  