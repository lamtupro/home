'use client';
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4">
      <style jsx>{`
        @keyframes colorCycle {
          0% {
            background-color: #22c55e; /* Xanh lá */
          }
          50% {
            background-color: #ef4444; /* Đỏ */
          }
          100% {
            background-color: #3b82f6; /* Xanh dương */
          }
        }

        .color-animate {
          animation: colorCycle 3s ease-in-out infinite;
        }
      `}</style>
      <div className="text-center text-white max-w-2xl space-y-6">
        <h1 className="text-lg md:text-4xl font-bold flex text-amber-500 gap-2"><img src='/Asset 20.png' className="w-10 h-10 items-baseline"/> Quốc Lâm Tự - Xem Phim Online Chất Lượng Cao</h1>
        <p className="text-base md:text-lg text-gray-300">
          Chào mừng bạn đến với <strong>Quốc Lâm Tự</strong> – nền tảng xem phim sex trực tuyến miễn phí với chất lượng cao,
          tốc độ tải nhanh và không quảng cáo gây phiền. Thưởng thức hàng nghìn bộ phim sex vietsub, không che, gái xinh,... và các tập phim đang hot hiện nay cập nhật mỗi ngày!
        </p>
        <p className="text-lg text-gray-300">
          Link web xem phim full HD hiện tại là:<h2 className="text-amber-300"><a href="https://quoclamtu.live" target="_blank" rel="noopener noreferrer">quoclamtu.live</a></h2> Quý khách hàng lưu lại thông tin tại:<h2 className="text-amber-300">quoclamtu.com</h2> khi có thay đổi đường link sẽ thông báo ở web <span className="text-amber-300">quoclamtu.com(đường link không bao giờ chị chặn của quốc lâm tự)</span>
        </p>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center">
          <a href="https://quoclamtu.live" target="_blank" rel="noopener noreferrer"> <button className="color-animate text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition">
            🎥 Xem ngay
          </button>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer"><button className="flex items-center gap-2 color-animate text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition">
            <img src="/icon-telegram.png" alt="Icon" className="w-5 h-5" />
            Link Nhóm Telegram
          </button></a>

        </div>
        <div className="pt-6 border-t border-gray-600">
          <h2 className="text-xl font-semibold mt-4">📌 Tính năng nổi bật</h2>
          <ul className="list-disc list-inside text-left text-gray-400">
            <li>Cập nhật phim mới mỗi ngày</li>
            <li>Xem phim Full HD, hỗ trợ phụ đề</li>
            <li>Giao diện thân thiện, tối ưu cho cả mobile và desktop</li>
            <li>Không cần đăng ký tài khoản</li>
          </ul>
        </div>
        {/* <footer className="text-sm text-gray-500 pt-8">
          Liên hệ: <a href="mailto:hotro@phimhub.vn" className="underline">hotro@phimhub.vn</a> | © 2025 PhimHub.vn
        </footer> */}
      </div>
    </main>
  );
}
