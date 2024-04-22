const page = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center sm:gap-4 md:gap-2">
      <div className="w-full text-start">
        <p className="sm:text-[20px] md:text-[32px]">Historial de depósitos</p>
      </div>
      <div className="min-w-full flex flex-col gap-1">
        <a href="#" className="link text-green">
          <p className="text-xs text-end">Ir al historial de retiros</p>
        </a>
        <div className="backdrop-opacity-10 bg-white/10 rounded-b-xl overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-green">
                <th>Fecha</th>
                <th>Monto</th>
                <th>Moneda</th>
                <th>TXID</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>2022/12/15 - 17:05 HS</td>
                <td>0.0002</td>
                <td>BTC</td>
                <td>0xsaf3223...</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>2022/12/15 - 17:05 HS</td>
                <td>0.0002</td>
                <td>BTC</td>
                <td>0xsaf31231...</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>2022/12/15 - 17:05 HS</td>
                <td>0.0002</td>
                <td>BTC</td>
                <td>0xsaf31232...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
