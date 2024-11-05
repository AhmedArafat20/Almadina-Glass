

function OurServe() {
    const cardsData = [
        { title: "الخدمة 1", content: "وصف الخدمة 1" },
        { title: "الخدمة 2", content: "وصف الخدمة 2" },
        { title: "الخدمة 3", content: "وصف الخدمة 3" },
        { title: "الخدمة 4", content: "وصف الخدمة 4" },
        { title: "الخدمة 5", content: "وصف الخدمة 5" },
        { title: "الخدمة 6", content: "وصف الخدمة 6" },
        { title: "الخدمة 7", content: "وصف الخدمة 7" },
        { title: "الخدمة 8", content: "وصف الخدمة 8" },
        { title: "الخدمة 9", content: "وصف الخدمة 9" },
        { title: "الخدمة 10", content: "وصف الخدمة 10" },
        { title: "الخدمة 11", content: "وصف الخدمة 11" },
      ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {cardsData.map((card, index) => (
      <div
        key={index}
        className="block rounded-lg bg-white p-6 text-gray-800 shadow-md"
      >
        <h5 className="mb-2 text-xl font-medium leading-tight">{card.title}</h5>
        <p className="mb-4 text-base">{card.content}</p>
      </div>
    ))}
  </div>
  )
}

export default OurServe
