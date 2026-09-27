import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Megaphone, Calendar, Ticket } from 'lucide-react';
import { notifications } from '../data/notifications';
import { Link } from 'react-router-dom';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const typeIcon = {
  announcement: Megaphone,
  event: Ticket,
  schedule: Calendar,
  update: Bell,
};

const typeColor = {
  announcement: 'bg-[#087BFF]/10 text-[#087BFF]',
  event: 'bg-[#7C3AED]/10 text-[#7C3AED]',
  schedule: 'bg-emerald-50 text-emerald-600',
  update: 'bg-amber-50 text-amber-600',
};

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const newCount = notifications.filter((n) => n.isNew).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E2E8F0]">
              <div>
                <h2 className="text-lg font-display font-bold text-[#0B1220]">Notifications</h2>
                {newCount > 0 && (
                  <p className="text-xs text-[#087BFF] font-semibold mt-0.5">{newCount} new updates</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#F5F8FC] text-[#64748B] hover:text-[#0B1220] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto divide-y divide-[#E2E8F0]">
              {notifications.map((notif) => {
                const Icon = typeIcon[notif.type];
                return (
                  <div
                    key={notif.id}
                    className={`flex gap-4 px-6 py-5 transition-colors ${notif.isNew ? 'bg-[#F5F8FC]' : 'bg-white'}`}
                  >
                    <div className={`mt-0.5 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${typeColor[notif.type]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-bold text-[#0B1220] leading-snug">{notif.title}</p>
                        {notif.isNew && (
                          <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-[#087BFF]" />
                        )}
                      </div>
                      <p className="text-xs text-[#64748B] font-medium mt-1 leading-relaxed">{notif.body}</p>
                      <p className="text-[10px] font-semibold text-[#CBD5E1] uppercase tracking-wider mt-2">{notif.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#E2E8F0] pb-[env(safe-area-inset-bottom)]">
              <Link
                to="/events"
                onClick={onClose}
                className="block w-full text-center bg-[#087BFF] text-white rounded-[10px] py-3 text-sm font-bold hover:bg-[#0667D9] transition-colors"
              >
                VIEW ALL EVENTS
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
