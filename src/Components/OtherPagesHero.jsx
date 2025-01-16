import back from "../assets/images/page-heading-bg.jpg";

export const OtherPagesHero = ({title = "Single Property", subtitle = "Single Property"}) => {
  return (
    <div
    className="bg-gray-100 py-10 bg-cover bg-no-repeat bg-center h-[349px]"
    style={{ backgroundImage: `url(${back})` }}
  >
    <div className="container mx-auto">
      <div className="flex items-center justify-center flex-col">
        <span className="text-gray-600 bg-white px-3 py-2 mb-[30px]">
          <a href="#" className="text-[#1E1E1E] uppercase">
            Home
          </a>{" "}
          / {subtitle}
        </span>
        <h3 className="text-[48px] font-bold mt-4 text-white uppercase">
          {title}
        </h3>
      </div>
    </div>
  </div>
  )
}
