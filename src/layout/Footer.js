import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <div className="main__download">
                <h3>TẢI ỨNG DỤNG ACTRADE TRÊN ĐIỆN THOẠI</h3>
                <p>ACTRADE hỗ trợ nhà đầu tư giao dịch thuận tiện trên điện thoại dễ dàng hơn với ứng dụng dành riêng cho mobile</p>
                <div className="main__download-item">
                    <i className="fa-brands fa-apple"></i>
                    <a href="#">
                        <button className="button">
                            <span className="button_lg">
                                <span className="button_sl"></span>
                                <span className="button_text">Download Ios</span>
                            </span>
                        </button>
                    </a>
                    <i className="fa-brands fa-android"></i>
                    <a href="#">
                        <button className="button">
                            <span className="button_lg">
                                <span className="button_sl"></span>
                                <span className="button_text">Download Android</span>
                            </span>
                        </button>
                    </a>
                </div>
            </div>
            <div className="main__partner">
                <h3>ĐỐI TÁC CỦA CHÚNG TÔI</h3>
                <div className="main__partner-box">
                    <div className="main__partner-list">
                        <img src="./img/partner-06.png" alt="" />
                        <p>Quỹ đầu tư Quốc tế IDG Capital room 5505, 55 Floor, The Center 99 Queen's Road Central, HongKong - Đối tác chiến lược chính thức, cung cấp giải pháp công nghệ và chuyên môn quốc tế của ACTrade.</p>
                    </div>
                    <div className="main__partner-list">
                        <img src="./img/partner-05.png" alt="" />
                        <p>Hongkong and Shanghai Banking Corporation, 8/F, Low Block. Grand Milennium Plaza. 181 Queen's Road Central, Sheung Wan, HongKong - đối tác cung cấp dịch vụ tài chính và phương pháp bảo mật tài khoản, chống rửa tiền và đảm bảo sự an toàn cho dòng tiền của khách hàng trực thuộc Actrade.</p>
                    </div>
                    <div className="main__partner-list">
                        <img src="./img/partner-07.png" alt="" />
                        <p>Công ty chứng khoán STG, Room 168,16 Floor, 89 Queensway, Admiralty, Hong Kong - AZT127 -  giấy phép đăng kí AZT127 tại Hongkong nhà phát triển chính thức nền tảng giao dịch Actrade. Chịu trách nhiệm chính về đăng kí dữ liệu và pháp lý của nền tảng.</p>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer">
                    <div className="footer__tag">
                        <img src="./img/logo-web-02.png" alt="" />
                        <Link to='rules'>Điều khoản giao dịch</Link>
                        <Link to='rules'>Quy định giao dịch</Link>
                        <Link to='partner'>Trở thành đối tác với ACTRADE</Link>
                    </div>
                    <div className="footer__content">
                        <p>ACtrade là một đại lý chứng khoán hợp pháp được đăng kí tại Hongkong với số đăng kí 8424606-1 cung cấp các dịch vụ giao dịch CFD cho các nhà đầu tư toàn cầu. <br /> <br />Tất cả các giao dịch trên thị trường  tài chính đều  có rủi ro thua lỗ. Tất cả các sản phẩm giao dịch CFD đều sử dụng đòn bẩy cao, do đó khả năng kiếm lợi nhuận rất lớn và nhanh, bên cạnh đó khả năng thua lỗ cũng rất lớn khi không có quản trị tài khoản tốt. Điều quan trọng là bạn hiểu rằng với các khoản đầu tư, vốn của bạn có nguy cơ bị rủi ro. Hiệu suất trong quá khứ không phải là một hướng dẫn cho hiệu suất trong tương lai. Bạn có trách nhiệm đảm bảo rằng bạn đưa ra quyết định sáng suốt về việc có nên giao dịch với thị trường hay không. Trước khi quyết định giao dịch vào bất kỳ sản phẩm tài chính nào, bạn nên xem xét cẩn thận các mục tiêu đầu tư, kiến thức và kinh nghiệm giao dịch cũng như khả năng thua lỗ trong mức cho phép của bản thân. Bạn nên tìm tư vấn tài chính chuyên nghiệp, độc lập nếu bạn không hiểu những rủi ro liên quan. <br /><br />Copyright &copy; 2023. <b>ACTRADE</b></p>
                    </div>
                </div>
            </footer>
        </>
    )
}