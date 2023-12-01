function Search() {
  return (
    <form className="w-full sm:w-44">
      <input
        type="text"
        placeholder="Search Item"
        className="w-full rounded-full bg-emerald-50 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default Search;
