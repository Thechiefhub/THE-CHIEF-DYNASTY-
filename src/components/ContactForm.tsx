import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { ContactInquiry } from '../types';

export default function ContactForm() {
  const defaultFormState: ContactInquiry = {
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    organization: '',
    subject: '',
    serviceInterest: '',
    message: ''
  };

  const [formData, setFormData] = useState<ContactInquiry>(defaultFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInquiry, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const servicesList = [
    { label: 'General Enquiry', value: 'General Enquiry' },
    { label: 'Educational Services', value: 'Educational Services' },
    { label: 'PR & Media', value: 'PR & Media' },
    { label: 'Business Consulting', value: 'Business Consulting' },
    { label: 'Project & Event Management', value: 'Project & Event Management' },
    { label: 'Digital Services', value: 'Digital Services' },
    { label: 'The Elite Conference', value: 'The Elite Conference' },
    { label: 'The Chief Hub', value: 'The Chief Hub' },
    { label: 'THE AFRICAINC', value: 'THE AFRICAINC' },
    { label: 'Partnership', value: 'Partnership' },
    { label: 'Sponsorship', value: 'Sponsorship' },
    { label: 'Speaking / Collaboration', value: 'Speaking / Collaboration' },
    { label: 'Other', value: 'Other' }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof ContactInquiry]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const tempErrors: Partial<Record<keyof ContactInquiry, string>> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full Name is required.';
    
    if (!formData.emailAddress.trim()) {
      tempErrors.emailAddress = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      tempErrors.emailAddress = 'Please enter a valid email address.';
    }

    if (!formData.serviceInterest) tempErrors.serviceInterest = 'Please select an area of interest.';
    if (!formData.message.trim()) tempErrors.message = 'Please provide a detailed inquiry message.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate elite secure backend submission (can later be wired to Firebase or Sheets as requested)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData(defaultFormState);
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-purple-950/10 border border-purple-900/40 p-8 text-center flex flex-col items-center justify-center min-h-[400px] animate-fade-in rounded-lg">
        <div className="w-16 h-16 bg-purple-900/30 border border-purple-500/40 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-[#8B5CF6]" />
        </div>
        <h3 className="text-2xl font-black font-display text-white tracking-wide mb-3">
          INQUIRY TRANSMITTED
        </h3>
        <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-md mb-8">
          Thank you for starting the conversation with The Chief Dynasty. Our corporate communications team has received your request and will contact you within 24 business hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="px-6 py-3 bg-neutral-900 border border-neutral-800 hover:border-purple-800 text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-300 active:scale-[0.98] cursor-pointer"
        >
          SUBMIT ANOTHER ENQUIRY
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-950/30 border border-red-900/50 rounded flex items-center gap-3 text-red-400 text-xs font-semibold">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>An unexpected transmission error occurred. Please try again.</span>
        </div>
      )}

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="e.g. Tolulope Chief"
            className={`w-full bg-[#0D0D0F] border text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-[#8B5CF6] transition-colors placeholder-neutral-700 ${
              errors.fullName ? 'border-red-900' : 'border-neutral-800'
            }`}
          />
          {errors.fullName && (
            <span className="text-[10px] font-bold tracking-wide text-red-500 mt-1 block">
              {errors.fullName}
            </span>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="emailAddress" className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
            Email Address *
          </label>
          <input
            id="emailAddress"
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="e.g. client@domain.com"
            className={`w-full bg-[#0D0D0F] border text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-[#8B5CF6] transition-colors placeholder-neutral-700 ${
              errors.emailAddress ? 'border-red-900' : 'border-neutral-800'
            }`}
          />
          {errors.emailAddress && (
            <span className="text-[10px] font-bold tracking-wide text-red-500 mt-1 block">
              {errors.emailAddress}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="e.g. +234..."
            className="w-full bg-[#0D0D0F] border border-neutral-800 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-[#8B5CF6] transition-colors placeholder-neutral-700"
          />
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
            Organization / Institution
          </label>
          <input
            id="organization"
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            placeholder="e.g. Enterprise Ltd"
            className="w-full bg-[#0D0D0F] border border-neutral-800 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-[#8B5CF6] transition-colors placeholder-neutral-700"
          />
        </div>
      </div>

      {/* Dropdown - Area of Interest */}
      <div>
        <label htmlFor="serviceInterest" className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
          Service / Area of Interest *
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleInputChange}
          className={`w-full bg-[#0D0D0F] border text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-[#8B5CF6] transition-colors ${
            errors.serviceInterest ? 'border-red-900' : 'border-neutral-800'
          }`}
        >
          <option value="">Select your objective...</option>
          {servicesList.map((srv) => (
            <option key={srv.value} value={srv.value}>
              {srv.label}
            </option>
          ))}
        </select>
        {errors.serviceInterest && (
          <span className="text-[10px] font-bold tracking-wide text-red-500 mt-1 block">
            {errors.serviceInterest}
          </span>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
          Subject Line
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="e.g. Strategic Partnership Proposal"
          className="w-full bg-[#0D0D0F] border border-neutral-800 text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-[#8B5CF6] transition-colors placeholder-neutral-700"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase mb-2">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Provide contextual details about your timeline, project scope, or partnership parameters..."
          className={`w-full bg-[#0D0D0F] border text-white text-sm px-4 py-3.5 rounded focus:outline-none focus:border-[#8B5CF6] transition-colors placeholder-neutral-700 ${
            errors.message ? 'border-red-900' : 'border-neutral-800'
          }`}
        ></textarea>
        {errors.message && (
          <span className="text-[10px] font-bold tracking-wide text-red-500 mt-1 block">
            {errors.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white text-xs font-bold tracking-widest uppercase py-4 rounded shadow-lg transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>TRANSMITTING INQUIRY...</span>
          </>
        ) : (
          <>
            <span>SEND ENQUIRY</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
