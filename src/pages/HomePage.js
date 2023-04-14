import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <>
            <div className="mid">
                <div className="mid__title">
                    <h1>CHIẾN THẮNG THỊ TRƯỜNG</h1>
                </div>
                <div className="mid__content">
                    <i>AC TRADE là nền tảng đột phá mới, đơn giản hóa giao dịch phái sinh chỉ số, nhà đầu tư có thể trải nghiệm tập sự phái sinh như chỉ số CN50, DJ, S&P 500, NASDAQ với số tiền hợp đồng nhỏ</i>
                    <i className="mid__content-last">CHỈ TỪ 500.000VNĐ/ HỢP ĐỒNG</i>
                </div>
                <a href='https://m.ac-trading.net/#/login' target='_blank'>
                    <button className="button">
                        <span className="button_lg">
                            <span className="button_sl"></span>
                            <span className="button_text">Đăng Ký Ngay</span>
                        </span>
                    </button>
                </a>
            </div>
            <div className="main__index-mockup">
                <img src="./img/display.png"/>
            </div>
            <div className="main__index-content">
                <h3>Chúng tôi hiểu điều gì quan trọng với bạn</h3>
                <div className="index-content__list">
                    <div className="index-content__list-item">
                        <i className="fa-solid fa-bolt"></i>
                        <h5>Nạp/ rút nhanh chóng</h5>
                        <p>ACTRADE kết hợp với ngân hàng HSBC để thực hiện nhận và chuyển tiền cho khách hàng.</p>
                    </div>
                    <div className="index-content__list-item">
                        <i className="fa-solid fa-file-invoice-dollar"></i>
                        <h5>Phí giao dịch cực thấp</h5>
                        <p>Cơ cấu hợp tác đầu tư độc đáo của ACTRADE giúp nhà đầu tư tối ưu chi phí và thuế giao dịch. Phí chỉ từ 5.000VNĐ cho một lần mở và đóng một hợp đồng.</p>
                    </div>
                    <div className="index-content__list-item">
                        <i className="fa-solid fa-chart-simple"></i>
                        <h5>Dữ liệu chuẩn xác, minh bạch</h5>
                        <p>Dữ liệu minh bạch được cấp phép bởi ủy ban chứng khoán các quốc gia.</p>
                    </div>
                    <div className="index-content__list-item">
                        <i className="fa-solid fa-headset"></i>
                        <h5>Hỗ trợ trực tuyến 24/7</h5>
                        <p>Nhóm hỗ trợ khách hàng đa ngôn ngữ của chúng tôi sẵn sàng trợ giúp bạn. Bạn có thể liên hệ với chúng tôi qua điện thoại, e-mail hoặc trò chuyện trực tuyến.</p>
                    </div>
                    <div className="index-content__list-item">
                        <i className="fa-solid fa-shield-halved"></i>
                        <h5>An toàn & Bảo mật</h5>
                        <p>ACTRADE bảo mật dữ liệu cá nhân, tài sản của khách hàng tuyệt đối.</p>
                    </div>
                    <div className="index-content__list-item">
                        <i className="fa-solid fa-handshake-simple"></i>
                        <h5>Chính sách hoa hồng hấp dẫn</h5>
                        <p>Chúng tôi luôn cố gắng hướng đến khách hàng, mong muốn khách hàng đồng hành cùng ACTRADE với các chính sách hoa hồng cực hấp dẫn.</p>
                    </div>
                </div>
                
            </div>
            <div className="main__index-content-two">
                <div className="index-content-two__list">
                    <img src="./img/display-mobile.png" alt="" />
                </div>
                <div className="index-content-two__list">
                    <h6>GIAO DỊCH THÔNG MINH</h6>
                    <h3>MÀN HÌNH GIAO DỊCH THÂN THIỆN</h3>
                    <p>Hệ thống giao dịch của ACTRADE được thiết kế tối ưu và luôn hướng tới trải nghiệm của khách hàng, giúp nhà đầu tư dễ dàng theo dõi thị trường, đặt lệnh nhanh chóng nhất.</p>
                    <ol>
                        <li>- Thiết kế thân thiện</li>
                        <li>- Dễ dàng sử dụng</li>
                        <li>- Đặt lệnh nhanh chóng</li>
                        <li>- Đồ thị trực quan</li>
                        <li>- Luôn tối ưu trải nghiệm của khách hàng</li>
                    </ol>
                </div>
            </div>
            <div className="main__index-content-two">
                <div className="index-content-two__list">
                    <h6>BOT TRADING</h6>
                    <h3>GIAO DỊCH TỰ ĐỘNG GIẢM THIỂU CẢM XÚC</h3>
                    <p>Chúng tôi sử dụng công cụ cắt lỗ và cảnh báo tự động để giúp nhà đầu tư không bị cảm xúc chi phối khi giao dịch trong ngày. Nhà đầu tư cũng có thể giao dịch tự động thông qua các chiến lược giao dịch cài đặt trước.</p>
                    <ol>
                        <li>- Cắt lỗ tự động</li>
                        <li>- Chốt lời theo điều kiện</li>
                        <li>- Xây dựng chiến thuật giao dịch tự động</li>
                        <li>- Chỉ báo phân tích kỹ thuật đa dạng</li>
                        <li>- Liên tục cải tiến</li>
                    </ol>
                </div>
                <div className="index-content-two__list">
                    <img src="./img/display-2.png" alt="" />
                </div>
            </div>
            <div className="main__index-content-two">
                <div className="index-content-two__list">
                    <img src="./img/display-margin.png" alt="" />
                </div>
                <div className="index-content-two__list">
                    <h6>GIẢI PHÁP TÀI CHÍNH</h6>
                    <h3>TỐI ƯU LỢI ÍCH VỚI ĐÒN BẨY LÊN ĐẾN 200 LẦN</h3>
                    <p>ACTRADE cung cấp hỗ trợ tài chính cho nhà đầu tư để giao dịch trong ngày ở thị trường phái sinh với ký quỹ cố định trên một hợp đồng, chỉ 1% so với giá trị chỉ số.</p>
                    <ol>
                        <li>- Phí giao dịch cạnh tranh</li>
                        <li>- Chỉ 1 phí duy nhất</li>
                        <li>- Đặt lệnh nhanh chóng</li>
                        <li>- Nạp - Rút tiền tự động</li>
                        <li>- Quản lý tài sản tối ưu, minh bạch</li>
                    </ol>
                </div>
            </div>
        </>
    )
}