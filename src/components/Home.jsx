import React, { useEffect } from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { addGheDuocChon, removeGheDuocChon, datVe } from './../reduxs/actions/DatVeAction';


function Home(props) {

    const DatVeState = useSelector(state => state.DatVeReducer);
    console.log(DatVeState.arrGheDangChon);

    const dispatch = useDispatch();

    const removeAdd = () => {
        let a = document.querySelectorAll('.ghe');
        if (a) {
            a.forEach(element => {
                element.addEventListener('click', (event) => {
                    if (event) {
                        if (element.className !== 'ghe text-white gheDuocChon') {

                            if (element.className === 'ghe text-white gheDangChon') {
                                element.classList.remove('gheDangChon');
                                dispatch(removeGheDuocChon(element.innerHTML))
                            } else {
                                element.classList.add('gheDangChon');
                                dispatch(addGheDuocChon(element.innerHTML))
                            }

                        } else {
                            alert('ghế này đã được chọn')
                        }
                    }
                    if (event.target.className.indexOf()) {
                    }
                });

            });
        }
    }

    useEffect(() => {
        removeAdd();
    }, [])

    let DanhSachGhe = () => {
        return DatVeState.arrGhe.map((item) => (
            <div className="row chiaGhe">
                <div className="box pt-2">{item.hang}</div>
                {item.danhSachGhe.map((ghe, index) =>
                    item.hang ? (

                        ghe.daDat ? <div className="ghe text-white gheDuocChon" value={ghe} style={{ cursor: 'pointer' }} onClick={() => {

                            //   document.getElementsByClassName('ghe') = 'gheDangChon';
                        }}>{ghe.soGhe}
                        </div> : <div className="ghe text-white" style={{ cursor: 'pointer' }} onClick={() => {
                            //   document.getElementsByClassName('ghe') = 'gheDangChon';
                        }}>{ghe.soGhe}</div>
                    ) : (
                        <div className="box">{ghe.soGhe}</div>
                    )
                )}
            </div>
        ))
    }


    const renderTable = () => {
        return DatVeState.arrGheDangChon.map((dangchon, index) => {
            return <tr key={index}>
                <td>{dangchon.soGhe}</td>
                <td>{dangchon.gia}</td>
                <td className="text-danger text-center" onClick={() => {
                    let a = document.querySelectorAll('.ghe');
                    if (a) {
                        a.forEach(element => {
                            if(element.innerHTML === dangchon.soGhe){
                                element.classList.remove('gheDangChon');
                                dispatch(removeGheDuocChon(element.innerHTML))
                            }
                        });
                    }

                }}><i class="fa fa-times"></i></td>
            </tr>
        })
    }

    const TongTien = () => {
        let tong = 0;
        DatVeState.arrGheDangChon.map((dangchon, index) => {
            tong += dangchon.gia;

        });
        return tong;
    }


    return (
        <section>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-8">
                        <h3 class="text-center text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
                        <div class="manHinh">
                            <h5 class="text-white text-center">Màn hình</h5>
                            <div class="screen"></div>
                        </div>
                        <div class="bookingMovie text-warning text-center">
                            {DanhSachGhe()}
                        </div>
                    </div>
                    <div class="col-4">
                        <h3 class="text-center text-white p-3">DANH SÁCH GHẾ BẠN CHỌN</h3>
                        <div class="chu__thich">
                            <span class="ghe pl-3 bg-warning"></span><span class="display-5 pl-2 text-white">Ghế đã đặt</span>
                        </div>
                        <div class="chu__thich">
                            <span class="ghe pl-3 bg-success"></span><span class="display-5 pl-2 text-white">Ghế đang chọn</span>
                        </div>
                        <div class="chu__thich">
                            <span class="ghe pl-3 bg-white"></span><span class="display-5 pl-2 text-white">Ghế chưa đặt</span>
                        </div>
                        <table class="table-bordered w-100 mt-3">
                            <thead class="text-white">
                                <tr>
                                    <th>số ghế</th>
                                    <th>giá</th>
                                    <th>hủy</th>
                                </tr>
                            </thead>
                            <tbody class="text-warning">
                                {renderTable()}
                                <tr>
                                    <td class="text-white">Tổng tiền</td>
                                    <td>{TongTien()}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-center pt-4">
                            <button className="btn btn-success" id="DatVe" onClick={() => {
                                dispatch(datVe());
                            }}>đặt vé</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}


export default Home