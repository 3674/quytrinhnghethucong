import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  RotateCcw, 
  AlertTriangle, 
  ShieldCheck, 
  ExternalLink, 
  Bot, 
  User, 
  HelpCircle,
  CheckCircle,
  FileText
} from 'lucide-react';
import { ActiveScreen } from '../types';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
  isError?: boolean;
}

interface AIAssistantScreenProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export const AIAssistantScreen: React.FC<AIAssistantScreenProps> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      content: `Xin chào! Tôi là Trợ lý AI nghiên cứu di sản **"Quy Trình Nghề Thủ Công Từng Bước"**.

Tôi được lập trình để trả lời các câu hỏi về **Nghề làm tranh dân gian Đông Hồ** hoàn toàn dựa trên dữ liệu đã được xác minh trong kho tư liệu của ứng dụng.

**Cam kết xác thực:**
- Chỉ sử dụng dữ liệu từ Hồ sơ UNESCO 01737, Quyết định 5079 của Bộ VHTT&DL và các hồ sơ khoa học đã công bố.
- Mọi câu trả lời đều dẫn chứng tên bản ghi và nguồn tư liệu đi kèm URL.
- Nếu câu hỏi nằm ngoài phạm vi dữ liệu đã xác minh, tôi sẽ thông báo trung thực: *"Hiện chưa có đủ tư liệu được xác minh để trả lời câu hỏi này."*

Bạn có thể chọn các câu hỏi gợi ý bên dưới hoặc nhập câu hỏi cụ thể của mình.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputQuestion, setInputQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastFailedQuestion, setLastFailedQuestion] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const suggestedQuestions = [
    'Nghề làm tranh dân gian Đông Hồ có những công đoạn nào?',
    'Nguyên liệu làm giấy điệp gồm những gì và được chế tác như thế nào?',
    'Tay xoa xơ mướp được sử dụng trong công đoạn nào và có vai trò gì?',
    'Nguồn tư liệu nào cung cấp thông tin về quy trình khắc ván gỗ thị?',
    'Những thông tin nào về nghề đã được xác minh theo hồ sơ UNESCO?',
    'Nghề làm gốm Bát Tràng có quy trình như thế nào?' // Test fallback outside scope
  ];

  const handleSendMessage = async (questionText: string) => {
    const text = questionText.trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuestion('');
    setIsLoading(true);
    setLastFailedQuestion(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Lỗi kết nối máy chủ.');
      }

      const assistantMsg: Message = {
        id: 'bot-' + Date.now(),
        sender: 'assistant',
        content: data.reply || 'Hiện chưa có đủ tư liệu được xác minh để trả lời câu hỏi này.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error('Lỗi hỏi trợ lý:', err);
      setLastFailedQuestion(text);
      const errorMsg: Message = {
        id: 'err-' + Date.now(),
        sender: 'assistant',
        content: err.message || 'Đã xảy ra lỗi khi kết nối với máy chủ AI. Vui lòng kiểm tra lại cấu hình API key trong Secrets hoặc thử lại.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastFailedQuestion) {
      handleSendMessage(lastFailedQuestion);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        content: 'Lịch sử trao đổi đã được làm mới. Mời bạn đặt câu hỏi về quy trình, nguyên liệu, công cụ hoặc hồ sơ nghề làm tranh dân gian Đông Hồ.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setLastFailedQuestion(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="border-b border-[#E3DACB] pb-5 space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>TRỢ LÝ AI NGHIÊN CỨU DI SẢN (MÔ HÌNH GEMINI PHÍA MÁY CHỦ)</span>
        </div>
        <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-[#2C241E]">
          Trợ lý AI tìm hiểu nghề tranh Đông Hồ
        </h1>
        <p className="text-xs sm:text-sm text-[#5A4E45]">
          Được thiết lập với nguyên tắc phòng ngừa thông tin sai lệch: Gemini chỉ đối chiếu và trả lời theo kho dữ liệu 18 bản ghi di sản, 6 công đoạn và 7 nguồn tư liệu chính thức. Khóa API được bảo vệ an toàn phía máy chủ.
        </p>
      </div>

      {/* Strict Guidelines Banner */}
      <div className="bg-[#FAF7EE] p-4 rounded-xl border border-[#D9CEBF] text-xs space-y-2">
        <div className="flex items-center gap-2 text-[#8B5A2B] font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Nguyên tắc vận hành có kiểm chứng của Trợ lý AI:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#5A4E45]">
          <div className="flex items-start gap-1.5">
            <span className="text-emerald-700 font-bold">✓</span>
            <span>Chỉ trả lời dựa trên dữ liệu đã xác minh trong kho dữ liệu ứng dụng.</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-emerald-700 font-bold">✓</span>
            <span>Mỗi câu trả lời bắt buộc dẫn chứng mã bản ghi và URL nguồn tư liệu.</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-emerald-700 font-bold">✓</span>
            <span>Nếu dữ liệu không có, trả lời: "Hiện chưa có đủ tư liệu được xác minh...".</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-emerald-700 font-bold">✓</span>
            <span>Không tự suy đoán niên đại, nghệ nhân, kỹ thuật hoặc truyền thuyết.</span>
          </div>
        </div>
      </div>

      {/* Chat Area Container */}
      <div className="bg-white rounded-2xl border-2 border-[#E3DACB] shadow-md flex flex-col h-[600px] overflow-hidden">
        
        {/* Chat top toolbar */}
        <div className="px-5 py-3 bg-[#F2EDE2] border-b border-[#E3DACB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-semibold text-[#2C241E]">
              Gemini 3.8 Flash • Server-Side Grounding
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('repository')}
              className="text-xs text-[#8B5A2B] hover:underline font-medium"
            >
              Đối chiếu kho dữ liệu
            </button>
            <span className="text-[#D9CEBF]">|</span>
            <button
              onClick={handleClearHistory}
              className="inline-flex items-center gap-1 text-xs text-[#7A6E65] hover:text-[#2C241E] p-1 rounded"
              title="Làm mới cuộc trò chuyện"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Làm mới</span>
            </button>
          </div>
        </div>

        {/* Message history */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-5 bg-[#FAF7EE]/50">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div 
                key={msg.id} 
                className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {/* Avatar */}
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white ${
                    isUser ? 'bg-[#2C241E]' : msg.isError ? 'bg-[#C0392B]' : 'bg-[#C0392B]'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Bubble */}
                <div 
                  className={`rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    isUser
                      ? 'bg-[#2C241E] text-white rounded-tr-none'
                      : msg.isError
                      ? 'bg-red-50 text-red-900 border border-red-200 rounded-tl-none'
                      : 'bg-white text-[#2C241E] border border-[#E3DACB] rounded-tl-none'
                  }`}
                >
                  <div className="whitespace-pre-line space-y-2">
                    {msg.content}
                  </div>
                  <div 
                    className={`text-[10px] mt-2 pt-1 flex items-center justify-between border-t ${
                      isUser ? 'border-white/20 text-white/70' : 'border-[#F2EDE2] text-[#8C7E72]'
                    }`}
                  >
                    <span>{isUser ? 'Người dùng tra cứu' : 'Trợ lý Quy Trình Nghề'}</span>
                    <span>{msg.timestamp}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex gap-3 max-w-md mr-auto">
              <div className="w-8 h-8 rounded-full bg-[#C0392B] flex items-center justify-center text-white shrink-0">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="bg-white border border-[#E3DACB] rounded-2xl rounded-tl-none p-4 shadow-sm text-xs text-[#5A4E45] space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
                  <span className="font-semibold text-[#2C241E]">
                    Đang đối chiếu kho dữ liệu và thẩm định nguồn...
                  </span>
                </div>
                <p className="text-[11px] text-[#7A6E65]">
                  Kiểm tra tính xác thực qua hồ sơ UNESCO 01737 và tư liệu di sản.
                </p>
              </div>
            </div>
          )}

          {/* Retry prompt if last call failed */}
          {lastFailedQuestion && !isLoading && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-50 border border-amber-300 text-xs text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="flex-1">Gặp sự cố khi gọi mô hình phía máy chủ.</span>
              <button
                onClick={handleRetry}
                className="px-3 py-1 rounded bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
              >
                Thử lại câu hỏi
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested questions carousel */}
        <div className="px-4 py-2.5 bg-[#F5EFE3] border-t border-[#E3DACB] overflow-x-auto">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#8B5A2B] shrink-0 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Gợi ý câu hỏi:</span>
            </span>
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                disabled={isLoading}
                onClick={() => handleSendMessage(q)}
                className="text-xs px-2.5 py-1 rounded-full bg-white text-[#4A3E35] border border-[#D9CEBF] hover:border-[#C0392B] hover:text-[#C0392B] whitespace-nowrap transition-colors disabled:opacity-50"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Question input bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-[#E3DACB]">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputQuestion);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuestion}
              onChange={(e) => setInputQuestion(e.target.value)}
              placeholder="Nhập câu hỏi về tranh Đông Hồ (nguyên liệu, công đoạn, ván mộc, nguồn tư liệu...)"
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 rounded-lg bg-[#FAF7EE] border border-[#D9CEBF] text-xs sm:text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#C0392B]/30 focus:border-[#C0392B] disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputQuestion.trim()}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#C0392B] text-white text-xs sm:text-sm font-semibold hover:bg-[#A93226] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm shrink-0"
            >
              <span>Gửi hỏi</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
