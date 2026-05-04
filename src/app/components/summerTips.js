"use client";

export default function summerTips() {
  const tipsData = [
    {
      title: "OILY SKIN",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      tips: [
        "Use a gel-based cleanser.",
        "Switch to a lightweight, oil-free SPF.",
        "Blotting papers & clay masks to control shine.",
      ],
    },
    {
      title: "DRY SKIN",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      tips: [
        "Hydrating mist during the day.",
        "Use a water-based moisturizer.",
        "Don't skip sunscreen!",
      ],
    },
    {
      title: "COMB SKIN",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      tips: [
        "Use a balancing toner.",
        "SPF for all zones.",
        "Gel for T-zone, cream for cheeks.",
      ],
    },
    {
      title: "SENSITIVE",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      tips: [
        "Avoid heat-heavy products.",
        "Use calming, cooling gels (like aloe).",
        "Mineral sunscreen is a must!",
      ],
    },
  ];

  return (
    <section className="my-20 max-w-7xl mx-auto px-4">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          SUMMER SKINCARE TIPS <span className="text-[#6D94C5]">BY SKIN TYPE</span>
        </h2>
        <div className="w-24 h-1 bg-[#6D94C5] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* 4 Column Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tipsData.map((item, idx) => (
          <div
            key={idx}
            className={`${item.bgColor} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-8 ${item.borderColor}`}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">
              {item.title}
            </h3>
            <ul className="space-y-3">
              {item.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-[#6D94C5] text-lg leading-5">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Optional Extra Note (like "Aloe vera gel soothes sunburn" etc) */}
      <div className="mt-10 text-center text-2xl text-gray-500 bg-white/50 rounded-full py-2 px-4 w-max mx-auto backdrop-blur-sm">
         Don't forget to reapply SPF every 2 hours when outdoors!
      </div>
    </section>
  );
}