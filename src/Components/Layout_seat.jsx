import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Layout_seat extends Component {
  render() {
    return (
        <div className='flex items-center flex-col w-screen h-full bg-background_theatre bg-cover bg-no-repeat bg-center  '>
        <div className='px-4 bg-slate-500/70 py-2'>
          <p className='text-yellow-400 py-2'>Fill fields below and select your seat</p>
          <div className='flex gap-4'>
            <div className='flex-1'>
              <p>Name<span className='text-red-500 pl-1'>*</span></p>
              <input type='text' className='border-white outline-none px-4 py-2' placeholder='Put your name' />
            </div>
            <div className='flex-1'>
              <p>Number of Seats <span className='text-red-500 pl-1'>*</span></p>
              <input type='number' className='border-white outline-none px-4 py-2' placeholder='Put your seat' />
            </div>
          </div>
          <div className='flex'>
            <div className='rounded-lg p-2 my-2 bg-white '>Start selecting</div>
          </div>
          <div className='flex gap-4'>
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
          <div className='flex justify-center items-center my-2'>
            <p className='text-black bg-amber-300'>Please select your seat now</p>
          </div>

          <div className="grid grid-cols-5 gap-y-4 gap-x-0">
            <div className='text-white font-bold w-10 h-10  flex justify-center items-center'></div>
            <div className='text-white font-bold w-10 h-10  flex justify-center items-center'>1</div>
            <div className='text-white font-bold w-10 h-10  flex justify-center items-center'>2</div>
            <div className='text-white font-bold w-10 h-10  flex justify-center items-center'>3</div>
            <div className='text-white font-bold w-10 h-10  flex justify-center items-center'>4</div>
            <div className="text-white font-bold flex justify-center items-center">A</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">A1</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-reserved">A2</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">A3</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">A4</div>
            <div className="text-white font-bold flex justify-center items-center">B</div> 
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">B1</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">B2</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">B3</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">B4</div>
            <div className="text-white font-bold flex justify-center items-center">C</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">C1</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">C2</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">C3</div>
            <div className="border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty">C4</div>
          </div>

          <div className='bg-amber-600 text-4xl py-2 mt-2 px-40'>SCREEN THIS WAY</div>
          <div className='flex justify-center items-center'>
          <Link to="/showseat" className='rounded-lg p-2 my-2 bg-white '>Confirm Selection</Link>
        
          </div>
          <div className='bg-orange-900 h-5  mb-4 w-full '></div>
          <div className='w-full'>
            <table className="border border-collapse border-gray-300 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Number of Seats</th>
                  <th className="border border-gray-300 p-2">Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">Kha1</td>
                  <td className="border border-gray-300 p-2 text-center">2</td>
                  <td className="border border-gray-300 p-2 text-center">A 1, A 3</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-center">Kha1</td>
                  <td className="border border-gray-300 p-2 text-center">2</td>
                  <td className="border border-gray-300 p-2 text-center">A 1, A 3</td>
                </tr>

                <tr>
                  <td className="border border-gray-300 p-2 text-center">Kha1</td>
                  <td className="border border-gray-300 p-2 text-center">2</td>
                  <td className="border border-gray-300 p-2 text-center">A 1, A 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
