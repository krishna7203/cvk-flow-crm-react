
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Support Center</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">Our support team is available Monday through Friday, 9am to 5pm.</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea rows="4" className="w-full p-2 border rounded"></textarea>
                </div>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">How do I reset my password?</h3>
                  <p className="text-gray-600">You can reset your password by clicking on the "Forgot Password" link on the login page.</p>
                </div>
                <div>
                  <h3 className="font-medium">Can I upgrade my plan?</h3>
                  <p className="text-gray-600">Yes, you can upgrade your plan at any time from your account settings.</p>
                </div>
                <div>
                  <h3 className="font-medium">How do I cancel my subscription?</h3>
                  <p className="text-gray-600">You can cancel your subscription from the billing section in your account settings.</p>
                </div>
                <div>
                  <h3 className="font-medium">Is there a mobile app?</h3>
                  <p className="text-gray-600">We're currently developing mobile apps for iOS and Android. Stay tuned!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
