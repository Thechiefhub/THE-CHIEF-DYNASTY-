import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, RefreshCw, AlertTriangle } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Real-time email validation effect
  useEffect(() => {
    if (email.length === 0) {
      setError('');
      setIsValid(false);
      setIsValidating(false);
      return;
    }

    setIsValidating(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Quick validation delay to simulate premium validation loop
    const timer = setTimeout(() => {
      if (!emailRegex.test(email)) {
        setError('Please enter a correctly formatted email address (e.g. name@domain.com).');
        setIsValid(false);
      } else {
        setError('');
        setIsValid(true);
      }
      setIsValidating(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [email]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('An email address is required to join the community digest.');
      return;
    }

    if (!isValid) {
      setError('Please resolve formatting errors before transmitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API registration
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubscribed(true);
      setShowToast(true);
      setEmail('');
      
      // Toast dismissal after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    } catch (err) {
      setError('Unable to register at this moment. Please check connectivity.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-2 w-full relative">
      
      {/* Floating Success Toast Alert Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0D0D0F] border border-purple-500 p-4 rounded-lg shadow-[0_10px_40px_rgba(109,40,217,0.3)] animate-fade-in flex items-center gap-3 max-w-sm">
          <div className="w-8 h-8 rounded-full bg-purple-950/40 flex items-center justify-center text-purple-400">
            <CheckCircle className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-white tracking-wider uppercase font-display">TRANSMISSION SUCCESS</h5>
            <p className="text-[10px] text-neutral-400 font-light mt-0.5 leading-tight">
              You have successfully subscribed to the Chief Dynasty digest list.
            </p>
          </div>
        </div>
      )}

      {subscribed ? (
        <div className="p-4 bg-purple-950/20 border border-purple-900/30 rounded flex items-center gap-3 animate-fade-in">
          <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 animate-bounce" />
          <span className="text-xs text-neutral-300 font-light">
            <strong>Subscribed!</strong> Welcome to the strategic ecosystem community.
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="space-y-2.5 w-full" noValidate>
          <div className="flex flex-col sm:flex-row gap-2 relative">
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter corporate email"
                aria-label="Newsletter email address"
                className={`w-full bg-[#050505] border text-white text-xs px-4 py-3 rounded-lg focus:outline-none transition-colors placeholder-neutral-600 ${
                  email.length === 0
                    ? 'border-white/10 focus:border-[#8B5CF6]'
                    : isValid
                    ? 'border-emerald-500/50 focus:border-emerald-500'
                    : 'border-rose-500/50 focus:border-rose-500'
                }`}
              />
              {/* Live Status indicator icon */}
              {email.length > 0 && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                  {isValidating ? (
                    <RefreshCw className="w-3 h-3 text-neutral-500 animate-spin" />
                  ) : isValid ? (
                    <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/40">
                      VALID
                    </span>
                  ) : (
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  )}
                </div>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || (email.length > 0 && !isValid)}
              className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6D28D9] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
            >
              {isSubmitting ? (
                <RefreshCw className="w-3 h-3 animate-spin" />
              ) : (
                <>
                  <span>SUBSCRIBE</span>
                  <Send className="w-3 h-3" />
                </>
              )}
            </button>
          </div>

          {error && (
            <span className="text-[10px] font-semibold text-rose-400 block mt-1 animate-fade-in">
              {error}
            </span>
          )}
        </form>
      )}
    </div>
  );
}
