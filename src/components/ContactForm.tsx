"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent";
  const textareaClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none";

  return (
    <div className="min-h-screen py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-3 md:mb-4 bg-gradient-to-r from-slate-600 to-lime-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto px-4 inline-block bg-lime-100 text-lime-800 px-4 py-1 rounded-full text-sm">
            Ready to take your project to the next level? We love to hear from you.
          </p>
        </div>

        {/* Main Wrapper */}
        <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-lg">
          {/* Updated grid: image = 40%, form = 60% on large screens */}
          <div className="grid lg:grid-cols-[40%_1fr] gap-0">
            {/* --- Left Image Section (Reduced Width) --- */}
            <div className="hidden lg:block relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-l-xl overflow-hidden">
              <div className="absolute -inset-20 rotate-20">
                <Image
                  src="/images/cothesModel.png"
                  alt="Fashion Collage"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Soft overlay gradient to blend into form side */}
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/70 to-transparent"></div>
            </div>

            {/* --- Contact Form Section --- */}
            <div className="w-full p-8 lg:p-10 bg-white">
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>

                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                    className={inputClasses}
                  />
                </div>

                {/* Phone & Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    placeholder="Phone (Optional)"
                    {...register("phone")}
                    className={inputClasses}
                  />
                  <input
                    type="text"
                    placeholder="Company name (Optional)"
                    {...register("company")}
                    className={inputClasses}
                  />
                </div>

                {/* Message */}
                <textarea
                  placeholder="Please type your message here..."
                  rows={5}
                  {...register("message", { required: true })}
                  className={textareaClasses}
                />

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <SendHorizonal className="w-4 h-4 ml-3" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;