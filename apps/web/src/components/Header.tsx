export const Header = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="flex items-center justify-between mx-auto py-4 px-10">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap">
              Kanban
            </h1>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-[#1A73E8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};