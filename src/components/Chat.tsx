import { MessageSquareMore } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "user" | "assistant"; text: string }[]
  >([
    {
      sender: "assistant",
      text: "Hi! I am SoftSell Assistant 🤖. Ask me anything related to licenses, payments, or our services!",
    },
  ]);

  const exampleQuestions = [
    "How do I sell my license?",
    "How long does payment take?",
    "What licenses do you accept?",
  ];

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSend = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text },
      {
        sender: "assistant",
        text: `Thank you for your query: "${text}". Our team is reviewing your request and will guide you shortly. If this is urgent, please visit our Help Center or contact customer support.`,
      },
    ]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white border rounded-lg shadow-md w-72 p-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-bold">Chat with us</h4>
            <button onClick={() => setIsOpen(false)} className="cursor-pointer">
              ✖️
            </button>
          </div>
          <div className="h-48 overflow-y-auto border p-2 mb-2 bg-gray-50 text-sm space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white self-end ml-auto"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex flex-wrap gap-1">
            {exampleQuestions.map((q, i) => (
              <button
                key={i}
                className="text-xs bg-blue-600 text-white px-2 py-1 rounded cursor-pointer"
                onClick={() => handleSend(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquareMore />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
