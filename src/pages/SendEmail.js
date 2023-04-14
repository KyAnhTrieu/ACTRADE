export default function SendEmail() {
    return (
        <>
            <div class="main__email">
                <h3>
                    <i>GỬI YÊU CẦU TRỰC TIẾP ĐẾN GMAIL CỦA CHÚNG TÔI</i>
                </h3>
                <i class="main__email-note">Gửi yêu cầu với bất cứ thắc mắc nào mà bạn gặp phải - Chúng tôi sẽ liện hệ trong 24h.</i>
                <form class="main__email-form" action="https://formsubmit.co/actrade006@gmail.com" method="post">
                    <div class="main__email-form-list">
                        <i class="fa-solid fa-user"></i>
                        <input class="main__email-form-list-input" type="text" name="name" required="" />
                        <label>Họ tên của bạn</label>
                    </div>
                    <div class="main__email-form-list">
                        <i class="fa-solid fa-square-phone"></i>
                        <input class="main__email-form-list-input" type="tel" name="tel" required="" />
                        <label>Số điện thoại của bạn</label>
                    </div>
                    <div class="main__email-form-list">
                        <i class="fa-solid fa-square-envelope"></i>
                        <input class="main__email-form-list-input" type="email" name="email" required="" />
                        <label>Email của bạn</label>
                    </div>
                    <div class="main__email-form-list main__email-last">
                        <label>Nội dung muốn gửi đến AC-TRADE</label>
                        <textarea class="main__email-form-list-tera" type="text" name="message"></textarea>
                    </div>
                    <div class="main__email-form-list">
                        <input class="input__submit" type="submit" value="Gửi yêu cầu" />
                    </div>
                </form>
            </div>
        </>
    )
}