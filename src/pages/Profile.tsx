import { Link } from 'react-router-dom';
import { CircleUser, Ticket, CalendarCheck, Settings, Bell, ChevronRight, LogOut } from 'lucide-react';

export default function Profile() {
  // Mock login state for demonstration
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F5F8FC] flex flex-col items-center justify-center px-4">
        <CircleUser className="w-20 h-20 text-[#CBD5E1] mb-6" />
        <h2 className="text-2xl font-display font-bold text-[#0B1220] mb-2 uppercase tracking-tight">Welcome to Yantrika</h2>
        <p className="text-[#64748B] text-center mb-8 font-medium">Log in to manage your event registrations, access your passes, and receive updates.</p>
        
        <div className="w-full max-w-sm flex flex-col gap-3">
          <button className="w-full bg-[#087BFF] text-white font-semibold py-4 rounded-[12px] shadow-sm">
            LOGIN
          </button>
          <button className="w-full bg-white text-[#0B1220] border border-[#E2E8F0] font-semibold py-4 rounded-[12px] shadow-sm">
            REGISTER
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F8FC] pb-10">
      {/* Profile Header */}
      <div className="bg-white border-b border-[#E2E8F0] pt-12 pb-8 px-4 rounded-b-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-gradient-to-br from-[#087BFF] to-[#00C8FF] rounded-full p-1 shadow-md">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-2xl font-display font-bold text-[#0B1220]">AP</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-[#0B1220]">Arjun Patnaik</h1>
            <p className="text-sm font-semibold text-[#64748B] uppercase tracking-widest mt-1 bg-[#F5F8FC] inline-block px-2 py-1 rounded-md border border-[#E2E8F0]">
              ID: YAN-2026-8942
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white p-4 rounded-[16px] border border-[#E2E8F0] flex flex-col hover:border-[#087BFF] transition-colors cursor-pointer shadow-sm">
            <Ticket className="w-6 h-6 text-[#087BFF] mb-3" />
            <span className="text-2xl font-bold text-[#0B1220] mb-1">3</span>
            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">My Registrations</span>
          </div>
          <div className="bg-white p-4 rounded-[16px] border border-[#E2E8F0] flex flex-col hover:border-[#087BFF] transition-colors cursor-pointer shadow-sm">
            <CalendarCheck className="w-6 h-6 text-[#7C3AED] mb-3" />
            <span className="text-2xl font-bold text-[#0B1220] mb-1">Pass</span>
            <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Event Access</span>
          </div>
        </div>

        {/* Menu List */}
        <div className="bg-white rounded-[20px] border border-[#E2E8F0] shadow-sm overflow-hidden mb-6">
          <Link to="/profile/events" className="flex items-center justify-between p-4 border-b border-[#E2E8F0] hover:bg-[#F5F8FC]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#087BFF]/10 rounded-full flex items-center justify-center text-[#087BFF]">
                <Ticket className="w-5 h-5" />
              </div>
              <span className="font-bold text-[#0B1220] text-sm">My Events</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#CBD5E1]" />
          </Link>
          <Link to="/profile/notifications" className="flex items-center justify-between p-4 border-b border-[#E2E8F0] hover:bg-[#F5F8FC]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#7C3AED]/10 rounded-full flex items-center justify-center text-[#7C3AED] relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </div>
              <span className="font-bold text-[#0B1220] text-sm">Notifications</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#CBD5E1]" />
          </Link>
          <Link to="/profile/settings" className="flex items-center justify-between p-4 hover:bg-[#F5F8FC]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#64748B]/10 rounded-full flex items-center justify-center text-[#64748B]">
                <Settings className="w-5 h-5" />
              </div>
              <span className="font-bold text-[#0B1220] text-sm">Profile Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#CBD5E1]" />
          </Link>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-4 text-[#64748B] font-bold text-sm bg-white border border-[#E2E8F0] rounded-[16px] shadow-sm hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors">
          <LogOut className="w-4 h-4" /> SIGN OUT
        </button>
      </div>
    </div>
  );
}
