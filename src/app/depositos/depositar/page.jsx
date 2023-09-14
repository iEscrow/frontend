import Select from "./select";


const page = () => {
  return (
    <div className="w-full md:h-[70vh] flex justify-center items-center">
      <div className="card w-96 backdrop-opacity-10 bg-white/10 rounded-b-xl ">
        <div className="card-body gap-6">
          <div className="text-center">
            <p className="text-xl">Depositar</p>
          </div>
         <Select />
        </div>
      </div>
    </div>
  );
};

export default page;
