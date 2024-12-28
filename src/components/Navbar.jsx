function Navbar() {
  return (
    <div className=" flex items-center justify-between bg-pink-200 m-4  h-16 ">
      <div>
        <img src="./logo.png" alt="Style Citizens" className="h-10 w-10 border border-blue-900 rounded-full m-2 " />
      </div>
      <div className="m-4" >
        <div className=" flex gap-2 justify-around border rounded-md border-pink-300 bg-pink-300 m-3">
          <button className=" hover:border border-pink-400 hover:bg-pink-400 p-1 m-2 rounded-lg" >log in</button>
          <button className=" hover:border border-pink-400 hover:bg-pink-400 p-1 m-2 rounded-lg" >sign up</button>
          <div>
            <img src="./PROFILE.png" className=" h-9 w-9 mr-5 mt-2 ml-3 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
