import SectionTitle from "../core/SectionTitle";

function FormContact() {
  return (
    <div className="container-form-contact">
      <SectionTitle title="Hãy liên lạc với chúng tôi" className="title" />
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
