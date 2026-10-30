import React, { useState } from 'react';
import { 
  Home, 
  Workflow, 
  Layers, 
  Database, 
  Sparkles, 
  BookOpen, 
  Info, 
  Menu, 
  X,
  Scroll
} from 'lucide-react';
import { ActiveScreen } from '../types';

interface NavbarProps {
  activeScreen: ActiveScreen;
  onNavigate: (screen: ActiveScreen) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeScreen, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveScreen; label: string; icon: React.ReactNode; shortLabel: string }[] = [
    { id: 'home', label: 'Trang chủ', icon: <Home className="w-4 h-4" />, shortLabel: 'Trang chủ' },
    { id: 'process', label: 'Quy trình từng bước', icon: <Workflow className="w-4 h-4" />, shortLabel: 'Quy trình' },
    { id: 'library', label: 'Nguyên liệu & Công cụ', icon: <Layers className="w-4 h-4" />, shortLabel: 'Thư viện' },
    { id: 'repository', label: 'Kho dữ liệu di sản', icon: <Database className="w-4 h-4" />, shortLabel: 'Kho dữ liệu' },
    { id: 'ai-assistant', label: 'Trợ lý AI di sản', icon: <Sparkles className="w-4 h-4 text-amber-500" />, shortLabel: 'Trợ lý AI' },
    { id: 'sources', label: 'Nguồn tư liệu (7)', icon: <BookOpen className="w-4 h-4" />, shortLabel: 'Nguồn tư liệu' },
    { id: 'about', label: 'Giới thiệu dự án', icon: <Info className="w-4 h-4" />, shortLabel: 'Giới thiệu' },
  ];

  const handleSelectScreen = (screen: ActiveScreen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7EE]/95 backdrop-blur-md border-b border-[#E6DFD3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleSelectScreen('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#C0392B] flex items-center justify-center text-[#FAF7EE] shadow-sm shadow-[#C0392B]/20 group-hover:scale-105 transition-transform border border-[#962D22]">
              <Scroll className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-['Playfair_Display',serif] font-bold text-base sm:text-lg text-[#2C241E] tracking-tight group-hover:text-[#C0392B] transition-colors">
                  Quy Trình Nghề Thủ Công Từng Bước
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#8B5A2B]/10 text-[#8B5A2B] border border-[#8B5A2B]/20">
                  Đông Hồ
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#7A6E65] font-normal hidden sm:block">
                Số hóa nghề thủ công truyền thống • Dự án phi lợi nhuận
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectScreen(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#2C241E] text-[#FAF7EE] shadow-sm'
                      : 'text-[#5A4E45] hover:text-[#2C241E] hover:bg-[#EFE9DD]'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right badge & mobile menu toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-[11px] font-semibold text-[#C0392B] uppercase tracking-wider">
                Đợt 15 • Nhóm 1
              </span>
              <span className="text-[10px] text-[#8C7E72]">
                IMTA TECH × FPT Poly
              </span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#2C241E] hover:bg-[#EFE9DD] transition-colors"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E6DFD3] bg-[#FAF7EE] px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="pb-2 mb-2 border-b border-[#E6DFD3]">
            <p className="text-xs font-semibold text-[#8B5A2B]">ĐIỀU HƯỚNG CÁC MÀN HÌNH CHÍNH</p>
            <p className="text-[11px] text-[#7A6E65]">Chọn màn hình bạn muốn khám phá:</p>
          </div>
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectScreen(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#2C241E] text-[#FAF7EE]'
                    : 'text-[#2C241E] hover:bg-[#EFE9DD]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="text-xs font-bold text-amber-300">Đang xem</span>}
              </button>
            );
          })}
          <div className="pt-3 mt-3 border-t border-[#E6DFD3] text-xs text-[#7A6E65]">
            <p className="font-medium text-[#2C241E]">Dự án Thực tập sinh IMTA TECH × FPT Polytechnic</p>
            <p className="text-[11px] mt-0.5">Sinh viên: Trần Quang Đức (PH58855) • Phi lợi nhuận</p>
          </div>
        </div>
      )}
    </header>
  );
};
