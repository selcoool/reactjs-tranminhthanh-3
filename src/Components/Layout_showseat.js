import React, { Component } from 'react'
export default class Layout_showseat extends Component {
  render() {
    return (
      <div className='flex justify-center  gap-x-20 p-0  w-screen h-screen bg-background_theatre  bg-cover bg-no-repeat bg-center   '>
        <div className='flex flex-col pt-6 '>
          <h1 className='text-3xl text-orange-500 font-bold'>ĐẶT VÉ XEM PHIM TẠI MINH THANH SHOP</h1>
          <p className='text-center text-white mb-0 '>Màn hình</p>
          <div className='bg-amber-600  text-white  px-40 py-4'></div>

          <div>

          <div className="grid grid-cols-5 gap-y-4 gap-x-0">
            <div className='text-amber-300 font-bold w-10 h-10  flex justify-center items-center'></div>
            <div className='text-amber-300 font-bold w-10 h-10  flex justify-center items-center'>1</div>
            <div className='text-amber-300 font-bold w-10 h-10  flex justify-center items-center'>2</div>
            <div className='text-amber-300 font-bold w-10 h-10  flex justify-center items-center'>3</div>
            <div className='text-amber-300 font-bold w-10 h-10  flex justify-center items-center'>4</div>
            <div className="text-amber-300 font-bold flex justify-center items-center">A</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">A1</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-reserved">A2</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">A3</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">A4</div>
            <div className="text-amber-300 font-bold flex justify-center items-center">B</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">B1</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">B2</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">B3</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">B4</div>
            <div className="text-amber-300 font-bold flex justify-center items-center">C</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">C1</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">C2</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">C3</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center seat-empty">C4</div>
          </div>



          </div>


        </div>
        <div className='flex flex-col pt-10' >
          <h1 className='text-3xl text-white font-bold'>DANH SÁCH GHẾ BẠN CHỌN</h1>
          <div className='flex items-start  flex-col gap-4 pt-3'>
            <div className='flex justify-center items-center gap-2'>
              <div className='bg-lime-500 w-4 h-4'></div>
              <p>Selected Seat</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <div className='bg-red-500 w-4 h-4'></div>
              <p>Reserved Seat</p>
            </div>
            <div className='flex justify-center items-center gap-2'>
              <div className='bg-white w-4 h-4'></div>
              <p>Empty Seat</p>
            </div>
          </div>


          <div>

          <table className="border border-collapse border-gray-300 w-full bg-slate-500 bg-opacity-30">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 ">Seat</th>
                  <th className="border border-gray-300 p-2">Price</th>
                  <th className="border border-gray-300 p-2">Cancel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 text-amber-300 font-bold text-center">A1</td>
                  <td className="border border-gray-300 p-2 text-amber-300 font-bold text-center">2000</td>
                  <td className="border border-gray-300 p-2 text-red-700 font-bold text-center">X</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-amber-300 font-bold text-center">E1</td>
                  <td className="border border-gray-300 p-2 text-amber-300 font-bold text-center">2000</td>
                  <td className="border border-gray-300 p-2 text-red-700 font-bold text-center">X</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-amber-300 font-bold text-center">F1</td>
                  <td className="border border-gray-300 p-2 text-amber-300 font-bold text-center">5000</td>
                  <td className="border border-gray-300 p-2 text-red-700 font-bold text-center">X</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 p-2 text-center">Total amount</td>
                  <td className="border border-gray-300 p-2 text-amber-300 font-bold text-center">5000</td>
                  <td className="border border-gray-300 p-2 text-center"></td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>
      </div>
    )
  }
}
