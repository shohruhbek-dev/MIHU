import React from "react";

export default function VirtualReception() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10 py-8">
      {/* Left Column */}
      <div className="flex flex-col items-center text-center p-4 rounded-lg shadow bg-white">
        <img
          src="https://via.placeholder.com/400x400.png?text=Chairman+Image"
          alt="Chairman"
          className="rounded-md mb-4 w-full max-w-[300px] object-cover"
        />
        <h2 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">
          Ўзбекистон Миллий Иқтисодий Ҳамкорлик
          <br />
          Уюшмаси раисининг виртуал қабулхонаси
        </h2>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          Сизга Ўзбекистон Республикаси Президенти виртуал қабулхонаси орқали электрон рақамли имзодан фойдаланмаган ҳолда бевосита Ўзбекистон Республикаси Президентига электрон тарзда мурожаатларни юбориш имконияти тақдим этилади. Шунингдек, Сиз мурожаат юборганингиз тақдим этилган калит сўз ёрдамида мурожаатингиз мақомини текшириб кўришингиз мумкин.
        </p>
        <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
          Мурожаатни юбориш
        </button>
      </div>

      {/* Center Column – Telegram */}
      <div className="space-y-4">
        <h3 className="text-blue-700 font-bold text-lg">Telegram</h3>
        <div className="p-4 rounded-lg shadow bg-white">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://via.placeholder.com/40x40.png?text=Uz"
              alt="Channel"
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">UzMIHU</p>
              <p className="text-xs text-gray-500">16 subscribers</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://via.placeholder.com/150x150?text=Img+${i}`}
                alt={`Post ${i}`}
                className="rounded-md object-cover w-full"
              />
            ))}
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            🇺🇿🇨🇳🇧🇾 Жорий йилнинг 4 июнь санасида Ўзбекистон Миллий Иқтисодий Ҳамкорлик уюшмаси ва Хитой Халқ Республикасининг Шенси провинцияси вакиллари ўртасида Тошкент шаҳридаги Hilton меҳмонхонасида муҳим ва илк расмий мулоқот учрашуви бўлиб ўтди!
          </p>
        </div>
      </div>

      {/* Right Column – Facebook */}
      <div className="space-y-4">
        <h3 className="text-blue-800 font-bold text-lg">Facebook</h3>
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow bg-white">
          <iframe
            title="Facebook Page"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="100%"
            height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
