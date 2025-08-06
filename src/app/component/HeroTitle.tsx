import React from 'react'

const HeroTitle = () => {
    return (
        <div className="bg-[#232324] rounded-xl shadow-lg p-4 flex justify-center">
  <div className="w-full bg-[#232324] p-4">
    {/* Logo + tiêu đề */}
    <div className="flex items-center justify-center mb-4">
      <img src="/Asset 16.png" alt="Logo" className="w-20 h-16 object-contain" />
    </div>

    {/* Tiêu đề */}
    <h2 className="text-white text-center text-xl font-semibold mb-4">
      Tên miền hiện tại của Quốc Lâm Tự <span className="ml-1">👇</span>
    </h2>

    {/* Ô chứa link + nút */}
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-full overflow-hidden">
      <input
        type="text"
        value="https://quoclamtu.live"
        readOnly
        className="flex-1 px-4 py-3 text-black font-mono text-sm sm:text-base outline-none"
      />
      <a
        href="https://quoclamtu.live"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-500 text-white text-center font-semibold py-3 px-6 rounded-full sm:rounded-none sm:rounded-r-full shadow-lg hover:scale-105 transition-all"
      >
        Truy Cập
      </a>
    </div>
  </div>
</div>

    )
}

export default HeroTitle