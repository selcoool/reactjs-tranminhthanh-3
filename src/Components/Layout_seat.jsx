import React, { Component, Fragment } from 'react'
import { connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { addSeat, reservedSeat } from '../Redux/action';
 class Layout_seat extends Component {

  state = {
    name:'',
    no_seat:0,
    seatList:[]
      
  };


  handle_getUser=(e)=>{
    let {value,name}=e.target;

    this.setState({[name]:value})
  }


  handle_selectedSeat=()=>{
    const infor={
      name: this.state.name,
      no_seat:this.state.no_seat,
      seatList:this.props.selectedList
    }
    this.props.handle_ReservedSeat(infor)
    // console.log('dddddddddddddddddddd',infor)
    
  }
  
  render() {

  // console.log('name',this.state.name)
  // console.log('no_seat',this.state.no_seat)
   
    return (
        <div className='flex items-center flex-col w-screen h-full bg-background_theatre bg-cover bg-no-repeat bg-center pb-36  '>
        <div className='px-4 bg-slate-500/70 py-2'>
          <p className='text-yellow-400 py-2'>Fill fields below and select your seat</p>

          
         
          <div className='flex gap-4'>
            <div className='flex-1'>
              <p>Name<span className='text-red-500 pl-1'>*</span></p>
              <input type='text' onChange={this.handle_getUser} name="name" className='border-white outline-none px-4 py-2' placeholder='Put your name' />
            </div>
            <div className='flex-1'>
              <p>Number of Seats <span className='text-red-500 pl-1'>*</span></p>
              <input type='number' onChange={this.handle_getUser} name="no_seat"  className='border-white outline-none px-4 py-2' placeholder='Put your seat' />
            </div>
          </div>
          {this.props.messenger && (
                  <p className='text-red-500 py-2'>{this.props.messenger}</p>
          )} 
          <div className='flex'>
            <div className='rounded-lg p-2 my-2 bg-white ' onClick={()=>this.handle_selectedSeat()}>Start selecting</div>
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



          <div className="grid grid-cols-13 gap-y-4 ">
  {this.props.seatList.map((seats, index) => {
    return (
      <div className="flex" key={index}>
        <div className='text-white font-bold w-10 h-10 flex justify-center items-center'>{seats.hang}</div>
        {seats.danhSachGhe && seats.danhSachGhe.map((seat, seatIndex) => {
          const isSeatExcluded = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(parseInt(seat.soGhe));
          return (
            <div

            onClick={()=>this.props.handle_AddSeat(seat)}
              key={seatIndex}
              className={`${
                isSeatExcluded 
                  ? 'text-white font-bold w-10 h-10 flex justify-center items-center ' 
                  : `${seat.daDat ? 'border border-orange-500 w-10 h-10 flex justify-center  items-center cursor-pointer seat-reserved' : 'border border-orange-500 w-10 h-10 flex justify-center items-center cursor-pointer seat-empty'}`
              }`}
            >
              {seat.soGhe}
            </div>
          );
        })}
      </div>
    );
  })}
</div>


          <div className='bg-amber-600 text-4xl py-2 mt-2 px-40'>SCREEN THIS WAY</div>
          <div className='flex justify-center items-center'>
          <Link to="/showseat" className='rounded-lg p-2 my-2 bg-white hover:bg-lime-600 '>Confirm Selection</Link>
        
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
                {/* {this.props?.reservedList && this.props?.reservedList.map((reservedSeat,index)=>{
                  
                  <Fragment key={index}>
                    {console.log('pppppppxx',reservedSeat)} */}

               

                  {this.props.reservedList.map((reservedSeat,index)=>{
                    return (
                      <Fragment key={index}>
                      <td className="border border-gray-300 p-2 text-center">{reservedSeat.name}</td>
                      <td className="border border-gray-300 p-2 text-center">{reservedSeat.no_seat}</td>
                      <td className="border border-gray-300 p-2 text-center">
                      {reservedSeat.seatList.map((position,index2)=>{
                      return <Fragment key={index2}>{position.soGhe},</Fragment>
                    })}
                        </td>
                      </Fragment>
                    )
              
                  
                   
                  })}
                    
                       
              
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps=(state)=>{
  return {
    seatList:state.seatList,
    selectedList:state.selectedList,
    reservedList:state.reservedList,
   
  }
}

let mapDispatchToProps=(dispatch)=>{
  return {
    handle_AddSeat:(seat)=>{
      dispatch(addSeat(seat))
    }
    ,
    handle_ReservedSeat:(reservedseat)=>{
      dispatch(reservedSeat(reservedseat))
    }
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(Layout_seat);
