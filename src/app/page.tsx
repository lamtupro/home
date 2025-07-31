
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Trang Phim Sex Top 1 | Tổng Hợp Phim Sex Hay Nhất – Tên miền chính thức quoclamtu',
  description: 'Mang cả thế giới sex về giướng của bạn với tổng hợp phim sex chất lượng cao, cập nhật phim mới mỗi ngày. Không Che, Vietsub, Âu Mỹ, Hàn Quốc, Nhật Bản đầy đủ – xem nhanh, không quảng cáo tại quoclamtu .',
};


export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/bg-home.webp')] flex items-center justify-center p-4">
      
      <div className="text-center text-white max-w-2xl space-y-6">
        <h1 className="text-lg md:text-4xl font-bold flex text-amber-500 gap-2"><img src='/Asset 20.png' className="w-10 h-10 items-baseline"/> Quốc Lâm Tự - Xem Phim Sex Online Chất Lượng Cao</h1>
        <p className="text-base md:text-lg text-gray-300">
          Chào mừng bạn đến với <strong>Quốc Lâm Tự</strong> – nền tảng xem phim sex trực tuyến miễn phí với chất lượng cao,
          tốc độ tải nhanh và không quảng cáo gây phiền. Thưởng thức hàng nghìn bộ phim sex vietsub, không che, gái xinh,... và các tập phim đang hot hiện nay cập nhật mỗi ngày!
        </p>
        <h2 className="text-lg text-gray-300">
          Link web xem phim full HD hiện tại là:<p className="text-amber-300"><a href="https://quoclamtu.live" target="_blank" rel="noopener noreferrer">quoclamtu.live</a></p> Quý khách hàng lưu lại thông tin tại:<p className="text-amber-300"><a href="/">quoclamtu.tv</a></p> khi có thay đổi đường link sẽ thông báo ở web <span className="text-amber-300">quoclamtu.tv(đường link không bao giờ chị chặn của quốc lâm tự)</span>
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center">
          <a href="https://quoclamtu.live" target="_blank" rel="noopener noreferrer"> <button className="color-animate text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition">
            🎥 Xem ngay
          </button>
          </a>
          <a href="https://t.me/+k3K6K2f5vAoyOGVl" target="_blank" rel="noopener noreferrer"><button className="flex items-center gap-2 color-animate text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition">
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
