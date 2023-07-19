interface NavBarProps {
  position: string;
}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className="flex justify-center gap-4">
      <button className="mt-4 rounded-t-xl border-2 border-b-0 px-2 text-2xl text-white hover:bg-emerald-700 md:text-4xl">
        HOME
      </button>
      <button className="mt-4 rounded-t-xl border-2 border-b-0 px-2 text-2xl text-white hover:bg-indigo-900 md:text-4xl">
        NFL
      </button>
      <button className="mt-4 rounded-t-xl border-2 border-b-0 px-2 text-2xl text-white hover:bg-orange-600 md:text-4xl">
        NBA
      </button>
      <button className="mt-4 rounded-t-xl border-2 border-b-0 px-2 text-2xl text-white hover:bg-red-700 md:text-4xl">
        F1
      </button>
      <button className="mt-4 rounded-t-xl border-2 border-b-0 px-2 text-2xl text-white hover:bg-purple-800 md:text-4xl">
        BLOG
      </button>
    </nav>
  );
};

export default NavBar;
