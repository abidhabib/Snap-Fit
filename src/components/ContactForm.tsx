"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<FormData>({
    mode: 'onBlur'
  });

  const watchedFields = watch();

  useEffect(() => {
    setIsClient(true);
    
    const handleFocusIn = (e: FocusEvent) => {
      if (e.target instanceof HTMLElement && e.target.id) {
        setFocusedField(e.target.id);
      }
    };

    const handleFocusOut = () => {
      setFocusedField(null);
    };

    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  const isFieldActive = (fieldName: keyof FormData) => {
    if (!isClient) return false;
    return !!watchedFields[fieldName] || focusedField === fieldName;
  };

  const hasError = (fieldName: keyof FormData) => {
    return !!errors[fieldName];
  };

  const getFieldClasses = (fieldName: keyof FormData) => {
    const baseClasses = "w-full px-0 py-3 bg-transparent border-0 border-b-2 transition-colors focus:outline-none focus:ring-0 placeholder-transparent";
    
    if (hasError(fieldName)) {
      return `${baseClasses} border-red-500 focus:border-red-500`;
    }
    if (isFieldActive(fieldName)) {
      return `${baseClasses} border-lime-500 focus:border-lime-500`;
    }
    return `${baseClasses} border-gray-300 focus:border-lime-500`;
  };

  const getLabelClasses = (fieldName: keyof FormData) => {
    const baseClasses = "absolute left-0 transition-all duration-200 pointer-events-none";
    const positionClasses = isFieldActive(fieldName) ? "-top-6 text-sm" : "top-3 text-base";
    
    if (hasError(fieldName)) {
      return `${baseClasses} ${positionClasses} text-red-500`;
    }
    if (isFieldActive(fieldName)) {
      return `${baseClasses} ${positionClasses} text-lime-600`;
    }
    return `${baseClasses} ${positionClasses} text-gray-500`;
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data:', data);
      
      reset();
      setSubmitStatus('success');
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to take your project to the next level? {"We'd"} love to hear from you. 
            Send us a message and {"we'll"} respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">hello@yourcompany.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-lime-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-lime-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Office</p>
                    <p className="text-gray-600">123 Business Ave<br />Suite 100, City, ST 12345</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-2">
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={getFieldClasses('name')}
                      placeholder="Name"
                      id="name"
                    />
                    <label 
                      htmlFor="name" 
                      className={getLabelClasses('name')}
                    >
                      Name *
                    </label>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className={getFieldClasses('email')}
                      placeholder="Email address"
                      id="email"
                    />
                    <label 
                      htmlFor="email" 
                      className={getLabelClasses('email')}
                    >
                      Email address *
                    </label>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company Field */}
                  <div className="relative">
                    <input
                      type="text"
                      {...register('company')}
                      className={getFieldClasses('company')}
                      placeholder="Company"
                      id="company"
                    />
                    <label 
                      htmlFor="company" 
                      className={getLabelClasses('company')}
                    >
                      Company
                    </label>
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <input
                      type="tel"
                      {...register('phone', {
                        pattern: {
                          value: /^[\+]?[1-9][\d]{0,15}$/,
                          message: 'Please enter a valid phone number'
                        }
                      })}
                      className={getFieldClasses('phone')}
                      placeholder="Phone"
                      id="phone"
                    />
                    <label 
                      htmlFor="phone" 
                      className={getLabelClasses('phone')}
                    >
                      Phone
                    </label>
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <input
                    type="text"
                    {...register('subject', { 
                      required: 'Subject is required',
                      minLength: { value: 5, message: 'Subject must be at least 5 characters' }
                    })}
                    className={getFieldClasses('subject')}
                    placeholder="Subject"
                    id="subject"
                  />
                  <label 
                    htmlFor="subject" 
                    className={getLabelClasses('subject')}
                  >
                    Subject *
                  </label>
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    rows={5}
                    className={getFieldClasses('message')}
                    placeholder="Message"
                    id="message"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className={getLabelClasses('message')}
                  >
                    Message *
                  </label>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-lime-50 border-l-4 border-lime-500 rounded-lg p-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-lime-600 mr-3" />
                      <p className="text-lime-800 font-medium">
                        Thank you! Your message has been sent successfully. {"We'll"} get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                      <p className="text-red-800 font-medium">
                        Sorry, there was an error sending your message. Please try again.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4 w-full flex justify-center items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" w-1/3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-900 disabled:from-lime-300 disabled:to-lime-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;