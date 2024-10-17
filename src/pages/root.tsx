import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="flex justify-center bg-green-500 h-1/2">
      <h1 className="text-3xl font-bold underline">Página Root</h1>
      <Outlet />
      </div>
      <div className="w-full h-1/2 bg-red-500">
        <div className="flex justify-center">
          <p>texte</p>
        </div>
      </div>
    </>
  );
};
export default Root;
