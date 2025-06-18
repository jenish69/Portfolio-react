import './css/Contact.css';

export const ContactMe = ({ref}) => {
  return (
    <div className="contact-container" ref={ref}>
      <h1>Contact me</h1>
      <p className="subtitle">Cultivating Connections: Reach Out And Connect With Me</p>
      <form className="contact-form" onSubmit={(e) => {e.preventDefault()}}>
        <div className="form-row">
          <input type="text" placeholder="Name" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Subject" />
        </div>
        <div className="submit-button">
          <button type="submit" class="send-btn">
            <span class="btn-text">Send Message</span>
            <div class="btn-processing">
              <div class="btn-spinner"></div>
              Processing...
            </div>
            <svg class="btn-icon" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z">
              </path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};