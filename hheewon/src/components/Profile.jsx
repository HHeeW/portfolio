import './profile.css'
import $ from "jquery";
const Profile = () => {
    
    const media = (window.matchMedia('(max-width: 500px)').matches);
    $(document).on('mouseover', '#Name', ()=>{
        $('#Name').text('HwangHeeWon')
    })
    $(document).on('mouseleave', '#Name', ()=>{
        $('#Name').text('황희원')
    })

  return (
    <div className='ProfileBox' data-aos={media ? "" : "fade-right"}>
        <div className='PhotoBox'>
            <div className='Photo'>
                <img src="./img/HwangHeeWon.jpg" alt="HwangHeeWon" />
            </div>
        </div>
        <div className='MyInfo mb-5'>
            <div>
                <h1 id='Name'>황희원</h1>
                <h3>경기도 김포시</h3>
                <h3>99.01.25</h3>
            </div>
        </div>
        <div className='MyInfo'>
            <div>
                <h4 className='Info'><strong>Tel. </strong><a href='tel:010-5703-4472'>010-5703-4472</a></h4>
                <h4 className='Info'><strong>E-mail </strong><a href='mailto:hheewon99@gmial.com'>hheewon99@gmial.com</a></h4>
                <h4 className='Info'><strong>GitHub </strong><a target="_blank" href="https://github.com/HHeeW" without rel="noreferrer" > https://github.com/HHeeW</a></h4>
            </div>
        </div>
    </div>
  )
}

export default Profile