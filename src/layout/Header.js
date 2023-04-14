import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <Link className='header__logo' to='/'>
                <img src="./img/logo-web-02.png" alt="" />
            </Link>
            <div className="header__nav">
                <div className="header-nav__list">
                    <Link className="header-nav__link" to='/'>Trang Chủ</Link>
                </div>
                {/* <div className="header-nav__list">
                    <Link className="header-nav__link" to='/trading'>Giao Dịch</Link>
                </div> */}
                <div className="header-nav__list">
                    <Link className="header-nav__link" to='/partner'>Sản Phẩm
                        <div className="nav__list-child">
                            <Link className="nav__list-child-item">AC-Trade</Link>
                            <Link className="nav__list-child-item">CopyTrade</Link>
                            <Link className="nav__list-child-item" to='/partner'>Chương Trình Đối Tác Với AC-Trade</Link>
                        </div>
                    </Link>
                </div>
                <div className="header-nav__list">
                    <Link className="header-nav__link">Tin Tức</Link>
                </div>
                <div className="header-nav__list">
                    <Link className="header-nav__link" to='/hdcb'>Hướng Dẫn
                        <div className="nav__list-child">
                            <Link className="nav__list-child-item" to='/hdcb'>Kiến Thức Cơ Bản</Link>
                            <Link className="nav__list-child-item">Hướng Dẫn Đăng Ký</Link>
                            <Link className="nav__list-child-item">Hướng Dẫn Nạp Rút</Link>
                        </div>
                    </Link>
                </div>
                <div className="header-nav__list">
                    <Link className="header-nav__link" to='/sendEmail'>Hỗ Trợ
                        <div className="nav__list-child">
                            <Link className="nav__list-child-item" to='/sendEmail'>Gửi Email Hỗ Trợ</Link>
                            <Link className="nav__list-child-item">Chuyên Viên Tư Vấn</Link>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="header__login">
                <a href="https://m.ac-trading.net/#/login" target='_blank' rel="noreferrer">Đăng Nhập / Đăng Ký</a>
            </div>
        </div>
    )
}