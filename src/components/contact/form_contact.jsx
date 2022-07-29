function FormContact() {
  return (
    <div className="container-form-contact">
      <h1 className="title">SPA May</h1>
      <h1 className="title"> ĐĂNG KÝ TƯ VẤN MIỄN PHÍ</h1>
      <form className="contact-form">
        <table className="contact-table">
          <tbody>
            <tr>
              <td>
                <input type="text" name="name" placeholder="Họ và tên" />
              </td>
              <td>
                <input type="email" name="email" placeholder="Email" />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Số điện thoại"
                />
              </td>
              <td>
                <input type="text" name="address" placeholder="Địa chỉ" />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                {" "}
                <textarea
                  placeholder="Lời nhắn"
                  name="message"
                  cols={63}
                  rows={5}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="contact-btn">
          GỬI
        </button>
      </form>
    </div>
  );
}

export default FormContact;
