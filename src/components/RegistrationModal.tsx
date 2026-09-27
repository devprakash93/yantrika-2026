import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import type { EventData } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface RegistrationModalProps {
  event: EventData;
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ event, isOpen, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    studentId: '',
    whatsapp: '',
    teamName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Show summary
  };

  const confirmRegistration = () => {
    setStep(3); // Show success
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/60 backdrop-blur-sm p-4 md:p-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-background rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b bg-muted/30">
            <div>
              <h3 className="text-xl font-display font-bold">Register for {event.name}</h3>
              <p className="text-sm text-muted-foreground">{event.category} • {event.fee}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto">
            {step === 1 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="+91 9876543210" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">WhatsApp Number</label>
                    <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="+91 9876543210" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">College / University</label>
                    <input required type="text" name="college" value={formData.college} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="DRIEMS University" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Department</label>
                    <input required type="text" name="department" value={formData.department} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="Computer Science" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Year of Study</label>
                    <select required name="year" value={formData.year} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-transparent">
                      <option value="">Select Year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Student ID / Roll No</label>
                    <input required type="text" name="studentId" value={formData.studentId} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="CSE26XXX" />
                  </div>
                  
                  {event.participants.toLowerCase().includes('team') || event.participants.includes('–') ? (
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium">Team Name</label>
                      <input required type="text" name="teamName" value={formData.teamName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" placeholder="The Innovators" />
                    </div>
                  ) : null}
                </div>

                <div className="pt-4 border-t flex justify-end gap-3">
                  <button type="button" onClick={onClose} className="px-4 py-2 rounded-md font-medium hover:bg-muted transition-colors">Cancel</button>
                  <button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">Continue to Summary</button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold mb-4 border-b pb-2">Registration Summary</h4>
                  <div className="grid grid-cols-2 gap-y-3 text-sm">
                    <div className="text-muted-foreground">Event:</div>
                    <div className="font-medium">{event.name}</div>
                    
                    <div className="text-muted-foreground">Category:</div>
                    <div className="font-medium">{event.category}</div>
                    
                    <div className="text-muted-foreground">Participant:</div>
                    <div className="font-medium">{formData.name}</div>
                    
                    <div className="text-muted-foreground">Institution:</div>
                    <div className="font-medium">{formData.college}</div>
                    
                    {formData.teamName && (
                      <>
                        <div className="text-muted-foreground">Team Name:</div>
                        <div className="font-medium">{formData.teamName}</div>
                      </>
                    )}
                    
                    <div className="text-muted-foreground mt-2 pt-2 border-t">Registration Fee:</div>
                    <div className="font-bold text-primary mt-2 pt-2 border-t">{event.fee}</div>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  By confirming, you agree to the rules and guidelines of YANTRIKA 2026.
                </p>

                <div className="pt-4 border-t flex justify-end gap-3">
                  <button type="button" onClick={() => setStep(1)} className="px-4 py-2 rounded-md font-medium hover:bg-muted transition-colors">Back to Edit</button>
                  <button type="button" onClick={confirmRegistration} className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">Confirm & Submit</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display">Registration Successful!</h3>
                <p className="text-muted-foreground max-w-md">
                  You have successfully registered for {event.name}. Your registration ID is <span className="font-bold text-foreground">YNT-{Math.floor(100000 + Math.random() * 900000)}</span>.
                </p>
                <div className="pt-8 w-full max-w-xs">
                  <button onClick={onClose} className="w-full px-6 py-3 border border-input bg-background rounded-md font-medium hover:bg-accent transition-colors">Download Confirmation</button>
                  <button onClick={onClose} className="w-full px-6 py-3 mt-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">Return to Event</button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
